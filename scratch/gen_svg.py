import math

cx, cy = 250, 250
R = 240
r = 114

# 5 sectors matching reference image angles
# Sector 1: Top-Left (210° to 282°)
# Sector 2: Top-Right (286° to 358°)
# Sector 3: Mid-Right (2° to 74°)
# Sector 4: Bottom-Right (78° to 150°)
# Sector 5: Bottom-Left (154° to 206°)

sectors = [
    (210, 282, 'Sector 1: Top-Left (Buildings)'),
    (286, 358, 'Sector 2: Top-Right (Renewable Energy)'),
    (2, 74, 'Sector 3: Mid-Right (Healthcare)'),
    (78, 150, 'Sector 4: Bottom-Right (Water Resource)'),
    (154, 206, 'Sector 5: Bottom-Left (Climate Adaptation)')
]

def pt(radius, deg):
    rad = math.radians(deg)
    x = cx + radius * math.cos(rad)
    y = cy + radius * math.sin(rad)
    return round(x, 1), round(y, 1)

output = []
output.append("<!-- SVG Clip Paths and Sector Outlines -->")
for i, (a1, a2, label) in enumerate(sectors, 1):
    x1, y1 = pt(R, a1)
    x2, y2 = pt(R, a2)
    x3, y3 = pt(r, a2)
    x4, y4 = pt(r, a1)
    
    d = f"M {x1},{y1} A {R},{R} 0 0,1 {x2},{y2} L {x3},{y3} A {r},{r} 0 0,0 {x4},{y4} Z"
    output.append(f"<!-- {label} -->")
    output.append(f'<clipPath id="clip-sec-{i}">')
    output.append(f'  <path d="{d}" />')
    output.append(f'</clipPath>')

with open("scratch/svg_paths.txt", "w") as f:
    f.write("\n".join(output))

print("SVG Clip Paths generated successfully!")
