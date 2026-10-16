// Generates web-sized WebP derivatives of the original Soul Yoga Bali photographs.
// Originals in docs/source-audit/assets/wix-media are read-only and never modified.
//
//   npm run images            (skips derivatives that already exist)
//   npm run images -- --force (regenerates everything)

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { IMAGES, EXCLUDED, PRESETS, SOURCE_DIR, OUTPUT_DIR, MANIFEST } from "./image-sources.mjs";

const force = process.argv.includes("--force");
const root = process.cwd();
sharp.cache(false);

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(path.join(root, OUTPUT_DIR), { recursive: true });
  const manifest = {};
  let originalBytes = 0;
  let outputBytes = 0;

  for (const img of IMAGES) {
    const src = path.join(root, SOURCE_DIR, img.file);
    const stat = await fs.stat(src);
    originalBytes += stat.size;

    // Apply EXIF orientation once, then read the real dimensions.
    const base = sharp(src, { limitInputPixels: false }).rotate();
    const { data: oriented, info } = await base.toBuffer({ resolveWithObject: true });
    const width = info.width;
    const height = info.height;
    const isIcon = img.preset === "icon";
    const keepAlpha = info.channels === 4;

    const widths = [...new Set(PRESETS[img.preset].map((w) => Math.min(w, width)))];
    const variants = [];

    for (const w of widths) {
      const ext = isIcon ? "png" : "webp";
      const name = `${img.key}-${w}.${ext}`;
      const out = path.join(root, OUTPUT_DIR, name);
      if (force || !(await exists(out))) {
        let pipe = sharp(oriented).resize({ width: w, withoutEnlargement: true });
        pipe = isIcon
          ? pipe.png({ compressionLevel: 9 })
          : pipe.webp({ quality: img.preset === "mark" ? 90 : 80, alphaQuality: 100, effort: 5, smartSubsample: true });
        await pipe.toFile(out);
      }
      const size = (await fs.stat(out)).size;
      outputBytes += size;
      variants.push({ w, h: Math.round((height * w) / width), src: `/images/site/${name}`, bytes: size });
    }

    // Average colour used as a loading placeholder background.
    const { dominant } = await sharp(oriented).stats();
    const color = keepAlpha ? "transparent" : `rgb(${dominant.r} ${dominant.g} ${dominant.b})`;

    manifest[img.key] = {
      width,
      height,
      alt: img.alt,
      color,
      original: img.file,
      page: img.page,
      section: img.section,
      variants,
    };
    const largest = variants[variants.length - 1];
    console.log(
      `${img.key.padEnd(22)} ${String(width).padStart(5)}x${String(height).padEnd(5)} ${(stat.size / 1048576).toFixed(1).padStart(5)} MB -> ${variants.length} sizes, largest ${(largest.bytes / 1024).toFixed(0)} KB`
    );
  }

  await fs.writeFile(
    path.join(root, MANIFEST),
    JSON.stringify({ generated: "scripts/optimize-images.mjs", excluded: EXCLUDED, images: manifest }, null, 2) + "\n"
  );
  console.log(`\n${IMAGES.length} published + ${EXCLUDED.length} excluded = ${IMAGES.length + EXCLUDED.length} originals`);
  console.log(`Originals: ${(originalBytes / 1048576).toFixed(1)} MB  ->  all derivatives: ${(outputBytes / 1048576).toFixed(1)} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
