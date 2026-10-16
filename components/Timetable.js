"use client";

import { useEffect, useState } from "react";
import { timetable } from "@/data/classes";
import { classSlug as slug } from "@/lib/slug";
import styles from "./Timetable.module.css";


// "Hatha Flow / Vinyasa" -> two class names
function ClassNames({ value, link }) {
  const parts = value.split(" / ");
  return parts.map((p, i) => (
    <span key={p}>
      {link ? (
        <a href={`#${slug(p)}`} className={styles.classLink}>
          {p}
        </a>
      ) : (
        p
      )}
      {i < parts.length - 1 ? <span className={styles.sep}> / </span> : null}
    </span>
  ));
}

// Current weekday in Bali (WITA, UTC+8) — highlighted after hydration only.
function useBaliToday() {
  const [today, setToday] = useState(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Makassar" });
    setToday(fmt.format(new Date()));
  }, []);
  return today;
}

export default function Timetable({ linkClasses = false, caption = "Weekly class timetable" }) {
  const today = useBaliToday();
  const { days, slots, note } = timetable;

  return (
    <div className={styles.wrap} style={{ "--tt-header": timetable.headerColor }}>
      {/* Wide screens: a real table, days across */}
      <table className={styles.table}>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={styles.corner}>
              Time
            </th>
            {days.map((d) => (
              <th scope="col" key={d.key} className={today === d.key ? styles.today : undefined}>
                <abbr title={d.label} className={styles.dayShort}>
                  {d.key}
                </abbr>
                <span className={styles.dayLong}>{d.label}</span>
                {today === d.key ? <span className={styles.todayTag}>Today</span> : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((s) => (
            <tr key={s.time}>
              <th scope="row" className={styles.slot}>
                <span className={styles.time}>{s.time}</span>
                <span className={styles.slotLabel}>{s.label}</span>
              </th>
              {days.map((d) => (
                <td key={d.key} className={today === d.key ? styles.todayCell : undefined} data-reveal-cell>
                  {s.classes[d.key] ? <ClassNames value={s.classes[d.key]} link={linkClasses} /> : <span className={styles.none}>—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Narrow screens: one row per day */}
      <div className={styles.list}>
        {slots.map((s) => (
          <div key={s.time}>
            <p className={styles.listHead}>
              <span>{s.time}</span>
              <span>{s.label}</span>
            </p>
            <ul aria-label={`${s.label} ${s.time}`}>
              {days.map((d) => (
                <li key={d.key} className={today === d.key ? styles.listToday : undefined}>
                  <span className={styles.listDay}>
                    {d.label}
                    {today === d.key ? <span className={styles.todayTag}>Today</span> : null}
                  </span>
                  <span className={styles.listClass}>
                    {s.classes[d.key] ? <ClassNames value={s.classes[d.key]} link={linkClasses} /> : "—"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note ? <p className={styles.note}>{note}</p> : null}
    </div>
  );
}

