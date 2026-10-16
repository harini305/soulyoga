import Link from "next/link";
import styles from "./Button.module.css";

// Rectangular, flat buttons (the source design uses no radii or shadows).
// variant: "solid" | "outline" | "light" | "accent"
export default function Button({ href, children, variant = "outline", external = false, className = "", arrow = true, ...rest }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );
  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    const isWeb = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {inner}
        {isWeb ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}
