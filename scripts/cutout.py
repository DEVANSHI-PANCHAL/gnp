"""Copy branded packs and knock cream studio backgrounds to transparent PNG."""
from collections import deque
from pathlib import Path
from shutil import copyfile

from PIL import Image

assets = Path(r"C:\Users\DEVANSHI\.cursor\projects\d-GNP-CODE\assets")
dst = Path(r"d:\GNP\CODE\gifts-n-presents\public\products")

for name in (
    "pvc-bag-brand.jpg",
    "cardboard-box-brand.jpg",
    "cardboard-open-brand.jpg",
    "clay-diya-medium-brand.jpg",
):
    copyfile(assets / name, dst / name)
    print("copied", name)

# Catalog still uses cream JPGs; preview uses these PNGs.
sources = {
    "trail-mix-jar-ai.jpg": "trail-mix-jar-cut.png",
    "jute-potli-mix-ai.jpg": "jute-potli-mix-cut.png",
    "cadbury-ai.jpg": "cadbury-cut.png",
    "chocolates-jar-ai.jpg": "chocolates-jar-cut.png",
    "jute-potli-choco-ai.jpg": "jute-potli-choco-cut.png",
    "urli-candle-ai.jpg": "urli-candle-cut.png",
    "candle-holder-ai.jpg": "candle-holder-cut.png",
    "scented-candle-ai.jpg": "scented-candle-cut.png",
    "diwali-card-ai.jpg": "diwali-card-cut.png",
    "ferrero-original.jpg": "ferrero-cut.png",
    "kaju-katli-200.jpg": "kaju-katli-cut.png",
    "clay-diya-small-ai.jpg": "clay-diya-small-cut.png",
    "clay-diya-medium-brand.jpg": "clay-diya-medium-cut.png",
    "colorful-diya-ai.jpg": "colorful-diya-cut.png",
    "ceramic-diya-ai.jpg": "ceramic-diya-cut.png",
}

THRESHOLD = 42


def dist(a, b):
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def knock_bg(src: Path, out: Path) -> None:
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()
    bg = px[2, 2][:3]
    seen = [[False] * w for _ in range(h)]
    q = deque()
    for x, y in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1), (w // 2, 0), (w // 2, h - 1)]:
        q.append((x, y))
        seen[y][x] = True
    while q:
        x, y = q.popleft()
        r, g, b, _ = px[x, y]
        if dist((r, g, b), bg) > THRESHOLD:
            continue
        alpha = max(0, int(255 * (dist((r, g, b), bg) / THRESHOLD)))
        if dist((r, g, b), bg) < THRESHOLD * 0.72:
            alpha = 0
        px[x, y] = (r, g, b, alpha)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx]:
                seen[ny][nx] = True
                q.append((nx, ny))
    img.save(out, "PNG")
    print("cutout", out.name)


for src_name, out_name in sources.items():
    knock_bg(dst / src_name, dst / out_name)
