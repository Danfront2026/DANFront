"""Third stage: many control points measured on the sheets -> grid-to-ground transform with cross-validation."""
import json, sys, numpy as np
sys.path.insert(0,'/home/claude/tt')
from erdely_grid_cells import CELL
from pyproj import Transformer
LOCAL="+proj=aeqd +lat_0=46.4 +lon_0=24.4 +datum=WGS84 +units=m"
T=Transformer.from_crs("EPSG:4326",LOCAL,always_xy=True)
CW, CH = 18206.244864, 12137.496576
P=json.load(open('/home/claude/cpz/points.json')); FRAME={i['sheet']:(i['frame_x'],i['frame_y']) for i in P if i['status']=='ok'}
FRAME.update({83:((152,7604),(432,5428)),53:((148,7568),(452,5488)),128:((116,7540),(428,5424)),66:((128,7588),(452,5464)),170:((120,7568),(412,5408)),
              220:((92,7520),(428,5408)),241:((116,7532),(424,5436)),245:((148,7616),(412,5404)),
              191:((112,7034),(369,5068)),196:((116,7040),(369,5056))})        # 191/196: smaller scan, frame read by hand
# sheet, px, py, lat, lon, name
CP=[(83,3255,2975,46.7697,23.5895,'Kolozsvar church'),(53,1090,3180,47.1433,23.8747,'Des'),(128,2150,4731,46.5478,24.5672,'Marosvasarhely fortress'),
 (66,5847,2735,47.1336,24.4972,'Beszterce church'),(170,4927,3815,46.0680,23.5712,'Gyulafehervar citadel'),(220,4733,4529,45.7970,24.1520,'Nagyszeben'),
 (241,1059,3192,45.8452,24.9740,'Fogaras castle'),(245,7500,3750,46.0006,26.1350,'Kezdivasarhely W edge'),
 (3,2405,4533,47.477,22.584,'Tasnad'),(26,6413,1763,47.2306,22.8006,'Szilagysomlyo'),(38,6019,811,47.1806,23.0570,'Zilah'),(28,5458,3394,47.2583,23.2560,'Zsibo'),
 (21,3251,3174,47.4525,23.8600,'Magyarlapos'),(46,3206,3026,47.4217,24.8169,'Radna'),(54,3714,3556,47.1803,24.1792,'Bethlen'),(64,955,3425,47.0283,23.9069,'Szamosujvar'),
 (60,2406,4364,46.8680,23.0350,'Banffyhunyad'),(82,4381,2206,46.7556,23.3833,'Gyalu'),(110,399,3120,46.5714,23.7847,'Torda'),(87,3875,2643,46.9150,24.5100,'Teke'),
 (100,1161,5150,46.7756,24.7061,'Szaszregen'),(100,3774,2135,46.8597,24.7672,'Marosvecs castle'),(132,5251,3918,46.7228,25.5961,'Gyergyoszentmiklos'),
 (145,2845,1564,46.5961,25.0744,'Szovata'),(139,3733,4293,46.3106,23.7181,'Nagyenyed citadel'),(172,1293,1405,46.1756,23.9156,'Balazsfalva'),
 (156,6158,2311,46.3306,24.2706,'Dicsoszentmarton'),(173,7056,4568,46.1645,24.3510,'Medgyes'),(174,6970,3450,46.2281,24.5750,'Erzsebetvaros'),
 (191,5993,612,46.2194,24.7925,'Segesvar citadel'),(196,700,1060,46.3575,25.8020,'Csikszereda castle'),(152,1825,5008,46.1090,23.2250,'Zalatna'),
 (183,5188,2424,45.8886,22.8970,'Deva castle'),(200,6458,1530,45.8383,23.1997,'Szaszvaros'),(186,4131,3556,45.9569,23.5694,'Szaszsebes'),
 (215,3463,5169,45.6078,22.9506,'Hatszeg'),(223,3830,3789,45.9160,24.8010,'Nagysink'),(225,2919,1699,46.0370,25.2220,'Kohalom'),
 (260,3549,2401,45.8650,25.7870,'Sepsiszentgyorgy'),(272,586,849,45.8494,26.1850,'Kovaszna'),(253,7101,1251,45.6667,24.2611,'Talmacs')]
U=[];G=[]
for s,px,py,lat,lon,_ in CP:
    (fx0,fx1),(fy0,fy1)=FRAME[s]; c,r=CELL[s]
    U.append(((c+(px-fx0)/(fx1-fx0))*CW, -(r+(py-fy0)/(fy1-fy0))*CH)); G.append(T.transform(lon,lat))
U=np.array(U);G=np.array(G); U0=U.mean(axis=0); S=1e5
def design(U,deg):
    x,y=((U-U0)/S).T; cols=[np.ones_like(x),x,y]
    if deg>=2: cols+=[x*x,x*y,y*y]
    if deg>=3: cols+=[x**3,x*x*y,x*y*y,y**3]
    return np.stack(cols,1)
def fit(U,G,deg,w=None):
    A=design(U,deg); w=np.ones(len(U)) if w is None else w
    return np.linalg.lstsq(A*w[:,None],G*w[:,None],rcond=None)[0]
def stats(d): return 'rms %.0f, median %.0f, max %.0f m'%(np.sqrt((d**2).mean()),np.median(d),d.max())
names=[c[5] for c in CP]
for deg in (1,2,3):
    res=np.hypot(*(design(U,deg)@fit(U,G,deg)-G).T)
    loo=np.array([np.hypot(*(design(U[i:i+1],deg)@fit(np.delete(U,i,0),np.delete(G,i,0),deg)-G[i]).ravel()) for i in range(len(U))])
    print(f'degree {deg}: fit {stats(res)} | leave-one-out {stats(loo)}')
    if deg==2:
        for n,r,l in sorted(zip(names,res,loo),key=lambda t:-t[2])[:10]: print(f'     {n:26s} fit {r:5.0f}  loo {l:5.0f}')
        keep=loo<2.5*np.median(loo)+200
print('robust (drop outliers):',[n for n,k in zip(names,keep) if not k])
for deg in (1,2,3):
    Uk,Gk=U[keep],G[keep]
    res=np.hypot(*(design(Uk,deg)@fit(Uk,Gk,deg)-Gk).T)
    loo=np.array([np.hypot(*(design(Uk[i:i+1],deg)@fit(np.delete(Uk,i,0),np.delete(Gk,i,0),deg)-Gk[i]).ravel()) for i in range(len(Uk))])
    print(f'degree {deg} ({keep.sum()} pts): fit {stats(res)} | leave-one-out {stats(loo)}')
json.dump(dict(local=LOCAL,cell=[CW,CH],u0=U0.tolist(),scale=S,degree=2,coef=fit(U[keep],G[keep],2).tolist(),smoothing=0.05,
               grid_xy=U[keep].tolist(),ground_xy=G[keep].tolist(),
               control_points=[dict(sheet=c[0],px=c[1],py=c[2],lat=c[3],lon=c[4],name=c[5],used=bool(k)) for c,k in zip(CP,keep)]),open('erdely_poly_fit.json','w'),indent=1)

# quadratic trend + smooth interpolation of what is left (thin-plate spline), checked by leave-one-out
from scipy.interpolate import RBFInterpolator
Uk,Gk=U[keep],G[keep]
def predict(Utr,Gtr,Uq,smooth):
    co=fit(Utr,Gtr,2); r=Gtr-design(Utr,2)@co
    return design(Uq,2)@co + RBFInterpolator(Utr/S,r,kernel='thin_plate_spline',smoothing=smooth)(Uq/S)
for sm in (0,0.01,0.1,1):
    loo=np.array([np.hypot(*(predict(np.delete(Uk,i,0),np.delete(Gk,i,0),Uk[i:i+1],sm)-Gk[i]).ravel()) for i in range(len(Uk))])
    print(f'quadratic + spline (smoothing {sm}): leave-one-out {stats(loo)}')
