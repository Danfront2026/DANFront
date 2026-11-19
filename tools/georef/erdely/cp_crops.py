import sys, json, math, numpy as np, rasterio, warnings
warnings.filterwarnings('ignore')
sys.path.insert(0,'/home/claude/tt')
from erdely_grid import CELL, X0, DX, Y0, DY, SOL, A
from frame import find_frame
from pyproj import Transformer
from rasterio.windows import Window
from PIL import Image, ImageDraw
W='/mnt/user-data/uploads/DANFront/tools/georef/work/'
TL=Transformer.from_crs("EPSG:4326",A['local'],always_xy=True)
M=SOL[:2].T; t=SOL[2]; Minv=np.linalg.inv(M)
INV={v:k for k,v in CELL.items()}
LM={'027':('Zilah',47.1806,23.0570),'053':('Des',47.1433,23.8747),'066':('Beszterce',47.1336,24.4972),'128':('Marosvasarhely',46.5475,24.5669),
    '170':('Gyulafehervar',46.0676,23.5700),'183':('Deva castle',45.8886,22.8970),'191':('Segesvar',46.2194,24.7925),'196':('Csikszereda',46.3575,25.8020),
    '220':('Nagyszeben',45.7979,24.1503),'241':('Fogaras castle',45.8452,24.9740),'245':('Kezdivasarhely',46.0006,26.1375),'274':('Brasso',45.6410,25.5880)}
out={}
for s,(name,lat,lon) in LM.items():
    X,Y=TL.transform(lon,lat); X-=1584; Y-=1207            # first-stage offset seen at Kolozsvar
    px,py=Minv@(np.array([X,Y])-t)
    c=(px-X0)/DX; r=(py-Y0)/DY; cell=(int(math.floor(c)),int(math.floor(r))); sheet=INV.get(cell)
    fr=find_frame(W+s+'.tif')
    info=dict(name=name,pred_sheet=sheet,frame_x=fr['x'],frame_y=fr['y'],size=(fr['W'],fr['H']))
    if fr['x'] and fr['y'] and sheet==int(s):
        fx,fy=c-cell[0],r-cell[1]
        info['pred_px']=(int(fr['x'][0]+fx*(fr['x'][1]-fr['x'][0])),int(fr['y'][0]+fy*(fr['y'][1]-fr['y'][0])))
    out[s]=info; print(s,info)
json.dump(out,open('cp_pred.json','w'))
def crop(s,cx,cy,half=1100,size=760):
    with rasterio.open(W+s+'.tif') as ds:
        x0=max(0,min(ds.width-2*half,cx-half)); y0=max(0,min(ds.height-2*half,cy-half))
        a=ds.read([1,2,3],window=Window(x0,y0,2*half,2*half),out_shape=(3,size,size))
    im=Image.fromarray(a.transpose(1,2,0)); d=ImageDraw.Draw(im); k=size/(2*half)
    for v in range((x0//250+1)*250,x0+2*half,250):
        d.line([((v-x0)*k,0),((v-x0)*k,size)],fill=(255,0,0) if v%1000==0 else (255,160,160),width=1); 
        if v%500==0: d.text(((v-x0)*k+2,2),str(v),fill=(255,0,0))
    for v in range((y0//250+1)*250,y0+2*half,250):
        d.line([(0,(v-y0)*k),(size,(v-y0)*k)],fill=(0,0,255) if v%1000==0 else (160,160,255),width=1)
        if v%500==0: d.text((2,(v-y0)*k+2),str(v),fill=(0,0,255))
    d.text((6,size-14),s+' '+LM[s][0],fill=(0,0,0)); return im
ks=[s for s in out if 'pred_px' in out[s]]
for g in range(0,len(ks),4):
    sheet=Image.new('RGB',(1520,1520),'white')
    for i,s in enumerate(ks[g:g+4]):
        sheet.paste(crop(s,*out[s]['pred_px']),((i%2)*760,(i//2)*760))
    sheet.save(f'cp_{g//4}.jpg',quality=88)
print(ks)
