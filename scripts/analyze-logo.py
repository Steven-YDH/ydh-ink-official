from PIL import Image
import collections

img = Image.open('public/images/logo.png')
print(f"Image format: {img.format}, Size: {img.size}, Mode: {img.mode}")

# 轉化為RGBA
img_rgba = img.convert('RGBA')
pixels = list(img_rgba.getdata())

# 統計一下主要的色彩
color_counts = collections.Counter(pixels)
print("Top 20 colors:")
for color, count in color_counts.most_common(20):
    print(f"Color: {color}, Count: {count}")
