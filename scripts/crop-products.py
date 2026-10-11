from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw

src = Path(r"d:\GNP\CODE\gifts-n-presents\public\products")
CREAM = (247, 239, 230)

# (filename, left, top, right, bottom) on 1200x1600 originals
crops = {
    "cadbury-celebrations.jpg": ("cadbury.jpg", 200, 40, 1020, 1520),
    "candle-holder.jpg": ("candle-holder-cut.jpg", 220, 360, 980, 1180),
    "cardboard-magnetic-box.jpg": ("cardboard-box.jpg", 40, 360, 1160, 1520),
    "clay-diya.jpg": None,  # split below
    "colored-clay-diya.jpg": ("colorful-diya.jpg", 160, 140, 1080, 1320),
    "mini-scented-candle.jpg": ("scented-candle.jpg", 220, 240, 1000, 1080),
    "premium-gold-ceramic-diya.jpg": ("ceramic-diya.jpg", 160, 680, 1000, 1320),
    "pvc_bag_hamper.jpg": ("pvc-bag.jpg", 150, 40, 1040, 1540),
    "urli_diya.jpg": ("urli-candle.jpg", 60, 80, 1120, 1320),
    "hamper-varient-1.jpg": ("cardboard-open.jpg", 40, 80, 1160, 1480),
}


def pad_on_cream(img: Image.Image, pad=48) -> Image.Image:
    img = ImageEnhance.Brightness(img).enhance(1.08)
    img = ImageEnhance.Contrast(img).enhance(1.06)
    canvas = Image.new("RGB", (img.width + pad * 2, img.height + pad * 2), CREAM)
    canvas.paste(img, (pad, pad))
    return canvas


def save_crop(src_name, out_name, box):
    img = Image.open(src / src_name).convert("RGB")
    cut = img.crop(box)
    pad_on_cream(cut).save(src / out_name, "JPEG", quality=88, optimize=True)
    print("wrote", out_name, cut.size)


for src_name, spec in crops.items():
    if spec:
        save_crop(src_name, spec[0], spec[1:])

base = Image.open(src / "clay-diya.jpg").convert("RGB")
# small (bottom) and medium (top-right)
save_crop("clay-diya.jpg", "clay-diya-small.jpg", (300, 700, 820, 1240))
save_crop("clay-diya.jpg", "clay-diya-medium.jpg", (520, 180, 1120, 760))

jars = Image.open(src / "trail-mix-and-chocolate-jar.jpg").convert("RGB")
save_crop("trail-mix-and-chocolate-jar.jpg", "chocolates-jar.jpg", (40, 40, 700, 820))
save_crop("trail-mix-and-chocolate-jar.jpg", "trail-mix-jar.jpg", (40, 760, 740, 1540))

print("done")
