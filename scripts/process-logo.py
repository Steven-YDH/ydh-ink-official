from PIL import Image, ImageFilter, ImageOps
import os

def process_logo_advanced(input_path, output_path):
    print(f"Starting advanced processing for {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Create transparent layer and handle colors
    # We use a color-based mask instead of floodfill to handle internal loops
    pixels = img.load()
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Detect white background (internal and external)
            # Using a threshold for near-white pixels
            if r > 200 and g > 200 and b > 200:
                pixels[x, y] = (0, 0, 0, 0)
            # Detect black/dark text "DH" and convert to White/Gold
            # Here we use White (#FFFFFF) for maximum visibility on black background
            elif r < 150 and g < 150 and b < 150:
                pixels[x, y] = (255, 255, 255, 255)

    # 2. Auto crop redundant space
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        # Add 4px padding for breathing room
        img = ImageOps.expand(img, border=4, fill=(0,0,0,0))
    
    # 3. Alpha Channel Feathering (fix rough edges)
    # Split alpha, blur slightly, and merge back
    r, g, b, a = img.split()
    # 0.5 - 0.8 radius provides a sharp but clean edge
    a = a.filter(ImageFilter.GaussianBlur(radius=0.6))
    img = Image.merge("RGBA", (r, g, b, a))

    # 4. Save with optimization
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
