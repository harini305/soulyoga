import Link from "next/link";
import SectionHead from "../SectionHead";
import styles from "./Tuition.module.css";

function Highlight({ item }) {
  if (typeof item === "string") return item;
  return (
    <>
      {item.before}
      <Link href={item.link.href}>{item.link.text}</Link>
      {item.after}
    </>
  );
}

// "SCHEDULE & TUITION": prices + highlights, and the daily schedule as a timeline.
export default function Tuition({ program, id, index = "02", tone = "light" }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`} aria-labelledby={id}>
      <div className="container">
        <SectionHead index={index} label="Tuition" id={id} title="SCHEDULE & TUITION" align="stack" />
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.prices} data-reveal>
              {program.prices.map((p) => (
                <div key={p.value} className={styles.priceRow}>
                  <p className={styles.priceLabel}>{p.label || " "}</p>
                  <p className={styles.priceValue}>{p.value}</p>
                  {p.note ? <p className={styles.priceNote}>{p.note}</p> : null}
                </div>
              ))}
            </div>
            <h3 className={styles.subhead} data-reveal>
              OUR HIGHLIGHT
            </h3>
            <ol className={styles.highlights} data-reveal>
              {program.highlights.map((h, i) => (
                <li key={i}>
                  <Highlight item={h} />
                </li>
              ))}
            </ol>
          </div>

          <div className={`${styles.col} ${styles.scheduleCol}`}>
            <h3 className={styles.subhead} data-reveal>
              DAILY SCHEDULE
            </h3>
            {program.schedule.intro.map((l) => (
              <p key={l} className={styles.intro} data-reveal>
                {l}
              </p>
            ))}
            <ol className={styles.timeline} data-reveal>
              {program.schedule.slots.map((slot) => (
                <li key={slot.time}>
                  <span className={styles.time}>{slot.time}</span>
                  <span className={styles.what}>
                    {slot.what}
                    {slot.detail ? <span className={styles.detail}>{slot.detail}</span> : null}
                  </span>
                </li>
              ))}
            </ol>
            {program.schedule.note ? <p className={styles.note}>{program.schedule.note}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
