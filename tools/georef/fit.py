"""
fit.py - georeference a map sheet from control points.

Usage:  python3 fit.py sheets/<sheet>/gcps.json sheets/<sheet>/fit_result.json

gcps.json lists control points: px/py = pixel position on the source GeoTIFF,
lat/lon = today's position of the same feature (WGS84). role "fit" points are used
to compute the transform, role "check" points are only used to test it.

Model: similarity transform (shift + rotation + uniform scale) from pixels to
Web Mercator (EPSG:3857). Mercator is conformal, so a similarity is valid locally,
and with clustered points it is much more robust than a full affine.
Sanity check: the fitted ground pixel size should be close to the sheet's nominal
value (First/Second Military Survey ECW scans: 2.4384 m = 1:28 800 at 300 dpi).
"""
import json, sys, numpy as np
from pyproj import Transformer
g=json.load(open(sys.argv[1]))
to3857=Transformer.from_crs("EPSG:4326","EPSG:3857",always_xy=True)
pts=g["points"]
for p in pts: p["X"],p["Y"]=to3857.transform(p["lon"],p["lat"])
fit=[p for p in pts if p["role"]=="fit"]
# similarity: X = a*px - b*py + tx ; Y = b*px + a*py + ty   (py grows downward -> handled by sign in fit)
A=[];B=[]
for p in fit:
    A.append([p["px"], p["py"],1,0]); B.append(p["X"])   # X = a*px + c*py + tx
    A.append([-p["py"],p["px"],0,1]); B.append(p["Y"])   # Y = c*px - a*py + ty
# model: X = a*px + b*py + tx ; Y = b*px... use general param: X = a*px + c*py + tx, Y = c*px - a*py + ty
# (reflection because image y is down)  -> solve
sol,*_=np.linalg.lstsq(np.array(A,float),np.array(B,float),rcond=None)
a,c,tx,ty=sol
def fwd(px,py): return a*px+c*py+tx, c*px-a*py+ty
scale_3857=np.hypot(a,c); rot=np.degrees(np.arctan2(c,a))   # 0 = sheet is north-up
k=1/np.cos(np.radians(47.52))   # mercator scale factor at Budapest
print(f"fitted pixel size: {scale_3857:.3f} m (Web Mercator) = {scale_3857/k:.3f} m on the ground   [nominal 2.438 m]")
print(f"rotation: {rot:+.2f} deg")
res=[]
for p in pts:
    X,Y=fwd(p["px"],p["py"]); d=np.hypot(X-p["X"],Y-p["Y"])/k
    p["fitX"],p["fitY"]=X,Y; p["resid_m"]=round(float(d))
    res.append(d) if p["role"]=="fit" else None
    print(f'  {p["role"]:5s} {p["id"]:9s} residual {d:6.0f} m')
print(f"RMS (fit points): {np.sqrt(np.mean(np.square(res))):.0f} m")
g["transform_3857"]={"a":a,"c":c,"tx":tx,"ty":ty,"model":"X=a*px+c*py+tx ; Y=c*px-a*py+ty"}
inv=Transformer.from_crs("EPSG:3857","EPSG:4326",always_xy=True)
for p in pts: p["fit_lon"],p["fit_lat"]=inv.transform(p["fitX"],p["fitY"])
json.dump(g,open(sys.argv[2],"w"),indent=1,ensure_ascii=False)
