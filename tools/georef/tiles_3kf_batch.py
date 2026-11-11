"""
tiles_3kf_batch.py - cut XYZ tiles from many Third Military Survey (3KF, 1:25 000) GeoTIFFs at once,
all sheets merged into one tile folder. Same interface as tiles_2kf_batch.py (used by colab_3kf.ipynb).

Input: GeoTIFFs that carry their own CRS (the DVD's Lambert conformal conic:
+proj=lcc +lat_0=47 +lon_0=20.5 +lat_1=45 +lat_2=49 +ellps=bessel +towgs84=600,205,437 ...).
The map frame of a 1:25 000 sheet is a graticule quadrangle of 0.25 x 0.125 degrees in Ferro
longitudes. Each sheet is clipped to the quadrangle aligned to those multiples that lies inside
the image, so title strips and margins never cover a neighbouring sheet. A sheet in which no such
quadrangle fits is tiled unclipped and reported as "irregular"; files without a CRS are skipped.

Usage by hand:
  python3 tiles_3kf_batch.py <tiles_out_dir> <sheet1.tif> [...] [--zoom 6,14] [--workers 2]
"""
import argparse, json, math, os, sys
from multiprocessing import Pool
import numpy as np
import rasterio
from rasterio.features import rasterize
from rasterio.transform import Affine
from rasterio.warp import reproject, Resampling
from pyproj import Transformer
from shapely.geometry import Polygon
from tiles_2kf_batch import composite_save, merge_bounds, R

GRATICULE_CRS = "+proj=longlat +ellps=bessel +towgs84=600,205,437 +pm=ferro"
DLON, DLAT = 0.25, 0.125


def ring(x0, y0, x1, y1, n=40):
    return ([(x0 + (x1 - x0) * i / n, y0) for i in range(n + 1)] + [(x1, y0 + (y1 - y0) * i / n) for i in range(n + 1)] +
            [(x1 - (x1 - x0) * i / n, y1) for i in range(n + 1)] + [(x0, y1 - (y1 - y0) * i / n) for i in range(n + 1)])


def process(job):
    tif, out_dir, zmin, zmax, bbox = job
    sheet = os.path.splitext(os.path.basename(tif))[0]
    res = dict(sheet=sheet, status="", tiles=[], bounds={})
    try:
        with rasterio.open(tif) as ds:
            if ds.crs is None:
                res["status"] = "skipped: no CRS"; return res
            src_crs, src_tf = ds.crs, ds.transform
            W, H = ds.width, ds.height
            to_grat = Transformer.from_crs(src_crs, GRATICULE_CRS, always_xy=True)
            ex, ey = zip(*[src_tf * p for p in ring(0, 0, W, H)])
            glon, glat = to_grat.transform(ex, ey)
            eps = 1e-9
            lon0 = math.ceil(min(glon) / DLON - eps) * DLON; lon1 = math.floor(max(glon) / DLON + eps) * DLON
            lat0 = math.ceil(min(glat) / DLAT - eps) * DLAT; lat1 = math.floor(max(glat) / DLAT + eps) * DLAT
            clipped = lon1 > lon0 and lat1 > lat0
            if clipped:
                from_grat = Transformer.from_crs(GRATICULE_CRS, src_crs, always_xy=True)
                rx, ry = from_grat.transform(*zip(*ring(lon0, lat0, lon1, lat1)))
                res["frame"] = [round(lon0, 3), round(lat0, 3), round(lon1, 3), round(lat1, 3)]
                res["status"] = "ok" if (abs(lon1 - lon0 - DLON) < 1e-6 and abs(lat1 - lat0 - DLAT) < 1e-6) else \
                                f"ok, frame is {round((lon1-lon0)/DLON, 2)} x {round((lat1-lat0)/DLAT, 2)} quadrangles"
            else:
                rx, ry = ex, ey
                res["status"] = "ok, irregular (not clipped)"
            to_merc = Transformer.from_crs(src_crs, "EPSG:3857", always_xy=True)
            mx, my = to_merc.transform(rx, ry)
            minX, maxX, minY, maxY = min(mx), max(mx), min(my), max(my)
            if bbox:
                lon, lat = Transformer.from_crs("EPSG:3857", "EPSG:4326", always_xy=True).transform([minX, maxX], [minY, maxY])
                if lon[1] < bbox[0] or lon[0] > bbox[2] or lat[1] < bbox[1] or lat[0] > bbox[3]:
                    res["status"] = "skipped: outside bbox"; return res
            data = ds.read([1, 2, 3])
        rgba = np.zeros((4,) + data.shape[1:], np.uint8)
        rgba[:3] = data; rgba[3] = np.where(data.any(axis=0), 255, 0); del data
        if clipped:
            mask = rasterize([Polygon(zip(rx, ry))], out_shape=(H, W), transform=src_tf, fill=0, default_value=1, dtype="uint8")
            rgba[3][mask == 0] = 0; del mask
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
                reproject(rgba, mos, src_transform=src_tf, src_crs=src_crs, dst_transform=mtf, dst_crs="EPSG:3857",
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
    ap.add_argument("out_dir"); ap.add_argument("tifs", nargs="+")
    ap.add_argument("--zoom", default="6,14"); ap.add_argument("--workers", type=int, default=2)
    a = ap.parse_args()
    zmin, zmax = map(int, a.zoom.split(","))
    total = {}
    for r in run(a.tifs, a.out_dir, zmin, zmax, a.workers):
        merge_bounds(total, r["bounds"])
        print(json.dumps({k: (len(v) if k == "tiles" else v) for k, v in r.items() if k != "bounds"}, ensure_ascii=False))
    print("tile bounds:", json.dumps(total))
