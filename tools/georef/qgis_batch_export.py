# -*- coding: utf-8 -*-
"""
qgis_batch_export.py  -  export Arcanum ECW map sheets to GeoTIFF in one go.

HOW TO RUN (QGIS on Windows):
  1. Edit the three settings below (IN_DIR, OUT_DIR, CRS).
  2. In QGIS: Plugins > Python Console > click "Show Editor" (the notepad icon),
     open this file and press the green "Run script" arrow.
     (Or paste the whole file into the console.)
  3. Watch the console. When it finishes, OUT_DIR contains one .tif per sheet plus
     export_report.csv with what happened to each file.

WHAT IT DOES
  - Walks IN_DIR (and its subfolders) for *.ecw files.
  - Reads the georeferencing stored in the ECW header.
      * Sheets WITH coordinates (e.g. 32-50Cas: origin ~ 190823 / -65248) are written
        as GeoTIFF with the CRS below assigned. Nothing else is changed: same pixels,
        same grid, 8-bit, lossless DEFLATE compression (about 1/3 of the uncompressed size).
      * Sheets WITHOUT coordinates (datum/projection "RAW", origin 0/0, e.g. 1st survey
        14-20) are exported too, but WITHOUT a CRS, into OUT_DIR/raw/. They still need
        georeferencing (grid or control points). Assigning the CRS to them would only
        place them at the origin in Vienna.
  - Skips a sheet if its output already exists, so the script can be re-run safely.
  - Writes export_report.csv (one row per ECW: size, origin, cell size, status).
    This report is also useful for the grid idea: it lists the origin of every sheet.

The ECW decoding is done by the GDAL that ships with QGIS, so this only works inside
QGIS (or OSGeo4W shell), not with a plain Python.
"""

import os, csv, time

# ---------------------------------------------------------------- settings --
IN_DIR  = r"E:\_DANFront\ecw"            # folder with the ECW files (subfolders are included)
OUT_DIR = r"E:\_DANFront\geotiff_export" # output folder (created if missing)
# Custom CRS of the ECW headers (datum BUDA1821 / projection HABSBURG2):
# Cassini-Soldner, origin St. Stephen's Cathedral Vienna, Zach-Oriani ellipsoid.
CRS = "+proj=cass +lat_0=48.208772 +lon_0=16.374242 +a=6376130 +rf=310 +units=m +no_defs"
# ---------------------------------------------------------------------------

from osgeo import gdal, osr
gdal.UseExceptions()

def has_coordinates(ds):
    """True if the ECW carries real georeferencing (not the RAW 0/0 identity)."""
    gt = ds.GetGeoTransform(can_return_null=True)
    if gt is None:
        return False
    x0, px, _, y0, _, py = gt
    identity = (abs(x0) < 1e-6 and abs(y0) < 1e-6)
    return not identity

def main():
    if not gdal.GetDriverByName("ECW"):
        print("ERROR: this GDAL has no ECW driver. Run the script inside QGIS (Windows).")
        return
    os.makedirs(OUT_DIR, exist_ok=True)
    raw_dir = os.path.join(OUT_DIR, "raw")
    os.makedirs(raw_dir, exist_ok=True)

    srs = osr.SpatialReference()
    srs.ImportFromProj4(CRS)
    wkt = srs.ExportToWkt()

    files = []
    for root, _, names in os.walk(IN_DIR):
        for n in names:
            if n.lower().endswith(".ecw"):
                files.append(os.path.join(root, n))
    files.sort()
    print(f"{len(files)} ECW files found under {IN_DIR}")

    report_path = os.path.join(OUT_DIR, "export_report.csv")
    rows = []
    t0 = time.time()
    for i, src in enumerate(files, 1):
        name = os.path.splitext(os.path.basename(src))[0]
        row = {"file": os.path.relpath(src, IN_DIR), "status": "", "width": "", "height": "",
               "origin_x": "", "origin_y": "", "cell_size": "", "output": ""}
        try:
            ds = gdal.Open(src)
            row["width"], row["height"] = ds.RasterXSize, ds.RasterYSize
            georef = has_coordinates(ds)
            if georef:
                gt = ds.GetGeoTransform()
                row["origin_x"], row["origin_y"], row["cell_size"] = f"{gt[0]:.3f}", f"{gt[3]:.3f}", f"{gt[1]:.4f}"
                dst = os.path.join(OUT_DIR, name + ".tif")
            else:
                dst = os.path.join(raw_dir, name + ".tif")
            row["output"] = os.path.relpath(dst, OUT_DIR)

            if os.path.exists(dst):
                row["status"] = "skipped (exists)"
                print(f"[{i}/{len(files)}] {name}: already exported, skipped")
                ds = None
                rows.append(row)
                continue

            opts = gdal.TranslateOptions(
                format="GTiff",
                outputType=gdal.GDT_Byte,
                outputSRS=wkt if georef else None,
                creationOptions=["COMPRESS=DEFLATE", "PREDICTOR=2", "TILED=YES", "BIGTIFF=IF_SAFER"],
            )
            gdal.Translate(dst, ds, options=opts)
            ds = None
            row["status"] = "ok, CRS assigned" if georef else "ok, RAW (no coordinates)"
            print(f"[{i}/{len(files)}] {name}: {row['status']}")
        except Exception as e:
            row["status"] = f"ERROR: {e}"
            print(f"[{i}/{len(files)}] {name}: ERROR {e}")
        rows.append(row)

    with open(report_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()) if rows else ["file"])
        w.writeheader()
        w.writerows(rows)

    n_ok = sum(1 for r in rows if r["status"].startswith("ok, CRS"))
    n_raw = sum(1 for r in rows if "RAW" in r["status"])
    n_err = sum(1 for r in rows if r["status"].startswith("ERROR"))
    print(f"\nDone in {time.time()-t0:.0f} s. {n_ok} sheets with CRS, {n_raw} RAW sheets (in raw\\), {n_err} errors.")
    print(f"Report: {report_path}")

main()
