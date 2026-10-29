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

## Two routes, depending on the sheet

**A. Sheet already has coordinates** (GeoTIFF exported in the Cassini CRS above, or any
GeoTIFF that is already in place) - no control points needed:

1. Find the map frame on the GeoTIFF's pixel grid (title, legend and margins must be cut
   off, otherwise they cover the neighbouring sheet) and note it as `clip_px`.
2. Tiles:
   `python3 tiles_from_geotiff.py "<sheet>.tif" work/<sheet>/tiles --clip x0,y0,x1,y1`
   then copy `work/<sheet>/tile_bounds.json` to `sheets/<sheet>/`.
3. Record the sheet in `sheets/<sheet>/sheet.json` (see `sheets/32-50Cas/`), with a few
   landmarks as check points, and preview:
   `python3 make_preview.py sheets/<sheet>/sheet.json sheets/<sheet>/tile_bounds.json work/<sheet> "<sheet>"`

**B. Sheet without coordinates** (`RAW`, e.g. 1st survey 14-20) - control points:

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

**Both routes, then:** open `work/<sheet>/index.html` to check over OpenStreetMap,
upload with `bash upload_tiles.sh work/<sheet>/tiles` (never into `tiles/`), and extend
the tile bounds in `maps.html` so each zoom level covers all sheets of that layer
(min of the mins, max of the maxes of the per-sheet `tile_bounds.json`).

Different surveys should go into different layers / R2 prefixes (e.g. 1st survey in
`tiles-ext/`, later surveys in their own prefix), so sheets of different periods
don't overwrite each other where they overlap.

## Sheets done

| Sheet | Survey / area | Route / accuracy | Status |
|---|---|---|---|
| 14-20 | 1st survey, Pest, Buda, Óbuda (Col. XIV Sectio XX) | B: 6 control points, RMS 93 m, ground px 2.454 m | On the site (`tiles-ext/`, layer 1KF - DANFront). Area also covered by Arcanum. Check points Palota/Csömör ~850 m (approximate coordinates). |
| 32-50Cas | later survey, Pest-Ofen (Section 50, Colonne XXXII) | A: own Cassini coordinates, clip 146,612,7622,5578 | Tested, not uploaded yet. Landmarks within ~100-200 m (no datum shift applied). |
