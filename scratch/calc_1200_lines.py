import math

cx, cy = 600, 300
R_outer = 175
R_inner = 75

sectors = [
    {
        'id': 1,
        'title': 'Buildings (Top-Left)',
        'a1': 214, 'a2': 284,
        'card_edge': (365, 110)
    },
    {
        'id': 2,
        'title': 'Renewable (Top-Right)',
        'a1': 288, 'a2': 358,
        'card_edge': (835, 110)
    },
    {
        'id': 3,
        'title': 'Healthcare (Mid-Right)',
        'a1': 2, 'a2': 70,
        'card_edge': (835, 300)
    },
    {
        'id': 4,
        'title': 'Water (Bottom-Right)',
        'a1': 74, 'a2': 142,
        'card_edge': (835, 490)
    },
    {
        'id': 5,
        'title': 'Climate (Bottom-Left)',
        'a1': 146, 'a2': 210,
        'card_edge': (365, 490)
    }
]

def pt(radius, deg):
    rad = math.radians(deg)
    x = cx + radius * math.cos(rad)
    y = cy + radius * math.sin(rad)
    return round(x, 1), round(y, 1)

output = []
output.append("=== 1200x600 STAGE GEOMETRY ===")

for sec in sectors:
    i = sec['id']
    a1, a2 = sec['a1'], sec['a2']
    x1, y1 = pt(R_outer, a1)
    x2, y2 = pt(R_outer, a2)
    x3, y3 = pt(R_inner, a2)
    x4, y4 = pt(R_inner, a1)
    
    d = f"M {x1},{y1} A {R_outer},{R_outer} 0 0,1 {x2},{y2} L {x3},{y3} A {R_inner},{R_inner} 0 0,0 {x4},{y4} Z"
    
    mid_deg = (a1 + a2) / 2
    sx, sy = pt(R_outer + 4, mid_deg)
    ex, ey = sec['card_edge']
    
    print(f"<!-- ClipPath Sector {i}: {sec['title']} -->")
    print(f'<clipPath id="clip-sec-{i}">')
    print(f'  <path d="{d}" />')
    print(f'</clipPath>')
    print(f'<!-- Line {i} -> Card Edge ({ex}, {ey}) -->')
    print(f'<path id="line-sec-{i}" class="dotted-line line-{i}" d="M {sx},{sy} L {ex},{ey}" stroke="#8CC63F" stroke-width="3" stroke-dasharray="6,6" marker-end="url(#arrow-green)" fill="none" />\n')

with open("scratch/stage_1200.txt", "w") as f:
    f.write("\n".join(output))

print("1200x600 geometry calculated successfully!")
