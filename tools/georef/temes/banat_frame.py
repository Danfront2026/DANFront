"""Map area of a First Military Survey sheet of the Banat of Temesvár. These sheets have one thick outer frame that
also encloses the title strip (top) and the column with place names (right); the map is the part below the title
line and left of the column line. Sheets differ in shape, so no fixed width/height ratio is assumed."""
import numpy as np, rasterio, warnings
warnings.filterwarnings('ignore')

def _best(prof, lo, hi):
    lo, hi = max(0, int(lo)), min(len(prof), int(hi))
    if hi <= lo: return None, 0.0
    i = lo + int(np.argmax(prof[lo:hi])); return i, float(prof[i])

def find_map_area(path, step=4):
    """-> dict(W, H, x=(x0, x1), y=(y0, y1), outer=(l, r, t, b), score) in scan pixels, or x/y None."""
    with rasterio.open(path) as ds:
        a = ds.read([1, 2, 3], out_shape=(3, ds.height // step, ds.width // step)).astype(np.int16)
        W, H = ds.width, ds.height
    dark = a.max(axis=0) < 110; h, w = dark.shape
    col = dark.mean(axis=0); row = dark.mean(axis=1)
    l, sl = _best(col, 0, 0.15 * w); r, sr = _best(col, 0.85 * w, w)
    t, st = _best(row, 0, 0.15 * h); b, sb = _best(row, 0.85 * h, h)
    out = dict(W=W, H=H, x=None, y=None, outer=None, score=None, fallback=None)
    sci = 0.0
    if None in (l, r, t, b) or min(sl, sr, st, sb) < 0.35: return out
    # profiles between the outer lines only
    inner = dark[t + 3:b - 2, l + 3:r - 2]
    c2 = inner.mean(axis=0); r2 = inner.mean(axis=1)
    ti, sti = _best(r2, 150 // step, 1000 // step)                     # title line: first strong line below the top
    ci = None
    win = c2[(r - l) - 1500 // step:(r - l) - 250 // step]
    if len(win):
        thr = 0.6 * win.max()
        ci = (r - l) - 1500 // step + int(np.argmax(win >= thr)); sci = float(c2[ci])   # leftmost strong line of the name column
    fallback = []
    if ti is None or sti < 0.45: ti = 380 // step; fallback.append('title')          # typical distance outer line -> title line
    if ci is None or sci < 0.3:  ci = (r - l) - 790 // step; fallback.append('column')  # typical width of the name column
    out['fallback'] = fallback
    x0, x1, y0, y1 = l, l + 3 + ci, t + 3 + ti, b
    out.update(x=(x0 * step, x1 * step), y=(y0 * step, y1 * step), outer=(l * step, r * step, t * step, b * step),
               score=round(min(sl, sr, st, sb), 2))
    return out

if __name__ == '__main__':
    import sys
    for p in sys.argv[1:]:
        print(p.split('/')[-1], find_map_area(p))
