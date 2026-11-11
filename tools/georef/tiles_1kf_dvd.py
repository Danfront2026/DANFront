"""
tiles_1kf_dvd.py - georeference First Military Survey (1KF) sheets from the Arcanum DVD
data and cut XYZ tiles, all sheets into one tile folder.

The First Survey ECWs carry no coordinates ("RAW"), but the DVD viewer knew where each
sheet is. Two files from the DVD (PC60, folder ekf_mk / outlay) hold that information:

  ekf_mk.xml       one <file> entry per sheet: origin (geo:origx/origy) and cell size
                   (geo:cellx/celly) of the ECW's pixel (0,0) in the DVD's own grid
                   coordinate system (metres, grid = 9600 x 6400 Klafter sheets).
  geoview_mk.ini   [geo] block: a 2nd-order polynomial (ENcorr_*) from that grid system
                   to UTM zone 33 (WGS84). Grid coordinates are first multiplied by
                   ENcorr_tometer_X / _Y.
  <sheet>.ini      clip=x,y,w,h : the map frame of each sheet (margins to cut off).

This is Arcanum's own country-wide fit for the DVD. Accuracy is a few hundred metres on
average, up to ~2 km in the far corners of the country (the First Survey has no geodetic
basis, so no projection fits it exactly - see Timar 2023, IJGI 12:220). Checked against
our control-point georeference of sheet 14-20: ~270 m difference.

Usage:
  python3 tiles_1kf_dvd.py <geotiff_dir> <dvd_outlay_dir> <ini_dir> <tiles_out_dir> [--zoom 6,14] [--only 14-20,14-21]

  geotiff_dir     folder with the raw sheet GeoTIFFs (e.g. qgis_batch_export output raw/), named <sheet>.tif
  dvd_outlay_dir  folder containing ekf_mk.xml and geoview_mk.ini
  ini_dir         folder with the per-sheet .ini files (clip values)
  tiles_out_dir   tiles are MERGED into this folder (existing tiles are composited, not overwritten)

Also writes <tiles_out_dir>/../tile_bounds.json (union over all sheets processed so far)
and <tiles_out_dir>/../sheets_done.csv (per sheet: corners in WGS84, affine residual).
"""
import argparse, csv, glob, json, math, os, re, sys
import numpy as np
import rasterio
from rasterio.transform import Affine
from rasterio.warp import reproject, Resampling
from rasterio.windows import Window
from pyproj import Transformer
from PIL import Image

R = 20037508.342789244

ap = argparse.ArgumentParser()
ap.add_argument("geotiff_dir"); ap.add_argument("outlay_dir"); ap.add_argument("ini_dir"); ap.add_argument("out_dir")
ap.add_argument("--zoom", default="6,14"); ap.add_argument("--only", default="")
args = ap.parse_args()
zmin, zmax = map(int, args.zoom.split(","))

# ---- DVD georeferencing -----------------------------------------------------------
ini = open(os.path.join(args.outlay_dir, "geoview_mk.ini"), encoding="latin-1").read()
P = {k: float(v) for k, v in re.findall(r"^(ENcorr_\w+)=([-\d.E+]+)", ini, flags=re.M)}
def grid_to_utm33(x, y):
    x, y = x * P["ENcorr_tometer_X"], y * P["ENcorr_tometer_Y"]
    E = P["ENcorr_a00"] + P["ENcorr_a10"]*x + P["ENcorr_a01"]*y + P["ENcorr_a20"]*x*x + P["ENcorr_a11"]*x*y + P["ENcorr_a02"]*y*y
    N = P["ENcorr_b00"] + P["ENcorr_b10"]*x + P["ENcorr_b01"]*y + P["ENcorr_b20"]*x*x + P["ENcorr_b11"]*x*y + P["ENcorr_b02"]*y*y
    return E, N
utm_to_merc = Transformer.from_crs("EPSG:32633", "EPSG:3857", always_xy=True)
merc_to_wgs = Transformer.from_crs("EPSG:3857", "EPSG:4326", always_xy=True)

xml = open(os.path.join(args.outlay_dir, "ekf_mk.xml"), encoding="latin-1").read()
SHEETS = {}
for gx, gy, fn, cx, cy, ox, oy in re.findall(
        r'<file gridx="(\d+)" gridy="(\d+)" filename="([^"]+)"[^>]*geo:cellx="([-\d.]+)" geo:celly="([-\d.]+)" geo:origx="([-\d.]+)" geo:origy="([-\d.]+)"', xml):
    SHEETS[os.path.splitext(fn)[0]] = dict(gridx=int(gx), gridy=int(gy), cx=float(cx), cy=float(cy), ox=float(ox), oy=float(oy))
print(f"{len(SHEETS)} sheets in ekf_mk.xml")

def read_clip(sheet):
    p = os.path.join(args.ini_dir, sheet + ".ini")
    if not os.path.exists(p):
        return None
    m = re.search(r"clip=(\d+),(\d+),(\d+),(\d+)", open(p, encoding="latin-1").read())
    if not m:
        return None
    x, y, w, h = map(int, m.groups())
    return x, y, x + w, y + h

def sheet_affine_3857(s, x0, y0, x1, y1):
    """Fit pixel -> EPSG:3857 affine from a 5x5 grid of points mapped through the DVD polynomial.
    Over one sheet (~20 km) the polynomial is almost linear; returns (Affine, max residual m)."""
    pts_px, pts_m = [], []
    for i in range(5):
        for j in range(5):
            px = x0 + (x1 - x0) * i / 4; py = y0 + (y1 - y0) * j / 4
            E, N = grid_to_utm33(s["ox"] + px * s["cx"], s["oy"] + py * s["cy"])
            X, Y = utm_to_merc.transform(E, N)
            pts_px.append((px - x0, py - y0)); pts_m.append((X, Y))   # relative to the clipped window that is tiled
    A = np.array([[px, py, 1] for px, py in pts_px]); B = np.array(pts_m)
    sol, *_ = np.linalg.lstsq(A, B, rcond=None)      # X = a*px + b*py + c ; Y = d*px + e*py + f
    res = A @ sol - B
    k = 1 / math.cos(math.radians(merc_to_wgs.transform(*B.mean(axis=0))[1]))
    maxres = float(np.hypot(res[:, 0], res[:, 1]).max() / k)
    (a, d), (b, e), (c, f) = sol
    return Affine(a, b, c, d, e, f), maxres

# ---- tiling with compositing ------------------------------------------------------
def tile_range(minX, maxX, minY, maxY, z):
    size = 2 * R / 2 ** z
    return int((minX + R) // size), int((maxX + R) // size), int((R - maxY) // size), int((R - minY) // size), size

def composite_save(path, dst):
    new = Image.fromarray(dst.transpose(1, 2, 0), "RGBA")
    if os.path.exists(path):
        old = Image.open(path).convert("RGBA")
        old.alpha_composite(new); new = old
    new.save(path, optimize=True)

bounds_path = os.path.join(os.path.dirname(os.path.abspath(args.out_dir)), "tile_bounds.json")
bounds = {int(z): b for z, b in json.load(open(bounds_path)).items()} if os.path.exists(bounds_path) else {}
done_path = os.path.join(os.path.dirname(os.path.abspath(args.out_dir)), "sheets_done.csv")
done_rows = list(csv.DictReader(open(done_path, encoding="utf-8"))) if os.path.exists(done_path) else []
done_names = {r["sheet"] for r in done_rows}

only = set(filter(None, args.only.split(",")))
tifs = sorted(glob.glob(os.path.join(args.geotiff_dir, "*.tif")))
if only:
    tifs = [t for t in tifs if os.path.splitext(os.path.basename(t))[0] in only]
print(f"{len(tifs)} GeoTIFFs to process")

for n, tif in enumerate(tifs, 1):
    sheet = os.path.splitext(os.path.basename(tif))[0]
    if sheet in done_names:
        print(f"[{n}/{len(tifs)}] {sheet}: already done, skipped"); continue
    s = SHEETS.get(sheet)
    if not s:
        print(f"[{n}/{len(tifs)}] {sheet}: NOT in ekf_mk.xml, skipped"); continue
    with rasterio.open(tif) as ds:
        clip = read_clip(sheet) or (0, 0, ds.width, ds.height)
        x0, y0, x1, y1 = clip
        x1, y1 = min(x1, ds.width), min(y1, ds.height)
        win = Window(x0, y0, x1 - x0, y1 - y0)
        data = ds.read([1, 2, 3], window=win)
    src_tf, maxres = sheet_affine_3857(s, x0, y0, x1, y1)
    rgba = np.zeros((4,) + data.shape[1:], np.uint8)
    rgba[:3] = data; rgba[3] = np.where(data.any(axis=0), 255, 0); del data
    H, W = rgba.shape[1:]
    cs = [src_tf * (0, 0), src_tf * (W, 0), src_tf * (0, H), src_tf * (W, H)]
    minX, maxX = min(p[0] for p in cs), max(p[0] for p in cs); minY, maxY = min(p[1] for p in cs), max(p[1] for p in cs)
    count = 0
    for z in range(zmin, zmax + 1):
        xa, xb, ya, yb, size = tile_range(minX, maxX, minY, maxY, z)
        b = bounds.setdefault(z, dict(xMin=xa, xMax=xb, yMin=ya, yMax=yb))
        b.update(xMin=min(b["xMin"], xa), xMax=max(b["xMax"], xb), yMin=min(b["yMin"], ya), yMax=max(b["yMax"], yb))
        for x in range(xa, xb + 1):
            for y in range(ya, yb + 1):
                dst = np.zeros((4, 256, 256), np.uint8)
                dtf = Affine(size / 256, 0, -R + x * size, 0, -size / 256, R - y * size)
                reproject(rgba, dst, src_transform=src_tf, src_crs="EPSG:3857", dst_transform=dtf, dst_crs="EPSG:3857",
                          resampling=Resampling.average if z < 14 else Resampling.bilinear)
                if dst[3].max() == 0: continue
                os.makedirs(f"{args.out_dir}/{z}/{x}", exist_ok=True)
                composite_save(f"{args.out_dir}/{z}/{x}/{y}.png", dst); count += 1
    nw = merc_to_wgs.transform(*cs[0]); se = merc_to_wgs.transform(*cs[3])
    done_rows.append(dict(sheet=sheet, gridx=s["gridx"], gridy=s["gridy"], clip=",".join(map(str, clip)),
                          nw_lat=f"{nw[1]:.5f}", nw_lon=f"{nw[0]:.5f}", se_lat=f"{se[1]:.5f}", se_lon=f"{se[0]:.5f}",
                          affine_residual_m=f"{maxres:.1f}", tiles=count))
    done_names.add(sheet)
    json.dump(bounds, open(bounds_path, "w"), indent=1)
    with open(done_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(done_rows[0].keys())); w.writeheader(); w.writerows(done_rows)
    print(f"[{n}/{len(tifs)}] {sheet}: {count} tiles, NW {nw[1]:.4f}N {nw[0]:.4f}E, affine residual {maxres:.1f} m")

print("tile bounds:", bounds)
