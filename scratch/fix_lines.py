import math

cx, cy = 350, 350
R_outer = 220

# Coordinates targeting cards in 700x700 viewBox canvas space:
# Left column cards right-edge is at X = 160
# Right column cards left-edge is at X = 540

lines_data = [
    {
        'id': 1,
        'title': 'Node 1 (Top Left - Buildings)',
        'start': (270, 145),
        'end': (160, 110)
    },
    {
        'id': 2,
        'title': 'Node 2 (Top Right - Renewable)',
        'start': (525, 215),
        'end': (540, 110)
    },
    {
        'id': 3,
        'title': 'Node 3 (Mid Right - Healthcare)',
        'start': (530, 410),
        'end': (540, 350)
    },
    {
        'id': 4,
        'title': 'Node 4 (Bottom Right - Water)',
        'start': (415, 560),
        'end': (540, 580)
    },
    {
        'id': 5,
        'title': 'Node 5 (Bottom Left - Climate)',
        'start': (130, 355),
        'end': (160, 520)
    }
]

for item in lines_data:
    i = item['id']
    sx, sy = item['start']
    ex, ey = item['end']
    print(f'<!-- Line {i}: {item["title"]} -->')
    print(f'<path id="line-sec-{i}" class="dotted-line line-{i}" d="M {sx},{sy} L {ex},{ey}" stroke="#8CC63F" stroke-width="3" stroke-dasharray="6,6" marker-end="url(#arrow-green)" fill="none" />\n')
