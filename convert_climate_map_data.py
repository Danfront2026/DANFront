"""
convert_climate_map_data.py
Reads "Climate Data.xlsx" and regenerates js/climate-map-data.js.

The climate dataset is still experimental (September 2026). Each row is one
weather/climate observation taken from a narrative source (ruzname, chronicle).

Column layout (0-based):
  0 ID | 1 Event_start | 2 Event_end | 3 Season | 4 Place_TR | 5 Place_EN |
  6 y (lat) | 7 x (lng) | 8 Variable | 9 Phenomenon | 10 Intensity |
  11 Reliability | 12 Source | 13 Source_type | 14 Source_page |
  15 Transcription | 16 Notes

Rows without coordinates are skipped (they cannot be placed on the map) and
listed in the console output so they can be completed in the spreadsheet.
"""

import openpyxl
import json
import os
import re

EXCEL_PATH = os.path.join(os.path.dirname(__file__), "Climate Data.xlsx")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "js", "climate-map-data.js")

COL = {
    "id": 0, "start": 1, "end": 2, "season": 3,
    "place_tr": 4, "place_en": 5, "y": 6, "x": 7,
    "variable": 8, "phenomenon": 9, "intensity": 10, "reliability": 11,
    "source": 12, "source_type": 13, "source_page": 14,
    "transcription": 15, "notes": 16,
}

# Normalise the free-text "Variable" column into a small set of filter groups
# used by the map's Climate filter (maps.html).
VARIABLE_GROUPS = {
    "precipatition": "precipitation",   # typo in the source sheet
    "precipitation": "precipitation",
    "temperature": "temperature",
    "wind": "wind",
}
# Phenomena that should be grouped even if the Variable cell is empty/odd
PHENOMENON_GROUPS = {
    "fog": "precipitation",
    "thunderstorm": "precipitation",
    "rain": "precipitation",
    "snow": "precipitation",
    "hail": "precipitation",
}


def str_val(row, key):
    idx = COL[key]
    if idx >= len(row) or row[idx] is None:
        return ""
    v = row[idx]
    if isinstance(v, float) and v.is_integer():
        v = int(v)
    return str(v).strip()


def parse_year(date_str):
    """Extract the year from 'dd.mm.yyyy' (or any string containing a 4-digit year)."""
    m = re.search(r"(1[0-9]{3}|20[0-9]{2})", date_str or "")
    return int(m.group(1)) if m else None


def group_for(variable, phenomenon):
    v = (variable or "").strip().lower()
    if v in VARIABLE_GROUPS:
        return VARIABLE_GROUPS[v]
    p = (phenomenon or "").strip().lower()
    for key, grp in PHENOMENON_GROUPS.items():
        if key in p:
            return grp
    return "other"


def main():
    print(f"Loading workbook: {EXCEL_PATH}")
    wb = openpyxl.load_workbook(EXCEL_PATH, data_only=True)
    ws = wb.active

    events = []
    skipped = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        if not any(v is not None for v in row[:8]):
            continue
        event_id = str_val(row, "id")
        place_tr = str_val(row, "place_tr")
        place_en = str_val(row, "place_en")
        try:
            lat = float(str_val(row, "y"))
            lng = float(str_val(row, "x"))
        except ValueError:
            skipped.append(f"{event_id} ({place_tr or place_en})")
            continue

        start = str_val(row, "start")
        end = str_val(row, "end")
        variable = str_val(row, "variable")
        phenomenon = str_val(row, "phenomenon")

        events.append({
            "id": event_id,
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "place": {"tr": place_tr, "en": place_en or place_tr},
            "start": start,
            "end": end if end and end != start else "",
            "year": parse_year(start),
            "season": str_val(row, "season"),
            "variable": variable,
            "phenomenon": phenomenon,
            "group": group_for(variable, phenomenon),
            "intensity": str_val(row, "intensity"),
            "reliability": str_val(row, "reliability"),
            "source": str_val(row, "source"),
            "source_type": str_val(row, "source_type"),
            "source_page": str_val(row, "source_page"),
            "transcription": str_val(row, "transcription"),
            "notes": str_val(row, "notes"),
        })

    print(f"  Events with coordinates: {len(events)}")
    print(f"  Skipped (no coordinates): {len(skipped)}")
    for s in skipped:
        print(f"    - {s}")

    body = json.dumps(events, ensure_ascii=False, indent=2)
    js_content = f"""/**
 * Climate Map Data (experimental)
 * Weather / climate observations extracted from narrative sources.
 * Generated automatically by convert_climate_map_data.py - do not edit manually.
 *
 * Schema per event:
 *   id             — dataset ID (CLM-xxxx)
 *   lat, lng       — coordinates of the place the observation refers to
 *   place          — {{tr, en}} place name
 *   start, end     — event dates as written in the source (dd.mm.yyyy); end is "" when same as start
 *   year           — parsed 4-digit year (used by the time slider)
 *   season         — Spring | Summer | Autumn | Winter
 *   variable       — raw "Variable" cell (Precipitation, Temperature, Wind, ...)
 *   phenomenon     — raw "Phenomenon" cell (Rain, Snow, Heatwave, ...)
 *   group          — precipitation | temperature | wind | other  (filter category)
 *   intensity, reliability — currently empty in the dataset
 *   source, source_type, source_page — citation
 *   transcription  — original wording from the source
 *   notes          — free text
 */

var climateMapData = {{
  "total_events": {len(events)},
  "skipped_without_coordinates": {len(skipped)},
  "events": {body}
}};
"""
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"\nWrote {OUTPUT_PATH}")
    print("Done.")


if __name__ == "__main__":
    main()
