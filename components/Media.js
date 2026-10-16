import Picture from "./Picture";
import styles from "./Media.module.css";

// Image frame with a fixed aspect ratio (no layout shift) and optional motion hooks:
//   parallax -> gentle scroll-linked drift of the photo inside the frame
//   reveal   -> clip-path reveal when it scrolls into view ("up" | "left" | "right")
export default function Media({
  name,
  ratio,
  sizes,
  priority,
  alt,
  position,
  parallax = false,
  reveal,
  className = "",
  fill = false,
  children,
  as: Tag = "figure",
  style,
  ...rest
}) {
  return (
    <Tag
      className={`${styles.media} ${fill ? styles.fill : ""} ${className}`}
      style={ratio ? { aspectRatio: ratio, ...style } : style}
      {...rest}
      data-parallax={parallax ? "" : undefined}
      data-clip={reveal || undefined}
    >
      <Picture name={name} sizes={sizes} priority={priority} alt={alt} position={position} className={styles.img} />
      {children}
    </Tag>
  );
}
