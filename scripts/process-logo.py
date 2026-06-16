from PIL import Image, ImageFilter, ImageOps, ImageDraw
import os

def process_logo_advanced(input_path, output_path):
    print(f"Starting advanced seed-fill processing for {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # 1. Precise Background Removal using Floodfill (Seed Fill)
    # This protects internal white elements like "DH" while removing edge-connected white
    # We fill from the 4 corners to ensure all connected background is caught
    # A threshold of 30 helps with anti-aliasing artifacts at the edges
    bg_color = (0, 0, 0, 0)
    ImageDraw.floodfill(img, xy=(0, 0), value=bg_color, thresh=30)
    ImageDraw.floodfill(img, xy=(width-1, 0), value=bg_color, thresh=30)
    ImageDraw.floodfill(img, xy=(0, height-1), value=bg_color, thresh=30)
    ImageDraw.floodfill(img, xy=(width-1, height-1), value=bg_color, thresh=30)

    # 2. Convert remaining dark pixels (text) to White for dark mode compatibility
    pixels = img.load()
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a > 0: # Only process non-transparent pixels
                # If it's a dark pixel (like the original black text), make it white
                if r < 180 and g < 180 and b < 180:
                    pixels[x, y] = (255, 255, 255, 255)

    # 3. Auto crop redundant space
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        # Add 8px padding for breathing room (increased for better quality)
        img = ImageOps.expand(img, border=8, fill=(0,0,0,0))
    
    # 4. Alpha Channel Smoothing
    r, g, b, a = img.split()
    a = a.filter(ImageFilter.GaussianBlur(radius=0.4))
    img = Image.merge("RGBA", (r, g, b, a))

    # 5. Save with maximum quality
    img.save(output_path, "PNG", optimize=True)
    print(f"Logo optimized and saved to {output_path}. Size: {img.size}")


if __name__ == "__main__":
    # Source priority: raw -> backup -> logo
    raw_path = "public/logo_raw.png"
    backup_path = "public/images/logo_backup.png"
    logo_path = "public/images/logo.png"
    
    source_path = None
    if os.path.exists(raw_path):
        source_path = raw_path
    elif os.path.exists(backup_path):
        source_path = backup_path
    elif os.path.exists(logo_path):
        source_path = logo_path
    
    if source_path:
        process_logo_advanced(source_path, logo_path)
    else:
        print("No source logo file found.")
