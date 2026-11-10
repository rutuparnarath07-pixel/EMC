import json

with open('c:/Users/Lenovo/OneDrive/Desktop/EMC New Website/frontend/js/india_map_paths.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

active_states = {
    'Assam': {'key': 'assam', 'label': 'Assam', 'hq': False, 'label_offset': (12, 4)},
    'Odisha': {'key': 'odisha', 'label': 'Odisha (HQ)', 'hq': True, 'label_offset': (14, 5)},
    'Delhi': {'key': 'delhi', 'label': 'Delhi NCR', 'hq': False, 'label_offset': (-52, -8)},
    'Maharashtra': {'key': 'maharashtra', 'label': 'Maharashtra', 'hq': False, 'label_offset': (12, 4)},
    'Gujarat': {'key': 'gujarat', 'label': 'Gujarat', 'hq': False, 'label_offset': (-48, 4)},
    'Karnataka': {'key': 'karnataka', 'label': 'Karnataka', 'hq': False, 'label_offset': (12, 4)},
    'West Bengal': {'key': 'westbengal', 'label': 'West Bengal', 'hq': False, 'label_offset': (12, 4)},
    'Madhya Pradesh': {'key': 'madhyapradesh', 'label': 'Madhya Pradesh', 'hq': False, 'label_offset': (-68, 16)},
    'Uttar Pradesh': {'key': 'uttarpradesh', 'label': 'Uttar Pradesh', 'hq': False, 'label_offset': (12, -4)},
    'Telangana': {'key': 'telangana', 'label': 'Telangana', 'hq': False, 'label_offset': (12, 4)},
    'Rajasthan': {'key': 'rajasthan', 'label': 'Rajasthan', 'hq': False, 'label_offset': (-62, -6)}
}

paths_html = []
markers_html = []

for st_name, info in data.items():
    key = info['key']
    d_path = info['d']
    cx, cy = info['cx'], info['cy']
    
    is_active = st_name in active_states
    css_class = "map-state-path active-state" if is_active else "map-state-path inactive"
    if st_name in ['Odisha', 'Assam']:
        css_class += " pulse-state"
        
    data_attr = f'data-state="{key}"' if is_active else ''
    
    paths_html.append(f'  <!-- {st_name} -->\n  <path d="{d_path}" {data_attr} class="{css_class}"><title>{st_name}</title></path>')
    
    if is_active:
        conf = active_states[st_name]
        label = conf['label']
        is_hq = conf['hq']
        lx_off, ly_off = conf['label_offset']
        
        hq_class = " HQ" if is_hq else ""
        pulse_r = 18 if is_hq else 14
        dot_r = 8 if is_hq else 6
        
        marker_str = f'''  <!-- {label} Pin -->
  <g class="state-marker" data-state="{key}" transform="translate({cx}, {cy})">
    <circle r="{pulse_r}" class="pin-pulse{hq_class}" />
    <circle r="{dot_r}" class="pin-dot{hq_class}" />
    <text x="{lx_off}" y="{ly_off}" class="pin-label{hq_class}">{label}</text>
  </g>'''
        markers_html.append(marker_str)

full_svg = f'''<svg viewBox="0 0 600 680" class="india-svg-map" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g class="map-states-layer">
{chr(10).join(paths_html)}
  </g>

  <g class="map-markers-layer">
{chr(10).join(markers_html)}
  </g>
</svg>'''

with open('c:/Users/Lenovo/OneDrive/Desktop/EMC New Website/scratch/india_svg_snippet.html', 'w', encoding='utf-8') as f:
    f.write(full_svg)

print("Generated full SVG snippet in scratch/india_svg_snippet.html")
