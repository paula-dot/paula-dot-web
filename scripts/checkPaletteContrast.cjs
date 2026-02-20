const fs = require('fs');
function hexToRgb(hex){hex=hex.replace('#',''); if(hex.length===3) hex=hex.split('').map(c=>c+c).join(''); const n=parseInt(hex,16); return [(n>>16)&255,(n>>8)&255,n&255];}
function srgbToLin(c){c/=255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}
function lum(hex){ const [r,g,b]=hexToRgb(hex); return 0.2126*srgbToLin(r)+0.7152*srgbToLin(g)+0.0722*srgbToLin(b); }
function contrast(a,b){ const L1=lum(a),L2=lum(b); const light=Math.max(L1,L2), dark=Math.min(L1,L2); return Number(((light+0.05)/(dark+0.05)).toFixed(2)); }
function rgbToHex(r,g,b){return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}
function composite(fgHex,alpha,bgHex){const f=hexToRgb(fgHex), b=hexToRgb(bgHex); const r=Math.round(alpha*f[0]+(1-alpha)*b[0]); const g=Math.round(alpha*f[1]+(1-alpha)*b[1]); const bl=Math.round(alpha*f[2]+(1-alpha)*b[2]); return rgbToHex(r,g,bl)}

const css = fs.readFileSync('./styles/main.css','utf8');
const re = /--([a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{6})/g;
let m; const vars = {};
while((m=re.exec(css)) !== null){ vars[m[1]] = m[2]; }

const pageBg = vars['bg-primary'] || '#0F172A';
const palette = {
  paletteCyan: vars['palette-cyan'],
  paletteTeal: vars['palette-teal'],
  palettePeriwinkle: vars['palette-periwinkle'],
  semBlue: vars['sem-blue'],
  semMagenta: vars['sem-magenta'],
  semCyan: vars['sem-cyan'],
  semGreen: vars['sem-green'],
  semAmber: vars['sem-amber']
};

// card composite: rgba(12,20,36,0.78) over pageBg (we used that in CSS)
const cardFg = '#0C1424'; const cardAlpha = 0.78;
const cardComp = composite(cardFg, cardAlpha, pageBg);

const chip15 = composite(palette.paletteTeal, 0.15, cardComp);
const chip12 = composite(palette.paletteTeal, 0.12, cardComp);

const results = { pageBg, cardComp, chip15, chip12, pairs: {} };
for(const k in palette){ if(!palette[k]) continue; results.pairs[k] = { hex: palette[k], contrast_vs_page: contrast(palette[k], pageBg), contrast_vs_card: contrast(palette[k], cardComp) } }
results.chips = {
  chip15: { hex: chip15, contrast_textWhite: contrast('#F4F4F4', chip15), meetsAA: contrast('#F4F4F4', chip15) >= 4.5 },
  chip12: { hex: chip12, contrast_textWhite: contrast('#F4F4F4', chip12), meetsAA: contrast('#F4F4F4', chip12) >= 4.5 }
};
results.cta = { paletteCyan: palette.paletteCyan, contrast_textDark: contrast(pageBg, palette.paletteCyan), meetsAA: contrast(pageBg, palette.paletteCyan) >= 4.5 };

fs.writeFileSync('./contrast-results.json', JSON.stringify(results, null, 2),'utf8');
console.log(JSON.stringify(results, null, 2));

