from PIL import Image, ImageOps
import os

def create_favicon(input_path, output_path):
    print(f"Creating favicon from {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    
    # Get bounding box of non-transparent content
    bbox = img.getbbox()
    if not bbox:
        print("Logo is empty!")
        return
    
    # The logo is wide (485x106). The totem is usually the leftmost part.
    # Let's crop the actual content first
    content = img.crop(bbox)
    c_w, c_h = content.size
    
    # If it's very wide, take the left square
    if c_w > c_h * 1.5:
        # Take the leftmost square part
        totem = content.crop((0, 0, c_h, c_h))
    else:
        # It's already somewhat square, just pad to square
        max_dim = max(c_w, c_h)
        totem = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
        totem.paste(content, ((max_dim - c_w) // 2, (max_dim - c_h) // 2))
    
    # Resize to standard favicon sizes
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    totem.save(output_path, format="ICO", sizes=sizes)
    print(f"Favicon created and saved to {output_path}")

if __name__ == "__main__":
    logo_path = "public/images/logo.png"
    favicon_path = "public/favicon.ico"
    if os.path.exists(logo_path):
        create_favicon(logo_path, favicon_path)
    else:
        print(f"Logo not found at {logo_path}")
