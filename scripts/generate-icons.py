#!/usr/bin/env python3
"""Génère toutes les icônes du site à partir du logo source.

  python3 scripts/generate-icons.py

Deux réglages pilotent tout :

  BOTTOM_KEEP  le logo entier est plus haut que large (ratio 0,80). Dans une
               tuile carrée il est donc bridé par sa hauteur : réduire la marge
               ne l'agrandit pas, le blanc est sur les côtés. On coupe la pointe
               basse du costume pour rapprocher le logo du carré.
  PAD          marge autour du logo, en fraction du côté de la tuile.

Piège : Image.thumbnail() ne fait que réduire. Sur les grandes icônes (iOS 180,
Android 192 et 512) le logo source était plus petit que la cible et restait à sa
taille d'origine, n'occupant que la moitié de la tuile. D'où fit() ci-dessous.
"""
from PIL import Image, ImageDraw
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src/assets/brand/netfox-logo-source.png"
OUT = ROOT / "public"

TILE = (255, 255, 255, 255)  # tuile blanche, logo sombre
BOTTOM_KEEP = 0.90
PAD = 0.06                   # marge des favicons de navigateur
PAD_TOUCH = 0.08             # marge iOS / Android (leur masque rogne déjà)
PAD_MASKABLE = 0.22          # Android rogne en cercle : zone sûre de 80 %
RADIUS = 0.16                # arrondi des favicons, en fraction du côté


def logo():
    """Logo détouré de son fond blanc, ramené à son contenu utile."""
    im = Image.open(SRC).convert("RGBA")
    px = im.load()
    w, h = im.size
    bg = px[0, 0][:3]
    box = None
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a > 16 and abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) > 40:
                box = (x, y, x, y) if box is None else (
                    min(box[0], x), min(box[1], y), max(box[2], x), max(box[3], y))
    im = im.crop((box[0], box[1], box[2] + 1, box[3] + 1))
    if BOTTOM_KEEP < 1:
        im = im.crop((0, 0, im.width, int(im.height * BOTTOM_KEEP)))
    return im


def fit(img, box):
    """Met à l'échelle en gardant le ratio, en agrandissant si besoin."""
    r = min(box / img.width, box / img.height)
    return img.resize((max(1, round(img.width * r)), max(1, round(img.height * r))), Image.LANCZOS)


def tile(src, size, pad, radius=0.0):
    im = Image.new("RGBA", (size, size), TILE)
    fitted = fit(src, round(size * (1 - 2 * pad)))
    im.paste(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2), fitted)
    if radius:
        mask = Image.new("L", (size * 4, size * 4), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            (0, 0, size * 4 - 1, size * 4 - 1), radius=int(size * 4 * radius), fill=255)
        im.putalpha(mask.resize((size, size), Image.LANCZOS))
    return im


if __name__ == "__main__":
    src = logo()
    print(f"logo utile : {src.width}x{src.height} (ratio {src.width / src.height:.2f})")

    for s in (16, 32, 96):
        tile(src, s, PAD, RADIUS).save(OUT / f"favicon-{s}.png")

    # Le .ico doit partir d'une grande image : PIL ne sait pas agrandir la source.
    tile(src, 256, PAD, RADIUS).save(
        OUT / "favicon.ico", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (256, 256)])

    # iOS et Android appliquent leur propre masque : pas d'arrondi ici.
    tile(src, 180, PAD_TOUCH).save(OUT / "apple-touch-icon.png")
    tile(src, 192, PAD_TOUCH).save(OUT / "icon-192.png")
    tile(src, 512, PAD_TOUCH).save(OUT / "icon-512.png")
    tile(src, 512, PAD_MASKABLE).save(OUT / "icon-maskable-512.png")
    print("icônes générées dans public/")
