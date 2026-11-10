import math

cx, cy = 350, 350
R_outer = 220
R_inner = 95

sectors = [
    {
        'id': 'sec-1',
        'title': 'Buildings & Institutional Infrastructure',
        'a1': 214, 'a2': 284,
        'card_x': 60, 'card_y': 100,
        'label': 'Buildings & Institutional'
    },
    {
        'id': 'sec-2',
        'title': 'Renewable Energy & Green Transition',
        'a1': 288, 'a2': 358,
        'card_x': 640, 'card_y': 100,
        'label': 'Renewable Energy'
    },
    {
        'id': 'sec-3',
        'title': 'Healthcare & Public Infrastructure',
        'a1': 2, 'a2': 70,
        'card_x': 650, 'card_y': 350,
        'label': 'Healthcare'
    },
    {
        'id': 'sec-4',
        'title': 'Integrated Water Resource Management',
        'a1': 74, 'a2': 142,
        'card_x': 540, 'card_y': 620,
        'label': 'Water Management'
    },
    {
        'id': 'sec-5',
        'title': 'Climate Adaptation & Systems',
        'a1': 146, 'a2': 210,
        'card_x': 60, 'card_y': 480,
        'label': 'Climate Adaptation'
    }
]

def pt(radius, deg):
    rad = math.radians(deg)
    x = cx + radius * math.cos(rad)
    y = cy + radius * math.sin(rad)
    return round(x, 1), round(y, 1)

output = []
output.append("=== SVG 700x700 CLIPPATHS AND CONNECTOR LINES ===")

for i, sec in enumerate(sectors, 1):
    a1, a2 = sec['a1'], sec['a2']
    x1, y1 = pt(R_outer, a1)
    x2, y2 = pt(R_outer, a2)
    x3, y3 = pt(R_inner, a2)
    x4, y4 = pt(R_inner, a1)
    
    d = f"M {x1},{y1} A {R_outer},{R_outer} 0 0,1 {x2},{y2} L {x3},{y3} A {R_inner},{R_inner} 0 0,0 {x4},{y4} Z"
    sec['d'] = d
    
    mid_deg = (a1 + a2) / 2
    sx, sy = pt(R_outer + 5, mid_deg)
    ex, ey = pt(R_outer + 80, mid_deg)
    sec['sx'], sec['sy'] = sx, sy
    sec['ex'], sec['ey'] = ex, ey
    
    print(f"<!-- Sector {i}: {sec['title']} -->")
    print(f'<clipPath id="clip-sec-{i}">')
    print(f'  <path d="{d}" />')
    print(f'</clipPath>')
    print(f'<!-- Connector line {i} -->')
    print(f'<path id="line-sec-{i}" class="dotted-line" d="M {sx},{sy} L {ex},{ey}" stroke="#8CC63F" stroke-width="2.5" stroke-dasharray="6,6" fill="none" />\n')

with open("scratch/svg_700.txt", "w") as f:
    f.write("\n".join(output))

print("700x700 SVG geometry generated!")
