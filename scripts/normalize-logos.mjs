import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const downloads = join(process.env.USERPROFILE, "Downloads");
const outDir = join(__dirname, "..", "public", "logos");

// Normalize every logo to the SAME rendered height with tight, equal padding
// on a clean white pill. Widths stay proportional so nothing looks stretched.
const LOGO_H = 96; // glyph height (retina @2x -> displays ~48px)
const PAD_Y = 22;
const PAD_X = 30;
const BG = { r: 255, g: 255, b: 255, alpha: 1 };

const sources = [
  { name: "teradata", file: "teradatat logo.png" },
  { name: "zoominfo", file: "zoominfologo.webp" },
  { name: "ge3s", file: "ge3slogo.png" },
];

for (const { name, file } of sources) {
  const input = join(downloads, file);
  const output = join(outDir, `${name}.png`);

  // 1) flatten onto white, 2) trim surrounding whitespace,
  // 3) scale to a uniform glyph height, 4) add equal padding.
  const flattened = await sharp(input).flatten({ background: BG }).toBuffer();

  let trimmed;
  try {
    trimmed = await sharp(flattened).trim({ background: BG, threshold: 12 }).toBuffer();
  } catch {
    trimmed = flattened;
  }

  await sharp(trimmed)
    .resize({ height: LOGO_H, fit: "inside", withoutEnlargement: false })
    .extend({ top: PAD_Y, bottom: PAD_Y, left: PAD_X, right: PAD_X, background: BG })
    .flatten({ background: BG })
    .png()
    .toFile(output);

  const meta = await sharp(output).metadata();
  console.log(`${name} -> ${meta.width}x${meta.height}`);
}
