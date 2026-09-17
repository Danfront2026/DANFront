"""
convert_shipyard_map_data.py
Reads Dataset_Shipyards.xlsx and regenerates js/shipyard-map-data.js.
"""

import openpyxl
import json
import os

EXCEL_PATH = os.path.join(os.path.dirname(__file__), "Dataset_Shipyards.xlsx")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "js", "shipyard-map-data.js")

# September 2026 dataset: an "ID" column (SHP-xxxx) was prepended, so all
# indices are shifted by one compared to the July 2026 version.
SHEET_CONFIG = {
    "id": 0, "y": 1, "x": 2,
    "name_en": 3, "name_tr": 4, "name_local": 5,
    "p_en": 6, "p_tr": 7, "p_local": 8,
    "s_en": 9, "s_tr": 10, "s_local": 11,
    "date1": 12, "date2": 13, "date3": 14, "date4": 15,
    "country": 16, "size": 17,
    "notes": 18, "sources": 19,
}

COUNTRY_FIXES = {
    "Bosnia": "Bosnia and Herzegovina",
    "Bosnia and Herzogovina": "Bosnia and Herzegovina",
    "Kosova": "Kosovo",
}


def normalize_country(val):
    s = (val or "").strip()
    return COUNTRY_FIXES.get(s, s)


def normalize_date(val):
    """Convert en-dash dates to hyphen, strip whitespace."""
    if val is None:
        return ""
    s = str(val).strip()
    s = s.replace("\u2013", "-").replace("\u2014", "-")  # en-dash, em-dash
    return s


def get_cell(row, idx):
    """Safely get a cell value by 0-based column index."""
    if idx is None or idx >= len(row):
        return None
    return row[idx]


def str_val(row, idx):
    v = get_cell(row, idx)
    if v is None:
        return ""
    return str(v).strip()


def process_sheet(ws, cfg):
    shipyards = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        # Skip blank rows
        if not any(v is not None for v in row[:6]):
            continue

        lat_raw = get_cell(row, cfg["y"])
        lng_raw = get_cell(row, cfg["x"])
        try:
            lat = float(lat_raw)
            lng = float(lng_raw)
        except (TypeError, ValueError):
            print(f"  WARNING: skipping row with bad coordinates: {row[:5]}")
            continue

        name_en = str_val(row, cfg["name_en"])
        name_tr = str_val(row, cfg["name_tr"])
        name_local = str_val(row, cfg["name_local"])

        p_en = str_val(row, cfg["p_en"])
        p_tr = str_val(row, cfg["p_tr"])
        p_local = str_val(row, cfg["p_local"])

        s_en = str_val(row, cfg["s_en"])
        s_tr = str_val(row, cfg["s_tr"])
        s_local = str_val(row, cfg["s_local"])

        date1 = normalize_date(get_cell(row, cfg["date1"]))
        date2 = normalize_date(get_cell(row, cfg["date2"]))
        date3 = normalize_date(get_cell(row, cfg["date3"]))
        date4 = normalize_date(get_cell(row, cfg["date4"]))

        country = normalize_country(str_val(row, cfg["country"]))
        shipyard_id = str_val(row, cfg.get("id"))
        size = str_val(row, cfg["size"])
        notes = str_val(row, cfg["notes"])
        sources = str_val(row, cfg["sources"])

        shipyard = {
            "id": shipyard_id,
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "name": {
                "en": name_en,
                "tr": name_tr,
                "local": name_local,
            },
            "province": {
                "en": p_en,
                "tr": p_tr,
                "local": p_local,
            },
            "sancak": {
                "en": s_en,
                "tr": s_tr,
                "local": s_local,
            },
            "date1": date1,
            "date2": date2,
            "date3": date3,
            "date4": date4,
            "country": country,
            "size": size,
            "notes": notes,
            "sources": sources,
        }
        shipyards.append(shipyard)
    return shipyards


def shipyard_to_js(s):
    """Render one shipyard object as a JS object string (indented 4 spaces)."""
    lines = ["    {"]
    lines.append(f'      "id": {json.dumps(s["id"])},')
    lines.append(f'      "lat": {s["lat"]},')
    lines.append(f'      "lng": {s["lng"]},')
    lines.append(f'      "name": {{')
    lines.append(f'        "en": {json.dumps(s["name"]["en"])},')
    lines.append(f'        "tr": {json.dumps(s["name"]["tr"])},')
    lines.append(f'        "local": {json.dumps(s["name"]["local"])}')
    lines.append(f'      }},')
    lines.append(f'      "province": {{')
    lines.append(f'        "en": {json.dumps(s["province"]["en"])},')
    lines.append(f'        "tr": {json.dumps(s["province"]["tr"])},')
    lines.append(f'        "local": {json.dumps(s["province"]["local"])}')
    lines.append(f'      }},')
    lines.append(f'      "sancak": {{')
    lines.append(f'        "en": {json.dumps(s["sancak"]["en"])},')
    lines.append(f'        "tr": {json.dumps(s["sancak"]["tr"])},')
    lines.append(f'        "local": {json.dumps(s["sancak"]["local"])}')
    lines.append(f'      }},')
    lines.append(f'      "date1": {json.dumps(s["date1"])},')
    lines.append(f'      "date2": {json.dumps(s["date2"])},')
    lines.append(f'      "date3": {json.dumps(s["date3"])},')
    lines.append(f'      "date4": {json.dumps(s["date4"])},')
    lines.append(f'      "country": {json.dumps(s["country"])},')
    lines.append(f'      "size": {json.dumps(s["size"])},')
    lines.append(f'      "notes": {json.dumps(s["notes"])},')
    lines.append(f'      "sources": {json.dumps(s["sources"])}')
    lines.append("    }")
    return "\n".join(lines)


def main():
    print(f"Loading workbook: {EXCEL_PATH}")
    wb = openpyxl.load_workbook(EXCEL_PATH, data_only=True)

    ws = wb["Sheet1"]
    all_shipyards = process_sheet(ws, SHEET_CONFIG)

    total = len(all_shipyards)
    print(f"\nTotal shipyards: {total}")

    # Build JS content
    shipyard_js_list = []
    for i, s in enumerate(all_shipyards):
        js = shipyard_to_js(s)
        if i < total - 1:
            js += ","
        shipyard_js_list.append(js)

    shipyard_block = "\n".join(shipyard_js_list)

    js_content = f"""/**
 * Shipyard Map Data
 * Coordinates and metadata for map display.
 * Generated automatically by convert_shipyard_map_data.py - do not edit manually.
 *
 * Schema per shipyard:
 *   id                — dataset ID (SHP-xxxx)
 *   lat, lng          — coordinates
 *   name              — {{en, tr, local}}  (local = HU/SRB/BG/RO/UKR depending on region)
 *   province          — {{en, tr, local}}
 *   sancak            — {{en, tr, local}}
 *   date1..date4      — Ottoman shipbuilding activity periods (en-dash normalized to hyphen)
 *   country           — modern country name
 *   size              — shipyard size, if known
 *   notes             — free-text annotation
 *   sources           — abbreviated source citation(s)
 */

var shipyardMapData = {{
  "total_shipyards": {total},
  "shipyards": [
{shipyard_block}
  ]
}};
"""

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\nWrote {OUTPUT_PATH}")
    print("Done.")


if __name__ == "__main__":
    main()
