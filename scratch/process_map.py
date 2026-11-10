import json

with open(r"c:\Users\Lenovo\OneDrive\Desktop\EMC New Website\india.geojson", "r", encoding="utf-8") as f:
    data = json.load(f)

states = set()
for feature in data.get("features", []):
    st_nm = feature.get("properties", {}).get("st_nm")
    if st_nm:
        states.add(st_nm)

print(f"Total features: {len(data.get('features', []))}")
print(f"States found ({len(states)}):", sorted(list(states)))
