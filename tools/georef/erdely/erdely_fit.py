import numpy as np, json
from pyproj import Transformer
LOCAL="+proj=aeqd +lat_0=46.4 +lon_0=24.4 +datum=WGS84 +units=m"
T=Transformer.from_crs("EPSG:4326",LOCAL,always_xy=True)
pts={ 'Tasnad':(341.5,278.9,47.477,22.584),'Szilagysomlyo':(389.4,419.5,47.231,22.800),'Kraszna':(396.8,452.3,47.160,22.890),'Zilah':(458.6,457.5,47.191,23.057),
'Radna':(1110.5,469.6,47.422,24.817),'Naszod':(954.0,505.3,47.283,24.407),'Des':(752.5,539.0,47.142,23.875),'Beszterce':(959.8,589.2,47.133,24.500),
'Kolozsvar':(604.5,695.4,46.770,23.590),'Teke':(788.8,698.7,46.916,24.508),'Kolozs':(683.8,738.6,46.749,23.833),'Szaszregen':(993.0,777.7,46.776,24.708),
'Gorgeny':(1074.4,802.9,46.772,24.857),'Torda':(649.6,819.7,46.567,23.783),'Gyergyoszentmiklos':(1289.6,882.6,46.722,25.600),'Marosvasarhely':(917.7,894.7,46.545,24.562),
'Abrudbanya':(382.6,920.3,46.274,23.063),'Radnot':(802.4,924.4,46.453,24.233),'Korosbanya':(256.8,943.9,46.172,22.717),'Nagyenyed':(597.0,950.4,46.310,23.717),
'Dicsoszentmarton':(821.7,971.9,46.330,24.270),'Zalatna':(424.8,999.1,46.107,23.228),'Kukullovar':(756.3,1006.4,46.247,24.172),'Szekelyudvarhely':(1152.9,1066.3,46.305,25.293),
'Segesvar':(966.7,1071.1,46.220,24.792),'Csikszereda':(1321.2,1078.5,46.361,25.802),'Alvinc':(489.1,1081.3,45.993,23.487),'Berethalom':(870.2,1088.3,46.135,24.522),
'Deva':(289.1,1096.3,45.883,22.900),'Szaszsebes':(495.5,1106.2,45.957,23.570),'Szaszvaros':(381.5,1140.8,45.838,23.200),'Vajdahunyad':(258.9,1155.5,45.750,22.900),
'Vizakna':(673.3,1175.3,45.878,24.058),'Nagysink':(922.4,1213.1,45.917,24.800),'Nagyszeben':(705.8,1225.2,45.797,24.152),'Hatszeg':(246.9,1232.5,45.608,22.950),
'Kezdivasarhely':(1398.2,1270.3,46.000,26.137),'Fogaras':(989.8,1271.3,45.842,24.974),'Kovaszna':(1406.4,1365.8,45.849,26.185),'Brasso':(1178.4,1408.9,45.642,25.589),
'Torcsvar':(1094.6,1445.3,45.515,25.367),'Magyarlapos':(748.2,369.3,47.452,23.861)}
names=list(pts); P=np.array([pts[n][:2] for n in names]); G=np.array([T.transform(pts[n][3],pts[n][2]) for n in names])
def fit(mask):
    A=np.c_[P[mask],np.ones(mask.sum())]; sol,*_=np.linalg.lstsq(A,G[mask],rcond=None); return sol
mask=np.ones(len(names),bool)
for it in range(3):
    sol=fit(mask); res=np.hypot(*(np.c_[P,np.ones(len(P))]@sol-G).T)
    mask=res<2.5*np.median(res[mask])+1
print('used',mask.sum(),'of',len(names),'| rms %.0f m, median %.0f m, max(used) %.0f m'%(np.sqrt((res[mask]**2).mean()),np.median(res[mask]),res[mask].max()))
for n,r in sorted(zip(names,res),key=lambda t:-t[1])[:8]: print('  %-18s %.0f m'%(n,r))
a=sol[0]; b=sol[1]
print('px->m: x-axis vector',a,'len %.1f m/px'%np.hypot(*a),'| y-axis',b,'len %.1f m/px'%np.hypot(*b))
print('cell: %.0f x %.0f m (expected 18206 x 12137)'%(83.2*np.hypot(*a),55.7*np.hypot(*b)),'rotation %.2f deg'%np.degrees(np.arctan2(a[1],a[0])))
json.dump(dict(local=LOCAL,sol=sol.tolist()),open('erdely_affine.json','w'))
