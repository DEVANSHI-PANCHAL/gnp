from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

out = Path(r"d:\GNP\CODE\gifts-n-presents\public\products")
CREAM = (247, 239, 230)
BURG = (130, 16, 53)
GOLD = (244, 164, 92)

labels = {
    "jute-potli-mix.jpg": "Trail mix\njute potli",
    "jute-potli-choco.jpg": "Premium chocolates\njute potli",
    "ferrero.jpg": "Ferrero Rocher",
    "diwali-card.jpg": "Customised\nDiwali card",
}

try:
    font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 42)
    small = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 22)
except OSError:
    font = ImageFont.load_default()
    small = font

for name, text in labels.items():
    img = Image.new("RGB", (800, 800), CREAM)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((40, 40, 760, 760), radius=24, outline=GOLD, width=4)
    d.ellipse((320, 140, 480, 300), outline=BURG, width=6)
    y = 360
    for line in text.split("\n"):
        bbox = d.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        d.text(((800 - w) / 2, y), line, fill=BURG, font=font)
        y += 56
    d.text((250, 680), "Photo coming soon", fill=GOLD, font=small)
    img.save(out / name, "JPEG", quality=88)
    print("wrote", name)
