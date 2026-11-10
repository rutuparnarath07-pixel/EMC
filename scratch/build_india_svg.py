import json
import shapely.geometry
import shapely.ops

# Load GeoJSON
with open('c:/Users/Lenovo/OneDrive/Desktop/EMC New Website/india.geojson', 'r', encoding='utf-8') as f:
    geojson_data = json.load(f)

# Group features by state name
state_geoms = {}

for feature in geojson_data['features']:
    props = feature.get('properties', {})
    st_name = props.get('st_nm') or props.get('NAME_1') or props.get('state_name') or props.get('ST_NM')
    if not st_name:
        continue
    
    geom = shapely.geometry.shape(feature['geometry'])
    if not geom.is_valid:
        geom = geom.buffer(0)
        
    if st_name not in state_geoms:
        state_geoms[st_name] = []
    state_geoms[st_name].append(geom)

# Merge geometries for each state
merged_states = {}
for st_name, geoms in state_geoms.items():
    union_geom = shapely.ops.unary_union(geoms)
    # Simplify slightly for clean SVG (0.012 degrees ~ ~1km resolution)
    simplified_geom = union_geom.simplify(0.012, preserve_topology=True)
    merged_states[st_name] = simplified_geom

# Compute bounding box across all mainland states
# Standard bounding box for India map display (lon: ~68 to ~97.5, lat: ~7.5 to ~37.5)
min_lon, max_lon = 68.0, 97.5
min_lat, max_lat = 7.5, 37.5

# Target SVG viewBox size
svg_width = 600
svg_height = 680
padding = 20

def project(lon, lat):
    x = padding + (lon - min_lon) / (max_lon - min_lon) * (svg_width - 2 * padding)
    y = padding + (max_lat - lat) / (max_lat - min_lat) * (svg_height - 2 * padding)
    return round(x, 1), round(y, 1)

def geom_to_svg_d(geom):
    paths = []
    if isinstance(geom, shapely.geometry.Polygon):
        polys = [geom]
    elif isinstance(geom, shapely.geometry.MultiPolygon):
        polys = geom.geoms
    else:
        polys = []

    for poly in polys:
        # Exterior ring
        coords = list(poly.exterior.coords)
        if not coords:
            continue
        pts = [project(x, y) for x, y in coords]
        d_str = "M " + " L ".join([f"{x},{y}" for x, y in pts]) + " Z"
        
        # Interior rings (holes) if any
        for interior in poly.interiors:
            icoords = list(interior.coords)
            if icoords:
                ipts = [project(x, y) for x, y in icoords]
                d_str += " M " + " L ".join([f"{x},{y}" for x, y in ipts]) + " Z"
                
        paths.append(d_str)
    return " ".join(paths)

# State key mapping for frontend active states & interactive data
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
    'Tamil Nadu': 'tamilnadu',
    'Kerala': 'kerala',
    'Bihar': 'bihar',
    'Jharkhand': 'jharkhand',
    'Punjab': 'punjab',
    'Haryana': 'haryana',
    'Himachal Pradesh': 'himachalpradesh',
    'Jammu and Kashmir': 'jammuandkashmir',
    'Ladakh': 'ladakh',
    'Chhattisgarh': 'chhattisgarh',
    'Uttarakhand': 'uttarakhand',
    'Goa': 'goa'
}

state_svg_output = {}
centroids = {}

for st_name, geom in merged_states.items():
    svg_d = geom_to_svg_d(geom)
    key = state_key_map.get(st_name, st_name.lower().replace(' ', ''))
    
    # Calculate representative point / centroid for pin placing
    rep_pt = geom.representative_point()
    cx, cy = project(rep_pt.x, rep_pt.y)
    
    state_svg_output[st_name] = {
        'key': key,
        'd': svg_d,
        'cx': cx,
        'cy': cy
    }

print(f"Successfully processed {len(state_svg_output)} states.")

# Save to scratch json
with open('c:/Users/Lenovo/OneDrive/Desktop/EMC New Website/frontend/js/india_map_paths.json', 'w', encoding='utf-8') as f:
    json.dump(state_svg_output, f, indent=2)

print("Saved to frontend/js/india_map_paths.json")
