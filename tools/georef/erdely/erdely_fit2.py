"""Second stage: fit the sheet grid of the Transylvanian First Military Survey to control points measured on the sheets themselves."""
import json, sys, numpy as np
sys.path.insert(0,'/home/claude/tt')
from erdely_grid import CELL
from pyproj import Transformer
LOCAL="+proj=aeqd +lat_0=46.4 +lon_0=24.4 +datum=WGS84 +units=m"
T=Transformer.from_crs("EPSG:4326",LOCAL,always_xy=True)
CW, CH = 18206.244864, 12137.496576
FR=json.load(open('cp_pred.json')); FR['083']=dict(frame_x=(152,7604),frame_y=(432,5428))
# sheet, pixel on the sheet, lat, lon, what
CP=[('083',3255,2975,46.7697,23.5895,'Kolozsvar, St Michael church'),('083',3040,2720,46.7747,23.5822,'Kolozsvar, citadel'),
    ('053',1090,3180,47.1433,23.8747,'Des, centre'),('128',2150,4731,46.5478,24.5672,'Marosvasarhely, fortress'),
    ('066',5847,2735,47.1336,24.4972,'Beszterce, church'),('170',4927,3815,46.0680,23.5712,'Gyulafehervar, citadel'),
    ('220',4733,4529,45.7970,24.1520,'Nagyszeben, old town'),('241',1059,3192,45.8452,24.9740,'Fogaras, castle'),
    ('245',7500,3750,46.0006,26.1350,'Kezdivasarhely, west edge')]
U=[];G=[]
for s,px,py,lat,lon,_ in CP:
    f=FR[s]; c,r=CELL[int(s)]
    u=c+(px-f['frame_x'][0])/(f['frame_x'][1]-f['frame_x'][0]); v=r+(py-f['frame_y'][0])/(f['frame_y'][1]-f['frame_y'][0])
    U.append((u*CW,-v*CH)); G.append(T.transform(lon,lat))
U=np.array(U);G=np.array(G)
def report(name,pred):
    res=pred-G; d=np.hypot(*res.T); print(f'{name}: rms {np.sqrt((d**2).mean()):.0f} m, max {d.max():.0f} m')
    for (s,_,_,_,_,w),r,dd in zip(CP,res,d): print(f'    {s} {w:32s} {r[0]:7.0f} E {r[1]:7.0f} N  ({dd:.0f} m)')
# similarity (rotation, scale, shift)
A=[];b=[]
for (x,y),(X,Y) in zip(U,G): A+= [[x,-y,1,0],[y,x,0,1]]; b+=[X,Y]
p,*_=np.linalg.lstsq(np.array(A),np.array(b),rcond=None); a_,b_,tx,ty=p
report('similarity',np.c_[a_*U[:,0]-b_*U[:,1]+tx, b_*U[:,0]+a_*U[:,1]+ty]); print('   scale %.4f rotation %.2f deg'%(np.hypot(a_,b_),np.degrees(np.arctan2(b_,a_))))
# affine
A6=np.c_[U,np.ones(len(U))]; sol,*_=np.linalg.lstsq(A6,G,rcond=None); report('affine',A6@sol)
json.dump(dict(local=LOCAL,cell=[CW,CH],similarity=[a_,b_,tx,ty],affine=sol.tolist(),control_points=CP),open('erdely_grid_fit.json','w'),indent=1)
