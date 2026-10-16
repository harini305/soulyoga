import Link from "next/link";
import Picture from "./Picture";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";
import styles from "./Footer.module.css";

const external = { target: "_blank", rel: "noopener noreferrer" };

// Compact single-row footer: brand · visit · contact · social.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Soul Yoga Bali, home">
          <span className={styles.logoTile}>
            <Picture name="logo" sizes="96px" alt="" className={styles.logo} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.wordmark}>SOUL YOGA BALI</span>
            <span className={styles.tagline}>{site.tagline}</span>
          </span>
        </Link>

        <div className={styles.col}>
          <p className={styles.label}>Visit</p>
          <p>
            {site.footerLocation} ·{" "}
            <a href={site.maps.studio.url} {...external} className={styles.link}>
              Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
          <p className={styles.muted}>{site.address}</p>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Contact</p>
          <p>
            <a href={`tel:${site.phone.e164}`} className={styles.link}>
              {site.phone.displayCompact}
            </a>{" "}
            ·{" "}
            <a href={site.whatsappUrl} {...external} className={styles.link}>
              WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className={styles.link}>
              {site.email}
            </a>
          </p>
        </div>

        <div className={styles.social}>
          <SocialLinks size={22} inverted />
        </div>
      </div>
    </footer>
  );
}
