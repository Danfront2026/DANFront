"""
tiles_from_geotiff.py - cut XYZ tiles straight from an already georeferenced GeoTIFF.

Use this for sheets that carry their own coordinates (e.g. 32-50Cas exported in the
custom Cassini-Soldner CRS, or any GeoTIFF that is already in place). Sheets that
need control points go through fit.py + make_tiles.py instead.

Usage:
  python3 tiles_from_geotiff.py <sheet.tif> <tiles_out_dir> --clip x0,y0,x1,y1 [--zoom 6,14]

--clip  the map frame in the GeoTIFF's own pixel coordinates (cuts off title, legend
        and margins so neighbouring sheets don't cover each other). For Cassini exports
        this is a plain rectangle on the same pixel grid as the ECW.
        Omit it to keep the whole image.

Pixels that are 0 in all bands (nodata / outside the scan) become transparent.
Writes tile_bounds.json next to the tiles directory.
"""
import argparse, json, os
import numpy as np
import rasterio
from rasterio.transform import Affine
from rasterio.warp import reproject, transform as warp_transform, Resampling
from rasterio.windows import Window
from PIL import Image

R = 20037508.342789244  # half the Web Mercator extent

ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("out_dir")
ap.add_argument("--clip", help="x0,y0,x1,y1 in source pixels")
ap.add_argument("--zoom", default="6,14")
args = ap.parse_args()
zmin, zmax = map(int, args.zoom.split(","))

with rasterio.open(args.src) as ds:
    src_crs = ds.crs
    if args.clip:
        x0, y0, x1, y1 = map(int, args.clip.split(","))
    else:
        x0, y0, x1, y1 = 0, 0, ds.width, ds.height
    win = Window(x0, y0, x1 - x0, y1 - y0)
    data = ds.read([1, 2, 3], window=win)
    src_tf = ds.window_transform(win)

# RGBA: transparent where all bands are 0
rgba = np.zeros((4,) + data.shape[1:], np.uint8)
rgba[:3] = data
rgba[3] = np.where(data.any(axis=0), 255, 0)
del data
H, W = rgba.shape[1:]

# footprint in Web Mercator (densified frame edges, since the CRS may be curved)
n = 50
edge_px = ([(W * i / n, 0) for i in range(n + 1)] + [(W, H * i / n) for i in range(n + 1)] +
           [(W * i / n, H) for i in range(n + 1)] + [(0, H * i / n) for i in range(n + 1)])
xs, ys = zip(*[src_tf * p for p in edge_px])
mx, my = warp_transform(src_crs, "EPSG:3857", xs, ys)
minX, maxX, minY, maxY = min(mx), max(mx), min(my), max(my)

bounds, count = {}, 0
for z in range(zmin, zmax + 1):
    size = 2 * R / 2 ** z
    xa, xb = int((minX + R) // size), int((maxX + R) // size)
    ya, yb = int((R - maxY) // size), int((R - minY) // size)
    bounds[z] = dict(xMin=xa, xMax=xb, yMin=ya, yMax=yb)
    for x in range(xa, xb + 1):
        for y in range(ya, yb + 1):
            dst = np.zeros((4, 256, 256), np.uint8)
            dtf = Affine(size / 256, 0, -R + x * size, 0, -size / 256, R - y * size)
            reproject(rgba, dst, src_transform=src_tf, src_crs=src_crs,
                      dst_transform=dtf, dst_crs="EPSG:3857",
                      resampling=Resampling.average if z < 14 else Resampling.bilinear)
            if dst[3].max() == 0:
                continue
            os.makedirs(f"{args.out_dir}/{z}/{x}", exist_ok=True)
            Image.fromarray(dst.transpose(1, 2, 0), "RGBA").save(f"{args.out_dir}/{z}/{x}/{y}.png", optimize=True)
            count += 1
    print("z", z, bounds[z])

out_bounds = os.path.join(os.path.dirname(os.path.abspath(args.out_dir)), "tile_bounds.json")
json.dump(bounds, open(out_bounds, "w"), indent=1)
print("tiles written:", count, "| bounds ->", out_bounds)
