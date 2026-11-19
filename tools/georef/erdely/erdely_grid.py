import json, numpy as np
from pyproj import Transformer
COLS=[67,150,232,315,396,481,564,646,731,818,903,986,1068,1151,1233,1316,1399,1481]
X0, DX = 67.0, (1481-67)/17.0
Y0, DY = 235.0-55.74, (1518-235)/23.0       # row 0 starts one row above y=235
ROWS=[(1,3)],
START={0:[(1,3)],1:[(2,2)],2:[(8,2)],3:[(16,3)],4:[(25,2)],5:[(37,3)],6:[(48,3)],7:[(59,3)],8:[(69,3)],9:[(80,3)],10:[(92,3)],11:[(104,1)],12:[(119,1)],13:[(134,1)],
       14:[(149,1)],15:[(165,0)],16:[(181,0)],17:[(198,1)],18:[(214,1)],19:[(230,0)],20:[(247,1)],21:[(263,1),(267,11)],22:[(273,12)],23:[(278,12),(279,14)]}
END={0:1,1:7,2:15,3:24,4:36,5:47,6:58,7:68,8:79,9:91,10:103,11:118,12:133,13:148,14:164,15:180,16:197,17:213,18:229,19:246,20:262,21:272,22:277,23:280}
CELL={}
for r,segs in START.items():
    for k,(n0,c0) in enumerate(segs):
        n1 = segs[k+1][0]-1 if k+1 < len(segs) else END[r]
        if r==21 and k==0: n1=266
        if r==23 and k==0: n1=278
        for n in range(n0,n1+1): CELL[n]=(c0+n-n0, r)
assert len(CELL)==280, len(CELL)
A=json.load(open('/home/claude/tt/erdely_affine.json')); SOL=np.array(A['sol']); TW=Transformer.from_crs(A['local'],"EPSG:4326",always_xy=True)
def cell_to_lonlat(n, fx, fy):
    """fx, fy in 0..1 across the map frame of sheet n (from its top-left corner)."""
    c,r=CELL[n]; px=X0+(c+fx)*DX; py=Y0+(r+fy)*DY
    X,Y=np.array([px,py,1.0])@SOL
    return TW.transform(X,Y)
if __name__=='__main__':
    import math
    fr=dict(x=(152,7604),y=(432,5428))
    for name,(px,py),(lat,lon) in (('St Michael church',(3255,2975),(46.7697,23.5895)),('Citadel',(3040,2720),(46.7747,23.5822))):
        fx=(px-fr['x'][0])/(fr['x'][1]-fr['x'][0]); fy=(py-fr['y'][0])/(fr['y'][1]-fr['y'][0])
        lo,la=cell_to_lonlat(83,fx,fy)
        print(name,'predicted %.4f N %.4f E | real %.4f %.4f | off %.0f m E, %.0f m N'%(la,lo,lat,lon,(lo-lon)*111320*math.cos(math.radians(lat)),(la-lat)*111320))
    print('row spacing',DY,'col',DX)
