/**
 * Garrison Map Data
 * Coordinates and metadata for map display.
 * Generated automatically by convert_garrison_map_data.py - do not edit manually.
 *
 * Schema per garrison:
 *   lat, lng          — coordinates
 *   name              — {en, tr, local}  (local = HU for Hungary sheets, SRB/BG/RO/UKR for Rumeli)
 *   type              — Fortress | Palanka | Parkan | ...
 *   province          — {en, tr, local}
 *   sancak            — {en, tr, local}
 *   date1..date4      — Ottoman occupation periods (en-dash normalized to hyphen)
 *   country           — modern country name
 *   size              — Military Hub | Large | Medium | Small | ""
 *   notes             — free-text annotation
 *   sources           — abbreviated source citation(s)
 *   source_sheet      — Excel sheet of origin
 */

var garrisonMapData = {
  "total_garrisons": 243,
  "garrisons": [
    {
      "lat": 47.4956,
      "lng": 19.0397,
      "name": {
        "en": "Buda",
        "tr": "Buda",
        "local": "Buda"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1541-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 334\u2013342.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.293,
      "lng": 19.0319,
      "name": {
        "en": "Pest",
        "tr": "Pe\u015fte",
        "local": "Pest"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1541-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 342\u2013349.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.7719,
      "lng": 19.1306,
      "name": {
        "en": "V\u00e1c",
        "tr": "V\u00e1c",
        "local": "V\u00e1c"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1543-1596",
      "date2": "1620-1684",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 348\u2013351.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.7963,
      "lng": 18.9773,
      "name": {
        "en": "Visegr\u00e1d",
        "tr": "Vi\u015fegrad",
        "local": "Visegr\u00e1d"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1544-1684",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 351\u2013354.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.9113,
      "lng": 19.4225,
      "name": {
        "en": "Szanda",
        "tr": "Sanda",
        "local": "Szanda"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1546-1594",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 354\u2013356.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.54,
      "lng": 18.71,
      "name": {
        "en": "Zs\u00e1mb\u00e9k",
        "tr": "Canbek",
        "local": "Zs\u00e1mb\u00e9k"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1546-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 356\u2013358.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.11,
      "lng": 18.86,
      "name": {
        "en": "Adony",
        "tr": "Cankurtaran",
        "local": "Adony"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1549-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 358\u2013361.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.3588,
      "lng": 18.6726,
      "name": {
        "en": "V\u00e1l",
        "tr": "Val",
        "local": "V\u00e1l"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1550-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 361\u2013363.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.8085,
      "lng": 18.9279,
      "name": {
        "en": "F\u00f6ldv\u00e1r (Dunaf\u00f6ldv\u00e1r)",
        "tr": "Fedvar",
        "local": "F\u00f6ldv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1550-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 363\u2013364.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.4932,
      "lng": 19.184,
      "name": {
        "en": "Cs\u0151v\u00e1r",
        "tr": "\u00c7\u00f6var",
        "local": "Cs\u0151v\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1541-1554",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 364\u2013365.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.6487,
      "lng": 18.319,
      "name": {
        "en": "Tata",
        "tr": "Tata",
        "local": "Tata"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1557-1566",
      "date2": "1594-1598",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 365\u2013366.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.515,
      "lng": 18.4145,
      "name": {
        "en": "Vit\u00e1ny",
        "tr": "Vitan",
        "local": "Vit\u00e1ny"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1557-1566",
      "date2": "1594-1598",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 367.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.4678,
      "lng": 18.3957,
      "name": {
        "en": "Hosti\u0161ovce (V\u00e1rgesztes)",
        "tr": "Gest\u00f6\u015f",
        "local": "Gesztes"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1557-1598",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 367.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.4998,
      "lng": 19.9085,
      "name": {
        "en": "J\u00e1szber\u00e9ny",
        "tr": "Canfeda",
        "local": "J\u00e1szber\u00e9ny"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1568-1594",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 367\u2013368.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.3601,
      "lng": 18.9318,
      "name": {
        "en": "\u00c9rd",
        "tr": "Hamzabey",
        "local": "\u00c9rd"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 368\u2013370.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.619,
      "lng": 18.9079,
      "name": {
        "en": "V\u00f6r\u00f6sv\u00e1r (Pilisv\u00f6r\u00f6sv\u00e1r)",
        "tr": "K\u0131z\u0131lhisar",
        "local": "V\u00f6r\u00f6sv\u00e1r"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 370\u2013371.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.8462,
      "lng": 18.824,
      "name": {
        "en": "Dam\u00e1sd (Ipolydam\u00e1sd)",
        "tr": "Derbend",
        "local": "Dam\u00e1sd"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1581-1595",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 371\u2013372.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.4869,
      "lng": 19.047,
      "name": {
        "en": "Gell\u00e9rt\u2013hegy",
        "tr": "G\u00fcrz \u0130lyas",
        "local": "Gell\u00e9rt"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1593-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 372\u2013373.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.2488,
      "lng": 18.9078,
      "name": {
        "en": "Ercsi",
        "tr": "Ercin",
        "local": "Ercsi"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "date1": "1627-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 373.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.7987,
      "lng": 18.7366,
      "name": {
        "en": "Esztergom",
        "tr": "Estergon",
        "local": "Esztergom"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Esztergom",
        "tr": "Estergon",
        "local": "Esztergom"
      },
      "date1": "1543-1595",
      "date2": "1605-1683",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 373\u2013384.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.7987,
      "lng": 18.724,
      "name": {
        "en": "\u0160t\u00farovo",
        "tr": "Ci\u011ferdelen",
        "local": "P\u00e1rk\u00e1ny"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Esztergom",
        "tr": "Estergon",
        "local": "Esztergom"
      },
      "date1": "1545-1595",
      "date2": "1605-1683",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 373\u2013384.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.7963,
      "lng": 18.7421,
      "name": {
        "en": "Szenttam\u00e1s (Esztergom \u2013 Szenttam\u00e1s)",
        "tr": "Tepedelen",
        "local": "Szent Tam\u00e1s"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Esztergom",
        "tr": "Estergon",
        "local": "Esztergom"
      },
      "date1": "1594-1595",
      "date2": "1605-1683",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 373\u2013384.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.2715,
      "lng": 19.8252,
      "name": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "date1": "1554-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 384\u2013385.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.38,
      "lng": 20.01,
      "name": {
        "en": "Rimavsk\u00e1 Sobota",
        "tr": "Sobotka",
        "local": "Szabadka"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "date1": "1557-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 385\u2013386.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.2182,
      "lng": 19.9553,
      "name": {
        "en": "Hajn\u00e1\u010dka",
        "tr": "Ayna\u015fka",
        "local": "Ajn\u00e1csk\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "date1": "1566-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 386\u2013387.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.4481,
      "lng": 19.5331,
      "name": {
        "en": "Div\u00edn",
        "tr": "Divin",
        "local": "Div\u00e9ny"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "date1": "1575-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 387\u2013388.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.1714,
      "lng": 19.857,
      "name": {
        "en": "\u0160omo\u0161ka",
        "tr": "Somo\u015fka",
        "local": "Somosk\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Fi\u013eakovo",
        "tr": "Filek",
        "local": "F\u00fclek"
      },
      "date1": "1575-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 388.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.6679,
      "lng": 19.686,
      "name": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1544-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Eger after 1596",
      "sources": "Hegyi, p. 388\u2013390.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.1446,
      "lng": 19.847,
      "name": {
        "en": "Salg\u00f3",
        "tr": "\u015ealgo",
        "local": "Salg\u00f3"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1554-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 390\u2013391.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.1912,
      "lng": 18.4096,
      "name": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1543-1688",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 391\u2013400.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.3601,
      "lng": 18.2771,
      "name": {
        "en": "Cs\u00f3kak\u0151",
        "tr": "\u00c7oka",
        "local": "Cs\u00f3kak\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1544-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 400\u2013401.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.096,
      "lng": 17.9038,
      "name": {
        "en": "Veszpr\u00e9m",
        "tr": "Bespirim",
        "local": "Veszpr\u00e9m"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1552-1566",
      "date2": "1593-1598",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 401\u2013402.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.11,
      "lng": 18.37,
      "name": {
        "en": "Bak'an (Szabadbatty\u00e1n)",
        "tr": "Bak'an",
        "local": "Batty\u00e1n"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budai",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1567-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 402\u2013404.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.2006,
      "lng": 18.139,
      "name": {
        "en": "V\u00e1rpalota",
        "tr": "Polata",
        "local": "V\u00e1rpalota"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1593-1598",
      "date2": "1605-1687",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 404\u2013406.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.9132,
      "lng": 17.8882,
      "name": {
        "en": "Tihany",
        "tr": "Tihon",
        "local": "Tihany"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1594-1598",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 406\u2013407.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.9849,
      "lng": 17.6957,
      "name": {
        "en": "V\u00e1zsony, Nagyv\u00e1zsony",
        "tr": "Vajon",
        "local": "V\u00e1zsony"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Sz\u00e9kesfeh\u00e9rv\u00e1r",
        "tr": "Istolni Belgrad",
        "local": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      },
      "date1": "1594-1598",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Unknown",
      "notes": "",
      "sources": "Hegyi, p. 407.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.601,
      "lng": 18.0497,
      "name": {
        "en": "Kopp\u00e1ny (T\u00f6r\u00f6kkop\u00e1ny)",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 407\u2013410.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.3634,
      "lng": 18.1234,
      "name": {
        "en": "Domb\u00f3v\u00e1r",
        "tr": "Donbo",
        "local": "Domb\u00f3v\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1546-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 410\u2013412.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.69,
      "lng": 17.84,
      "name": {
        "en": "Kar\u00e1d",
        "tr": "Karad",
        "local": "Kar\u00e1d"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1555-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 412\u2013413.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.3624,
      "lng": 17.377,
      "name": {
        "en": "Lak (\u00d6reglak)",
        "tr": "Lak",
        "local": "Lak"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 413\u2013415.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.8132,
      "lng": 17.7809,
      "name": {
        "en": "Bolondv\u00e1r (Balatonszemes)",
        "tr": "Bolondvar",
        "local": "Bolondv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 415\u2013416.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.9048,
      "lng": 18.0503,
      "name": {
        "en": "Si\u00f3fok",
        "tr": "Foka",
        "local": "Si\u00f3fok"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1610-1684",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 416\u2013418.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.59,
      "lng": 18.19,
      "name": {
        "en": "K\u00f3nyi",
        "tr": "Koni",
        "local": "K\u00f3nyi"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Kopp\u00e1ny",
        "tr": "Kopan",
        "local": "Kopp\u00e1ny"
      },
      "date1": "1555-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 418.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.906,
      "lng": 19.0435,
      "name": {
        "en": "N\u00f3gr\u00e1d",
        "tr": "Novigrad",
        "local": "N\u00f3gr\u00e1d"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "N\u00f3gr\u00e1d",
        "tr": "Novigrad",
        "local": "N\u00f3gr\u00e1d"
      },
      "date1": "1544-1594",
      "date2": "1663-1686",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 418.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.0164,
      "lng": 19.036,
      "name": {
        "en": "Dr\u00e9gely",
        "tr": "Diregel",
        "local": "Dr\u00e9gely"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "N\u00f3gr\u00e1d",
        "tr": "Novigrad",
        "local": "N\u00f3gr\u00e1d"
      },
      "date1": "1552-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 418\u2013421.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.0516,
      "lng": 19.0453,
      "name": {
        "en": "Dr\u00e9gelypal\u00e1nk",
        "tr": "B\u00f6\u011f\u00fcrdelen",
        "local": "Dr\u00e9gelypal\u00e1nk"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "N\u00f3gr\u00e1d",
        "tr": "Novigrad",
        "local": "N\u00f3gr\u00e1d"
      },
      "date1": "1575-1593",
      "date2": "1663-1685",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 422\u2013423.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0763,
      "lng": 18.228,
      "name": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 423\u2013426.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.2743,
      "lng": 18.3778,
      "name": {
        "en": "Sz\u00e1szv\u00e1r",
        "tr": "Sas",
        "local": "Sz\u00e1szv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 426.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.03,
      "lng": 17.71,
      "name": {
        "en": "G\u00f6r\u00f6sg\u00e1l (Nemeske)",
        "tr": "G\u00f6r\u00f6\u015fgal",
        "local": "G\u00f6r\u00f6sg\u00e1l"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1544-1559",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 426\u2013427.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.2252,
      "lng": 18.3221,
      "name": {
        "en": "M\u00e1r\u00e9v\u00e1r",
        "tr": "Malvar",
        "local": "M\u00e1r\u00e9v\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1543-1546",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 426.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0582,
      "lng": 17.989,
      "name": {
        "en": "Szentl\u0151rinc",
        "tr": "Senl\u00f6rin\u00e7",
        "local": "Szentl\u0151rinc"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1551-1559",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 427\u2013428.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.2689,
      "lng": 18.0052,
      "name": {
        "en": "Szentm\u00e1rton (G\u00f6dreszentm\u00e1rton)",
        "tr": "Senmartin",
        "local": "Szentm\u00e1rton"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1552-1599",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 428.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.3551,
      "lng": 17.7806,
      "name": {
        "en": "Kaposv\u00e1r",
        "tr": "Kapo\u015fvar",
        "local": "Kaposv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1555-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 429\u2013430.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.8723,
      "lng": 17.8419,
      "name": {
        "en": "Sellye",
        "tr": "\u015eelin",
        "local": "Sellye"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1550-1559",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 430.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.226,
      "lng": 18.4746,
      "name": {
        "en": "N\u00e1dasd (Mecsekn\u00e1dasd)",
        "tr": "Nadaj",
        "local": "N\u00e1dasd"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 430\u2013431.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.5519,
      "lng": 17.2902,
      "name": {
        "en": "Sz\u0151cs\u00e9ny (Somogyzsitfa)",
        "tr": "S\u00f6\u00e7in",
        "local": "Sz\u0151cs\u00e9ny"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1574-1592",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 431.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.2528,
      "lng": 20.1523,
      "name": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 431\u2013435.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.2039,
      "lng": 20.3056,
      "name": {
        "en": "Titel",
        "tr": "Titel",
        "local": "Titel"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1526-1688",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 435\u2013437.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.5275,
      "lng": 18.9764,
      "name": {
        "en": "Kalocsa",
        "tr": "Kala\u00e7a",
        "local": "Kalocsa"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1541-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 437\u2013439.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.47,
      "lng": 19.07,
      "name": {
        "en": "Sombor",
        "tr": "Sombor",
        "local": "Zombor"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1542-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 439\u2013440.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.3929,
      "lng": 19.2215,
      "name": {
        "en": "Ba\u010d",
        "tr": "Ba\u00e7",
        "local": "B\u00e1cs"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1526-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "Geza Palffy, A turning point in Central European History\" s.34. Map 2 demonstrates it was taken by ottomans in 1526.",
      "sources": "Hegyi, p. 440\u2013441",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.1014,
      "lng": 19.664,
      "name": {
        "en": "Subotica",
        "tr": "Sobotka",
        "local": "Szabadka"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1544-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 441\u2013443",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.178,
      "lng": 18.9513,
      "name": {
        "en": "Baja",
        "tr": "Baya",
        "local": "Baja"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1550-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 443\u2013445.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.6145,
      "lng": 20.0327,
      "name": {
        "en": "T\u00f6m\u00f6rk\u00e9ny",
        "tr": "T\u00f6m\u00f6rkin",
        "local": "T\u00f6m\u00f6rk\u00e9ny"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1561-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 445.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.9248,
      "lng": 19.9291,
      "name": {
        "en": "Szentkir\u00e1ly",
        "tr": "Senkiral",
        "local": "Szentkir\u00e1ly"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 445\u2013446.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0628,
      "lng": 20.0546,
      "name": {
        "en": "Martono\u0161",
        "tr": "Martono\u015f",
        "local": "Martonos"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1590-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegiy, p. 446.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.2361,
      "lng": 19.7202,
      "name": {
        "en": "Futog",
        "tr": "Futok",
        "local": "Futak"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1528-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 446\u2013447.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0477,
      "lng": 19.3181,
      "name": {
        "en": "Madaras",
        "tr": "Madara\u015f",
        "local": "Madaras"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1543-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 447.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.3004,
      "lng": 20.1722,
      "name": {
        "en": "Mo\u0161orin",
        "tr": "Mo\u015forin",
        "local": "Mozsor"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1543-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 447\u2013448",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.2136,
      "lng": 20.0355,
      "name": {
        "en": "Kabol (Kovilj)",
        "tr": "Kobila",
        "local": "Kabol"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1528-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 448.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.2528,
      "lng": 19.3798,
      "name": {
        "en": "Peste (Ba\u010dka Palanka)",
        "tr": "Pe\u015fte",
        "local": "Pest"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeged",
        "tr": "Segedin",
        "local": "Szeged"
      },
      "date1": "1610-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 448.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0882,
      "lng": 18.7616,
      "name": {
        "en": "Szekcs\u0151 (Dunaszekcs\u0151)",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szekcs\u0151",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "date1": "1541-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 448\u2013450.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.7861,
      "lng": 18.6044,
      "name": {
        "en": "Branjin Vrh",
        "tr": "Baranvar",
        "local": "Baranyav\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szekcs\u0151",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "date1": "1544-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 450\u2013451.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0036,
      "lng": 18.6828,
      "name": {
        "en": "Moh\u00e1cs",
        "tr": "Moha\u00e7",
        "local": "Moh\u00e1cs"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szekcs\u0151",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "date1": "1560-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 451\u2013452.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.7996,
      "lng": 18.8061,
      "name": {
        "en": "Zmajevac",
        "tr": "Fele\u015fmarta",
        "local": "V\u00f6r\u00f6smart"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szekcs\u0151",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "date1": "1526-1663",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 452\u2013453.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.62,
      "lng": 18.69,
      "name": {
        "en": "D\u00e1rda",
        "tr": "Darda",
        "local": "D\u00e1rda"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szekcs\u0151",
        "tr": "Sek\u00e7\u00f6y",
        "local": "Szekcs\u0151"
      },
      "date1": "1526-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 453.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.35,
      "lng": 18.7,
      "name": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1541-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 453\u2013455.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.1878,
      "lng": 18.726,
      "name": {
        "en": "B\u00e1tasz\u00e9k",
        "tr": "Batasek",
        "local": "B\u00e1tasz\u00e9k"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1550-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 455\u2013457.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.629,
      "lng": 18.8678,
      "name": {
        "en": "Paks",
        "tr": "Pak\u015fa",
        "local": "Paks"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1565-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 457\u2013459.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.3801,
      "lng": 18.712,
      "name": {
        "en": "Szerdahely (Szeksz\u00e1rd)",
        "tr": "Serdahel",
        "local": "Szerdahely (Jenipal\u00e1nk)"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1600-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 459.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.4229,
      "lng": 18.7942,
      "name": {
        "en": "Tolna",
        "tr": "Tolna",
        "local": "Tolna"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1600-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 459\u2013461.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.0829,
      "lng": 19.5189,
      "name": {
        "en": "Sz\u00e9cs\u00e9ny",
        "tr": "Si\u00e7en",
        "local": "Sz\u00e9cs\u00e9ny"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1552-1593",
      "date2": "1663-1683",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 461\u2013462.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.9976,
      "lng": 19.5818,
      "name": {
        "en": "Holl\u00f3k\u0151",
        "tr": "Holloka",
        "local": "Holl\u00f3k\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1552-1593",
      "date2": "1663-1683",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 462\u2013463.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.8982,
      "lng": 19.5345,
      "name": {
        "en": "Buj\u00e1k",
        "tr": "Buyak",
        "local": "Buj\u00e1k"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1552-1593",
      "date2": "1663-1685",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 463\u2013464.",
      "source_sheet": "Budin"
    },
    {
      "lat": 48.2392,
      "lng": 19.3364,
      "name": {
        "en": "Modr\u00fd Kame\u0148",
        "tr": "Kek\u00f6y",
        "local": "K\u00e9kk\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szeksz\u00e1rd",
        "tr": "Seksar",
        "local": "Szeksz\u00e1rd"
      },
      "date1": "1575-1593",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 464\u2013465.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0507,
      "lng": 17.7969,
      "name": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1689",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 465\u2013467.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.852,
      "lng": 18.2958,
      "name": {
        "en": "Sikl\u00f3s",
        "tr": "\u015eiklo\u015f",
        "local": "Sikl\u00f3s"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the sancak of Pe\u00e7uy before 1566. part of the sancak of Szigetv\u00e1r after 1566; part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 467\u2013469.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.0394,
      "lng": 17.3469,
      "name": {
        "en": "Bab\u00f3csa",
        "tr": "Bobof\u00e7a",
        "local": "Bab\u00f3csa"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1555-1556",
      "date2": "1566-1686",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 469\u2013470.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.21,
      "lng": 17.15,
      "name": {
        "en": "Berzence",
        "tr": "Berzen\u00e7",
        "local": "Berzence"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 470\u2013472.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.3562,
      "lng": 17.3485,
      "name": {
        "en": "Segesd (Fels\u0151segesd)",
        "tr": "Sege\u015f",
        "local": "Segesd"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 473.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.9602,
      "lng": 17.4606,
      "name": {
        "en": "Barcs",
        "tr": "Bar\u00e7a",
        "local": "Barcs"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1567-1664",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Kanitza after 1600",
      "sources": "Hegyi, p. 472\u2013473",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.7527,
      "lng": 18.5525,
      "name": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1545-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 473\u2013477.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.4317,
      "lng": 18.6608,
      "name": {
        "en": "Anyav\u00e1r (Si\u00f3ag\u00e1rd)",
        "tr": "Anyavar",
        "local": "Anyav\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1545-1566",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 477\u2013478.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.8356,
      "lng": 17.9726,
      "name": {
        "en": "Balatonendr\u00e9d",
        "tr": "Endrik",
        "local": "Endr\u00e9d"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1544-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 478\u2013480.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.7527,
      "lng": 18.4011,
      "name": {
        "en": "Ozora",
        "tr": "Ozora",
        "local": "Ozora"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1545-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 480\u2013481.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.6228,
      "lng": 18.2877,
      "name": {
        "en": "Tam\u00e1si",
        "tr": "Toma\u015fin",
        "local": "Tam\u00e1si"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1545-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 481\u2013483.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.4218,
      "lng": 18.2548,
      "name": {
        "en": "D\u00f6br\u00f6k\u00f6z",
        "tr": "D\u00f6brek\u00f6s",
        "local": "D\u00f6br\u00f6k\u00f6z"
      },
      "type": "Fortress",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1545-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 483\u2013485.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.8162,
      "lng": 18.2999,
      "name": {
        "en": "Hidv\u00e9g (Szabadh\u00eddv\u00e9g)",
        "tr": "Hidvig",
        "local": "Hidv\u00e9g"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1565-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 485.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.8723,
      "lng": 18.5528,
      "name": {
        "en": "S\u00e1rbog\u00e1rd",
        "tr": "Bogar",
        "local": "Bog\u00e1rd"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1608-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 485\u2013486.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.6799,
      "lng": 18.4386,
      "name": {
        "en": "Pincehely",
        "tr": "Pin\u00e7ehel",
        "local": "Pincehely"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Simontornya",
        "tr": "\u015eimontorna",
        "local": "Simontornya"
      },
      "date1": "1615-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 486.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.1735,
      "lng": 20.204,
      "name": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1552-1585",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Eger after 1596",
      "sources": "Hegyi, p. 486\u2013489.",
      "source_sheet": "Budin"
    },
    {
      "lat": 47.1788,
      "lng": 20.4027,
      "name": {
        "en": "T\u00f6r\u00f6kszentmikl\u00f3s",
        "tr": "Senmiklo\u015f",
        "local": "T\u00f6r\u00f6kszentmikl\u00f3s"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1554-1595",
      "date2": "1596-1685",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Eger after 1596",
      "sources": "Hegyi, p. 489\u2013491.",
      "source_sheet": "Budin"
    },
    {
      "lat": 46.7107,
      "lng": 20.1663,
      "name": {
        "en": "Csongr\u00e1d",
        "tr": "\u00c7ongrad",
        "local": "Csongr\u00e1d"
      },
      "type": "Palanka",
      "province": {
        "en": "Budin",
        "tr": "Budin",
        "local": "Budai"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1561-1681",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Eger after 1596",
      "sources": "Hegyi, p. 491\u2013492.",
      "source_sheet": "Budin"
    },
    {
      "lat": 45.756,
      "lng": 21.229,
      "name": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Military Hub",
      "notes": "repaired in 1640",
      "sources": "Hegyi, p. 493\u2013499; TSMA.e. 556\u20135",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.1227,
      "lng": 21.3255,
      "name": {
        "en": "Vr\u0161ac",
        "tr": "Vir\u015fi\u00e7",
        "local": "Versec"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 499\u2013500.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.1173,
      "lng": 21.1449,
      "name": {
        "en": "Felnac (Faget)",
        "tr": "Felnak",
        "local": "Felnak (Facs\u00e1d)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1595",
      "date2": "1598-1716",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "repaired in 1641",
      "sources": "Hegyi, p. 500\u2013502; TSMA.e. 1043\u201372",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.8661,
      "lng": 22.1742,
      "name": {
        "en": "Facset",
        "tr": "Fa\u00e7et",
        "local": "Facset"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1595",
      "date2": "1616-1716",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 502\u2013503.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.3865,
      "lng": 21.7447,
      "name": {
        "en": "Boc\u015fa",
        "tr": "Bok\u00e7a",
        "local": "Bogs\u00e1n (Boks\u00e1nb\u00e1nya)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1595",
      "date2": "1607-1716",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 503\u2013504",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.5149,
      "lng": 21.1224,
      "name": {
        "en": "Ciacova",
        "tr": "\u00c7akova",
        "local": "Cs\u00e1kova (Cs\u00e1k)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 504\u2013505.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.8715,
      "lng": 20.6367,
      "name": {
        "en": "Pan\u010devo",
        "tr": "Pan\u00e7ova",
        "local": "Pancsova (\u00d3pak\u00e1nk)"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1566-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 505.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.6939,
      "lng": 20.9439,
      "name": {
        "en": "Kovin",
        "tr": "K\u00f6fin",
        "local": "Keve (Kevev\u00e1ra)"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1630",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 505\u2013506.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.359,
      "lng": 21.2483,
      "name": {
        "en": "Denta",
        "tr": "Denta",
        "local": "Denta"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 506\u2013507.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.7704,
      "lng": 21.675,
      "name": {
        "en": "Ikt\u00e1r",
        "tr": "\u0130ktar",
        "local": "Ikt\u00e1r"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 507.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.793,
      "lng": 20.719,
      "name": {
        "en": "Jimbolia",
        "tr": "\u00c7onbol",
        "local": "Zsombolya"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 507.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.4953,
      "lng": 21.0097,
      "name": {
        "en": "Rudna",
        "tr": "Rudna",
        "local": "Rudna"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 507\u2013508.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.8717,
      "lng": 21.3457,
      "name": {
        "en": "S\u00e1r\u00e1d",
        "tr": "\u015earad",
        "local": "S\u00e1r\u00e1d"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 508.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.1343,
      "lng": 20.5762,
      "name": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d (Nagycsan\u00e1d)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d"
      },
      "date1": "1552-1595",
      "date2": "1598-1716",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 508\u2013510.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.3837,
      "lng": 20.3905,
      "name": {
        "en": "Zrenjanin",
        "tr": "Be\u00e7kerek",
        "local": "Becskerek (Nagybecskerek)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d"
      },
      "date1": "1551-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 510\u2013511.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.5948,
      "lng": 20.1194,
      "name": {
        "en": "Be\u010dej",
        "tr": "Be\u00e7ey",
        "local": "Becse (T\u00f6r\u00f6kbecse)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d"
      },
      "date1": "1551-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 511\u2013512.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.644,
      "lng": 20.2728,
      "name": {
        "en": "Ara\u010da, Vranjevo",
        "tr": "Ara\u00e7",
        "local": "Aracs"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d"
      },
      "date1": "1551-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 512.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.0448,
      "lng": 20.473,
      "name": {
        "en": "Vii\u0219oara (Comuna Dude\u0219tii Vechi)",
        "tr": "Be\u015fenova",
        "local": "Beseny\u0151 (\u00d3beseny\u0151)"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Cenad",
        "tr": "\u00c7anad",
        "local": "Csan\u00e1d"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 512\u2013513.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.6464,
      "lng": 21.2864,
      "name": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1566-1695",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 513\u2013516.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.1699,
      "lng": 21.3279,
      "name": {
        "en": "Arad (Oradea)",
        "tr": "Arad",
        "local": "Arad"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1555-1595",
      "date2": "1658-1685",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 516\u2013517.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.5187,
      "lng": 21.5133,
      "name": {
        "en": "Erd\u0151hegy",
        "tr": "Erd\u00f6heg\u2019",
        "local": "Erd\u0151hegy"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1571-1595",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 517.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.7714,
      "lng": 21.1325,
      "name": {
        "en": "B\u00e9k\u00e9s",
        "tr": "Beke\u015f",
        "local": "B\u00e9k\u00e9s"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1576-1595",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 517\u2013518.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.8652,
      "lng": 20.5416,
      "name": {
        "en": "Szarvas",
        "tr": "Sarva\u015f",
        "local": "Szarvas"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1584-1595",
      "date2": "1670-1685",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 518\u2013519.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.9008,
      "lng": 21.6557,
      "name": {
        "en": "Hodos",
        "tr": "Hodo\u015f",
        "local": "Hodos"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Gyula",
        "tr": "G\u2019ula",
        "local": "Gyula"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 519.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.0886,
      "lng": 21.6916,
      "name": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "date1": "1552-1595",
      "date2": "1616-1716",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 519\u2013522.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.1088,
      "lng": 21.723,
      "name": {
        "en": "\u0218oimo\u0219",
        "tr": "\u015eolmo\u015f",
        "local": "Solymos"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "date1": "1552-1595",
      "date2": "1616-1688",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 522.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.0888,
      "lng": 21.8823,
      "name": {
        "en": "Chelmac",
        "tr": "Vizia\u015f",
        "local": "Eperjes (Maroseperjes)"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "date1": "1552-1595",
      "date2": "1616-1660",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 523.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.2666,
      "lng": 21.6568,
      "name": {
        "en": "\u015eiria",
        "tr": "Vilago\u015f",
        "local": "Vil\u00e1gos"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "date1": "1566-1595",
      "date2": "1605-1693",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 523\u2013524.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.0009,
      "lng": 22.1629,
      "name": {
        "en": "V\u0103r\u0103dia de Mure",
        "tr": "Varadya",
        "local": "T\u00f3tv\u00e1rad"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Lipova",
        "tr": "Lipova",
        "local": "Lippa"
      },
      "date1": "1552-1595",
      "date2": "1616-1665",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 524\u2013525.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.7239,
      "lng": 21.6191,
      "name": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1559-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 525\u2013526.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.7149,
      "lng": 22.4529,
      "name": {
        "en": "Or\u015fova",
        "tr": "Ir\u015fova",
        "local": "Orsova"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1522-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 526\u2013528.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.8254,
      "lng": 21.3337,
      "name": {
        "en": "Strata Palanka",
        "tr": "Haram",
        "local": "Haram (\u00d3pal\u00e1nka)"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1520-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 528.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 45.15,
      "lng": 19.24,
      "name": {
        "en": "Ba\u010dka Palanka",
        "tr": "Haram\u2013i Cedid",
        "local": "Pal\u00e1nka"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1526-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 528\u2013529.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.3605,
      "lng": 22.2634,
      "name": {
        "en": "Dubova",
        "tr": "Daudabad",
        "local": "Daud\u00e1b\u00e1d (Dunat\u00f6lgyes)"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 529.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.6577,
      "lng": 21.8932,
      "name": {
        "en": "Liubcova",
        "tr": "Lupkova",
        "local": "Als\u00f3lupk\u00f3"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1552-1680",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 529\u2013530.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.5468,
      "lng": 22.3708,
      "name": {
        "en": "Mehadia",
        "tr": "Mehadia",
        "local": "Meh\u00e1dia"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1607-1716",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 530\u2013531.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 44.6354,
      "lng": 21.9752,
      "name": {
        "en": "Drencova",
        "tr": "Drenkova",
        "local": "Drank\u00f3"
      },
      "type": "Palanka",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Moldova Veche",
        "tr": "Modava",
        "local": "Modava"
      },
      "date1": "1552-1718",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 531.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.4282,
      "lng": 21.8409,
      "name": {
        "en": "Ineu",
        "tr": "Yanova",
        "local": "Borosjen\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Ineu",
        "tr": "Yanova",
        "local": "Borosjen\u0151"
      },
      "date1": "1566-1595",
      "date2": "1658-1693",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 531\u2013532.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 46.2851,
      "lng": 21.911,
      "name": {
        "en": "Taut",
        "tr": "Totin\u00e7",
        "local": "Felt\u00f3t"
      },
      "type": "Fortress",
      "province": {
        "en": "Timi\u015fioara",
        "tr": "Teme\u015fvar",
        "local": "Temesv\u00e1r"
      },
      "sancak": {
        "en": "Ineu",
        "tr": "Yanova",
        "local": "Borosjen\u0151"
      },
      "date1": "1552-1595",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 532\u2013533.",
      "source_sheet": "Temesvar"
    },
    {
      "lat": 47.6872,
      "lng": 17.6353,
      "name": {
        "en": "Gy\u0151r",
        "tr": "Yan\u0131k",
        "local": "Gy\u0151r"
      },
      "type": "Fortress",
      "province": {
        "en": "Gy\u0151r",
        "tr": "Yan\u0131k",
        "local": "Gy\u0151r"
      },
      "sancak": {
        "en": "Gy\u0151r",
        "tr": "Yan\u0131k",
        "local": "Gy\u0151r"
      },
      "date1": "1594-1598",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 533\u2013536.",
      "source_sheet": "Yanik_and_P\u00e1pa"
    },
    {
      "lat": 47.33,
      "lng": 17.4644,
      "name": {
        "en": "P\u00e1pa",
        "tr": "Papa",
        "local": "P\u00e1pa"
      },
      "type": "Fortress",
      "province": {
        "en": "Papa",
        "tr": "P\u00e1pa",
        "local": "P\u00e1pa"
      },
      "sancak": {
        "en": "Papa",
        "tr": "P\u00e1pa",
        "local": "P\u00e1pa"
      },
      "date1": "1594-1597",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Unknown",
      "notes": "",
      "sources": "Hegyi, p. 536\u2013537.",
      "source_sheet": "Yanik_and_P\u00e1pa"
    },
    {
      "lat": 47.9041,
      "lng": 20.3775,
      "name": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "type": "Fortress",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "date1": "1596-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 538\u2013541.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.6666,
      "lng": 19.6837,
      "name": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "type": "Fortress",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1544-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "part of the vilayet of Budin before 1596",
      "sources": "Hegyi, p. 541\u2013542.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.9389,
      "lng": 20.1958,
      "name": {
        "en": "Sirok",
        "tr": "\u015eirok",
        "local": "Sirok"
      },
      "type": "Fortress",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1596-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 542\u2013543.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.9906,
      "lng": 20.3287,
      "name": {
        "en": "Szarvask\u0151",
        "tr": "Sarva\u015fka",
        "local": "Szarvask\u0151"
      },
      "type": "Fortress",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1596-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 543\u2013544.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.9329,
      "lng": 20.5666,
      "name": {
        "en": "Cser\u00e9p",
        "tr": "\u00c7erep",
        "local": "Cser\u00e9p (Cser\u00e9pv\u00e1ralja)"
      },
      "type": "Fortress",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1596-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 544.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.5952,
      "lng": 20.2872,
      "name": {
        "en": "Heves",
        "tr": "Heve\u015f",
        "local": "Heves"
      },
      "type": "Palanka",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Hatvan",
        "tr": "Hatvan",
        "local": "Hatvan"
      },
      "date1": "1606-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 544\u2013545.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.1737,
      "lng": 20.2051,
      "name": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "type": "Parkan",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1552-1585",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1596",
      "sources": "Hegyi, p. 545\u2013546.",
      "source_sheet": "Eger"
    },
    {
      "lat": 47.1788,
      "lng": 20.4028,
      "name": {
        "en": "T\u00f6r\u00f6kszentmikl\u00f3s",
        "tr": "Senmiklo\u015f",
        "local": "T\u00f6r\u00f6kszentmikl\u00f3s"
      },
      "type": "Parkan",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1554-1595",
      "date2": "1596-1685",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Budin before 1596",
      "sources": "Hegyi, p. 546.",
      "source_sheet": "Eger"
    },
    {
      "lat": 46.7111,
      "lng": 20.1572,
      "name": {
        "en": "Csongr\u00e1d",
        "tr": "\u00c7ongrad",
        "local": "Csongr\u00e1d"
      },
      "type": "Parkan",
      "province": {
        "en": "Eger",
        "tr": "E\u011fri",
        "local": "Eger"
      },
      "sancak": {
        "en": "Szolnok",
        "tr": "Solnok",
        "local": "Szolnok"
      },
      "date1": "1561-1681",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Budin before 1596",
      "sources": "Hegyi, p. 546\u2013547.",
      "source_sheet": "Eger"
    },
    {
      "lat": 46.456,
      "lng": 16.9799,
      "name": {
        "en": "Kanizsa (Nagykanizsa)",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "date1": "1600-1690",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 547\u2013554.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.0763,
      "lng": 18.228,
      "name": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 554\u2013556.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.3551,
      "lng": 17.7806,
      "name": {
        "en": "Kaposv\u00e1r",
        "tr": "Kapo\u015fvar",
        "local": "Kaposv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1555-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 556\u2013558.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.226,
      "lng": 18.4746,
      "name": {
        "en": "N\u00e1dasd (Mecsekn\u00e1dasd)",
        "tr": "Nadaj",
        "local": "N\u00e1dasd"
      },
      "type": "Parkan",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1570-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 558\u2013559.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 45.5607,
      "lng": 18.6956,
      "name": {
        "en": "Osijek",
        "tr": "Cisr\u2013i \u00d6sek",
        "local": "Esz\u00e9k"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1529-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 559.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.2429,
      "lng": 18.0919,
      "name": {
        "en": "S\u00e1sd",
        "tr": "Sas",
        "local": "S\u00e1sd"
      },
      "type": "Palanka",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "P\u00e9cs",
        "tr": "Pe\u00e7uy",
        "local": "P\u00e9cs"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 559.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.0507,
      "lng": 17.7969,
      "name": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1689",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 559\u2013562.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 45.852,
      "lng": 18.2958,
      "name": {
        "en": "Sikl\u00f3s",
        "tr": "\u015eiklo\u015f",
        "local": "Sikl\u00f3s"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1543-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 562.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.0394,
      "lng": 17.3469,
      "name": {
        "en": "Bab\u00f3csa",
        "tr": "Bobof\u00e7a",
        "local": "Bab\u00f3csa"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1555-1556",
      "date2": "1566-1686",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 562\u2013564.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.21,
      "lng": 17.15,
      "name": {
        "en": "Berzence",
        "tr": "Berzen\u00e7",
        "local": "Berzence"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "part of the vilayet of Budin before 1600",
      "sources": "Hegyi, p. 564\u2013566",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 45.9602,
      "lng": 17.4606,
      "name": {
        "en": "Barcs",
        "tr": "Bar\u00e7a",
        "local": "Barcs"
      },
      "type": "Palanka",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1567-1664",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 566\u2013567.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.3562,
      "lng": 17.3485,
      "name": {
        "en": "Segesd",
        "tr": "\u015eege\u015f",
        "local": "Segesd"
      },
      "type": "Palanka",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1566-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 567\u2013569.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 46.5425,
      "lng": 17.174,
      "name": {
        "en": "Zalakom\u00e1r",
        "tr": "Komar",
        "local": "Kiskom\u00e1rom"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1600-1601",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Unknown",
      "notes": "",
      "sources": "Hegyi, p. 569\u2013570",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 45.9415,
      "lng": 17.5668,
      "name": {
        "en": "Dr\u00e1vatam\u00e1si",
        "tr": "Toma\u015fin",
        "local": "Dr\u00e1vatam\u00e1si"
      },
      "type": "Fortress",
      "province": {
        "en": "Kanije",
        "tr": "Kanija",
        "local": "Kanizsa"
      },
      "sancak": {
        "en": "Szigetv\u00e1r",
        "tr": "Sigetvar",
        "local": "Szigetv\u00e1r"
      },
      "date1": "1600-1603",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Unknown",
      "notes": "",
      "sources": "Hegyi, p. 570.",
      "source_sheet": "Kanizsa"
    },
    {
      "lat": 47.0516,
      "lng": 21.9428,
      "name": {
        "en": "Oradea",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "type": "Fortress",
      "province": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "sancak": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "date1": "1660-1692",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 570\u2013572.",
      "source_sheet": "V\u00e1rad"
    },
    {
      "lat": 47.2588,
      "lng": 22.1331,
      "name": {
        "en": "S\u00e2niob",
        "tr": "\u015eeng'ob",
        "local": "Szentjobb"
      },
      "type": "Fortress",
      "province": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "sancak": {
        "en": "S\u00e2niob",
        "tr": "\u015eeng'ob",
        "local": "Szentjobb"
      },
      "date1": "1661-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Hungary",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 572.",
      "source_sheet": "V\u00e1rad"
    },
    {
      "lat": 47.1103,
      "lng": 22.3846,
      "name": {
        "en": "Pe\u015fti\u015f",
        "tr": "\u015eolomki",
        "local": "S\u00f3lyomk\u0151 (S\u00f3lyomk\u0151pestes)"
      },
      "type": "Fortress",
      "province": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "sancak": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "date1": "1661-1686",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 572\u2013573.",
      "source_sheet": "V\u00e1rad"
    },
    {
      "lat": 46.7913,
      "lng": 22.2918,
      "name": {
        "en": "Papmez\u0151",
        "tr": "Papmez\u00f6",
        "local": "Papmez\u0151 (Kispapmez\u0151)"
      },
      "type": "Fortress",
      "province": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "sancak": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "date1": "1661-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Hegyi, p. 573.",
      "source_sheet": "V\u00e1rad"
    },
    {
      "lat": 46.6925,
      "lng": 22.1158,
      "name": {
        "en": "S\u00e2nnicolau de Beiu\u015f",
        "tr": "Belen\u00f6\u015f",
        "local": "Bel\u00e9nyes (Bel\u00e9nyesszentmikl\u00f3s)"
      },
      "type": "Fortress",
      "province": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "sancak": {
        "en": "Varat",
        "tr": "Varad",
        "local": "V\u00e1rad"
      },
      "date1": "1661-1687",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Large",
      "notes": "",
      "sources": "Hegyi, p. 573\u2013574.",
      "source_sheet": "V\u00e1rad"
    },
    {
      "lat": 47.986,
      "lng": 18.1639,
      "name": {
        "en": "Nov\u00e9 Z\u00e1mky",
        "tr": "Uyvar",
        "local": "\u00c9rsek\u00fajv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Uyvar",
        "tr": "Uyvar",
        "local": "Uyvar"
      },
      "sancak": {
        "en": "Uyvar",
        "tr": "Uyvar",
        "local": "Uyvar"
      },
      "date1": "1663-1685",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Military Hub",
      "notes": "",
      "sources": "Hegyi, p. 574\u2013576.",
      "source_sheet": "\u00dajv\u00e1r"
    },
    {
      "lat": 48.0852,
      "lng": 18.1913,
      "name": {
        "en": "\u0160urany",
        "tr": "\u015euran",
        "local": "Sur\u00e1ny (Nagysur\u00e1ny)"
      },
      "type": "Fortress",
      "province": {
        "en": "Uyvar",
        "tr": "Uyvar",
        "local": "Uyvar"
      },
      "sancak": {
        "en": "Uyvar",
        "tr": "Uyvar",
        "local": "Uyvar"
      },
      "date1": "1663-1685",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Slovakia",
      "size": "Small",
      "notes": "",
      "sources": "Hegyi, p. 576\u2013577.",
      "source_sheet": "\u00dajv\u00e1r"
    },
    {
      "lat": 43.8632,
      "lng": 21.4103,
      "name": {
        "en": "Para\u0107in",
        "tr": "Perakin",
        "local": "Para\u0107in"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "date1": "1458-1833",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 181.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.7111,
      "lng": 20.9892,
      "name": {
        "en": "Rajinac",
        "tr": "Rajina",
        "local": "Rajinac"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "date1": "1458-1833",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 184.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.5784,
      "lng": 21.3354,
      "name": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "date1": "1433-1444",
      "date2": "1453-1789",
      "date3": "1791-1833",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.5319,
      "lng": 21.7117,
      "name": {
        "en": "Aleksinac",
        "tr": "Aleksani\u00e7e",
        "local": "Aleksinac"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "date1": "1458-1833",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Co\u015fkun, \u00d6zkal\u0131n\u00e7, Sivrida\u011f, and Y\u00fczba\u015f\u0131o\u011flu, p. 31.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.455,
      "lng": 20.9407,
      "name": {
        "en": "Koznik",
        "tr": "Koznik",
        "local": "Koznik"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Kru\u0161evac",
        "tr": "Alacahisar",
        "local": "Kru\u0161evac"
      },
      "date1": "1458-1833",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.0471,
      "lng": 26.6117,
      "name": {
        "en": "Tutrakan",
        "tr": "Tutrakan",
        "local": "Tutrakan"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1395-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Medium",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.893,
      "lng": 25.9651,
      "name": {
        "en": "Giurgiu",
        "tr": "Yerg\u00f6\u011f\u00fc",
        "local": "Giurgiu"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1395-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Large",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.8499,
      "lng": 25.9469,
      "name": {
        "en": "Ruse",
        "tr": "Rus\u00e7uk",
        "local": "Ruse"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1388-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Large",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.7396,
      "lng": 23.9474,
      "name": {
        "en": "Oryahovo",
        "tr": "Rahova",
        "local": "Oryahovo"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1395-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Medium",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.7211,
      "lng": 24.8612,
      "name": {
        "en": "Turnu M\u0103gurele",
        "tr": "Holovnik",
        "local": "Turnu M\u0103gurele"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1395-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.7032,
      "lng": 24.8927,
      "name": {
        "en": "Ir\u015fova",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1395-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Large",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.6216,
      "lng": 25.3443,
      "name": {
        "en": "Svishtov",
        "tr": "Zi\u015ftovi",
        "local": "Svishtov"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1388-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Medium",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.0836,
      "lng": 25.6525,
      "name": {
        "en": "Veliko Tarnovo",
        "tr": "T\u0131rnovi",
        "local": "Veliko Tarnovo"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Nikopol",
        "tr": "Ni\u011fbolu",
        "local": "Nikopol"
      },
      "date1": "1393-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Small",
      "notes": "",
      "sources": "MAD.d. 11.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 46.8226,
      "lng": 29.4621,
      "name": {
        "en": "Bender",
        "tr": "Bender",
        "local": "Bender"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1538-1812",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Moldova",
      "size": "Military Hub",
      "notes": "",
      "sources": "D.BKL.d. 32169.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 46.6344,
      "lng": 31.4877,
      "name": {
        "en": "K\u00fc\u00e7\u00fck Hasan Pa\u015fa Palankas\u0131",
        "tr": "K\u00fc\u00e7\u00fck Hasan Pa\u015fa Palankas\u0131",
        "local": "K\u00fc\u00e7\u00fck Hasan Pa\u015fa Palankas\u0131"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1627-1828",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Ukraine",
      "size": "Small",
      "notes": "Newly Built",
      "sources": "Cevrio\u011flu, 51\u201369.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 46.6185,
      "lng": 31.5379,
      "name": {
        "en": "Ochakiv",
        "tr": "\u00d6zi/Cankerman",
        "local": "Ochakiv"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1538-1828",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Ukraine",
      "size": "Military Hub",
      "notes": "",
      "sources": "AE.SMMD.IV. 66 \u2013 7756.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 46.5805,
      "lng": 31.5115,
      "name": {
        "en": "Kinburn",
        "tr": "K\u0131lburun",
        "local": "Kinburn"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1538-1774",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Ukraine",
      "size": "Medium",
      "notes": "",
      "sources": "D.BKL.d.32173.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.2707,
      "lng": 28.4916,
      "name": {
        "en": "Isaccea",
        "tr": "\u0130sak\u00e7\u0131",
        "local": "Isaccea"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1419-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Military Hub",
      "notes": "",
      "sources": "St\u0103nic\u0103, p. 7-37.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.2393,
      "lng": 28.1278,
      "name": {
        "en": "M\u0103cin",
        "tr": "Ma\u00e7in",
        "local": "M\u0103cin"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1600-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Large",
      "notes": "",
      "sources": "St\u0103nic\u0103, p. 12.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.1854,
      "lng": 28.815,
      "name": {
        "en": "Tulcea",
        "tr": "Tul\u00e7a",
        "local": "Tulcea"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1634-1828",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "St\u0103nic\u0103, p. 12.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.912,
      "lng": 28.7404,
      "name": {
        "en": "Babadag",
        "tr": "Babada\u011f",
        "local": "Babadag"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1419-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.448,
      "lng": 28.7437,
      "name": {
        "en": "Karaharman",
        "tr": "Karaharman",
        "local": "Karaharman"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1625-1877",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Medium",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 199.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.2037,
      "lng": 27.9113,
      "name": {
        "en": "Varna",
        "tr": "Varna",
        "local": "Varna"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1388-1828",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Small",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.1754,
      "lng": 27.4476,
      "name": {
        "en": "Provadia",
        "tr": "Prevadi",
        "local": "Provadia"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1388-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Small",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 46.2006,
      "lng": 30.3494,
      "name": {
        "en": "Bilhorod\u2013Dnistrovskyi",
        "tr": "Akkirman",
        "local": "Bilhorod\u2013Dnistrovskyi Dnyeszterfeh\u00e9rv\u00e1r"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1484-1812",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Ukraine",
      "size": "Military Hub",
      "notes": "",
      "sources": "D.BKL.d. 32274",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.4339,
      "lng": 29.2684,
      "name": {
        "en": "Kiliia",
        "tr": "Kili",
        "local": "Kiliia"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1484-1812",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Ukraine",
      "size": "Military Hub",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, Sivrida\u011f, Y\u00fczba\u015f\u0131o\u011flu.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.3392,
      "lng": 28.8066,
      "name": {
        "en": "Izmail",
        "tr": "\u0130smail",
        "local": "Izmail"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1560-1812",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Military Hub",
      "notes": "It was built by Ottomans.",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, Sivrida\u011f, Y\u00fczba\u015f\u0131o\u011flu.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.272,
      "lng": 27.9747,
      "name": {
        "en": "Br\u0103ila",
        "tr": "\u0130brail",
        "local": "Br\u0103ila"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1538-1829",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Military Hub",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, Sivrida\u011f, Y\u00fczba\u015f\u0131o\u011flu.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6816,
      "lng": 27.9525,
      "name": {
        "en": "H\u00e2r\u0219ova",
        "tr": "Har\u015fova",
        "local": "H\u00e2r\u0219ova"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1419-1828",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Large",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, Sivrida\u011f, Y\u00fczba\u015f\u0131o\u011flu.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.1172,
      "lng": 27.2608,
      "name": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1388-1390",
      "date2": "1396-1828",
      "date3": "1836-1878",
      "date4": "",
      "country": "Bulgaria",
      "size": "Large",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.3646,
      "lng": 28.4658,
      "name": {
        "en": "Kaliakra",
        "tr": "Keligra",
        "local": "Kaliakra"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Silistra",
        "tr": "Silistre",
        "local": "Silistra"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.8245,
      "lng": 20.448,
      "name": {
        "en": "Belgrade",
        "tr": "Belgrad",
        "local": "Beograd"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1688",
      "date2": "1690-1718",
      "date3": "1739-1789",
      "date4": "1791-1867",
      "country": "Serbia",
      "size": "Military Hub",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.8129,
      "lng": 21.3301,
      "name": {
        "en": "Ram",
        "tr": "Hram",
        "local": "Ram"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1483-1806",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "It was built as a palanka, then rebuilt as a fortress.",
      "sources": "Aslan (2023), 77.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.7151,
      "lng": 21.0414,
      "name": {
        "en": "Kuli\u010d",
        "tr": "Koyluca",
        "local": "Kuli\u010d"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1483-1806",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "It was built as a palanka, then rebuilt as a fortress.",
      "sources": "Aslan (2023), 80.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6887,
      "lng": 20.5161,
      "name": {
        "en": "\u017drnov",
        "tr": "Avala\u2013Havale\u2013G\u00fczelcehisar",
        "local": "\u017drnov"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1458-1830",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Aslan (2023), 75.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6695,
      "lng": 20.9278,
      "name": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1459-1688",
      "date2": "1690-1718",
      "date3": "1739-1788",
      "date4": "1791-1805",
      "country": "Serbia",
      "size": "Military Hub",
      "notes": "",
      "sources": "Aslan (2023), 60.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6612,
      "lng": 21.6787,
      "name": {
        "en": "Golubac",
        "tr": "G\u00fcvercinlik",
        "local": "Golubac"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1430-1688",
      "date2": "1690-1718",
      "date3": "1739-1789",
      "date4": "1791-1830",
      "country": "Serbia",
      "size": "Military Hub",
      "notes": "",
      "sources": "Aslan (2023), 70.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.1691,
      "lng": 20.4605,
      "name": {
        "en": "Ostrovica",
        "tr": "Sivricehisar",
        "local": "Ostrovica"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1830",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Aslan (2023), 83.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.0602,
      "lng": 21.281,
      "name": {
        "en": "Resava",
        "tr": "Resava",
        "local": "Resava"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1458-1718",
      "date2": "1739-1804",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Aslan (2023), 60.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.8518,
      "lng": 19.8286,
      "name": {
        "en": "Stari Grad. U\u017eice",
        "tr": "Uzi\u00e7e\u2013Uji\u00e7e",
        "local": "Stari Grad. U\u017eice"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1459-1862",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Aslan (2023), 76.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.6145,
      "lng": 20.5523,
      "name": {
        "en": "Magli\u010d",
        "tr": "Maglic",
        "local": "Magli\u010d"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1459-1830",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Aslan (2023), 81.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.1414,
      "lng": 20.2591,
      "name": {
        "en": "Stari Slankamen",
        "tr": "\u0130slankamin",
        "local": "Stari Slankamen"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1688",
      "date2": "1690-1699",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Pe\u00e7evi \u0130brahim Efendi, p. 72.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.85207,
      "lng": 20.373,
      "name": {
        "en": "Zemun",
        "tr": "Zemun",
        "local": "Zemun"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1717",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "Destroyed.",
      "sources": "Evliya \u00c7elebi, p. 186.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6894,
      "lng": 20.7041,
      "name": {
        "en": "Grocka",
        "tr": "Hisarl\u0131k",
        "local": "Grocka"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1531-1718",
      "date2": "1739-1806",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "\u0130brahim Pa\u015fa'n\u0131n Teme\u015fvar seferi s\u0131ras\u0131nda kuruldu deniyor. \u0130brahim Pa\u015fa 1536'da \u00f6l\u00fcyor. Muhtemelen 1531 seferi s\u0131ras\u0131nda kuruluyor.",
      "sources": "Evliya \u00c7elebi, p. 185.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.5833,
      "lng": 20.898,
      "name": {
        "en": "Kolari",
        "tr": "Kolarine",
        "local": "Kolari"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1718",
      "date2": "1739-1830",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 185.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.4511,
      "lng": 21.6545,
      "name": {
        "en": "Ku\u010dajna",
        "tr": "Ku\u00e7ayna",
        "local": "Ku\u010dajna"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1552-1690",
      "date2": "1691-1718",
      "date3": "1739-1830",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Aslan (2023), 86.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.3633,
      "lng": 20.9511,
      "name": {
        "en": "Smederevska Palanka",
        "tr": "Hasanpa\u015fa Palankas\u0131",
        "local": "Smederevska Palanka"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1521-1718",
      "date2": "1739-1830",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Abd\u00fclkadir Efendi, p. 192.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.1557,
      "lng": 21.0802,
      "name": {
        "en": "Bato\u010dina",
        "tr": "Bati\u00e7na",
        "local": "Bato\u010dina"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1532-1867",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 185.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.6506,
      "lng": 21.8904,
      "name": {
        "en": "Sokograd",
        "tr": "Sokol",
        "local": "Sokograd"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Smederevo",
        "tr": "Semendire",
        "local": "Smederevo"
      },
      "date1": "1512-1862",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 185.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.2516,
      "lng": 19.8648,
      "name": {
        "en": "Novi Sad",
        "tr": "Petrovaradin",
        "local": "Novi Sad"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1683",
      "date2": "1690-1692",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "McGowan, p. 136.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.224,
      "lng": 19.3761,
      "name": {
        "en": "Ilok",
        "tr": "Uyluk",
        "local": "Ilok"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1688",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Medium",
      "notes": "",
      "sources": "McGowan.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.2952,
      "lng": 19.0967,
      "name": {
        "en": "Sotin",
        "tr": "Votin (Vokin)",
        "local": "Sotin"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1688",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Small",
      "notes": "The location is proximity. It is destroyed by Ottomans.",
      "sources": "McGowan, p. 24.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.1399,
      "lng": 19.037,
      "name": {
        "en": "Nijemci",
        "tr": "Nem\u00e7i",
        "local": "Nijemci"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1532-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Medium",
      "notes": "",
      "sources": "Ba\u015f (2018), p. 60.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.354,
      "lng": 19.0003,
      "name": {
        "en": "Vukovar",
        "tr": "Vulkovar",
        "local": "Vukovar"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1688",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Croatia",
      "size": "Medium",
      "notes": "",
      "sources": "McGowan, p. 136.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.2203,
      "lng": 19.6599,
      "name": {
        "en": "\u010cerevi\u0107",
        "tr": "\u00c7erevik",
        "local": "\u010cerevi\u0107"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.1442,
      "lng": 19.7751,
      "name": {
        "en": "Vrdni\u010dka Kula",
        "tr": "Vidnik",
        "local": "Vrdni\u010dka Kula"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.1186,
      "lng": 19.4057,
      "name": {
        "en": "Erdevik",
        "tr": "Erdevid",
        "local": "Erdevik"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 45.0711,
      "lng": 20.3256,
      "name": {
        "en": "Surduk",
        "tr": "Duk",
        "local": "Surduk"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1526-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Medium",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.9669,
      "lng": 19.6089,
      "name": {
        "en": "Sremska Mitrovica",
        "tr": "Dimitrovi\u00e7e",
        "local": "Sremska Mitrovica"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1521-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "",
      "sources": "\u00d6zkal\u0131n\u00e7, Co\u015fkun, and Sivrida\u011f, p. 893.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.2252,
      "lng": 20.9806,
      "name": {
        "en": "Ra\u010da",
        "tr": "Ra\u00e7a",
        "local": "Ra\u010da"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Syrmia",
        "tr": "Sirem",
        "local": "Srem"
      },
      "date1": "1521-1699",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "Evliya \u00c7elebi, p. 181.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.6155,
      "lng": 22.6019,
      "name": {
        "en": "Kladovo",
        "tr": "Feth\u2013i \u0130slam",
        "local": "Kladovo"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1526-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Large",
      "notes": "Newly built.",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.1342,
      "lng": 22.858,
      "name": {
        "en": "Florentin",
        "tr": "Filordin",
        "local": "Florentin"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Medium",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.9919,
      "lng": 22.8815,
      "name": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Military Hub",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.6348,
      "lng": 21.8931,
      "name": {
        "en": "Sokobanja",
        "tr": "Bane",
        "local": "Sokobanja"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.4743,
      "lng": 22.0953,
      "name": {
        "en": "Svrljig",
        "tr": "\u0130sfirlik",
        "local": "Svrljig"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.7163,
      "lng": 22.4554,
      "name": {
        "en": "Ada Kaleh",
        "tr": "Adakale",
        "local": "Ada Kaleh"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1687-1923",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Romania",
      "size": "Small",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 44.4838,
      "lng": 22.45341,
      "name": {
        "en": "Brza Palanka",
        "tr": "Berze",
        "local": "Brza Palanka"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1700-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Serbia",
      "size": "Small",
      "notes": "",
      "sources": "MD 76/403.",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.8174,
      "lng": 22.9083,
      "name": {
        "en": "Archar",
        "tr": "Arcar",
        "local": "Archar"
      },
      "type": "Palanka",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1626-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Small",
      "notes": "",
      "sources": "AE.SMST.II. 113 \u2013 12222",
      "source_sheet": "RumeliSilistre"
    },
    {
      "lat": 43.624,
      "lng": 22.67706,
      "name": {
        "en": "Belogradchik",
        "tr": "Belgrad",
        "local": "Belogradchik"
      },
      "type": "Fortress",
      "province": {
        "en": "Rumelia/Silistra",
        "tr": "Rumeli/Silistre",
        "local": "Rumelia/Silistra"
      },
      "sancak": {
        "en": "Vidin",
        "tr": "Vidin",
        "local": "Vidin"
      },
      "date1": "1396-1878",
      "date2": "",
      "date3": "",
      "date4": "",
      "country": "Bulgaria",
      "size": "Small",
      "notes": "",
      "sources": "TKGM.d. 365.",
      "source_sheet": "RumeliSilistre"
    }
  ]
};
