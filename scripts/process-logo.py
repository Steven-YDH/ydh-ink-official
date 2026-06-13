from PIL import Image
import os

def remove_background_and_crop(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    width, height = img.size
    from PIL import ImageDraw, ImageOps
    
    # 1. Expand a bit to ensure background is connected at edges
    img = ImageOps.expand(img, border=2, fill=(0,0,0,0))
    width, height = img.size
    
    # 2. Detect corner color to use as seed for flood fill
    # We check the 4 corners of the original image (now at 2,2 offset)
    seeds = [(2, 2), (width-3, 2), (2, height-3), (width-3, height-3)]
    
    # Perform flood fill from corners
    # Use a tolerance (thresh) to handle non-pure colors
    thresh = 80 # Even higher threshold
    
    for seed in seeds:
        target_color = img.getpixel(seed)
        brightness = sum(target_color[:3]) / 3
        # If it's not transparent and looks like background
        if target_color[3] > 0 and (brightness < 80 or brightness > 180):
            print(f"Flooding from {seed} with color {target_color} and brightness {brightness}")
            ImageDraw.floodfill(img, seed, (0, 0, 0, 0), thresh=thresh)
            
    # 3. Get bounding box and crop
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        # High quality save
        img_cropped.save(output_path, "PNG", optimize=True)
        print(f"Saved processed logo to {output_path}. Size: {img_cropped.size}")
    else:
        print("Failed to detect logo content after flood fill.")


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
        remove_background_and_crop(source_path, logo_path)
    else:
        print("No source logo file found.")
