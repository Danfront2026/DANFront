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
so sheets are exported to GeoTIFF on a Windows GIS first. Ask for 8-bit (Byte) output.

## Steps for one sheet

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
4. Check visually:
   `python3 make_preview.py sheets/<sheet>/fit_result.json sheets/<sheet>/tile_bounds.json work/<sheet> "<sheet>"`
   and open `work/<sheet>/index.html`. Fix bad points in `gcps.json`, repeat from 2.
5. Upload: `bash upload_tiles.sh work/<sheet>/tiles` (never into `tiles/`).
6. In `maps.html`, extend `extTileBounds` so each zoom level covers all sheets
   (min of the mins, max of the maxes of the per-sheet `tile_bounds.json`).

## Sheets done

| Sheet | Area | Fit points | RMS | Ground px | Notes |
|---|---|---|---|---|---|
| 14-20 | Pest, Buda, Óbuda (Col. XIV Sectio XX) | 6 | 93 m | 2.454 m | Test sheet; area also covered by Arcanum. Check points Palota/Csömör ~850 m (approximate coordinates). |
