"""
tiles_1kf_batch.py - cut XYZ tiles from many First Military Survey (1KF) sheets at once, all
sheets merged into one tile folder. Same interface as tiles_2kf_batch.py (used by colab_1kf.ipynb).

The First Survey GeoTIFFs carry no coordinates ("RAW"). Each sheet is placed with Arcanum's own
DVD georeference (see tiles_1kf_dvd.py for the details):
  ekf_mk.xml      origin and cell size of every sheet in the DVD's grid system
  geoview_mk.ini  2nd-order polynomial from that grid system to UTM zone 33
  <sheet>.ini     clip=x,y,w,h : the map frame (margins are cut off)
Accuracy: a few hundred metres on average, up to ~2 km in the far corners of the country.

Call configure() once before run():
  configure(outlay_dir, ini_dir, covered_url=None, skip=())
    outlay_dir   folder with ekf_mk.xml and geoview_mk.ini
    ini_dir      folder with the per-sheet .ini files (searched recursively)
    covered_url  optional tile URL template of a layer that already shows this survey, e.g.
                 "https://.../tiles/{z}/{x}/{y}.png". A sheet is skipped when that layer already
                 has tiles at the sheet's centre and at its four quarter points.
    skip         sheet names to leave out (sheets already georeferenced with control points)

Usage by hand:
  python3 tiles_1kf_batch.py <outlay_dir> <ini_dir> <tiles_out_dir> <sheet1.tif> [...] [--zoom 6,14] [--workers 2]
"""
import argparse, glob, json, math, os, re, sys
from multiprocessing import Pool
import numpy as np
import rasterio
from rasterio.transform import Affine
from rasterio.warp import reproject, Resampling
from rasterio.windows import Window
from pyproj import Transformer
from tiles_2kf_batch import composite_save, merge_bounds, R

CFG = dict(P=None, sheets=None, inis=None, covered_url=None, skip=())


def configure(outlay_dir, ini_dir, covered_url=None, skip=()):
    ini = open(os.path.join(outlay_dir, "geoview_mk.ini"), encoding="latin-1").read()
    CFG["P"] = {k: float(v) for k, v in re.findall(r"^(ENcorr_\w+)=([-\d.E+]+)", ini, flags=re.M)}
    xml = open(os.path.join(outlay_dir, "ekf_mk.xml"), encoding="latin-1").read()
    CFG["sheets"] = {}
    for gx, gy, fn, cx, cy, ox, oy in re.findall(
            r'<file gridx="(\d+)" gridy="(\d+)" filename="([^"]+)"[^>]*geo:cellx="([-\d.]+)" geo:celly="([-\d.]+)" geo:origx="([-\d.]+)" geo:origy="([-\d.]+)"', xml):
        CFG["sheets"][os.path.splitext(fn)[0].lower()] = dict(cx=float(cx), cy=float(cy), ox=float(ox), oy=float(oy))
    CFG["inis"] = {os.path.splitext(os.path.basename(p))[0].lower(): p
                   for p in glob.glob(os.path.join(ini_dir, "**", "*.ini"), recursive=True)}
    CFG["covered_url"] = covered_url
    CFG["skip"] = {x.lower() for x in skip}
    return len(CFG["sheets"]), len(CFG["inis"])


def grid_to_utm33(x, y):
    P = CFG["P"]
    x, y = x * P["ENcorr_tometer_X"], y * P["ENcorr_tometer_Y"]
    E = P["ENcorr_a00"] + P["ENcorr_a10"]*x + P["ENcorr_a01"]*y + P["ENcorr_a20"]*x*x + P["ENcorr_a11"]*x*y + P["ENcorr_a02"]*y*y
    N = P["ENcorr_b00"] + P["ENcorr_b10"]*x + P["ENcorr_b01"]*y + P["ENcorr_b20"]*x*x + P["ENcorr_b11"]*x*y + P["ENcorr_b02"]*y*y
    return E, N


def read_clip(sheet):
    p = CFG["inis"].get(sheet.lower())
    if not p:
        return None
    m = re.search(r"clip=(\d+),(\d+),(\d+),(\d+)", open(p, encoding="latin-1").read())
    if not m:
        return None
    x, y, w, h = map(int, m.groups())
    return x, y, x + w, y + h


def sheet_affine_3857(s, x0, y0, x1, y1):
    """Affine from the clipped window's pixels to EPSG:3857, fitted to a 5x5 grid of points mapped
    through the DVD polynomial (over one sheet the polynomial is almost linear)."""
    utm_to_merc = Transformer.from_crs("EPSG:32633", "EPSG:3857", always_xy=True)
    A, B = [], []
    for i in range(5):
        for j in range(5):
            px = x0 + (x1 - x0) * i / 4; py = y0 + (y1 - y0) * j / 4
            E, N = grid_to_utm33(s["ox"] + px * s["cx"], s["oy"] + py * s["cy"])
            A.append((px - x0, py - y0, 1)); B.append(utm_to_merc.transform(E, N))
    sol, *_ = np.linalg.lstsq(np.array(A), np.array(B), rcond=None)
    (a, d), (b, e), (c, f) = sol
    return Affine(a, b, c, d, e, f)


def already_covered(tf, W, H, z=12):
    """True if the existing layer really shows map at the sheet's centre and four quarter points.
    A tile that exists but is transparent at that point (outside the layer's own outline) does not count."""
    import io, requests
    from PIL import Image
    size = 2 * R / 2 ** z
    for fx, fy in ((.5, .5), (.25, .25), (.75, .25), (.25, .75), (.75, .75)):
        X, Y = tf * (W * fx, H * fy)
        tx, ty = int((X + R) // size), int((R - Y) // size)
        px = min(255, int(((X + R) / size - tx) * 256)); py = min(255, int(((R - Y) / size - ty) * 256))
        r = None
        for attempt in range(3):
            try:
                r = requests.get(CFG["covered_url"].format(z=z, x=tx, y=ty), timeout=20); break
            except Exception:
                r = None
        if r is None or r.status_code != 200:
            return False
        try:
            if Image.open(io.BytesIO(r.content)).convert("RGBA").getpixel((px, py))[3] < 128:
                return False
        except Exception:
            return False
    return True


def process(job):
    tif, out_dir, zmin, zmax, bbox = job
    sheet = os.path.splitext(os.path.basename(tif))[0]
    res = dict(sheet=sheet, status="", tiles=[], bounds={})
    try:
        if sheet.lower() in CFG["skip"]:
            res["status"] = "skipped: already placed by hand (control points)"; return res
        s = CFG["sheets"].get(sheet.lower())
        if not s:
            res["status"] = "skipped: not in ekf_mk.xml"; return res
        with rasterio.open(tif) as ds:
            clip = read_clip(sheet)
            x0, y0, x1, y1 = clip or (0, 0, ds.width, ds.height)
            x1, y1 = min(x1, ds.width), min(y1, ds.height)
            src_tf = sheet_affine_3857(s, x0, y0, x1, y1)
            W, H = x1 - x0, y1 - y0
            cs = [src_tf * p for p in ((0, 0), (W, 0), (0, H), (W, H))]
            minX, maxX = min(p[0] for p in cs), max(p[0] for p in cs); minY, maxY = min(p[1] for p in cs), max(p[1] for p in cs)
            if bbox:
                to_wgs = Transformer.from_crs("EPSG:3857", "EPSG:4326", always_xy=True)
                lon0, lat0 = to_wgs.transform(minX, minY); lon1, lat1 = to_wgs.transform(maxX, maxY)
                if lon1 < bbox[0] or lon0 > bbox[2] or lat1 < bbox[1] or lat0 > bbox[3]:
                    res["status"] = "skipped: outside bbox"; return res
            if CFG["covered_url"] and already_covered(src_tf, W, H):
                res["status"] = "skipped: already in the existing layer"; return res
            data = ds.read([1, 2, 3], window=Window(x0, y0, W, H))
        res["status"] = "ok" if clip else "ok, not clipped (no .ini for this sheet)"
        rgba = np.zeros((4,) + data.shape[1:], np.uint8)
        rgba[:3] = data; rgba[3] = np.where(data.any(axis=0), 255, 0); del data
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
                reproject(rgba, mos, src_transform=src_tf, src_crs="EPSG:3857", dst_transform=mtf, dst_crs="EPSG:3857",
                          resampling=Resampling.bilinear)
            else:
                reproject(prev, mos, src_transform=prev_tf, src_crs="EPSG:3857", dst_transform=mtf, dst_crs="EPSG:3857",
                          resampling=Resampling.average)
            prev, prev_tf = mos, mtf
            for x in range(xa, xb + 1):
                for y in range(ya, yb + 1):
                    dst = mos[:, (y - ya) * 256:(y - ya + 1) * 256, (x - xa) * 256:(x - xa + 1) * 256]
                    if dst[3].max() == 0:
                        continue
                    rel = f"{z}/{x}/{y}.png"
                    composite_save(os.path.join(out_dir, rel), np.ascontiguousarray(dst), lock_path)
                    res["tiles"].append(rel)
    except Exception as e:
        res["status"] = f"ERROR: {type(e).__name__}: {e}"
    return res


def run(tifs, out_dir, zmin=6, zmax=14, workers=2, bbox=None):
    """Process the given GeoTIFFs; returns the list of per-sheet result dicts."""
    assert CFG["sheets"], "call configure(outlay_dir, ini_dir) first"
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


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("outlay_dir"); ap.add_argument("ini_dir"); ap.add_argument("out_dir"); ap.add_argument("tifs", nargs="+")
    ap.add_argument("--zoom", default="6,14"); ap.add_argument("--workers", type=int, default=2); ap.add_argument("--covered-url")
    a = ap.parse_args()
    print("sheets in ekf_mk.xml / .ini files found:", configure(a.outlay_dir, a.ini_dir, a.covered_url))
    zmin, zmax = map(int, a.zoom.split(","))
    total = {}
    for r in run(a.tifs, a.out_dir, zmin, zmax, a.workers):
        merge_bounds(total, r["bounds"])
        print(json.dumps({k: (len(v) if k == "tiles" else v) for k, v in r.items() if k != "bounds"}, ensure_ascii=False))
    print("tile bounds:", json.dumps(total))
