import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_DIR = new URL("./public", import.meta.url).pathname;
const QUALITY = 85;

// Skip hash-named files (Next.js internal cache) and non-image files
const HEX_HASH = /^[0-9a-f]{8}\.(png|jpe?g)$/i;

async function optimizeImages() {
  const files = await readdir(PUBLIC_DIR);
  const images = files.filter((f) => {
    const ext = extname(f).toLowerCase();
    return (ext === ".png" || ext === ".jpg" || ext === ".jpeg") && !HEX_HASH.test(f);
  });

  let totalOriginal = 0;
  let totalOptimized = 0;

  console.log(`\nOptimizing ${images.length} images to WebP (quality ${QUALITY})...\n`);

  for (const file of images) {
    const inputPath = join(PUBLIC_DIR, file);
    const outputName = basename(file, extname(file)) + ".webp";
    const outputPath = join(PUBLIC_DIR, outputName);

    const { size: originalSize } = await stat(inputPath);

    try {
      await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);
      const { size: optimizedSize } = await stat(outputPath);
      const saving = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
      const savedKB = ((originalSize - optimizedSize) / 1024).toFixed(0);

      totalOriginal += originalSize;
      totalOptimized += optimizedSize;

      console.log(
        `  ✓  ${file.padEnd(40)} ${(originalSize / 1024).toFixed(0).padStart(6)} KB → ${(optimizedSize / 1024).toFixed(0).padStart(6)} KB  (${saving}% smaller, saved ${savedKB} KB)`
      );
    } catch (err) {
      console.error(`  ✗  ${file}: ${err.message}`);
    }
  }

  const totalSaving = (((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1);
  const totalSavedMB = ((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2);
  console.log(`\n  Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB  (${totalSaving}% smaller, saved ${totalSavedMB} MB)\n`);
}

optimizeImages().catch(console.error);
