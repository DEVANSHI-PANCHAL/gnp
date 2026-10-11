from pathlib import Path
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

src = Path(r"d:\GNP\CODE\GNP Products")
dst = Path(r"d:\GNP\CODE\gifts-n-presents\public\products")
dst.mkdir(parents=True, exist_ok=True)

for heic in src.glob("*.HEIC"):
    slug = heic.stem.lower().replace(" ", "-")
    out = dst / f"{slug}.jpg"
    img = Image.open(heic)
    img = ImageOps.exif_transpose(img)
    if img.mode != "RGB":
        img = img.convert("RGB")
    max_side = 1600
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    img.save(out, "JPEG", quality=86, optimize=True)
    print(f"{heic.name} -> {out.name} {img.size}")
