import { getImage, srcSetOf, defaultSrc } from "@/lib/images";

// Responsive <img> using the pre-generated WebP derivatives (no /_next/image).
export default function Picture({ name, sizes = "100vw", priority = false, alt, className, position, style, ...rest }) {
  const img = getImage(name);
  return (
    <img
      src={defaultSrc(img)}
      srcSet={srcSetOf(img)}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt ?? img.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      style={{ backgroundColor: img.color, objectPosition: position, ...style }}
      {...rest}
    />
  );
}
