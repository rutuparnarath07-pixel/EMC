import re

# Read index.html
with open('frontend/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Read new SVG snippet
with open('scratch/india_svg_snippet.html', 'r', encoding='utf-8') as f:
    new_svg = f.read()

# Replace the svg inside <div class="svg-map-box"> ... </div>
pattern = r'(<div class="svg-map-box">\s*)\n?\s*<svg class="india-svg-map".*?</svg>(\s*</div>)'
replacement = r'\1\n' + new_svg.strip() + r'\n\2'

updated_html, count = re.subn(pattern, replacement, html_content, flags=re.DOTALL)

if count > 0:
    with open('frontend/index.html', 'w', encoding='utf-8') as f:
        f.write(updated_html)
    print(f"Successfully replaced SVG map in frontend/index.html (matched {count} pattern)")
else:
    print("Could not match svg-map-box pattern in index.html!")
