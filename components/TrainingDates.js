"use client";

import { useEffect, useState } from "react";
import { dateStatus } from "@/data/trainings";
import styles from "./TrainingDates.module.css";

const LABEL = { past: "Past date", current: "In progress", upcoming: "Upcoming" };

// Published training dates with an honest status. The server renders the status at
// build time; the browser recomputes it so a stale build never shows a past date as upcoming.
// A status is only a date comparison: it never claims places are available.
export default function TrainingDates({ heading, dates, emptyText, tone = "light" }) {
  const [now, setNow] = useState(null);
  useEffect(() => setNow(new Date()), []);
  const statusOf = (d) => dateStatus(d, now || new Date());

  return (
    <div className={`${styles.wrap} ${styles[tone]}`}>
      {heading ? <p className={styles.heading}>{heading}</p> : null}
      {dates.length ? (
        <ul className={styles.list}>
          {dates.map((d) => {
            const s = statusOf(d);
            return (
              <li key={d.label} className={styles[s]} suppressHydrationWarning>
                <span className={styles.label}>{d.label}</span>
                <span className={styles.tag} suppressHydrationWarning>
                  {LABEL[s]}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.empty}>{emptyText}</p>
      )}
    </div>
  );
}
