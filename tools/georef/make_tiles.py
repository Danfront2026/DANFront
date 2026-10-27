"""
make_tiles.py - cut XYZ tiles (EPSG:3857, 256 px PNG with transparency) from a sheet.

Usage:  python3 make_tiles.py <source.tif> sheets/<sheet>/fit_result.json <tiles_out_dir> 6 14

Uses the transform from fit.py, clips the sheet to clip_px (the map frame, from the
Arcanum .ini file: clip=x,y,w,h  ->  clip_px = [x, y, x+w, y+h]) and treats
negative / pure black pixels as transparent. Writes tile_bounds.json next to the
tiles directory (paste/merge it into extTileBounds in maps.html).
"""
import json, sys, os, math, numpy as np, rasterio
from rasterio.transform import Affine
from rasterio.warp import reproject, Resampling
from rasterio.windows import Window
from PIL import Image
src_path, fit_path, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
zmin, zmax = int(sys.argv[4]), int(sys.argv[5])
g=json.load(open(fit_path)); t=g["transform_3857"]; a,c,tx,ty=t["a"],t["c"],t["tx"],t["ty"]
x0,y0,x1,y1=g["clip_px"]
with rasterio.open(src_path) as ds:
    raw=ds.read(window=Window(x0,y0,x1-x0,y1-y0))
valid=(raw[0]>=0)&(raw[1]>=0)&(raw[2]>=0)&~((raw[0]==0)&(raw[1]==0)&(raw[2]==0))
rgba=np.zeros((4,)+raw.shape[1:],np.uint8)
rgba[:3]=np.clip(raw,0,255).astype(np.uint8); rgba[3]=np.where(valid,255,0)
del raw
# pixel (col,row) of the clipped array -> original px = col+x0, py = row+y0
# X = a*px + c*py + tx ; Y = c*px - a*py + ty
src_tf=Affine(a, c, tx + a*x0 + c*y0,  c, -a, ty + c*x0 - a*y0)
H,W=rgba.shape[1:]
cx=[src_tf*(0,0),src_tf*(W,0),src_tf*(0,H),src_tf*(W,H)]
minX,maxX=min(p[0] for p in cx),max(p[0] for p in cx); minY,maxY=min(p[1] for p in cx),max(p[1] for p in cx)
R=20037508.342789244
def tile_range(z):
    n=2**z; size=2*R/n
    return (int((minX+R)//size), int((maxX+R)//size), int((R-maxY)//size), int((R-minY)//size), size)
bounds={}; count=0
for z in range(zmin,zmax+1):
    xa,xb,ya,yb,size=tile_range(z); bounds[z]=dict(xMin=xa,xMax=xb,yMin=ya,yMax=yb)
    for x in range(xa,xb+1):
        for y in range(ya,yb+1):
            dst=np.zeros((4,256,256),np.uint8)
            dtf=Affine(size/256,0,-R+x*size,0,-size/256,R-y*size)
            reproject(rgba,dst,src_transform=src_tf,src_crs="EPSG:3857",dst_transform=dtf,dst_crs="EPSG:3857",
                      resampling=Resampling.average if z<14 else Resampling.bilinear)
            if dst[3].max()==0: continue
            os.makedirs(f"{out_dir}/{z}/{x}",exist_ok=True)
            Image.fromarray(dst.transpose(1,2,0),"RGBA").save(f"{out_dir}/{z}/{x}/{y}.png",optimize=True)
            count+=1
    print("z",z,bounds[z])
json.dump(bounds,open(os.path.join(os.path.dirname(os.path.abspath(out_dir)),"tile_bounds.json"),"w"),indent=1)
print("tiles written:",count)
