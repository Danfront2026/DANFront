"""Find the map frame (the drawn rectangle around the map itself) on a First Military Survey sheet that has no
coordinates and no .ini file, and decide which part of the scan is map.

The frame is drawn with thick black lines; the map inside it is about 1.49 times as wide as high (9600 x 6400 Klafter).
Title strip, scale bar and the column with place names lie outside of it.
Some sheets have an extra piece of map glued to the right or below (border regions). Then one frame line may be missing;
it is reconstructed from the other three, and the extra piece is tiled as a continuation of the same sheet."""
import numpy as np, rasterio, warnings
from scipy import ndimage
warnings.filterwarnings('ignore')
RATIO = 1.488

def _lines(prof, n, thr, keep=14):
    """Positions of the strongest dark lines (at most `keep`, at least 3 samples apart): on a dark sheet (forest,
    mountains) hundreds of columns pass the threshold, and trying all combinations of them would take hours."""
    cand = sorted((i for i in range(1, n - 1) if prof[i] > thr and prof[i] >= prof[i - 1] and prof[i] >= prof[i + 1]), key=lambda i: -prof[i])
    out = []
    for i in cand:
        if all(abs(i - j) >= 3 for j in out): out.append(i)
        if len(out) == keep: break
    return sorted(out)

def find_frame(path, step=4, wmin=6500, wmax=8100, rmin=1.45, rmax=1.52, thr=0.3):
    """-> dict(W, H, x=(x0, x1) or None, y=(y0, y1) or None, score, inferred=None|'right'|'bottom'|'left'|'top').
    Pixel coordinates of the full-size image."""
    with rasterio.open(path) as ds:
        a = ds.read([1, 2, 3], out_shape=(3, ds.height // step, ds.width // step)).astype(np.int16)
        W, H = ds.width, ds.height
    dark = a.max(axis=0) < 110
    h, w = dark.shape
    big = W > 9000 or H > 6200
    if big:      # glued sheets: look for lines in the part where a normal sheet would be, from each corner
        col = np.maximum(dark[:min(h, 6200 // step)].mean(axis=0), dark[max(0, h - 6200 // step):].mean(axis=0))
        row = np.maximum(dark[:, :min(w, 9000 // step)].mean(axis=1), dark[:, max(0, w - 9000 // step):].mean(axis=1))
    else:
        col = dark.mean(axis=0); row = dark.mean(axis=1)
    xs = _lines(col, w, thr); ys = _lines(row, h, thr)
    px, py = set(), set()
    if big:      # a frame line can also be cut off at the edge of the paper: take the paper edges as weak candidates
        mn = a.min(axis=0); paper = ~((mn > 200) & (a.max(axis=0) - mn < 25))
        cols = np.where(paper.mean(axis=0) > 0.5)[0]; rows = np.where(paper.mean(axis=1) > 0.5)[0]
        if len(cols): px = {int(cols[0]) + 1, int(cols[-1]) - 1}
        if len(rows): py = {int(rows[0]) + 1, int(rows[-1]) - 1}
        xs = sorted(set(xs) | px); ys = sorted(set(ys) | py)
    V = lambda x, k, l: 0.6 if x in px else (dark[max(0, k):min(h, l), x].mean() if 0 <= x < w and l > k else 0.0)
    Hh = lambda y, i, j: 0.6 if y in py else (dark[y, max(0, i):min(w, j)].mean() if 0 <= y < h and j > i else 0.0)
    best = None
    def consider(score, i, j, k, l, inferred):
        nonlocal best
        if best is None or score > best[0]: best = (score, i, j, k, l, inferred)
    for i in xs:
        for j in xs:
            wd = (j - i) * step
            if not (wmin <= wd <= wmax): continue
            for k in ys:
                for l in ys:
                    ht = (l - k) * step
                    if ht > 0 and rmin <= wd / ht <= rmax:
                        consider((V(i, k, l) + V(j, k, l) + Hh(k, i, j) + Hh(l, i, j)) / 4 - abs(wd / ht - RATIO) + 0.05, i, j, k, l, None)
                if big:
                    hh = int(round(wd / RATIO / step))
                    for k in ys:                      # bottom line missing (piece glued below)
                        l = k + hh
                        if l < h + 5: consider((V(i, k, l) + V(j, k, l) + Hh(k, i, j)) / 3, i, j, k, l, 'bottom')
                    for l in ys:                      # top line missing
                        k = l - hh
                        if k > -5: consider((V(i, k, l) + V(j, k, l) + Hh(l, i, j)) / 3, i, j, k, l, 'top')
    if big:
        for k in ys:
            for l in ys:
                ht = (l - k) * step
                if not (wmin / rmax <= ht <= wmax / rmin): continue
                ww = int(round(ht * RATIO / step))
                for i in xs:                          # right line missing (piece glued to the right)
                    j = i + ww
                    if j < w + 5: consider((V(i, k, l) + Hh(k, i, j) + Hh(l, i, j)) / 3, i, j, k, l, 'right')
                for j in xs:                          # left line missing
                    i = j - ww
                    if i > -5: consider((V(j, k, l) + Hh(k, i, j) + Hh(l, i, j)) / 3, i, j, k, l, 'left')
    if best is None or best[0] < (0.5 if big else 0.3):
        return dict(W=W, H=H, x=None, y=None, score=None if best is None else round(float(best[0]), 2), inferred=None)
    s, i, j, k, l, inf = best
    return dict(W=W, H=H, x=(i * step, j * step), y=(k * step, l * step), score=round(float(s), 2), inferred=inf)

def map_region(fr, inset=18):
    """Part of the scan to tile: the frame, enlarged to the image edge on sides where a piece of map is glued on.
    -> (x0, y0, x1, y1), list of extended sides."""
    (fx0, fx1), (fy0, fy1) = fr['x'], fr['y']; W, H = fr['W'], fr['H']
    ext = []
    x0, x1, y0, y1 = fx0 + inset, fx1 - inset, fy0 + inset, fy1 - inset
    if W - fx1 > 1300: x1 = W; ext.append('right')
    if H - fy1 > 700:  y1 = H; ext.append('bottom')
    if fx0 > 700:      x0 = 0; ext.append('left')
    if fy0 > 1100:     y0 = 0; ext.append('top')
    return (max(0, x0), max(0, y0), min(W, x1), min(H, y1)), ext

def background_mask(rgb):
    """True where the scan shows the white scanner background instead of paper (only needed on glued sheets)."""
    a = rgb.astype(np.int16); mn = a.min(axis=0); mx = a.max(axis=0)
    bg = (mn > 200) & (mx - mn < 25)
    small = bg[::4, ::4]
    small = ndimage.binary_opening(small, structure=np.ones((5, 5)))
    lab, n = ndimage.label(small)
    if n:
        sizes = ndimage.sum(small, lab, range(1, n + 1))
        small = np.isin(lab, [k + 1 for k, s in enumerate(sizes) if s > 3000])
    small = ndimage.binary_dilation(small, structure=np.ones((5, 5)))
    return np.kron(small, np.ones((4, 4), bool))[:rgb.shape[1], :rgb.shape[2]] if small.any() else np.zeros(rgb.shape[1:], bool)

if __name__ == '__main__':
    import sys
    for p in sys.argv[1:]:
        fr = find_frame(p); print(p.split('/')[-1], fr, map_region(fr) if fr['x'] else '')
