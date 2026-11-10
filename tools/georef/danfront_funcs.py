# ---- helper functions (pure Python; no Colab-specific calls) ----
import csv, json, math, os, shutil, subprocess, sys, time
import requests

def free_gb(path):
    return shutil.disk_usage(path).free / 1e9

def wait_for_disk(path, min_free=12, resume_at=20):
    """Pause while the local disk is nearly full (Drive needs time to sync its write cache)."""
    if free_gb(path) >= min_free:
        return
    print(f"  local disk low ({free_gb(path):.0f} GB free) - waiting for Drive to catch up ...")
    while free_gb(path) < resume_at:
        time.sleep(30)
    print("  continuing")

def download_parts(url, dest_prefix, part_size=4 * 1024**3, chunk=8 * 1024**2, disk_path="/content"):
    """Download url as raw volumes dest_prefix.001, .002, ... (7-Zip opens these directly).
    Finished parts are skipped, so the cell can be re-run with a fresh link after an interruption."""
    s = requests.Session()
    r = s.get(url, headers={"Range": "bytes=0-0"}, stream=True, timeout=60)
    cr = r.headers.get("Content-Range"); status = r.status_code; ctype = r.headers.get("Content-Type", ""); r.close()
    if status in (401, 403) or "text/html" in ctype:
        raise RuntimeError(f"The link was refused (HTTP {status}, {ctype}). It has probably expired: copy a fresh download link and run this cell again.")
    if status != 206 or not cr:
        raise RuntimeError(f"The server did not accept a ranged request (HTTP {status}). Send this message to Claude.")
    total = int(cr.split("/")[-1])
    size_file = dest_prefix + ".size"
    if os.path.exists(size_file):
        old = int(open(size_file).read().strip())
        if old != total:
            raise RuntimeError(f"This link points to a file of {total} bytes, but the parts already downloaded belong to a file of {old} bytes. Wrong link?")
    else:
        open(size_file, "w").write(str(total))
    nparts = math.ceil(total / part_size)
    print(f"archive size {total/1e9:.1f} GB -> {nparts} parts")
    t0 = time.time(); done_bytes = 0; new_bytes = 0
    for k in range(nparts):
        start = k * part_size; end = min(total, start + part_size) - 1; want = end - start + 1
        part = f"{dest_prefix}.{k+1:03d}"
        if os.path.exists(part) and os.path.getsize(part) == want:
            done_bytes += want; continue
        tmp = part + ".tmp"
        for attempt in range(5):
            try:
                r = s.get(url, headers={"Range": f"bytes={start}-{end}"}, stream=True, timeout=120)
                if r.status_code != 206:
                    raise RuntimeError(f"HTTP {r.status_code}")
                got = 0
                with open(tmp, "wb") as f:
                    for c in r.iter_content(chunk):
                        f.write(c); got += len(c)
                        wait_for_disk(disk_path)
                if got != want:
                    raise IOError(f"got {got} of {want} bytes")
                os.replace(tmp, part); break
            except Exception as e:
                print(f"  part {k+1}: {e} - retrying ({attempt+1}/5)"); time.sleep(20)
        else:
            raise RuntimeError("Download keeps failing. The link has probably expired: copy a fresh download link and run this cell again (finished parts are kept).")
        done_bytes += want; new_bytes += want
        rate = new_bytes / max(1, time.time() - t0) / 1e6
        print(f"part {k+1}/{nparts} done  ({done_bytes/1e9:.1f} of {total/1e9:.1f} GB, {rate:.0f} MB/s)")
    have = sum(os.path.getsize(f"{dest_prefix}.{k+1:03d}") for k in range(nparts))
    assert have == total, f"size mismatch: {have} != {total}"
    print("download complete and verified:", f"{total/1e9:.1f} GB")

def list_archive(first_volume, exe="7z"):
    """Return (properties dict, [(path, size)] of GeoTIFFs with coordinates) from the archive listing."""
    out = subprocess.run([exe, "l", "-slt", first_volume], capture_output=True, text=True)
    if out.returncode != 0:
        raise RuntimeError("7z could not read the archive:\n" + out.stdout[-2000:] + out.stderr[-2000:])
    head, _, body = out.stdout.partition("----------")
    props = dict(l.split(" = ", 1) for l in head.splitlines() if " = " in l)
    sheets = []
    for block in body.split("\n\n"):
        e = dict(l.split(" = ", 1) for l in block.splitlines() if " = " in l)
        p = e.get("Path", "")
        if not p.lower().endswith((".tif", ".tiff")) or e.get("Folder") == "+" or e.get("Attributes", "").startswith("D"):
            continue
        if "/raw/" in "/" + p.replace("\\", "/"):
            continue                      # RAW sheets (no coordinates) are not for this notebook
        sheets.append((p, int(e.get("Size", 0))))
    return props, sorted(sheets)

def load_done(done_csv):
    if not os.path.exists(done_csv):
        return {}
    with open(done_csv, newline="", encoding="utf-8") as f:
        return {r["path"]: r for r in csv.DictReader(f)}

DONE_FIELDS = ["path", "sheet", "status", "cell_i", "cell_j", "cell_coverage", "tiles"]

def run_batches(cfg, max_sheets=None, batch_size=12, bbox=None, workers=2):
    """Extract -> tile -> upload -> record, batch by batch. Safe to interrupt and re-run."""
    import tiles_2kf_batch as tb
    done = load_done(cfg["done_csv"])
    todo = [p for p, _ in cfg["sheets"] if p not in done]
    if max_sheets:
        todo = todo[:max_sheets]
    print(f"{len(done)} sheets already done, {len(todo)} to do in this run")
    if done and not os.path.exists(cfg["restored_marker"]):
        print("new session: fetching the tiles made so far back from R2 (needed to merge sheet edges) ...")
        rc = subprocess.run(["rclone", "copy", cfg["remote"], cfg["tiles"], "--transfers", "64", "--checkers", "64"]).returncode
        if rc != 0:
            raise RuntimeError("could not restore tiles from R2")
    os.makedirs(cfg["tiles"], exist_ok=True); open(cfg["restored_marker"], "w").close()
    bounds = json.load(open(cfg["bounds_json"])) if os.path.exists(cfg["bounds_json"]) else {}
    bounds = {int(z): b for z, b in bounds.items()}
    t0 = time.time(); n_done = 0
    for b0 in range(0, len(todo), batch_size):
        batch = todo[b0:b0 + batch_size]
        wait_for_disk(cfg["disk_path"])
        shutil.rmtree(cfg["extract"], ignore_errors=True); os.makedirs(cfg["extract"])
        lst = os.path.join(cfg["local"], "batch.txt")
        open(lst, "w", encoding="utf-8").write("\n".join(batch) + "\n")
        ex = subprocess.run([cfg.get("exe", "7z"), "x", cfg["first_volume"], f"-o{cfg['extract']}", f"-i@{lst}", "-y", "-bso0", "-bsp0"],
                            capture_output=True, text=True)
        if ex.returncode not in (0, 1):
            raise RuntimeError("7z extraction failed:\n" + ex.stdout[-1500:] + ex.stderr[-1500:])
        tifs, missing = [], []
        for p in batch:
            fp = os.path.join(cfg["extract"], p.replace("\\", "/"))
            (tifs if os.path.exists(fp) else missing).append((p, fp))
        results = tb.run([fp for _, fp in tifs], cfg["tiles"], 6, 14, workers=workers, bbox=bbox)
        changed = os.path.join(os.path.dirname(os.path.abspath(cfg["tiles"])), "changed_tiles.txt")
        if os.path.getsize(changed) > 0:
            for attempt in range(3):
                rc = subprocess.run(["rclone", "copy", cfg["tiles"], cfg["remote"], "--files-from", changed, "--no-traverse",
                                     "--transfers", "32"]).returncode
                if rc == 0:
                    break
                print("  upload failed, retrying ..."); time.sleep(15)
            else:
                raise RuntimeError("Upload to R2 failed 3 times. Check the R2 keys, then run this cell again.")
        rows = []
        for (p, _), r in zip(tifs, results):
            tb.merge_bounds(bounds, r["bounds"])
            c = r.get("cell", ["", ""])
            rows.append(dict(path=p, sheet=r["sheet"], status=r["status"], cell_i=c[0], cell_j=c[1],
                             cell_coverage=r.get("cell_coverage", ""), tiles=len(r["tiles"])))
        for p, _ in missing:
            rows.append(dict(path=p, sheet=os.path.basename(p), status="ERROR: not extracted", cell_i="", cell_j="", cell_coverage="", tiles=0))
        new_file = not os.path.exists(cfg["done_csv"])
        with open(cfg["done_csv"], "a", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=DONE_FIELDS)
            if new_file:
                w.writeheader()
            w.writerows(rows)
        json.dump(bounds, open(cfg["bounds_json"], "w"))
        shutil.rmtree(cfg["extract"], ignore_errors=True)
        n_done += len(batch)
        el = time.time() - t0; left = (len(todo) - n_done) * el / n_done
        bad = [r["sheet"] + ": " + r["status"] for r in rows if not r["status"].startswith("ok")]
        print(f"[{n_done}/{len(todo)}] batch done in total {el/60:.0f} min, about {left/60:.0f} min left" + (f"   notes: {bad}" if bad else ""))
    print("run finished")

def stitch_preview(tiles_dir, z, max_px=1600):
    """Stitch all local tiles of zoom z into one image (for a quick look)."""
    import glob
    from PIL import Image
    tiles = glob.glob(os.path.join(tiles_dir, str(z), "*", "*.png"))
    if not tiles:
        return None
    key = lambda p: (int(p.split(os.sep)[-2]), int(os.path.basename(p)[:-4]))
    xs = sorted({key(p)[0] for p in tiles}); ys = sorted({key(p)[1] for p in tiles})
    W = Image.new("RGBA", (256 * (xs[-1] - xs[0] + 1), 256 * (ys[-1] - ys[0] + 1)), (225, 225, 225, 255))
    for p in tiles:
        x, y = key(p); W.alpha_composite(Image.open(p).convert("RGBA"), ((x - xs[0]) * 256, (y - ys[0]) * 256))
    W = W.convert("RGB")
    if max(W.size) > max_px:
        W.thumbnail((max_px, max_px))
    return W

def summary(cfg):
    done = load_done(cfg["done_csv"])
    from collections import Counter
    c = Counter(r["status"].split(":")[0] for r in done.values())
    print("sheets:", len(done), dict(c))
    for r in done.values():
        if not r["status"].startswith("ok") or "irregular" in r["status"]:
            print("  ", r["sheet"], "-", r["status"], "coverage", r["cell_coverage"])
    b = json.load(open(cfg["bounds_json"]))
    print("\n--- copy everything below this line to Claude ---")
    print("sheets_ok:", sum(1 for r in done.values() if r["status"].startswith("ok")), "of", len(done))
    print("var kf2TileBounds = {")
    for z in sorted(b, key=int):
        v = b[z]; print(f"    {int(z)}: {{ xMin: {v['xMin']}, xMax: {v['xMax']}, yMin: {v['yMin']}, yMax: {v['yMax']} }},")
    print("};")

def repair(cfg):
    """After an interrupted run: fix half-written tiles and put failed sheets back on the to-do list."""
    import glob
    from PIL import Image
    bad = []
    for p in glob.glob(os.path.join(cfg["tiles"], "*", "*", "*.png")):
        try:
            with Image.open(p) as im:
                im.load()
        except Exception:
            bad.append(p)
    print(len(bad), "damaged tiles found")
    for p in bad:
        rel = os.path.relpath(p, cfg["tiles"]).replace(os.sep, "/")
        os.remove(p)
        subprocess.run(["rclone", "copyto", f"{cfg['remote']}/{rel}", p], capture_output=True)   # last good copy from R2, if any
        ok = False
        if os.path.exists(p):
            try:
                with Image.open(p) as im:
                    im.load()
                ok = True
            except Exception:
                os.remove(p)
        print("  ", rel, "- restored from R2" if ok else "- removed (will be rebuilt)")
    for t in glob.glob(os.path.join(cfg["tiles"], "*", "*", "*.tmp")):
        os.remove(t)
    if os.path.exists(cfg["done_csv"]):
        rows = list(csv.DictReader(open(cfg["done_csv"], newline="", encoding="utf-8")))
        keep = [r for r in rows if not r["status"].startswith("ERROR")]
        with open(cfg["done_csv"], "w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=DONE_FIELDS); w.writeheader(); w.writerows(keep)
        print(len(rows) - len(keep), "failed sheets put back on the to-do list:", [r["sheet"] for r in rows if r["status"].startswith("ERROR")])
