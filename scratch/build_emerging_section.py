import math

cx, cy = 250, 250
R_outer = 235
R_inner = 100

# 5 sectors matching 360 degrees with ~2 deg gaps
# Angles: 0 deg is Right (+X), 90 deg is Down (+Y), 180 deg is Left (-X), 270 deg is Top (-Y)
sectors_info = [
    {
        'id': 'sec-1',
        'title': 'Buildings & Institutional Infrastructure',
        'a1': 214, 'a2': 284,
        'line_start': (214+284)/2,
        'label_pos': 'top-left'
    },
    {
        'id': 'sec-2',
        'title': 'Renewable Energy & Green Transition',
        'a1': 288, 'a2': 358,
        'line_start': (288+358)/2,
        'label_pos': 'top-right'
    },
    {
        'id': 'sec-3',
        'title': 'Healthcare & Public Infrastructure',
        'a1': 2, 'a2': 70,
        'line_start': (2+70)/2,
        'label_pos': 'mid-right'
    },
    {
        'id': 'sec-4',
        'title': 'Integrated Water Resource Management',
        'a1': 74, 'a2': 142,
        'line_start': (74+142)/2,
        'label_pos': 'bottom-right'
    },
    {
        'id': 'sec-5',
        'title': 'Climate Adaptation & Systems',
        'a1': 146, 'a2': 210,
        'line_start': (146+210)/2,
        'label_pos': 'bottom-left'
    }
]

def pt(radius, deg):
    rad = math.radians(deg)
    x = cx + radius * math.cos(rad)
    y = cy + radius * math.sin(rad)
    return round(x, 1), round(y, 1)

output = []
output.append("=== SVG SECTOR CLIPPATHS & PATHS ===")
for sec in sectors_info:
    a1, a2 = sec['a1'], sec['a2']
    x1, y1 = pt(R_outer, a1)
    x2, y2 = pt(R_outer, a2)
    x3, y3 = pt(R_inner, a2)
    x4, y4 = pt(R_inner, a1)
    
    d = f"M {x1},{y1} A {R_outer},{R_outer} 0 0,1 {x2},{y2} L {x3},{y3} A {R_inner},{R_inner} 0 0,0 {x4},{y4} Z"
    sec['d'] = d

for sec in sectors_info:
    print(f"<!-- {sec['id']} : {sec['title']} -->")
    print(f'<clipPath id="clip-{sec["id"]}">')
    print(f'  <path d="{sec["d"]}" />')
    print(f'</clipPath>')

print("\n=== DOTTED CONNECTOR ENDPOINTS ===")
for sec in sectors_info:
    mid_deg = sec['line_start']
    sx, sy = pt(R_outer + 8, mid_deg)
    ex, ey = pt(R_outer + 80, mid_deg)
    print(f"{sec['id']}: Start ({sx}, {sy}) -> End ({ex}, {ey})")
