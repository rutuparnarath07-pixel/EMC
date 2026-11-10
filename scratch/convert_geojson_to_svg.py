import json
import math

with open(r"c:\Users\Lenovo\OneDrive\Desktop\EMC New Website\india.geojson", "r", encoding="utf-8") as f:
    geojson_data = json.load(f)

# Bounding box of India
min_lon, max_lon = 68.0, 97.5
min_lat, max_lat = 6.5, 37.5

width = 600
height = 650
padding = 20

def project(lon, lat):
    x = padding + (lon - min_lon) / (max_lon - min_lon) * (width - 2 * padding)
    # Reverse lat for SVG y (north at top)
    y = height - padding - (lat - min_lat) / (max_lat - min_lat) * (height - 2 * padding)
    return round(x, 1), round(y, 1)

def simplify_poly(pts, step=2):
    # Downsample points slightly for optimal SVG size
    if len(pts) <= 6:
        return pts
    return pts[::step] + [pts[-1]]

state_key_map = {
    'Assam': 'assam',
    'Odisha': 'odisha',
    'Delhi': 'delhi',
    'Maharashtra': 'maharashtra',
    'Gujarat': 'gujarat',
    'Karnataka': 'karnataka',
    'West Bengal': 'westbengal',
    'Madhya Pradesh': 'madhyapradesh',
    'Uttar Pradesh': 'uttarpradesh',
    'Telangana': 'telangana',
    'Rajasthan': 'rajasthan',
    'Andhra Pradesh': 'andhrapradesh',
    'Bihar': 'bihar',
    'Chhattisgarh': 'chhattisgarh',
    'Haryana': 'haryana',
    'Himachal Pradesh': 'himachalpradesh',
    'Jammu and Kashmir': 'jammukashmir',
    'Ladakh': 'ladakh',
    'Jharkhand': 'jharkhand',
    'Kerala': 'kerala',
    'Punjab': 'punjab',
    'Tamil Nadu': 'tamilnadu',
    'Uttarakhand': 'uttarakhand',
    'Arunachal Pradesh': 'arunachalpradesh',
    'Meghalaya': 'meghalaya',
    'Manipur': 'manipur',
    'Mizoram': 'mizoram',
    'Nagaland': 'nagaland',
    'Tripura': 'tripura',
    'Goa': 'goa',
    'Sikkim': 'sikkim'
}

# Group coordinates by state
state_polygons = {}
for feat in geojson_data.get("features", []):
    st_nm = feat.get("properties", {}).get("st_nm")
    if not st_nm or st_nm not in state_key_map:
        continue
    
    key = state_key_map[st_nm]
    if key not in state_polygons:
        state_polygons[key] = []
    
    geom = feat.get("geometry", {})
    gtype = geom.get("type")
    coords = geom.get("coordinates", [])

    if gtype == "Polygon":
        for ring in coords:
            state_polygons[key].append(ring)
    elif gtype == "MultiPolygon":
        for poly in coords:
            for ring in poly:
                state_polygons[key].append(ring)

print("States mapped:", len(state_polygons))

# Build SVG path string per state
svg_paths = {}
centroids = {}
state_bounds = {}

for key, polygons in state_polygons.items():
    d_parts = []
    all_x = []
    all_y = []
    
    for ring in polygons:
        if len(ring) < 3:
            continue
        ring_simple = simplify_poly(ring, step=max(1, len(ring) // 40))
        proj_ring = [project(p[0], p[1]) for p in ring_simple]
        
        for px, py in proj_ring:
            all_x.append(px)
            all_y.append(py)
            
        start_pt = proj_ring[0]
        part = f"M{start_pt[0]},{start_pt[1]} " + " ".join([f"L{pt[0]},{pt[1]}" for pt in proj_ring[1:]]) + " Z"
        d_parts.append(part)
        
    if d_parts:
        svg_paths[key] = " ".join(d_parts)
        cx = round(sum(all_x) / len(all_x), 1)
        cy = round(sum(all_y) / len(all_y), 1)
        centroids[key] = {"cx": cx, "cy": cy}
        state_bounds[key] = {
            "min_x": min(all_x), "max_x": max(all_x),
            "min_y": min(all_y), "max_y": max(all_y)
        }

# Generate individual zoomed SVG paths for state detail card (normalized to 300x220 viewBox)
zoomed_svg_paths = {}
for key, polygons in state_polygons.items():
    if key not in state_bounds:
        continue
    sb = state_bounds[key]
    min_x, max_x = sb["min_x"], sb["max_x"]
    min_y, max_y = sb["min_y"], sb["max_y"]
    
    dx = max_x - min_x or 1
    dy = max_y - min_y or 1
    
    # Scale to fit 280x200 with padding 10
    z_width, z_height = 280, 200
    z_pad = 15
    scale = min((z_width - 2*z_pad)/dx, (z_height - 2*z_pad)/dy)
    
    offset_x = z_pad + (z_width - 2*z_pad - dx*scale) / 2
    offset_y = z_pad + (z_height - 2*z_pad - dy*scale) / 2
    
    z_parts = []
    for ring in polygons:
        if len(ring) < 3:
            continue
        ring_simple = simplify_poly(ring, step=max(1, len(ring) // 50))
        proj_ring = [project(p[0], p[1]) for p in ring_simple]
        
        z_pts = [
            (round(offset_x + (px - min_x) * scale, 1), round(offset_y + (py - min_y) * scale, 1))
            for px, py in proj_ring
        ]
        start_pt = z_pts[0]
        part = f"M{start_pt[0]},{start_pt[1]} " + " ".join([f"L{pt[0]},{pt[1]}" for pt in z_pts[1:]]) + " Z"
        z_parts.append(part)
        
    zoomed_svg_paths[key] = " ".join(z_parts)

result = {
    "svg_paths": svg_paths,
    "centroids": centroids,
    "zoomed_paths": zoomed_svg_paths
}

with open(r"c:\Users\Lenovo\OneDrive\Desktop\EMC New Website\frontend\js\india_map_paths.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2)

print("Successfully generated india_map_paths.json")
