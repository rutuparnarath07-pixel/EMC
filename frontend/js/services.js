/* ==========================================================================
   OUR SERVICES INTERACTIVE MODULE & DETAIL MODAL HANDLER
   ========================================================================== */

const SVG_ICONS = {
  search: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  gear: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  file: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6"/></svg>`,
  droplet: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
  monitor: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  clock: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  building: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>`,
  academic: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10L12 2 2 10l10 8 10-8z"/><path d="M6 12.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5"/></svg>`,
  map: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  factory: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h20V8l-6 4V8l-6 4V4L2 8v12z"/></svg>`,
  refresh: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>`,
  tool: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  wave: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12c2 0 3-3 6-3s4 6 7 6 4-3 7-3"/></svg>`,
  city: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/></svg>`,
  zap: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  wifi: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>`,
  pin: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  globe: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  road: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22L8 2h8l4 20M12 2v20"/></svg>`,
  traffic: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/></svg>`,
  walk: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><circle cx="13" cy="4" r="2"/><path d="M14.5 9L12 14l-3-2M8 22l3-7 3 2 2 5"/></svg>`,
  chart: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  mobile: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
  cloud: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>`,
  leaf: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0112 2z"/><path d="M12 6v12M6 12h12"/></svg>`,
  hands: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  sun: `<svg width="20" height="20" fill="none" stroke="var(--primary-green)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
};


/* State outline maps. A KPI whose number is a state name ("Odisha", "Assam"),
   or that has  states: ["odisha","assam","tamilnadu"],  shows the map(s) inside the KPI card.
   Optional per map:  viewBox (default "0 0 100 100")  and  stroke (default 3). */
const STATE_MAPS = {
  odisha: { name: "Odisha", path: "M44.7 27.4C45.1 27.1 47.0 26.0 47.6 25.8C48.3 25.6 50.8 25.1 51.6 25.1C52.3 25.1 55.3 25.5 56.0 25.8C56.6 26.0 57.9 27.6 58.4 27.9C59.0 28.2 61.3 29.0 61.9 28.9C62.5 28.9 64.2 27.7 64.8 27.4C65.4 27.0 67.6 25.4 68.2 25.3C68.9 25.1 71.1 25.5 71.7 25.8C72.2 26.0 73.8 27.4 74.1 27.9C74.5 28.3 75.2 30.1 75.6 30.5C76.0 30.8 77.6 31.2 78.0 31.5C78.5 31.8 80.0 33.2 80.0 33.6C80.0 34.1 79.0 36.0 78.5 36.2C78.1 36.5 75.5 36.3 75.1 36.8C74.7 37.2 74.7 40.3 74.6 41.0C74.5 41.6 74.3 43.5 74.1 44.1C73.9 44.7 72.4 46.7 72.2 47.2C71.9 47.7 71.5 49.0 71.2 49.3C70.8 49.7 68.8 50.5 68.2 50.9C67.7 51.2 65.9 52.6 65.3 53.0C64.7 53.4 62.4 54.8 61.9 55.1C61.4 55.4 60.4 55.8 59.9 56.1C59.4 56.4 57.5 57.9 57.0 58.2C56.5 58.6 54.9 59.4 54.5 59.8C54.1 60.1 53.0 61.5 52.5 61.9C52.1 62.3 50.6 63.7 50.1 64.0C49.5 64.2 47.4 64.6 46.7 64.5C46.0 64.4 43.4 63.1 42.7 62.9C42.1 62.7 40.3 62.2 39.8 62.4C39.3 62.6 38.3 64.5 37.8 65.0C37.3 65.5 35.1 67.7 34.4 68.1C33.8 68.6 31.6 69.5 31.0 69.7C30.3 69.9 28.1 69.9 27.5 70.2C27.0 70.6 25.2 72.9 24.6 73.4C24.1 73.8 22.1 75.1 21.7 74.9C21.2 74.8 20.0 72.5 20.0 71.8C20.0 71.1 20.8 67.8 21.2 67.1C21.6 66.4 23.6 64.6 24.1 64.0C24.6 63.4 26.1 61.4 26.6 60.8C27.0 60.3 28.7 58.9 29.0 58.2C29.3 57.5 29.6 54.3 29.5 53.5C29.4 52.7 28.3 50.4 28.0 49.8C27.8 49.3 26.9 48.2 27.1 47.8C27.2 47.3 29.4 45.1 30.0 44.6C30.6 44.1 33.4 42.6 33.9 42.0C34.5 41.4 35.5 38.5 35.9 37.8C36.3 37.1 37.8 35.3 38.3 34.7C38.8 34.1 40.8 32.1 41.3 31.5C41.7 31.0 42.9 29.3 43.2 28.9C43.6 28.5 44.3 27.6 44.7 27.4Z" },
  assam:  { name: "Assam",  path: "M20.0 49.9C20.1 49.0 20.5 45.8 21.0 44.9C21.5 44.0 24.1 40.7 25.0 40.4C25.9 40.1 29.9 41.5 31.0 41.5C32.1 41.6 35.6 41.1 36.5 41.0C37.4 40.8 40.2 40.2 41.0 40.1C41.8 40.0 44.7 39.7 45.5 39.5C46.3 39.4 49.1 38.7 50.0 38.8C50.9 38.8 54.1 40.1 55.0 40.1C55.9 40.1 59.2 39.2 60.0 38.8C60.8 38.3 63.3 35.4 64.0 34.9C64.7 34.3 66.8 33.0 67.5 32.6C68.2 32.3 71.2 31.1 72.0 30.7C72.8 30.4 75.8 28.8 76.5 29.0C77.2 29.1 79.8 31.9 80.0 32.6C80.2 33.3 79.4 36.0 79.0 36.5C78.6 37.1 76.0 37.8 75.5 38.2C75.0 38.6 73.9 40.4 73.5 41.0C73.1 41.6 72.1 44.0 71.5 44.3C70.9 44.7 68.2 45.0 67.5 44.9C66.8 44.8 65.1 43.1 64.5 43.2C63.9 43.4 61.9 45.9 61.5 46.5C61.1 47.2 60.9 50.0 60.5 50.4C60.1 50.9 58.0 50.7 57.5 51.0C57.0 51.3 55.3 53.2 55.0 53.8C54.7 54.4 54.0 57.0 54.0 57.7C54.0 58.4 54.6 60.8 54.5 61.6C54.4 62.4 53.4 65.4 53.0 66.0C52.6 66.7 50.6 67.8 50.0 68.3C49.4 68.7 47.5 70.2 47.0 70.5C46.5 70.7 44.8 71.3 44.5 71.0C44.2 70.7 43.5 67.9 43.5 67.1C43.5 66.4 44.5 63.3 44.5 62.7C44.5 62.1 43.4 60.8 43.0 60.5C42.6 60.2 41.1 59.5 40.5 59.4C39.9 59.2 37.7 59.4 37.0 59.4C36.3 59.3 34.2 58.7 33.5 58.8C32.8 58.8 30.3 59.9 29.5 59.9C28.7 60.0 25.7 59.5 25.0 59.4C24.3 59.2 22.0 58.7 21.5 58.2C21.0 57.8 20.1 55.7 20.0 54.9C19.9 54.1 19.9 50.8 20.0 49.9Z" },
  /* Tamil Nadu (Chennai) - real outline, drawn in its own coordinate box so it fits the same tile size */
  tamilnadu: {
    name: "Tamil Nadu",
    viewBox: "132.8 506.7 165 165",
    stroke: 5,
    path: "M 195.8,638.5 L 196.0,637.0 L 194.1,633.5 L 195.7,630.6 L 194.5,629.6 L 193.7,627.8 L 195.9,624.7 L 196.2,621.6 L 198.5,616.8 L 196.9,615.1 L 196.0,615.8 L 194.0,614.9 L 195.5,611.0 L 194.9,609.3 L 195.8,606.1 L 196.3,601.7 L 194.3,599.0 L 192.6,600.0 L 191.8,601.1 L 190.5,602.0 L 188.8,601.1 L 187.7,599.4 L 187.3,597.6 L 187.8,593.9 L 189.1,590.0 L 187.6,588.1 L 184.3,586.6 L 186.2,583.6 L 185.0,581.8 L 185.3,580.2 L 183.8,581.2 L 180.3,581.0 L 181.8,579.6 L 182.3,577.7 L 180.6,577.0 L 176.3,574.1 L 179.0,572.5 L 179.8,571.0 L 181.6,570.3 L 182.5,572.1 L 186.2,572.2 L 188.0,572.7 L 187.7,571.4 L 189.1,568.4 L 191.1,568.0 L 192.9,568.8 L 196.4,568.1 L 199.0,569.0 L 200.2,565.2 L 203.7,565.0 L 204.3,563.2 L 205.6,561.6 L 205.0,560.7 L 202.4,559.6 L 200.4,559.8 L 199.8,558.8 L 201.3,557.8 L 202.5,556.2 L 202.9,553.6 L 202.0,553.0 L 202.3,549.7 L 204.9,549.7 L 205.9,548.0 L 206.6,545.5 L 208.5,545.0 L 209.4,546.2 L 210.9,545.8 L 212.4,547.3 L 214.2,547.8 L 215.6,549.8 L 217.6,550.6 L 221.1,547.3 L 221.6,542.9 L 224.1,541.5 L 226.8,540.6 L 228.7,540.8 L 231.9,542.2 L 233.3,540.4 L 233.2,539.3 L 234.2,540.0 L 237.1,538.7 L 236.5,535.5 L 239.0,535.4 L 239.0,536.8 L 241.8,536.3 L 242.1,537.9 L 243.9,537.5 L 244.2,535.9 L 246.8,534.9 L 248.5,531.2 L 249.3,532.2 L 251.9,532.2 L 252.9,530.6 L 254.0,533.2 L 254.3,536.8 L 253.5,539.6 L 252.5,545.7 L 252.6,547.4 L 250.4,555.2 L 248.0,558.6 L 245.6,562.6 L 245.1,562.9 L 244.8,564.9 L 243.7,564.8 L 241.8,566.6 L 244.2,567.3 L 243.3,572.0 L 243.4,574.2 L 244.2,576.3 L 245.1,581.6 L 245.0,585.6 L 243.0,585.4 L 242.6,586.8 L 244.4,587.9 L 244.9,589.0 L 245.4,599.0 L 245.1,600.6 L 243.4,600.9 L 236.2,599.9 L 233.9,601.8 L 233.1,603.7 L 233.6,605.6 L 231.1,609.2 L 231.1,609.8 L 228.4,613.3 L 227.5,615.3 L 226.9,618.0 L 228.5,620.3 L 230.0,621.6 L 231.8,621.9 L 235.2,621.4 L 234.6,622.8 L 232.7,622.1 L 226.4,622.5 L 220.8,625.2 L 217.9,625.5 L 217.1,626.0 L 214.2,628.5 L 213.1,630.5 L 212.9,632.2 L 213.5,633.3 L 212.5,634.8 L 212.5,638.6 L 210.9,641.2 L 206.8,644.0 L 205.9,645.9 L 202.0,646.4 L 201.4,647.7 L 199.3,647.3 L 195.3,645.5 L 192.7,643.1 L 195.8,638.5 Z"
  }
};

/* Map tile size (px). Increase these two numbers to make the maps even bigger. */
const MAP_TILE_PX = 72;   // white rounded box
const MAP_SVG_PX  = 64;   // the state outline inside the box

function mapTileHtml(key) {
  const m = STATE_MAPS[key];
  const vb = m.viewBox || "0 0 100 100";
  const sw = m.stroke || 3;
  return `<div title="${m.name}" style="flex:0 0 auto; width:${MAP_TILE_PX}px; height:${MAP_TILE_PX}px; background:#fff; border-radius:14px; box-shadow:0 2px 8px rgba(0,0,0,0.12); display:flex; align-items:center; justify-content:center;">
    <svg viewBox="${vb}" width="${MAP_SVG_PX}" height="${MAP_SVG_PX}" role="img" aria-label="Map of ${m.name}"><path d="${m.path}" fill="var(--primary-green)" stroke="var(--primary-green)" stroke-width="${sw}" stroke-linejoin="round"/></svg>
  </div>`;
}


/* ==========================================================================
   COUNT-UP NUMBERS
   Numbers like "40+", "8M+", "₹6,000 Cr", "3,000+ km", "1.5M+", "500+ sq. km"
   count from 0 up to their value when the modal opens.
   Text values ("Pan-India", "JICA", "24×7", "NH-26 & NH-59", "4-Lane" ...)
   are NOT counted - they are shown as they are.
   ========================================================================== */

const COUNT_DURATION_MS = 1800;

function parseCountable(str) {
  const s = String(str).trim();
  // [₹] number [M|K] [+] [ Cr | km | sq. km]
  const m = s.match(/^(₹)?(\d[\d,]*(?:\.\d+)?)([MK])?(\+)?(?:\s(Cr|km|sq\. km))?$/);
  if (!m) return null;
  const numStr = m[2];
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return {
    prefix: m[1] || '',
    target: parseFloat(numStr.replace(/,/g, '')),
    decimals: decimals,
    comma: numStr.includes(','),
    suffix: (m[3] || '') + (m[4] || '') + (m[5] ? ' ' + m[5] : '')
  };
}

function formatCount(value, decimals, comma) {
  if (comma) {
    return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  return decimals ? value.toFixed(decimals) : String(Math.round(value));
}

/* Returns the HTML for a number. Countable numbers become a <span class="kpi-count"> that starts at 0. */
function countNumberHtml(str) {
  const p = parseCountable(str);
  if (!p) return str;
  return `<span class="kpi-count" aria-label="${str}" data-target="${p.target}" data-decimals="${p.decimals}" data-comma="${p.comma ? 1 : 0}" data-prefix="${p.prefix}" data-suffix="${p.suffix}">${p.prefix}${formatCount(0, p.decimals, p.comma)}${p.suffix}</span>`;
}

/* Runs the count-up on every not-yet-started .kpi-count in the page (i.e. the open modal). */
function animateCounts(root) {
  const scope = root || document;
  const els = scope.querySelectorAll('.kpi-count:not([data-started])');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  els.forEach((el, i) => {
    el.setAttribute('data-started', '1');
    const target   = parseFloat(el.getAttribute('data-target'));
    const decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    const comma    = el.getAttribute('data-comma') === '1';
    const prefix   = el.getAttribute('data-prefix') || '';
    const suffix   = el.getAttribute('data-suffix') || '';
    const finalText = prefix + formatCount(target, decimals, comma) + suffix;

    if (reduceMotion) { el.textContent = finalText; return; }

    const delay = Math.min(i * 60, 600);
    const start = performance.now() + delay;

    function tick(now) {
      if (!el.isConnected) return;                       // modal closed
      const t = Math.min(Math.max((now - start) / COUNT_DURATION_MS, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);              // ease-out
      el.textContent = prefix + formatCount(target * eased, decimals, comma) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = finalText;                   // exact final value
    }
    requestAnimationFrame(tick);
  });
}


/* One KPI tile.
   - Normal            = number + label
   - With state map(s) = map(s) on the left, text on the right
   - With  lines: [...]  = a small list (e.g. "Sambalpur – Odisha") instead of a big number */
function kpiTileHtml(k) {
  const keys = k.states || (STATE_MAPS[String(k.number).trim().toLowerCase()] ? [String(k.number).trim().toLowerCase()] : []);
  const maps = keys.filter(x => STATE_MAPS[x]).map(mapTileHtml).join('');

  const labelHtml = `<div style="font-size:0.625rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px; margin-top:${k.lines ? '6px' : '3px'};">${k.label}</div>`;

  let main;
  if (k.lines) {
    // Same green + bold as the other KPI numbers
    main = k.lines.map(line =>
      `<div style="font-size:0.9375rem; font-weight:800; line-height:1.5; color:var(--primary-green);">${line}</div>`
    ).join('');
  } else {
    main = `<div style="font-size:1.25rem; font-weight:800; line-height:1.1; color:var(--primary-green); letter-spacing:-0.5px; font-variant-numeric:tabular-nums;">${countNumberHtml(k.number)}</div>`;
  }

  const text = `<div style="min-width:0; flex:1 1 170px;">${main}${labelHtml}</div>`;
  const inner = maps
    ? `<div style="display:flex; align-items:center; flex-wrap:wrap; gap:14px;"><div style="display:flex; gap:8px;">${maps}</div>${text}</div>`
    : text;
  // A tile with maps spans the full row so the bigger maps have room
  const span = maps ? 'grid-column:1 / -1;' : '';
  const pad = maps ? '12px 14px' : '8px 12px';
  return `<div style="${span} background:var(--light-green-bg); border-radius:var(--radius-sm); padding:${pad}; text-align:left; min-width:0;">${inner}</div>`;
}

/* ==========================================================================
   SERVICES DATA
   IMAGES: every image path below matches the cards in services.html
   ========================================================================== */
/* ==========================================================================
   >>> STORMWATER & GIS IMAGES: CHANGE ONLY HERE <<<
   Yahan file ka naam badlo - card (services page) aur popup (modal) dono mein
   wahi image aayegi. File "assets/" folder mein honi chahiye (naam exact same,
   capital letters aur spaces ke saath).
   IMAGE_VERSION badalne se browser ki purani cached image nahi dikhti.
   ========================================================================== */
const IMAGE_VERSION = "2";
const SERVICE_IMAGES = {
  stormwater: "assets/StormWater Drainage.png",   // <-- Stormwater image
  gis:        "assets/GIS option 2.png"           // <-- GIS image
};
function imgPath(path) { return encodeURI(path) + "?v=" + IMAGE_VERSION; }

const SERVICES_DATA = [
  {
    id: "water-supply",
    aliases: ["water", "water-supply-old", "drinking-water", "water-supply-services"],
    title: "Drinking Water Supply",
    subtitle: "Reliable, Inclusive and Sustainable Water Supply Solutions",
    image: "assets/Water%20Supply%20website.png",
    quote: "Safe water. Healthier communities. Stronger cities.",
    description: "We provide end-to-end consultancy services for planning, design, implementation and management of water supply systems. Our solutions are tailored to ensure safe, reliable and equitable water access for urban and rural communities.",
    capabilities: [
      { title: "Source Assessment & Feasibility Studies", icon: SVG_ICONS.search },
      { title: "Pumping & Transmission Systems", icon: SVG_ICONS.gear },
      { title: "Master Planning & Detailed Project Reports", icon: SVG_ICONS.file },
      { title: "Distribution Network (24x7 Systems)", icon: SVG_ICONS.droplet },
      { title: "Network Design & Hydraulic Modelling", icon: SVG_ICONS.monitor },
      { title: "Non-Revenue Water (NRW) Management", icon: SVG_ICONS.clock },
      { title: "Treatment Plant Design", icon: SVG_ICONS.building },
      { title: "Operations Support & Capacity Building", icon: SVG_ICONS.academic }
    ],
    programs: [
      {
        title: "24×7 Drink from Tap Urban Water Supply",
        text: "Facilitated planning across Bhubaneswar, Cuttack, Sambalpur, Chennai, Coimbatore, Tezpur and beyond.",
        kpis: [
          { number: "40+", label: "Cities Supported" },
          { number: "8M+", label: "Citizens Served" },
          { number: "₹6,000 Cr", label: "Asset Value" }
        ]
      },
      {
        title: "Water Treatment Infrastructure",
        text: "Technological design for major water treatment infrastructure.",
        kpis: [{ number: "30", label: "Large-Scale WTPs" }]
      },
      {
        title: "Rural Water Security",
        text: "DPRs under the Jal Jeevan Mission across Assam and Karnataka.",
        kpis: [
          { number: "3,000", label: "Rural Schemes" },
          { number: "₹4,000 Cr", label: "Portfolio Value" }
        ]
      },
      {
        title: "Project Management Consultancy",
        text: "PMC for continuous 24×7 Drinking Water Supply in Tezpur & Sambalpur.", // TODO: original text was cut off - confirm full line
        kpis: [
          { number: "24×7", label: "Drinking Water Supply" },
          {
            number: "Odisha · Assam · Tamil Nadu",
            label: "Project Locations",
            states: ["odisha", "assam", "tamilnadu"],
            lines: [
              "Sambalpur – Odisha",
              "Tezpur – Assam",
              "Chennai-(Area X & XII) Tamil-Nadu"
            ]
          }
        ]
      }
    ],
    stats: [
      { number: "40+", label: "Cities Supported" },
      { number: "8M+", label: "Citizens Served" },
      { number: "₹6,000 Cr", label: "Asset Value" }
    ]
  },
  {
    id: "used-water",
    aliases: ["used-water-management", "sewerage", "wastewater"],
    title: "Used Water Management",
    subtitle: "Sewerage, Wastewater Treatment and Reuse Solutions",
    image: "assets/Used%20Water%20Mgmt.png",
    quote: "Turning wastewater challenges into sustainable resource cycles.",
    description: "Comprehensive engineering consultancy for sewerage systems, modern sewage treatment plants (STP), fecal sludge management, and treated water recycling infrastructure.",
    capabilities: [
      { title: "Sewerage Master Planning", icon: SVG_ICONS.map },
      { title: "STP & FSTP Design", icon: SVG_ICONS.factory },
      { title: "Treated Water Reuse Models", icon: SVG_ICONS.refresh },
      { title: "Trenchless Network Piping", icon: SVG_ICONS.tool }
    ],
    programs: [
      {
        title: "Sewerage Infrastructure Engineering",
        text: "DPRs for major cities such as Bhubaneswar, Cuttack,", // TODO: original text was cut off - confirm full line
        kpis: [{ number: "3,000+ km", label: "Network" }]
      },
      {
        title: "Large-Scale Execution & Advisory",
        text: "PMC under the Japan International Cooperation Agency (JICA)-assisted Odisha Integrated Sanitation Improvement Project (OISIP), across Cuttack and Bhubaneswar.",
        kpis: [
          { number: "1,250+ km", label: "Network" },
          { number: "3", label: "STPs" },
          { number: "56", label: "SPSs" },
          { number: "₹4,000 Cr", label: "Portfolio" }
        ]
      },
      {
        title: "Interception & Diversion Systems",
        text: "State-wide I&D systems integrated with STPs across Odisha and Bihar.",
        kpis: [
          { number: "40+", label: "Cities" },
          { number: "2", label: "States" }
        ]
      },
      {
        title: "Rural Decentralized Sanitation",
        text: "DPRs for decentralized greywater management systems in Karnataka.",
        kpis: [{ number: "931", label: "Villages" }]
      }
    ],
    stats: [
      { number: "3,000+ km", label: "Network Engineered" },
      { number: "40+", label: "Cities" },
      { number: "₹4,000 Cr", label: "Portfolio" }
    ]
  },
  {
    id: "stormwater",
    aliases: ["stormwater-flood", "stormwater-flood-management", "flood", "drainage"],
    title: "Stormwater & Flood Management",
    subtitle: "Sustainable Drainage Solutions for Climate-Resilience",
    image: "assets/Stormwater.png",
    quote: "Protecting urban assets and saving lives through climate drainage.",
    description: "Integrated urban flood risk assessment, storm drainage master planning, retention basin design, and sponge city blue-green infrastructure.",
    capabilities: [
      { title: "Hydrological & Hydraulic Modelling", icon: SVG_ICONS.wave },
      { title: "Urban Flood Hazard Mapping", icon: SVG_ICONS.map },
      { title: "Drainage Infrastructure DPRs", icon: SVG_ICONS.file }
    ],
    programs: [
      {
        title: "Urban Drainage Master Planning",
        text: "Drainage Master Plans developed for large cities across India such as Bhubaneswar, Cuttack, Sambalpur, Rourkela, Brahmapur and Mussoorie.",
        kpis: [
          { number: "25+", label: "Cities" },
          { number: "Pan-India", label: "Coverage" }
        ]
      },
      {
        title: "Project Management Consultancy for Flood Mitigation",
        text: "End-to-end PMC services for the Japan International Cooperation Agency (JICA) assisted drainage project in Cuttack.",
        tags: ["DPR", "Bidding", "Supervision", "Contract Management"],
        kpis: [
          { number: "₹1,200 Cr", label: "Project Value" },
          { number: "JICA", label: "Assisted" }
        ]
      }
    ],
    stats: [
      { number: "25+", label: "Cities" },
      { number: "₹1,200 Cr", label: "PMC Project Value" }
    ]
  },
  {
    id: "urban-infrastructure",
    aliases: ["urban-planning", "urban_planning", "urbanplanning", "urban-infrastructure-planning"],
    title: "Urban Planning",
    subtitle: "Strategic Master Plans, City Action Plans and Integrated Urban Development",
    image: "assets/Urban%20Planning.png",
    quote: "Creating vibrant, livable cities engineered for growth.",
    description: "Strategic master planning, PMAY city action plans and integrated urban development initiatives that improve living conditions across cities and regions.",
    capabilities: [
      { title: "City Master Development Plans", icon: SVG_ICONS.city },
      { title: "Utility Corridor Engineering", icon: SVG_ICONS.zap },
      { title: "Smart City Infrastructure DPRs", icon: SVG_ICONS.wifi }
    ],
    programs: [
      {
        title: "Strategic Master Planning",
        text: "Strategic master plans developed across Odisha, Bihar and Himachal Pradesh.",
        kpis: [
          { number: "9+", label: "Cities" },
          { number: "3", label: "States" }
        ]
      },
      {
        title: "Housing & City Action Plans",
        text: "City Action Plans supporting housing and urban development under Pradhan Mantri Awas Yojana (PMAY).",
        kpis: [
          { number: "22+", label: "Urban Locations" },
          { number: "PMAY", label: "Scheme" }
        ]
      },
      {
        title: "Integrated Urban Development",
        text: "Urban development initiatives improving living conditions across a large regional footprint.",
        kpis: [
          { number: "2M+", label: "People" },
          { number: "500+ sq. km", label: "Area" }
        ]
      }
    ],
    stats: [
      { number: "9+", label: "Cities" },
      { number: "2M+", label: "People" }
    ]
  },
  {
    id: "urban-development",
    aliases: ["urban-civic-infra", "urban-development-civic-infrastructure", "civic-infrastructure", "urban-dev", "urban-development-and-civic-infrastructure"],
    title: "Urban Development & Civic Infrastructure",
    subtitle: "Waterfronts, Civic Buildings and Community Infrastructure",
    image: "assets/Urban%20Development.png",
    quote: "Creating public spaces that bring communities together.", // placeholder - replace with your own
    description: "DPR and PMC services for water body rejuvenation, civic and public buildings, and sports and community facilities that improve everyday urban life.",
    capabilities: [],
    programs: [
      {
        title: "Waterfront & Green Space Development",
        text: "DPR & PMC services for the rejuvenation and beautification of water bodies, canal corridors and public green spaces.",
        tags: ["Ponds", "Riverfronts", "Canals", "Parks"],
        kpis: [{ number: "DPR & PMC", label: "Services" }]
      },
      {
        title: "Civic & Public Buildings",
        text: "Planning and PMC services for essential civic and public-use infrastructure.",
        tags: ["Auditoriums", "Administrative Buildings", "City Centres", "Markets"],
        kpis: [{ number: "Planning & PMC", label: "Services" }]
      },
      {
        title: "Sports & Community Infrastructure",
        text: "DPR and PMC services for community, cultural and recreational facilities.",
        tags: ["Town Halls", "Mini Stadiums", "Sports Complexes"],
        kpis: [{ number: "DPR & PMC", label: "Services" }]
      }
    ],
    stats: []
  },
  {
    id: "gis-spatial",
    aliases: ["gis", "gis-spatial-intelligence"],
    title: "GIS & Spatial Intelligence",
    subtitle: "Evidence-Based Decision Support Platforms and Asset Mapping",
    image: "assets/GIS option 1.png",
    quote: "Transforming location data into strategic engineering intelligence.",
    description: "Enterprise GIS implementation, drone survey asset mapping, satellite image processing, and custom WebGIS governance portals.",
    capabilities: [
      { title: "Drone Survey & Orthomosaic Mapping", icon: SVG_ICONS.search },
      { title: "Utility Asset Mapping & Tagging", icon: SVG_ICONS.pin },
      { title: "WebGIS Portal Development", icon: SVG_ICONS.globe }
    ],
    programs: [
      {
        title: "Consumer & Utility Asset Mapping",
        text: "Large-scale mapping of households and utility assets for urban infrastructure planning.",
        kpis: [
          { number: "1.5M+", label: "Households" },
          { number: "2,000+ sq. km", label: "Area Mapped" },
          { number: "90+", label: "Cities" }
        ]
      },
      {
        title: "GIS Integrated Planning",
        text: "Spatial master plans and GIS-based development planning across diverse urban regions.",
        kpis: [
          { number: "20+", label: "Cities" },
          { number: "8+", label: "States" }
        ]
      },
      {
        title: "International Geospatial Projects",
        text: "High-precision topographical mapping across key zones in Iran, Iraq, Israel and Yemen.",
        kpis: [
          { number: "4", label: "Countries" },
          { number: "West Asia", label: "Region" }
        ]
      }
    ],
    stats: [
      { number: "1.5M+", label: "Households Mapped" },
      { number: "90+", label: "Cities" }
    ]
  },
  {
    id: "transportation",
    aliases: ["transport", "transportation-mobility", "mobility"],
    title: "Transportation",
    subtitle: "Safe, Efficient and Sustainable Transport Systems",
    image: "assets/Transportation.png",
    quote: "Connecting communities with seamless, safe transit infrastructure.",
    description: "Highway engineering, urban corridor revitalization, junction improvement, non-motorized transport (NMT) tracks, and traffic impact studies.",
    capabilities: [
      { title: "Corridor & Highway Design", icon: SVG_ICONS.road },
      { title: "Traffic Demand & Origin-Destination Studies", icon: SVG_ICONS.traffic },
      { title: "NMT & Pedestrian Corridor Planning", icon: SVG_ICONS.walk }
    ],
    programs: [
      {
        title: "Highway & Bypass Planning",
        text: "Feasibility studies and budgeting for bypass development at Bhawanipatna and Titlagarh.",
        kpis: [
          { number: "NH-26 & NH-59", label: "Highways" },
          { number: "Odisha", label: "State" }
        ]
      },
      {
        title: "Road & Corridor Engineering",
        text: "DPRs for a 4-lane roadway and the Digha-AIIMS Elevated Corridor.", // TODO: original text was cut off - confirm full line
        kpis: [
          { number: "4-Lane", label: "Roadway" },
          { number: "Elevated", label: "Corridor" },
          { number: "Bihar", label: "State" }
        ]
      },
      {
        title: "Rural & Urban Road Development",
        text: "DPR for road construction under the Rural Development Department, supporting improved regional connectivity.",
        kpis: [
          { number: "Jaraka, Jajpur", label: "Location" },
          { number: "Odisha", label: "State" }
        ]
      }
    ],
    stats: []
  },
  {
    id: "digital-solutions",
    aliases: ["digital"],
    title: "Digital Solutions",
    subtitle: "Technology-Enabled Solutions for Smart Governance",
    image: "assets/Digital%20Solutions.png",
    quote: "Empowering infrastructure governance with real-time digital tools.",
    description: "Custom enterprise Web & Mobile applications, IoT sensor integrations for water monitoring, and executive decision-support dashboards.",
    capabilities: [
      { title: "IoT Utility Monitoring Dashboards", icon: SVG_ICONS.chart },
      { title: "Field Inspection Mobile Apps", icon: SVG_ICONS.mobile },
      { title: "Cloud Backend & API Integration", icon: SVG_ICONS.cloud }
    ],
    programs: [
      {
        title: "Project Performance Management",
        text: "Digital tools for monitoring and managing complex infrastructure projects.",
        kpis: [
          { number: "PPMS", label: "Custom-Built" },
          { number: "Real-Time", label: "Tracking" }
        ]
      },
      {
        title: "Digital Water Governance",
        text: "Digital frameworks enabling real-time oversight of urban water supply initiatives.",
        kpis: [
          { number: "End-to-End", label: "Monitoring" },
          { number: "24×7", label: "Drink from Tap" }
        ]
      },
      {
        title: "Spatial Asset Intelligence",
        text: "Integrated spatial portals combining consumer data, utility assets and automated query handling.",
        kpis: [
          { number: "Web GIS", label: "Portals" },
          { number: "Consumer & Utility", label: "Data" }
        ]
      }
    ],
    stats: []
  },
  {

    id: "environmental-social",
    aliases: ["environmental", "environmental-social-development", "social-development"],
    title: "Environmental & Social Development",
    subtitle: "Environmental Impact Assessment and Community Action",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    quote: "Integrating ecological balance and social equity into development.",
    description: "EIA reports, environmental management plans (EMP), resettlement & rehabilitation frameworks, and stakeholder capacity building.",
    capabilities: [
      { title: "Environmental Impact Assessment (EIA)", icon: SVG_ICONS.leaf },
      { title: "Social Safeguard & Resettlement Frameworks", icon: SVG_ICONS.hands },
      { title: "Climate Risk & Resilience Audits", icon: SVG_ICONS.sun }
    ],
    stats: [
      { number: "100+", label: "EIAs Cleared" },
      { number: "20+", label: "States Impacted" }
    ]
  }
];

function normKey(t) {
  return (t || '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();
}

function findServiceForCard(card) {
  const rawId = card.getAttribute('data-service-id') || card.id || '';
  const key = normKey(rawId);
  if (key) {
    const byId = SERVICES_DATA.find(s => normKey(s.id) === key || (s.aliases || []).some(a => normKey(a) === key));
    if (byId) return byId;
  }
  const text = normKey(card.textContent);
  const matches = SERVICES_DATA.filter(s => text.includes(normKey(s.title)));
  if (matches.length) {
    return matches.sort((x, y) => y.title.length - x.title.length)[0];
  }
  console.warn('No matching service for card:', rawId || card);
  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  // Bind click event to service cards or "Learn More" links
  document.querySelectorAll('.service-card, [data-service-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const service = findServiceForCard(card);
      if (service) openServiceModal(service);
    });
  });
});

function openServiceModal(service) {
  const capabilitiesHtml = (service.capabilities || []).map(c => `
    <div class="capability-item">
      <div class="capability-icon">${c.icon}</div>
      <div>${c.title}</div>
    </div>
  `).join('');

  // Key Capabilities: hidden for services that have `programs` (KPI cards replace it)
  const capabilitiesSection = service.programs ? '' : `
        <div style="font-size:0.75rem; font-weight:700; color:var(--primary-green); text-transform:uppercase; margin-bottom:12px;">KEY CAPABILITIES</div>
        <div class="service-capabilities-grid">${capabilitiesHtml}</div>`;

  // Heading above the program cards. Change this text anytime, or set `programsHeading` on a service.
  const programsHeading = service.programsHeading || 'Our Work & Impact';

  // Program blocks: accent bar + title + text, then KPI tiles (big number, label below)
  const programsHtml = (service.programs || []).map(p => `
    <div style="margin-bottom:10px; padding:12px 16px; background:#fff; border:1px solid #e5e7eb; border-left:4px solid var(--primary-green); border-radius:var(--radius-sm); box-shadow:0 1px 3px rgba(0,0,0,0.04);">
      <div style="font-weight:800; font-size:0.9375rem; color:var(--navy-text); margin-bottom:2px;">${p.title}</div>
      <p style="font-size:0.8125rem; color:var(--text-body); line-height:1.4; margin:0 0 10px;">${p.text}</p>
      ${p.tags ? `<div style="display:flex; flex-wrap:wrap; gap:6px; margin:0 0 10px;">${p.tags.map(t => `<span style="font-size:0.6875rem; font-weight:600; color:var(--primary-green); border:1px solid var(--primary-green); border-radius:999px; padding:2px 10px;">${t}</span>`).join('')}</div>` : ''}
      <div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:8px;">
        ${p.kpis.map(kpiTileHtml).join('')}
      </div>
    </div>
  `).join('');

  const programsSection = programsHtml
    ? `<div style="font-size:0.75rem; font-weight:700; color:var(--primary-green); text-transform:uppercase; letter-spacing:0.5px; margin:0 0 14px;">${programsHeading}</div>${programsHtml}<div style="margin-bottom:24px;"></div>`
    : '';

  const statsHtml = (service.stats || []).map(s => `
    <div>
      <div style="font-size:1.25rem; font-weight:800; color:var(--navy-text); font-variant-numeric:tabular-nums;">${countNumberHtml(s.number)}</div>
      <div style="font-size:0.75rem; color:var(--text-muted);">${s.label}</div>
    </div>
  `).join('');
 
  const statsBox = service.programs ? '' : `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:16px 20px; background:var(--light-green-bg); border-radius:var(--radius-sm); margin-bottom:24px;">
      ${statsHtml}
    </div>`;

  const modalHtml = `
    <div class="modal-service-content">
      <div class="modal-service-left">
        <img src="${service.image}" alt="${service.title}" class="modal-service-img">
        <div class="modal-service-overlay">
          <p class="handwritten-quote-light" style="font-size:1.8rem; margin:0;">"${service.quote}"</p>
        </div>
      </div>
      <div class="modal-service-right">
        <div style="font-size:0.75rem; font-weight:700; color:var(--primary-green); text-transform:uppercase; margin-bottom:4px;"></div>
        <h2 style="font-size:1.875rem; font-weight:800; color:var(--navy-text); margin-bottom:6px;">${service.title}</h2>
        <div style="font-size:0.9375rem; font-weight:600; color:var(--primary-green); margin-bottom:16px;">${service.subtitle}</div>
        <p style="font-size:0.875rem; color:var(--text-body); line-height:1.6; margin-bottom:24px;">${service.description}</p>
        
        ${capabilitiesSection}

        ${programsSection}

        ${statsBox}

        <a href="contact.html" class="btn btn-primary" onclick="window.emcModal.close()">Discuss Your Project →</a>
      </div>
    </div>
  `;

  window.emcModal.open(modalHtml);

  // Start the count-up once the modal content is in the page.
  // Second call is a safety net in case the modal inserts its HTML a little late.
  setTimeout(() => animateCounts(document), 60);
  setTimeout(() => animateCounts(document), 350);
}