#!/bin/bash
# Upload a tiles folder ({z}/{x}/{y}.png) to the R2 bucket behind danfront-tiles.
# The Worker serves any path straight from the bucket, so files under tiles-ext/
# appear at https://danfront-tiles.odulsuzkisafilm.workers.dev/tiles-ext/{z}/{x}/{y}.png
# The Arcanum tiles live under tiles/ and must not be overwritten -> keep PREFIX=tiles-ext.
#
# Usage:   bash upload_tiles.sh <tiles_dir> [prefix]
# Example: bash upload_tiles.sh work/14-20/tiles
# First time only: npx wrangler login
set -e
TILES_DIR="${1:?usage: upload_tiles.sh <tiles_dir> [prefix]}"
PREFIX="${2:-tiles-ext}"
BUCKET=danfront
if [ "$PREFIX" = "tiles" ]; then echo "Refusing to write into tiles/ (Arcanum layer)."; exit 1; fi
cd "$TILES_DIR"
files=$(find . -name '*.png' | sed 's|^\./||' | sort)
total=$(echo "$files" | wc -l | tr -d ' ')
i=0
for f in $files; do
  i=$((i+1)); echo "[$i/$total] $PREFIX/$f"
  npx --yes wrangler r2 object put "$BUCKET/$PREFIX/$f" --file "$f" --content-type image/png --remote >/dev/null
done
first=$(echo "$files" | head -1)
echo; echo "Done. Test (should print 200):"
curl -s -o /dev/null -w "%{http_code}\n" "https://danfront-tiles.odulsuzkisafilm.workers.dev/$PREFIX/$first"
