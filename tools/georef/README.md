# Georeferencing additional First Military Survey sheets

Scripts used to add sheets that are missing from the Arcanum 1KF layer to the
website map. Result on the site: layer **Historical Map Overlay (1KF - DANFront)**
in `maps.html` (`extHistoricalLayer`, tiles served from `tiles-ext/` in R2).

Requirements: Python 3 with `rasterio pyproj pillow numpy`, Node (for `npx wrangler`).

## Background: the ECW files

The Arcanum ECW sheets come in two kinds. Check with the header / GIS layer info:

- **With coordinates** (e.g. `32-50Cas.ecw`, datum `BUDA1821`, projection `HABSBURG2`).
  These are Cassini-Soldner with origin at St. Stephen's Cathedral, Vienna. Assign this
  custom CRS and they fall into place (a few hundred metres off without a datum shift):
  `+proj=cass +lat_0=48.208772 +lon_0=16.374242 +a=6376130 +rf=310 +units=m +no_defs`
- **Without coordinates** (e.g. `14-20.ecw`, datum/projection `RAW`, origin 0/0).
  Assigning the CRS puts the sheet's corner on the origin in Vienna. These need control
  points, either in GIS or with `fit.py` below.

ECW can't be read with open-source GDAL (Hexagon SDK needed; macOS SDK is Intel-only),
so sheets are exported to GeoTIFF on a Windows GIS first. `qgis_batch_export.py` does
this for a whole folder from the QGIS Python console (QGIS ships a GDAL with ECW): sheets
with coordinates get the Cassini CRS, RAW ones go to `raw/` without a CRS, and
`export_report.csv` lists every sheet's origin (useful for the grid approach).

## Three routes, depending on the sheet

**A. Sheet already has coordinates** (GeoTIFF exported with its CRS: 2nd survey in Cassini,
3rd survey in the Lambert CRS from `3kf_25e.ini`) - no control points needed:

1. Clip the margins. Either a pixel rectangle (`--clip x0,y0,x1,y1`, same grid as the ECW),
   or for the 3rd survey automatically: `--clip-graticule 0.25,0.125` (sheets are 15' x 7.5'
   graticule quadrangles in Ferro longitudes; the script finds the aligned quadrangle).
2. Tiles:
   `python3 tiles_from_geotiff.py "<sheet>.tif" work/<sheet>/tiles --clip ...`
   then copy `work/<sheet>/tile_bounds.json` to `sheets/<sheet>.tile_bounds.json`.
3. Record the sheet in `sheets/<sheet>.json` (see `sheets/32-50Cas/`, `sheets/4266_1.json`)
   with a few landmarks as check points, and preview:
   `python3 make_preview.py sheets/<sheet>.json sheets/<sheet>.tile_bounds.json work/<sheet> "<sheet>"`

**C. First Military Survey (1KF) sheets, placed from the Arcanum DVD data** - the ECWs are
RAW, but the DVD viewer's files give every sheet's position (965 sheets):

- `ekf_mk.xml` (origin + cell size of each sheet in the DVD's grid system) and
  `geoview_mk.ini` (2nd-order polynomial grid -> UTM 33N) from the DVD folder
  `PC60_EKF1_/ekf_mk/outlay`, plus the per-sheet `.ini` files (clip).
- `python3 tiles_1kf_dvd.py <raw_geotiff_dir> <outlay_dir> <ini_dir> work/1kf/tiles`
  processes every sheet GeoTIFF in the folder and MERGES all tiles into one folder
  (re-runnable; `sheets_done.csv` records what is done, `tile_bounds.json` the union).
- Accuracy: this is Arcanum's DVD-era country-wide fit. ~300 m at Budapest (checked
  against route B), a few hundred metres typical, up to ~2 km in the far corners of the
  country. The First Survey has no geodetic basis, so no projection fits it exactly
  (Timar 2023, IJGI 12:220; Molnar et al. 2014). Good enough for the web overlay.
- The DVD grid is a Cassini-Soldner on Petervarad (45.253022 N, 19.862211 E) shifted by
  about (+302 880, -500 970) m, but only locally: use the polynomial, not the Cassini.

**B. Sheet without coordinates and without DVD data** - control points (fit.py):

1. Make `sheets/<sheet>/gcps.json` (copy `sheets/14-20/gcps.json`). For each landmark,
   `px`/`py` = pixel position on the GeoTIFF, `lat`/`lon` = today's position.
   Spread points over the sheet; at least 4 `fit` points, ideally 6+.
   `clip_px` = map frame from the Arcanum `.ini` (`clip=x,y,w,h` -> `[x, y, x+w, y+h]`).
2. Fit:
   `python3 fit.py sheets/<sheet>/gcps.json sheets/<sheet>/fit_result.json`
   Check: ground pixel size close to 2.438 m, small rotation, RMS of fit points.
3. Tiles (into `work/`, which is git-ignored):
   `python3 make_tiles.py "<sheet>.tif" sheets/<sheet>/fit_result.json work/<sheet>/tiles 6 14`
   This also writes `work/<sheet>/tile_bounds.json`; copy it to `sheets/<sheet>/`.
4. Preview:
   `python3 make_preview.py sheets/<sheet>/fit_result.json sheets/<sheet>/tile_bounds.json work/<sheet> "<sheet>"`
   Fix bad points in `gcps.json`, repeat from 2.

**All routes, then:** open `work/<sheet>/index.html` to check over OpenStreetMap,
upload with `bash upload_tiles.sh work/<sheet>/tiles` (never into `tiles/`), and extend
the tile bounds in `maps.html` so each zoom level covers all sheets of that layer
(min of the mins, max of the maxes of the per-sheet `tile_bounds.json`).

Different surveys go into different layers / R2 prefixes, so sheets of different periods
don't overwrite each other where they overlap:

| Survey | R2 prefix | maps.html layer | tile bounds var |
|---|---|---|---|
| 1st (1KF) | `tiles-ext/` | Historical Map Overlay (1KF - DANFront) | `extTileBounds` |
| 2nd (2KF) | `tiles-2kf/` | Historical Map Overlay (2KF - DANFront) | `kf2TileBounds` |
| 3rd (3KF) | `tiles-3kf/` | (to add) | |

Whole-survey runs that are too big for a laptop: `colab_2kf.ipynb` (Google Colab + Google Drive).
It downloads the 89 GB 2nd-survey archive from SharePoint into Drive as raw volumes, then extracts,
tiles (`tiles_2kf_batch.py`, automatic frame clipping on the 9600 x 6400 Klafter Cassini grid) and
uploads to R2 with rclone, batch by batch and resumable. Needs an R2 API token (Colab secrets).

Exporting ECW -> GeoTIFF on the Windows QGIS: `qgis_batch_export.py`, with `CRS` set to the
survey's CRS (2nd: Cassini/Vienna as in the script; 3rd: the Lambert string above; 1st: any,
the sheets are RAW and land in `raw/`).

## Sheets done

| Sheet | Survey / area | Route / accuracy | Status |
|---|---|---|---|
| 14-20 | 1st survey, Pest, Buda, Óbuda (Col. XIV Sectio XX) | B: 6 control points, RMS 93 m, ground px 2.454 m | On the site (`tiles-ext/`, layer 1KF - DANFront). Area also covered by Arcanum. Check points Palota/Csömör ~850 m (approximate coordinates). |
| 32-50Cas | 2nd survey, Pest-Ofen (Section 50, Colonne XXXII) | A: own Cassini coordinates, clip 146,612,7622,5578 | On the site (`tiles-2kf/`, layer 2KF - DANFront). Landmarks within ~100-200 m. |
| 14-20 (DVD) | 1st survey, same sheet via route C | C: DVD xml + polynomial | Tested (`sheets/14-20-dvd.json`); ~300 m NE of the route-B placement. Not uploaded (route B version is on the site). |
| 4266/1 | 3rd survey 1:25 000, Tylicz area (today PL/SK border) | A: Lambert CRS from DVD ini, graticule clip | Tested (`sheets/4266_1.json`), not uploaded. |
