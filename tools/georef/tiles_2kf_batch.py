"""
tiles_2kf_batch.py - cut XYZ tiles from many Second Military Survey (2KF) GeoTIFFs at once,
all sheets merged into one tile folder. Used by colab_2kf.ipynb, also runnable by hand.

Input: GeoTIFFs exported with qgis_batch_export.py (Cassini-Soldner, origin St. Stephen's
Cathedral Vienna). Each sheet is clipped automatically to its map frame:
the sheets are 9600 x 6400 Vienna Klafter (18206.24 x 12137.50 m) cells of a regular grid in
that Cassini system, with Vienna in the middle of a cell, i.e. cell (i, j) covers
  X in [(i-0.5)*W, (i+0.5)*W],  Y in [(j-0.5)*H, (j+0.5)*H].
(Checked on 32-50Cas: the nominal cell matches the drawn frame within ~25 m.)
A sheet whose image does not cover most of one cell is tiled unclipped and reported as
"irregular"; files without a CRS are skipped.

Usage:
  python3 tiles_2kf_batch.py <tiles_out_dir> <sheet1.tif> [<sheet2.tif> ...] [--zoom 6,14] [--workers 2]
                             [--bbox lonmin,latmin,lonmax,latmax]

Prints one JSON line per sheet (status, cell, tile bounds) and writes the list of tile files
it created or changed to <tiles_out_dir>/../changed_tiles.txt (relative paths, for
`rclone copy --files-from`). Tiles shared by neighbouring sheets are composited, with a
file lock so parallel workers don't clash.
"""
import argparse, fcntl, json, math, os, sys
from multiprocessing import Pool
import numpy as np
import rasterio
from rasterio.transform import Affine
from rasterio.warp import reproject, transform as warp_transform, Resampling
from rasterio.windows import from_bounds
from PIL import Image

R = 20037508.342789244
KLAFTER = 1.89648384
CELL_W, CELL_H = 9600 * KLAFTER, 6400 * KLAFTER
CASSINI_VIENNA = "+proj=cass +lat_0=48.208772 +lon_0=16.374242 +a=6376130 +rf=310 +units=m +no_defs"


def best_cell(b):
    """Grid cell with the largest overlap with image bounds b; returns (i, j, cell_bounds, covered_fraction_of_cell)."""
    best = None
    ci, cj = round((b.left + b.right) / 2 / CELL_W), round((b.bottom + b.top) / 2 / CELL_H)
    for i in (ci - 1, ci, ci + 1):
        for j in (cj - 1, cj, cj + 1):
            x0, x1, y0, y1 = (i - .5) * CELL_W, (i + .5) * CELL_W, (j - .5) * CELL_H, (j + .5) * CELL_H
            ox = max(0, min(b.right, x1) - max(b.left, x0)); oy = max(0, min(b.top, y1) - max(b.bottom, y0))
            frac = ox * oy / (CELL_W * CELL_H)
            if best is None or frac > best[3]:
                best = (i, j, (x0, y0, x1, y1), frac)
    return best


def composite_save(path, dst, lock_path):
    new = Image.fromarray(dst.transpose(1, 2, 0), "RGBA")
    with open(lock_path, "w") as lf:
        fcntl.flock(lf, fcntl.LOCK_EX)
        if os.path.exists(path):
            old = Image.open(path).convert("RGBA")
            old.alpha_composite(new); new = old
        os.makedirs(os.path.dirname(path), exist_ok=True)
        new.save(path, optimize=True)


def process(job):
    tif, out_dir, zmin, zmax, bbox = job
    sheet = os.path.splitext(os.path.basename(tif))[0]
    res = dict(sheet=sheet, status="", tiles=[], bounds={})
    try:
        with rasterio.open(tif) as ds:
            if ds.crs is None:
                res["status"] = "skipped: no CRS (RAW sheet)"; return res
            cas = rasterio.crs.CRS.from_proj4(CASSINI_VIENNA)
            same = abs(ds.crs.to_dict().get("lat_0", 0) - 48.208772) < 1e-6 and ds.crs.to_dict().get("proj") == "cass"
            if not same:
                res["status"] = f"skipped: unexpected CRS {ds.crs.to_proj4()[:60]}"; return res
            i, j, (x0, y0, x1, y1), frac = best_cell(ds.bounds)
            res["cell"] = [i, j]; res["cell_coverage"] = round(frac, 3)
            if frac >= 0.9:
                win = from_bounds(x0, y0, x1, y1, ds.transform).round_offsets().round_lengths()
                win = win.intersection(rasterio.windows.Window(0, 0, ds.width, ds.height))
                res["status"] = "ok"
            else:
                win = rasterio.windows.Window(0, 0, ds.width, ds.height)
                res["status"] = "ok, irregular (not clipped)"
            data = ds.read([1, 2, 3], window=win)
            src_tf = ds.window_transform(win); src_crs = ds.crs
        rgba = np.zeros((4,) + data.shape[1:], np.uint8)
        rgba[:3] = data; rgba[3] = np.where(data.any(axis=0), 255, 0); del data
        H, W = rgba.shape[1:]
        n = 20
        edge = ([(W*k/n, 0) for k in range(n+1)] + [(W, H*k/n) for k in range(n+1)] + [(W*k/n, H) for k in range(n+1)] + [(0, H*k/n) for k in range(n+1)])
        xs, ys = zip(*[src_tf * p for p in edge])
        mx, my = warp_transform(src_crs, "EPSG:3857", xs, ys)
        minX, maxX, minY, maxY = min(mx), max(mx), min(my), max(my)
        if bbox:
            lon, lat = warp_transform("EPSG:3857", "EPSG:4326", [minX, maxX], [minY, maxY])
            if lon[1] < bbox[0] or lon[0] > bbox[2] or lat[1] < bbox[1] or lat[0] > bbox[3]:
                res["status"] = "skipped: outside bbox"; return res
        lock_path = os.path.join(os.path.dirname(os.path.abspath(out_dir)), ".tiles.lock")
        for z in range(zmin, zmax + 1):
            size = 2 * R / 2 ** z
            xa, xb = int((minX + R) // size), int((maxX + R) // size)
            ya, yb = int((R - maxY) // size), int((R - minY) // size)
            res["bounds"][z] = dict(xMin=xa, xMax=xb, yMin=ya, yMax=yb)
            for x in range(xa, xb + 1):
                for y in range(ya, yb + 1):
                    dst = np.zeros((4, 256, 256), np.uint8)
                    dtf = Affine(size / 256, 0, -R + x * size, 0, -size / 256, R - y * size)
                    reproject(rgba, dst, src_transform=src_tf, src_crs=src_crs, dst_transform=dtf, dst_crs="EPSG:3857",
                              resampling=Resampling.average if z < 14 else Resampling.bilinear)
                    if dst[3].max() == 0:
                        continue
                    rel = f"{z}/{x}/{y}.png"
                    composite_save(os.path.join(out_dir, rel), dst, lock_path)
                    res["tiles"].append(rel)
    except Exception as e:
        res["status"] = f"ERROR: {type(e).__name__}: {e}"
    return res


def run(tifs, out_dir, zmin=6, zmax=14, workers=2, bbox=None):
    """Process the given GeoTIFFs; returns the list of per-sheet result dicts."""
    os.makedirs(out_dir, exist_ok=True)
    jobs = [(t, out_dir, zmin, zmax, bbox) for t in tifs]
    if workers > 1 and len(jobs) > 1:
        with Pool(workers) as p:
            results = p.map(process, jobs, chunksize=1)
    else:
        results = [process(j) for j in jobs]
    changed = sorted({t for r in results for t in r["tiles"]})
    with open(os.path.join(os.path.dirname(os.path.abspath(out_dir)), "changed_tiles.txt"), "w") as f:
        f.write("\n".join(changed) + ("\n" if changed else ""))
    return results


def merge_bounds(total, b):
    for z, v in b.items():
        z = int(z); t = total.setdefault(z, dict(v))
        t.update(xMin=min(t["xMin"], v["xMin"]), xMax=max(t["xMax"], v["xMax"]), yMin=min(t["yMin"], v["yMin"]), yMax=max(t["yMax"], v["yMax"]))
    return total


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("out_dir"); ap.add_argument("tifs", nargs="+")
    ap.add_argument("--zoom", default="6,14"); ap.add_argument("--workers", type=int, default=2); ap.add_argument("--bbox")
    a = ap.parse_args()
    zmin, zmax = map(int, a.zoom.split(","))
    bbox = tuple(map(float, a.bbox.split(","))) if a.bbox else None
    total = {}
    for r in run(a.tifs, a.out_dir, zmin, zmax, a.workers, bbox):
        merge_bounds(total, r["bounds"])
        print(json.dumps({k: (len(v) if k == "tiles" else v) for k, v in r.items() if k != "bounds"}, ensure_ascii=False))
    print("tile bounds:", json.dumps(total))
