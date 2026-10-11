// Builds PNG and ICO icons from the logo SVG, and the Open Graph image. Run once: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const svg = await readFile(`${root}public/logo.svg`);

for (const [name, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(svg, { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toFile(`${root}public/${name}`);
}

// ICO containing a 32px PNG
const png32 = await sharp(svg, { density: 300 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14); header.writeUInt32LE(22, 18);
await writeFile(`${root}public/favicon.ico`, Buffer.concat([header, png32]));

// Open Graph image, rendered with the real site fonts
const b64 = async (file, type) => `data:${type};base64,${(await readFile(file)).toString('base64')}`;
const font = async (p) => b64(`${root}node_modules/${p}`, 'font/woff2');
const cg = await font('@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2');
const cgi = await font('@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2');
const inter = await font('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2');
const logo = await b64(`${root}public/logo.svg`, 'image/svg+xml');
const html = `<!doctype html><html><head><style>
@font-face{font-family:C;src:url(${cg})}
@font-face{font-family:C;font-style:italic;src:url(${cgi})}
@font-face{font-family:I;src:url(${inter})}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:radial-gradient(70% 90% at 50% 0%,#2C4377 0%,#0B1530 55%,#04070F 100%);color:#F4F6FA;font-family:I;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden}
.cone{position:absolute;top:0;left:50%;width:1000px;height:100%;transform:translateX(-50%);background:linear-gradient(#ffffff22,#fff0 75%);clip-path:polygon(38% 0,62% 0,84% 100%,16% 100%)}
img{width:120px;height:120px;border-radius:27px;margin-bottom:34px;box-shadow:0 30px 80px -10px #2C4377}
h1{font-family:C;font-weight:500;font-size:96px;letter-spacing:-2px;line-height:1}
h1 i{background:linear-gradient(180deg,#fff,#DCE1EA 28%,#A9B1BF 55%,#E8ECF2 78%,#8C95A6);-webkit-background-clip:text;color:transparent}
p{margin-top:22px;font-size:26px;color:#BCC3D0;letter-spacing:.2px}
.e{position:absolute;bottom:40px;font-size:15px;letter-spacing:6px;text-transform:uppercase;color:#8C95A6}
</style></head><body><div class="cone"></div><img src="${logo}"><h1>Advice<i>4</i>you</h1><p>Life in the UK, made clear.</p><div class="e">Norwich · Norfolk</div></body></html>`;
await mkdir(`${root}public/og`, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const shot = await page.screenshot({ type: 'png' });
await browser.close();
await sharp(shot).jpeg({ quality: 86, mozjpeg: true }).toFile(`${root}public/og/advice4you.jpg`);
console.log('icons and og image written');
