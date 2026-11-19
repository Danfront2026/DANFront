"""
tiles_temes_batch.py - tiles for the First Military Survey of the Banat of Temesvár (1769-1772, Arcanum DVD without
georeferencing). Same interface as tiles_2kf_batch.py.

How a sheet is placed:
  1. banat_frame.py finds the map area (below the title line, left of the place-name column).
  2. The sheets form a grid (temes_grid_cells.py: sheet name -> column, row), read from the overview sheet.
  3. temes_fit.json: affine transform from (column + fraction across the map, row + fraction down) to the ground,
     fitted to 15 towns marked on the sheets. Cross-checked accuracy: about 750 m (median), up to ~1.4 km.
Call configure(fit_json) once before run().
"""
import json, os, re
from multiprocessing import Pool
import numpy as np
import rasterio
from rasterio.control import GroundControlPoint
from rasterio.transform import Affine
from rasterio.warp import reproject, Resampling
from rasterio.windows import Window
from pyproj import Transformer
from tiles_2kf_batch import composite_save, merge_bounds, R
from temes_grid_cells import CELL
from banat_frame import find_map_area

CFG = {}
INSET = 14          # half the thickness of the drawn frame lines, in scan pixels

def configure(fit_json):
    d = json.load(open(fit_json)); CFG.clear(); CFG.update(d); CFG['coef'] = np.array(d['coef'])
    CFG['to_merc'] = Transformer.from_crs(d['local'], 'EPSG:3857', always_xy=True)
    return len(d['control_points'])

def grid_to_local(UV):
    UV = np.atleast_2d(np.asarray(UV, float)); return np.c_[UV, np.ones(len(UV))] @ CFG['coef']

def process(job):
    tif, out_dir, zmin, zmax, bbox = job
    sheet = os.path.splitext(os.path.basename(tif))[0]
    res = dict(sheet=sheet, status="", tiles=[], bounds={})
    try:
        if sheet not in CELL:
            res["status"] = "skipped: not a sheet of the grid"; return res
        fr = find_map_area(tif)
        if not (fr['x'] and fr['y']):
            res["status"] = f"skipped: map frame not found ({fr['W']}x{fr['H']})"; return res
        (fx0, fx1), (fy0, fy1) = fr['x'], fr['y']
        x0, y0, x1, y1 = fx0 + INSET, fy0 + INSET, fx1 - INSET, fy1 - INSET
        W, H = x1 - x0, y1 - y0
        c, r = CELL[sheet]
        k = 7; A = []; UU = []
        for i in range(k):
            for j in range(k):
                px, py = W * i / (k - 1), H * j / (k - 1)                       # pixel in the tiled window
                fx = (x0 + px - fx0) / (fx1 - fx0); fy = (y0 + py - fy0) / (fy1 - fy0)   # position in frame units (beyond 0..1 on a glued piece)
                A.append((px, py, 1)); UU.append((c + fx, r + fy))
        L = grid_to_local(UU); B = np.array(CFG['to_merc'].transform(L[:, 0], L[:, 1])).T
        A = np.array(A)
        # the correction bends a little inside one sheet: warp with a 3rd-order polynomial through the 7x7 mesh
        # (GDAL chooses it from the control points), so neighbouring sheets meet along their common edge
        gcps = [GroundControlPoint(row=float(py), col=float(px), x=float(X), y=float(Y)) for (px, py, _), (X, Y) in zip(A, B)]
        x_, y_ = A[:, 0] / W, A[:, 1] / H
        D = np.stack([np.ones_like(x_), x_, y_, x_*x_, x_*y_, y_*y_, x_**3, x_*x_*y_, x_*y_*y_, y_**3], 1)
        co, *_ = np.linalg.lstsq(D, B, rcond=None)
        res["warp_residual_m"] = round(float(np.hypot(*(D @ co - B).T).max()) * 0.69, 1)        # 0.69 ~ cos(46 deg): Mercator -> metres
        cs = [tuple(B[i]) for i in (0, (k - 1) * k, k * k - 1, k - 1)]                              # NW, NE, SE, SW
        edge = [tuple(B[i * k + j]) for i in range(k) for j in range(k) if i in (0, k - 1) or j in (0, k - 1)]
        to_wgs = Transformer.from_crs("EPSG:3857", "EPSG:4326", always_xy=True)
        res["outline"] = [[round(v, 5) for v in to_wgs.transform(*p)] for p in cs]
        minX, maxX = min(p[0] for p in edge), max(p[0] for p in edge); minY, maxY = min(p[1] for p in edge), max(p[1] for p in edge)
        with rasterio.open(tif) as ds:
            data = ds.read([1, 2, 3], window=Window(x0, y0, W, H))
        rgba = np.zeros((4,) + data.shape[1:], np.uint8)
        rgba[:3] = data; rgba[3] = 255
        del data
        res["status"] = "ok" + (f", typical {' and '.join(fr['fallback'])} position used" if fr.get('fallback') else "")
        lock_path = os.path.join(os.path.dirname(os.path.abspath(out_dir)), ".tiles.lock")
        prev = prev_tf = None
        for z in range(zmax, zmin - 1, -1):
            size = 2 * R / 2 ** z
            xa, xb = int((minX + R) // size), int((maxX + R) // size)
            ya, yb = int((R - maxY) // size), int((R - minY) // size)
            res["bounds"][z] = dict(xMin=xa, xMax=xb, yMin=ya, yMax=yb)
            mos = np.zeros((4, (yb - ya + 1) * 256, (xb - xa + 1) * 256), np.uint8)
            mtf = Affine(size / 256, 0, -R + xa * size, 0, -size / 256, R - ya * size)
            if prev is None:
                reproject(rgba, mos, gcps=gcps, src_crs="EPSG:3857", dst_transform=mtf, dst_crs="EPSG:3857", resampling=Resampling.bilinear)
            else:
                reproject(prev, mos, src_transform=prev_tf, src_crs="EPSG:3857", dst_transform=mtf, dst_crs="EPSG:3857", resampling=Resampling.average)
            prev, prev_tf = mos, mtf
            for x in range(xa, xb + 1):
                for y in range(ya, yb + 1):
                    dst = mos[:, (y - ya) * 256:(y - ya + 1) * 256, (x - xa) * 256:(x - xa + 1) * 256]
                    if dst[3].max() == 0: continue
                    rel = f"{z}/{x}/{y}.png"
                    composite_save(os.path.join(out_dir, rel), np.ascontiguousarray(dst), lock_path)
                    res["tiles"].append(rel)
    except Exception as e:
        res["status"] = f"ERROR: {type(e).__name__}: {e}"
    return res

def run(tifs, out_dir, zmin=6, zmax=14, workers=2, bbox=None):
    assert CFG, "call configure(fit_json) first"
    os.makedirs(out_dir, exist_ok=True)
    jobs = [(t, out_dir, zmin, zmax, bbox) for t in tifs]
    if workers > 1 and len(jobs) > 1:
        with Pool(workers) as p: results = p.map(process, jobs, chunksize=1)
    else:
        results = [process(j) for j in jobs]
    changed = sorted({t for r in results for t in r["tiles"]})
    with open(os.path.join(os.path.dirname(os.path.abspath(out_dir)), "changed_tiles.txt"), "w") as f:
        f.write("\n".join(changed) + ("\n" if changed else ""))
    return results
