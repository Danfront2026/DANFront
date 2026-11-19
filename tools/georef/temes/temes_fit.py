import json, sys, numpy as np
sys.path.insert(0,'/home/claude/tt')
from temes_grid_cells import CELL
from pyproj import Transformer
LOCAL="+proj=aeqd +lat_0=45.5 +lon_0=21.3 +datum=WGS84 +units=m"
T=Transformer.from_crs("EPSG:4326",LOCAL,always_xy=True)
P={i['n']:i for i in json.load(open('/home/claude/tcp/pts2.json'))}
K=3400/640
MARK={1:(560,500),2:(420,380),3:(400,360),4:(300,375),6:(590,250),7:(395,175),8:(420,470),9:(420,250),10:(390,405),11:(175,240),
      13:(455,540),17:(340,205),18:(460,385),24:(315,205),25:(515,285),28:(490,225),30:(300,270,44.8231,20.4504)}
rows=[]
for n,m in MARK.items():
    i=P[n]; px=i['crop0'][0]+m[0]*K; py=i['crop0'][1]+m[1]*K
    lat,lon=(m[2],m[3]) if len(m)>2 else (i['lat'],i['lon'])
    rows.append(dict(name=i['town'],sheet=i['sheet'],px=px,py=py,lat=lat,lon=lon,fx=i['frame_x'],fy=i['frame_y']))
G=np.array([T.transform(r['lon'],r['lat']) for r in rows])
def build(mode):
    U=[]
    for r in rows:
        c,rr=CELL[r['sheet']]
        if mode=='frac':
            u=c+(r['px']-r['fx'][0])/(r['fx'][1]-r['fx'][0]); v=rr+(r['py']-r['fy'][0])/(r['fy'][1]-r['fy'][0]); U.append((u,-v))
        else:   # pixel offset from the map's top-left corner, common pixel size (cells in pixels)
            U.append((c*7500+(r['px']-r['fx'][0]), -(rr*5000+(r['py']-r['fy'][0]))))
    return np.array(U,float)
def design(U,deg):
    x,y=((U-U.mean(0))/U.std(0)).T; cols=[np.ones_like(x),x,y]
    if deg>=2: cols+=[x*x,x*y,y*y]
    return np.stack(cols,1)
for mode in ('frac','pix'):
    U=build(mode)
    for deg in (1,2):
        A=design(U,deg); sol=np.linalg.lstsq(A,G,rcond=None)[0]; res=np.hypot(*(A@sol-G).T)
        loo=[np.hypot(*(design(U,deg)[i]@np.linalg.lstsq(np.delete(A,i,0),np.delete(G,i,0),rcond=None)[0]-G[i])) for i in range(len(U))]
        print(f'{mode} deg{deg}: fit median {np.median(res):.0f} rms {np.sqrt((res**2).mean()):.0f} | loo median {np.median(loo):.0f} max {max(loo):.0f}')
        if mode=='frac' and deg==1:
            for r,e,l in sorted(zip(rows,res,loo),key=lambda t:-t[2]): print(f'    {r["name"][:22]:22s} {r["sheet"]} fit {e:6.0f} loo {l:6.0f}')
json.dump(rows,open('temes_cp.json','w'),indent=1)

from scipy.interpolate import RBFInterpolator
keep=np.array([r['name'] not in ('Facsad','Ujpalanka') for r in rows]); U=build('frac'); Uk,Gk=U[keep],G[keep]
for deg in (1,2):
    A=design(Uk,deg)
    loo=[np.hypot(*(design(Uk,deg)[i]@np.linalg.lstsq(np.delete(A,i,0),np.delete(Gk,i,0),rcond=None)[0]-Gk[i])) for i in range(len(Uk))]
    print(f'kept {keep.sum()} deg{deg}: loo median {np.median(loo):.0f} rms {np.sqrt(np.mean(np.square(loo))):.0f} max {max(loo):.0f}')
def pred(Utr,Gtr,Uq,sm):
    A=design(np.vstack([Utr,Uq]),1); At,Aq=A[:len(Utr)],A[len(Utr):]
    co=np.linalg.lstsq(At,Gtr,rcond=None)[0]; return Aq@co+RBFInterpolator(Utr,Gtr-At@co,kernel='thin_plate_spline',smoothing=sm)(Uq)
for sm in (0.5,2,5):
    loo=[np.hypot(*(pred(np.delete(Uk,i,0),np.delete(Gk,i,0),Uk[i:i+1],sm)-Gk[i]).ravel()) for i in range(len(Uk))]
    print(f'affine+spline sm{sm}: loo median {np.median(loo):.0f} rms {np.sqrt(np.mean(np.square(loo))):.0f} max {max(loo):.0f}')
