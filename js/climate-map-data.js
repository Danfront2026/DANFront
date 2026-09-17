/**
 * Climate Map Data (experimental)
 * Weather / climate observations extracted from narrative sources.
 * Generated automatically by convert_climate_map_data.py - do not edit manually.
 *
 * Schema per event:
 *   id             — dataset ID (CLM-xxxx)
 *   lat, lng       — coordinates of the place the observation refers to
 *   place          — {tr, en} place name
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

var climateMapData = {
  "total_events": 34,
  "skipped_without_coordinates": 21,
  "events": [
  {
    "id": "CLM-0001",
    "lat": 42.1423,
    "lng": 24.7408,
    "place": {
      "tr": "Filibe",
      "en": "Plovdiv"
    },
    "start": "26.05.1532",
    "end": "",
    "year": 1532,
    "season": "Spring",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "175",
    "transcription": "Yağmur yağdı",
    "notes": ""
  },
  {
    "id": "CLM-0004",
    "lat": 44.6894,
    "lng": 20.7041,
    "place": {
      "tr": "Hisarlı",
      "en": "Hisarlı"
    },
    "start": "24.06.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "177",
    "transcription": "Ziyade yağmur yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0005",
    "lat": 44.8245,
    "lng": 20.448,
    "place": {
      "tr": "Belgrad",
      "en": "Belgrade"
    },
    "start": "25.06.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "177",
    "transcription": "Ziyade yağmur yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0006",
    "lat": 44.8387,
    "lng": 20.2789,
    "place": {
      "tr": "Sirem",
      "en": "Srymia"
    },
    "start": "27.06.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "177",
    "transcription": "Ziyade yeller esip, ziyade yapmur yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0007",
    "lat": 44.8387,
    "lng": 20.2789,
    "place": {
      "tr": "Sirem",
      "en": "Srymia"
    },
    "start": "28.06.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "177",
    "transcription": "Yağmur yağdı",
    "notes": ""
  },
  {
    "id": "CLM-0011",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "10.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "Ziyade yağmur yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0012",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "11.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "yağmur yağdı ve ziyade seller oldu.",
    "notes": ""
  },
  {
    "id": "CLM-0013",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "17.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "Ziyade baran oldu.",
    "notes": ""
  },
  {
    "id": "CLM-0014",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "20.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain and Hail",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "Dolu ile yağmur yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0015",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "24.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "muttasıl baran oldu.",
    "notes": ""
  },
  {
    "id": "CLM-0016",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "25.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "ziyade baran oldu.",
    "notes": ""
  },
  {
    "id": "CLM-0017",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "28.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "..ziyade yağmurlar yağdı.",
    "notes": ""
  },
  {
    "id": "CLM-0018",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "29.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "Yağmur yağdı",
    "notes": ""
  },
  {
    "id": "CLM-0019",
    "lat": 47.3875,
    "lng": 16.5428,
    "place": {
      "tr": "Köseg",
      "en": "Kőszeg"
    },
    "start": "30.08.1532",
    "end": "",
    "year": 1532,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "180",
    "transcription": "..baran olup sabahtan ahşama dek yağdı",
    "notes": ""
  },
  {
    "id": "CLM-0020",
    "lat": 42.7059,
    "lng": 23.317,
    "place": {
      "tr": "Sofya",
      "en": "Sofia"
    },
    "start": "03.11.1532",
    "end": "",
    "year": 1532,
    "season": "Autumn",
    "variable": "Precipatition",
    "phenomenon": "Snow",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Erdoğru",
    "source_type": "Ruzname",
    "source_page": "184",
    "transcription": "..bir mertebe tufan olup kar yağdı ki dille şerh olunmaz",
    "notes": ""
  },
  {
    "id": "CLM-0021",
    "lat": 41.0877,
    "lng": 28.7407,
    "place": {
      "tr": "Azadlu",
      "en": "Azatlı"
    },
    "start": "22.06.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain and Hail",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "42",
    "transcription": ".. bir azim yağmur yağup ziyade dolu olmışdur.",
    "notes": ""
  },
  {
    "id": "CLM-0022",
    "lat": 41.0759,
    "lng": 28.2502,
    "place": {
      "tr": "Silivri",
      "en": "Silivri"
    },
    "start": "24.06.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "43",
    "transcription": ".. ve azim kesret ile dahil olup..",
    "notes": ""
  },
  {
    "id": "CLM-0023",
    "lat": 41.3006,
    "lng": 27.54404,
    "place": {
      "tr": "Karuşduran",
      "en": "Büyükarıştıran"
    },
    "start": "27.06.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Temperature",
    "phenomenon": "Heatwave",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "44",
    "transcription": "heva ziyade ısıcak olup...",
    "notes": ""
  },
  {
    "id": "CLM-0024",
    "lat": 41.41006,
    "lng": 27.348,
    "place": {
      "tr": "Burgos",
      "en": "Lüleburgaz"
    },
    "start": "28.06.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "44",
    "transcription": ".. giceden bir mikdarcık yapmur yağmağile askerün piyadeleri azim zahmet çekmişlerdür.",
    "notes": ""
  },
  {
    "id": "CLM-0025",
    "lat": 41.4313,
    "lng": 27.0919,
    "place": {
      "tr": "Babaeskisi",
      "en": "Babaeski"
    },
    "start": "29.06.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Temperature",
    "phenomenon": "Clear Weather",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "44",
    "transcription": "Ve heva ziyade küşad olup...",
    "notes": ""
  },
  {
    "id": "CLM-0029",
    "lat": 42.1423,
    "lng": 24.7408,
    "place": {
      "tr": "Filibe",
      "en": "Plovdiv"
    },
    "start": "11.07.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Astronomical",
    "phenomenon": "Meteor",
    "group": "other",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "48",
    "transcription": "Bu menzilde ahşam vaktinde ufk-ı semâda bir kuyruklı yılduz\ndoğup subha değin görünmişdür.",
    "notes": ""
  },
  {
    "id": "CLM-0034",
    "lat": 44.8245,
    "lng": 20.448,
    "place": {
      "tr": "Belgrad",
      "en": "Belgrade"
    },
    "start": "11.08.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Temperature",
    "phenomenon": "Extreme Heatwave",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "65",
    "transcription": "Bugün hevâ ziyâde ısıcak olup herkes çadırında zebûn olmışdur",
    "notes": ""
  },
  {
    "id": "CLM-0036",
    "lat": 45.1406,
    "lng": 20.2564,
    "place": {
      "tr": "İslankamen",
      "en": "Slankamen"
    },
    "start": "27.08.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Wind",
    "phenomenon": "Extreme Wind",
    "group": "wind",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "72",
    "transcription": "Seher vaktinde hevâ küşâde iken hikmet Hudâ’nun beyne’s-salâteyn\nzemânında bir şedîd rûzgâr ve bir furtuna olmışdur ki, görülmiş ve işidilmiş\ndeğildür.",
    "notes": ""
  },
  {
    "id": "CLM-0037",
    "lat": 45.1406,
    "lng": 20.2564,
    "place": {
      "tr": "İslankamen",
      "en": "Slankamen"
    },
    "start": "28.08.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "73",
    "transcription": "ugün giceden ziyâde yağmur yağup, yollar sarp ve ziyâde çamur olup, bir\nvechle hareket olunmağa mecâl olmamağla oturak olınup ve binâ olınan köpri\niçün dahi te’hîr olunmak ehemm olmağla kalınmışdur.",
    "notes": ""
  },
  {
    "id": "CLM-0034",
    "lat": 45.2416,
    "lng": 19.8786,
    "place": {
      "tr": "Varadin",
      "en": "Varadin"
    },
    "start": "31.08.1596",
    "end": "",
    "year": 1596,
    "season": "Summer",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "75",
    "transcription": "Ve hevâ bulanup bir\nmikdârcık yağmur yağup, ortalık balçık ve batak olmağla ordı dahi kurılmayup",
    "notes": ""
  },
  {
    "id": "CLM-0039",
    "lat": 46.2462,
    "lng": 20.1422,
    "place": {
      "tr": "Segedin",
      "en": "Segedin"
    },
    "start": "5.09.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Temperature",
    "phenomenon": "Clear Weather",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "78",
    "transcription": "Ammâ hevâ\nziyâde açuk olmağla nev‘an safâlar olunmışdur.",
    "notes": ""
  },
  {
    "id": "CLM-0041",
    "lat": 47.9036,
    "lng": 20.3776,
    "place": {
      "tr": "Eğri",
      "en": "Eger"
    },
    "start": "08.10.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "100",
    "transcription": "ve lâkin yağmur yağup\nyollarda yürütmek bir vechle kābil olmamağın yürüyüşden ferâgat olunmışdur",
    "notes": ""
  },
  {
    "id": "CLM-0042",
    "lat": 47.9036,
    "lng": 20.3776,
    "place": {
      "tr": "Eğri",
      "en": "Eger"
    },
    "start": "10.10.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "101",
    "transcription": "Bugün giceden ‘azîm yağmurlar yağup, ordu-yı hümâyûn yiri ziyâde\nçamur olup ve ‘azîm bataklar olmağın eğer âdem eğer davardur harekete\nmecâl olmayup ve müslimânların ota giden davarları gelmeyüp nicesi\nbataklarda kalmağın halka fevka’l-had zahmet virmişdür",
    "notes": ""
  },
  {
    "id": "CLM-0043",
    "lat": 47.9036,
    "lng": 20.3776,
    "place": {
      "tr": "Eğri",
      "en": "Eger"
    },
    "start": "19.10.1596",
    "end": "20.10.1596",
    "year": 1596,
    "season": "Autumn",
    "variable": "Temperature",
    "phenomenon": "Cold and Wind",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "106",
    "transcription": "..iki günden berü gün doğusı esüp,\nsovuklardan ziyâde elem-zede olup",
    "notes": ""
  },
  {
    "id": "CLM-0044",
    "lat": 47.9036,
    "lng": 20.3776,
    "place": {
      "tr": "Eğri",
      "en": "Eger"
    },
    "start": "25.10.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "111-112",
    "transcription": "..ve hevâ dahi burûdet ve yağmur olup..",
    "notes": ""
  },
  {
    "id": "CLM-0051",
    "lat": 44.8245,
    "lng": 20.448,
    "place": {
      "tr": "Belgrad",
      "en": "Belgrad"
    },
    "start": "20.11.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Temperature",
    "phenomenon": "Cold",
    "group": "temperature",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "124",
    "transcription": "Ve ziyâde sovuklar olup kemâl mertebe müzâyakalar çekilmişdür.\nVe zâd ü zevâde min-ba‘d ele girmeyüp ‘azîm kıtlıklar çekilmişdür.",
    "notes": ""
  },
  {
    "id": "CLM-0052",
    "lat": 44.6894,
    "lng": 20.7041,
    "place": {
      "tr": "Hisarlık",
      "en": "Hisarlık"
    },
    "start": "22.11.1596",
    "end": "",
    "year": 1596,
    "season": "Autumn",
    "variable": "Precipatition",
    "phenomenon": "Rain",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Börekçi",
    "source_type": "Ruzname",
    "source_page": "125",
    "transcription": "ugün hevâ yağmur olmağla ‘asker menzil-i mezbûra gelince ziyâde elem\nçekilüp, yollarda kalmışun haddi hesâbı yoğ idi",
    "notes": ""
  },
  {
    "id": "CLM-0053",
    "lat": 47.1565,
    "lng": 27.601,
    "place": {
      "tr": "Iaşi",
      "en": "Iaşi"
    },
    "start": "07.11.1573",
    "end": "07.11.1673",
    "year": 1573,
    "season": "Winter",
    "variable": "Precipatition",
    "phenomenon": "Snow",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Defterdar Sarı Mehmed Paşa",
    "source_type": "Chronicle",
    "source_page": "70",
    "transcription": "Mezkur Recep aynın yirmiyedinci günü Kasım başlangıcı olup, pek çok kar ve yağmur yağmakla herkes çadıların altına can atmış ve şaşkın kalmıştır.",
    "notes": ""
  },
  {
    "id": "CLM-0054",
    "lat": 41.6858,
    "lng": 26.54424,
    "place": {
      "tr": "Edirne",
      "en": "Edirne"
    },
    "start": "08.06.1675",
    "end": "",
    "year": 1675,
    "season": "Summer",
    "variable": "Meteorologic",
    "phenomenon": "Thunderstorm",
    "group": "precipitation",
    "intensity": "",
    "reliability": "",
    "source": "Defterdar Sarı Mehmed Paşa",
    "source_type": "Chronicle",
    "source_page": "101",
    "transcription": ".. emr-i lahi ile öyle bir gök gürlemesi ve şimşek geldi ki, feşeğin taşının gürültüsünden herkes korkup bir tarafa kaçtı. Otağ-ı hümayun da kurulan tahtın arkadasındaki perdeye yıldırım isabetiyle perde parça parça oldu. Yine aynı gece Sultan Bayezid Camii minaresinde dahi bir yıldırım isabetiyle minare hasar gördü.",
    "notes": ""
  }
]
};
