import styles from "./QuoteBand.module.css";

// Lime band holding a testimonial or statement (a signature element of the original site).
// layout: "center" | "offset"
export default function QuoteBand({ lines, layout = "center", cite }) {
  return (
    <section className={`${styles.band} ${styles[layout]}`}>
      <div className="container">
        <figure className={styles.figure} data-reveal>
          <blockquote className={styles.quote}>
            {lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </blockquote>
          {cite ? <figcaption className={styles.cite}>{cite}</figcaption> : null}
        </figure>
      </div>
    </section>
  );
}
