"""Find the map frame (the drawn rectangle around the map itself) on a First Military Survey sheet that has no
coordinates and no .ini file. The frame is drawn with thick black lines; the map inside it is 1.5 times as wide as high
(9600 x 6400 Klafter). Title strip, scale bar and the column with place names lie outside of it."""
import numpy as np, rasterio, warnings
warnings.filterwarnings('ignore')

def _lines(prof, n, thr):
    return [i for i in range(1, n - 1) if prof[i] > thr and prof[i] >= prof[i - 1] and prof[i] >= prof[i + 1]]

def find_frame(path, step=4, wmin=6500, wmax=7750, rmin=1.45, rmax=1.52, thr=0.3):
    """-> dict(W, H, x=(x0, x1) or None, y=(y0, y1) or None, score). Pixel coordinates of the full-size image."""
    with rasterio.open(path) as ds:
        a = ds.read([1, 2, 3], out_shape=(3, ds.height // step, ds.width // step)).astype(np.int16)
        W, H = ds.width, ds.height
    dark = a.max(axis=0) < 110
    h, w = dark.shape
    col = dark.mean(axis=0); row = dark.mean(axis=1)
    xs = _lines(col, w, thr); ys = _lines(row, h, thr)
    best = None
    for i in xs:
        for j in xs:
            wd = (j - i) * step
            if not (wmin <= wd <= wmax): continue
            for k in ys:
                for l in ys:
                    ht = (l - k) * step
                    if ht <= 0: continue
                    r = wd / ht
                    if not (rmin <= r <= rmax): continue
                    # the four lines must really be dark along the frame, not only somewhere on the sheet
                    s = (dark[k:l, i].mean() + dark[k:l, j].mean() + dark[k, i:j].mean() + dark[l, i:j].mean()) / 4 - abs(r - 1.49)
                    if best is None or s > best[0]: best = (s, i, j, k, l)
    if best is None or best[0] < 0.3:
        return dict(W=W, H=H, x=None, y=None, score=None if best is None else round(float(best[0]), 2))
    s, i, j, k, l = best
    return dict(W=W, H=H, x=(i * step, j * step), y=(k * step, l * step), score=round(float(s), 2))

if __name__ == '__main__':
    import sys
    for p in sys.argv[1:]:
        print(p.split('/')[-1], find_frame(p))
