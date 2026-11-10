import math

# Stage 1200x600 viewBox
cx, cy = 600, 300
R_outer = 175

# 5 Flowline Connections:
connections = [
    {
        'id': 1,
        'title': 'Card 01: Buildings & Institutional',
        'wheel_pt': (535, 137),
        'card_pt': (365, 137),
        'control_1': (460, 137),
        'control_2': (440, 137)
    },
    {
        'id': 2,
        'title': 'Card 02: Renewable Energy',
        'wheel_pt': (740, 195),
        'card_pt': (835, 137),
        'control_1': (785, 195),
        'control_2': (790, 137)
    },
    {
        'id': 3,
        'title': 'Card 03: Healthcare',
        'wheel_pt': (775, 300),
        'card_pt': (835, 300),
        'control_1': (795, 300),
        'control_2': (815, 300)
    },
    {
        'id': 4,
        'title': 'Card 04: Water Resources',
        'wheel_pt': (740, 405),
        'card_pt': (835, 460),
        'control_1': (785, 405),
        'control_2': (790, 460)
    },
    {
        'id': 5,
        'title': 'Card 05: Climate Adaptation',
        'wheel_pt': (428, 300),
        'card_pt': (365, 460),
        'control_1': (395, 300),
        'control_2': (395, 460)
    }
]

print("=== REPLICA FLOWLINES & CIRCLE NODES ===")
for conn in connections:
    i = conn['id']
    wx, wy = conn['wheel_pt']
    cx_p, cy_p = conn['card_pt']
    c1x, c1y = conn['control_1']
    c2x, c2y = conn['control_2']
    
    d = f"M {wx},{wy} C {c1x},{c1y} {c2x},{c2y} {cx_p},{cy_p}"
    
    print(f"<!-- Flowline {i}: {conn['title']} -->")
    print(f'<path id="flow-path-{i}" class="curved-flowline line-{i}" d="{d}" stroke="#5B9423" stroke-width="2.5" fill="none" />')
    print(f'<circle id="w-node-{i}" cx="{wx}" cy="{wy}" r="6" fill="#FFFFFF" stroke="#5B9423" stroke-width="2.5" class="flow-node w-node" />')
    print(f'<circle id="c-node-{i}" cx="{cx_p}" cy="{cy_p}" r="6" fill="#FFFFFF" stroke="#5B9423" stroke-width="2.5" class="flow-node c-node" />\n')
