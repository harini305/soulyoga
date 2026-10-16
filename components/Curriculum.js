"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Curriculum.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Curriculum check icon, extracted verbatim from the source site markup
// (docs/source-audit/assets/vector/curriculum-check-icon.svg).
export function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="40.026 40.026 319.948 319.948" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M200 40.026c-88.351 0-159.974 71.623-159.974 159.974S111.649 359.974 200 359.974c88.352 0 159.974-71.623 159.974-159.974S288.352 40.026 200 40.026zm17.786 228.68h-50.202l-.638-1.422.054-.117-12.914-28.099v-.001l-35.254-76.47h51.493l22.422 48.548 36.928-79.852h51.494l-63.383 137.413z"
      />
      <path fill="currentColor" opacity=".3" d="M192.747 211.146l-25.039 57.56-10.601-23.065 17.82-73.079 17.82 38.584z" />
    </svg>
  );
}

function Item({ item }) {
  if (typeof item === "string") {
    // "Term: explanation" -> emphasise the term (wording unchanged)
    const m = item.match(/^([^:]{3,60}?\s?:)\s(.+)$/s);
    if (m) {
      return (
        <>
          <strong className={styles.term}>{m[1]}</strong> {m[2]}
        </>
      );
    }
    return item;
  }
  return (
    <Link href={item.link.href} className={styles.inlineLink}>
      {item.link.text}
    </Link>
  );
}

const slug = (t, i) => `module-${i + 1}-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

/*
  variant "grid"  — 200h: modules flow in two columns.
  variant "index" — 300h: sticky module index on the left that follows the reader
                    (ScrollTrigger marks the module currently in view).
*/
export default function Curriculum({ modules, variant = "grid", footer }) {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (variant !== "index") return;
      const mods = gsap.utils.toArray("[data-module]", rootRef.current);
      mods.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    },
    { scope: rootRef, dependencies: [variant] }
  );

  if (variant === "index") {
    return (
      <div ref={rootRef} className={styles.indexLayout}>
        <nav className={styles.index} aria-label="Curriculum modules">
          <ol>
            {modules.map((m, i) => (
              <li key={m.title}>
                <a href={`#${slug(m.title, i)}`} className={styles.indexLink} aria-current={i === active ? "true" : undefined}>
                  {m.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={styles.stack}>
          {modules.map((m, i) => (
            <section key={m.title} id={slug(m.title, i)} data-module className={styles.stackModule} aria-labelledby={`${slug(m.title, i)}-h`}>
              <h3 id={`${slug(m.title, i)}-h`} className={styles.title}>
                {m.title}
              </h3>
              <ul className={styles.items}>
                {m.items.map((it, j) => (
                  <li key={j}>
                    <CheckIcon className={styles.check} />
                    <span>
                      <Item item={it} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    );
  }

  // Two balanced stacks (modules keep their order: left column first, then right), so a
  // short module never sits above empty space the way equal-height grid rows did.
  const weight = (m) => 140 + m.items.reduce((n, it) => n + 60 + (typeof it === "string" ? it.length : 30), 0);
  const total = modules.reduce((n, m) => n + weight(m), 0);
  let split = 1;
  let best = Infinity;
  for (let k = 1, acc = 0; k < modules.length; k++) {
    acc += weight(modules[k - 1]);
    const tallest = Math.max(acc, total - acc);
    if (tallest < best) {
      best = tallest;
      split = k;
    }
  }
  const columns = [modules.slice(0, split), modules.slice(split)];

  return (
    <div ref={rootRef} className={styles.grid}>
      {columns.map((col, c) => (
        <div key={c} className={styles.stack2}>
          {col.map((m, j) => {
            const i = c === 0 ? j : split + j;
            return <ModuleBlock key={m.title} m={m} i={i} />;
          })}
          {c === 1 && footer ? <div className={styles.columnFooter} data-reveal>{footer}</div> : null}
        </div>
      ))}
    </div>
  );
}

function ModuleBlock({ m, i }) {
  return (
        <section className={styles.module} aria-labelledby={`${slug(m.title, i)}-h`} data-reveal>
          <div className={styles.head}>
            <h3 id={`${slug(m.title, i)}-h`} className={styles.title}>
              {m.title}
            </h3>
          </div>
          <ul className={styles.items}>
            {m.items.map((it, j) => (
              <li key={j}>
                <CheckIcon className={styles.check} />
                <span>
                  <Item item={it} />
                </span>
              </li>
            ))}
          </ul>
        </section>
  );
}
