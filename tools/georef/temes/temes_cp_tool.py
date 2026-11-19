"""Control-point crops for the First Military Survey of the Banat of Temesvár: for a list of towns, find the sheet and the
approximate pixel (from the current grid fit), cut a crop with a labelled pixel grid and pack the crops into contact sheets."""
import json, math, os, numpy as np, rasterio, warnings
from pyproj import Transformer
from rasterio.windows import Window
from PIL import Image, ImageDraw
warnings.filterwarnings('ignore')
from temes_grid_cells import CELL
from banat_frame import find_map_area as find_frame
FIT = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'temes_grid_fit.json')))
CW, CH = FIT['cell']; SOL = np.array(FIT['affine']); M = SOL[:2].T; T0 = SOL[2]; MINV = np.linalg.inv(M)
TL = Transformer.from_crs("EPSG:4326", FIT['local'], always_xy=True)
INV = {v: k for k, v in CELL.items()}
TOWNS = [("Temesvar cathedral",45.7577,21.2289),("Lugos",45.6886,21.9031),("Lippa",46.0886,21.6936),("Nagyszentmiklos",46.0722,20.6297),
 ("Csanad",46.1333,20.5833),("Zsombolya",45.7914,20.7172),("Nagykikinda",45.8297,20.4653),("Torokbecse",45.6000,20.0333),
 ("Nagybecskerek",45.3800,20.3900),("Pancsova",44.8708,20.6403),("Feherttemplom",44.8925,21.4178),("Versec",45.1167,21.3036),
 ("Ujpalanka",44.8467,21.3361),("Kevevara",44.7475,20.9761),("Antalfalva",45.1117,20.6214),("Alibunar",45.0806,20.9658),
 ("Perjamos",46.0500,20.8667),("Csene",45.7167,20.9000),("Detta",45.3906,21.2208),("Csak",45.5083,21.1286),("Buzias",45.6492,21.6036),
 ("Facsad",45.8478,22.1833),("Karansebes",45.4144,22.2208),("Mehadia",44.9050,22.3667),("Orsova",44.7254,22.3961),
 ("Bokszanbanya",45.3747,21.7097),("Resica",45.3008,21.8892),("Oravica",45.0400,21.6850),("Szaszkabanya",44.8867,21.7083),
 ("Omoldova",44.7231,21.6292),("Temesrekas",45.8500,21.5000),("Ecska",45.3200,20.4400),("Begaszentgyorgy",45.4850,20.5500),
 ("Vinga",46.0167,21.2000),("Varjas",45.9700,21.0400),("Torontalvasarhely",45.0700,20.6000),("Novi Knezevac",46.0444,20.1000),
 ("Ujszeged",46.2490,20.1600),("Belgrade fortress opposite (Pancsova bank)",44.8400,20.4600)]

def locate(lat, lon):
    """-> (sheet number or None, fx, fy) from the current grid fit."""
    X, Y = TL.transform(lon, lat); U, V = MINV @ (np.array([X, Y]) - T0)
    u, v = U / CW, -V / CH; c, r = math.floor(u), math.floor(v)
    return INV.get((c, r)), u - c, v - r

def crop(path, cx, cy, label, half=1700, size=640):
    with rasterio.open(path) as ds:
        x0 = int(max(0, min(ds.width - 2*half, cx - half))); y0 = int(max(0, min(ds.height - 2*half, cy - half)))
        a = ds.read([1, 2, 3], window=Window(x0, y0, 2*half, 2*half), out_shape=(3, size, size))
    im = Image.fromarray(a.transpose(1, 2, 0)); d = ImageDraw.Draw(im); k = size / (2*half)
    for v in range((x0 // 250 + 1) * 250, x0 + 2*half, 250):
        d.line([((v-x0)*k, 0), ((v-x0)*k, size)], fill=(255, 0, 0) if v % 1000 == 0 else (255, 170, 170), width=1)
        if v % 500 == 0: d.text(((v-x0)*k + 2, 2), str(v), fill=(255, 0, 0))
    for v in range((y0 // 250 + 1) * 250, y0 + 2*half, 250):
        d.line([(0, (v-y0)*k), (size, (v-y0)*k)], fill=(0, 0, 255) if v % 1000 == 0 else (170, 170, 255), width=1)
        if v % 500 == 0: d.text((2, (v-y0)*k + 2), str(v), fill=(0, 0, 255))
    d.rectangle([0, size-15, 8*len(label)+8, size], fill=(255, 255, 255)); d.text((4, size-13), label, fill=(0, 0, 0))
    return im

def plan():
    """[(town, lat, lon, sheet, fx, fy)] for towns that fall on a sheet."""
    out = []
    for name, lat, lon in TOWNS:
        s, fx, fy = locate(lat, lon)
        if s: out.append((name, lat, lon, s, fx, fy))
    return out

def make(sheet_path, out_dir, per_sheet=6, cols=3):
    """sheet_path(n) -> local path of sheet n (or None). Writes contact sheets + points.json into out_dir."""
    os.makedirs(out_dir, exist_ok=True); tiles = []; info = []
    for name, lat, lon, s, fx, fy in plan():
        p = sheet_path(s)
        if not p: info.append(dict(town=name, sheet=s, status='sheet not available')); continue
        fr = find_frame(p)
        if not (fr['x'] and fr['y']): info.append(dict(town=name, sheet=s, status='frame not found', size=[fr['W'], fr['H']])); continue
        px = fr['x'][0] + fx*(fr['x'][1]-fr['x'][0]); py = fr['y'][0] + fy*(fr['y'][1]-fr['y'][0])
        tiles.append(crop(p, px, py, f"{len(tiles)+1}. {name} / sheet {s}"))
        info.append(dict(n=len(tiles), town=name, lat=lat, lon=lon, sheet=s, frame_x=fr['x'], frame_y=fr['y'], pred_px=[int(px), int(py)], status='ok'))
    size = tiles[0].size[0] if tiles else 640
    for g in range(0, len(tiles), per_sheet):
        grp = tiles[g:g+per_sheet]; rows = math.ceil(len(grp)/cols)
        sheet = Image.new('RGB', (cols*size, rows*size), 'white')
        for i, t in enumerate(grp): sheet.paste(t, ((i % cols)*size, (i//cols)*size))
        sheet.save(os.path.join(out_dir, f'cp_{g//per_sheet+1:02d}.jpg'), quality=88)
    json.dump(info, open(os.path.join(out_dir, 'points.json'), 'w'), indent=1)
    return info
