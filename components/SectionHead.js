import SplitHeading from "./SplitHeading";
import styles from "./SectionHead.module.css";

// Section opener: split heading (+ optional intro). The small label-and-rule line
// above headings was removed at the owner's request; `label` is kept for call sites only.
export default function SectionHead({ title, as = "h2", id, intro, tone = "ink", align = "split", className = "" }) {
  return (
    <header className={`${styles.head} ${styles[align]} ${styles[tone]} ${className}`}>
      <div className={styles.row}>
        <SplitHeading as={as} lines={title} id={id} className={styles.title} />
        {intro ? (
          <div className={styles.intro} data-reveal>
            {intro}
          </div>
        ) : null}
      </div>
    </header>
  );
}
