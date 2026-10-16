import { site } from "@/data/site";
import Picture from "./Picture";
import styles from "./SocialLinks.module.css";

// Facebook and Instagram, using the original icon files from the source site.
export default function SocialLinks({ size = 20, inverted = false }) {
  const items = [
    { key: "icon-facebook", label: "Soul Yoga Bali on Facebook", url: site.social.facebook.url },
    { key: "icon-instagram", label: "Soul Yoga Bali on Instagram", url: site.social.instagram.url },
  ];
  return (
    <span className={`${styles.list} ${inverted ? styles.inverted : ""}`}>
      {items.map((i) => (
        <a key={i.key} href={i.url} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${i.label} (opens in a new tab)`}>
          <Picture name={i.key} alt="" sizes={`${size}px`} style={{ width: size, height: size }} className={styles.icon} />
        </a>
      ))}
    </span>
  );
}
