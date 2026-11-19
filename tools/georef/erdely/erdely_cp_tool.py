"""Control-point crops for the Transylvanian First Military Survey: for a list of towns, find the sheet and the
approximate pixel (from the current grid fit), cut a crop with a labelled pixel grid and pack the crops into contact sheets."""
import json, math, os, numpy as np, rasterio, warnings
from pyproj import Transformer
from rasterio.windows import Window
from PIL import Image, ImageDraw
warnings.filterwarnings('ignore')
from erdely_grid_cells import CELL
from frame import find_frame
FIT = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'erdely_grid_fit.json')))
CW, CH = FIT['cell']; SOL = np.array(FIT['affine']); M = SOL[:2].T; T0 = SOL[2]; MINV = np.linalg.inv(M)
TL = Transformer.from_crs("EPSG:4326", FIT['local'], always_xy=True)
INV = {v: k for k, v in CELL.items()}
TOWNS = [("Tasnad",47.477,22.584),("Szilagysomlyo",47.2306,22.8006),("Zilah",47.1806,23.0570),("Zsibo",47.2583,23.2583),("Magyarlapos",47.4603,23.8597),
 ("Naszod",47.2833,24.4069),("Radna",47.4217,24.8169),("Bethlen",47.1803,24.1792),("Szamosujvar castle",47.0300,23.9100),("Banffyhunyad",46.8667,23.0333),
 ("Gyalu castle",46.7633,23.3906),("Torda",46.5714,23.7847),("Teke",46.9167,24.5083),("Szaszregen",46.7756,24.7061),("Marosvecs castle",46.8597,24.7672),
 ("Gyergyoszentmiklos",46.7228,25.5961),("Szovata",46.5961,25.0744),("Abrudbanya",46.2742,23.0631),("Marosujvar",46.3878,23.8581),("Nagyenyed",46.3106,23.7181),
 ("Balazsfalva",46.1756,23.9156),("Dicsoszentmarton",46.3306,24.2706),("Medgyes",46.1631,24.3511),("Erzsebetvaros",46.2281,24.5750),("Segesvar",46.2194,24.7925),
 ("Szekelyudvarhely",46.3053,25.2944),("Csikszereda castle",46.3575,25.8020),("Korosbanya",46.1722,22.7178),("Zalatna",46.1100,23.2289),("Deva castle",45.8886,22.8970),
 ("Vajdahunyad castle",45.7492,22.8881),("Szaszvaros",45.8383,23.1997),("Szaszsebes",45.9569,23.5694),("Hatszeg",45.6078,22.9506),("Szerdahely",45.8850,23.7936),
 ("Nagysink",45.9167,24.8000),("Kohalom castle",46.0397,25.2111),("Sepsiszentgyorgy",45.8650,25.7870),("Brasso Black Church",45.6410,25.5880),
 ("Torcsvar castle",45.5150,25.3672),("Kovaszna",45.8494,26.1850),("Talmacs",45.6667,24.2611)]

def locate(lat, lon):
    """-> (sheet number or None, fx, fy) from the current grid fit."""
    X, Y = TL.transform(lon, lat); U, V = MINV @ (np.array([X, Y]) - T0)
    u, v = U / CW, -V / CH; c, r = math.floor(u), math.floor(v)
    return INV.get((c, r)), u - c, v - r

def crop(path, cx, cy, label, half=1200, size=640):
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
        tiles.append(crop(p, px, py, f"{len(tiles)+1}. {name} / sheet {s:03d}"))
        info.append(dict(n=len(tiles), town=name, lat=lat, lon=lon, sheet=s, frame_x=fr['x'], frame_y=fr['y'], pred_px=[int(px), int(py)], status='ok'))
    size = tiles[0].size[0] if tiles else 640
    for g in range(0, len(tiles), per_sheet):
        grp = tiles[g:g+per_sheet]; rows = math.ceil(len(grp)/cols)
        sheet = Image.new('RGB', (cols*size, rows*size), 'white')
        for i, t in enumerate(grp): sheet.paste(t, ((i % cols)*size, (i//cols)*size))
        sheet.save(os.path.join(out_dir, f'cp_{g//per_sheet+1:02d}.jpg'), quality=88)
    json.dump(info, open(os.path.join(out_dir, 'points.json'), 'w'), indent=1)
    return info
