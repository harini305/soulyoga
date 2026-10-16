import manifest from "@/data/image-manifest.json";

// Looks up an optimised image (see scripts/image-sources.mjs and data/image-manifest.json).
export function getImage(key) {
  const img = manifest.images[key];
  if (!img) throw new Error(`Unknown image key "${key}". Add it to scripts/image-sources.mjs and run npm run images.`);
  return img;
}

export function srcSetOf(img) {
  return img.variants.map((v) => `${v.src} ${v.w}w`).join(", ");
}

// A mid-sized variant used as the plain `src` fallback.
export function defaultSrc(img) {
  const v = img.variants;
  return (v.find((x) => x.w >= 1000) || v[v.length - 1]).src;
}
