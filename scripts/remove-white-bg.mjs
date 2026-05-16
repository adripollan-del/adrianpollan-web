// One-off: remove near-white background from a PNG, output with alpha channel.
// Usage: node scripts/remove-white-bg.mjs <input> [threshold]
//   threshold: 0-255 — pixels with R,G,B all >= threshold become transparent.
//   Smooth fade applied near threshold to avoid haloing.

import sharp from "sharp";
import { rename } from "node:fs/promises";
import path from "node:path";

const input = process.argv[2];
const hardThreshold = Number(process.argv[3] ?? 245);
const softThreshold = hardThreshold - 25; // pixels above this fade

if (!input) {
  console.error("Usage: node scripts/remove-white-bg.mjs <input.png> [threshold=245]");
  process.exit(1);
}

const tmp = input + ".tmp.png";

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

let transparentPixels = 0;
let fadedPixels = 0;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const minRGB = Math.min(r, g, b);

  if (minRGB >= hardThreshold) {
    data[i + 3] = 0;
    transparentPixels++;
  } else if (minRGB >= softThreshold) {
    // linear fade between soft and hard threshold
    const t = (minRGB - softThreshold) / (hardThreshold - softThreshold);
    const newAlpha = Math.round(data[i + 3] * (1 - t));
    if (newAlpha < data[i + 3]) {
      data[i + 3] = newAlpha;
      fadedPixels++;
    }
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(tmp);

await rename(tmp, input);

console.log(`✓ Processed ${path.basename(input)}`);
console.log(`  Dimensions: ${info.width}x${info.height}`);
console.log(`  Transparent: ${transparentPixels} px (hard cut ≥ ${hardThreshold})`);
console.log(`  Faded:       ${fadedPixels} px (soft fade ${softThreshold}-${hardThreshold})`);
