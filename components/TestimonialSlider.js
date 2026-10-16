"use client";

import { useCallback, useId, useRef, useState } from "react";
import Media from "./Media";
import styles from "./TestimonialSlider.module.css";

const CLAMP_CHARS = 420; // longer testimonials start collapsed with a "read more" toggle

// Language of a name written in a non-Latin script (e.g. 손나현, 街頭故事, Роман Двойников)
function scriptLang(text) {
  if (/[가-힯]/.test(text)) return "ko";
  if (/[぀-ヿ]/.test(text)) return "ja";
  if (/[一-鿿]/.test(text)) return "zh-Hant";
  if (/[Ѐ-ӿ]/.test(text)) return "ru";
  return undefined;
}

function lengthOf(t) {
  return t.paragraphs.reduce((n, p) => n + p.text.length, 0);
}

/*
  Accessible carousel for the original slideshow testimonials.
  - Every slide sits in the same grid cell, so the block keeps a stable height
    (no page jumps). Long entries are collapsed until expanded.
  - Changes only when the visitor chooses: dots, arrow keys (when focused) and
    touch swipe. There is no autoplay, so no pause control is needed.
*/
export default function TestimonialSlider({ items, tone = "light", background, label = "Testimonials" }) {
  const n = items.length;
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const startX = useRef(null);
  const uid = useId();

  const go = useCallback(
    (to) => {
      setExpanded(false);
      setIndex(((to % n) + n) % n);
    },
    [n]
  );

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse") return;
    startX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section className={`${styles.root} ${styles[tone]}`} aria-roledescription="carousel" aria-label={label} onKeyDown={onKeyDown}>
      {background ? (
        <div className={styles.bg} aria-hidden="true">
          <Media name={background} fill sizes="100vw" alt="" parallax />
          <div className={styles.scrim} />
        </div>
      ) : null}

      <div className={`container ${styles.inner}`}>
        <div className={styles.main}>
          <div className={styles.dots} role="group" aria-label="Choose a testimonial">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                data-dot
                className={styles.dot}
                aria-label={`Testimonial ${i + 1}: ${t.name}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <div
            className={styles.viewport}
            aria-live="polite"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (startX.current = null)}
          >
            {items.map((t, i) => {
              const active = i === index;
              const long = lengthOf(t) > CLAMP_CHARS;
              const isOpen = active && expanded;
              const textId = `${uid}-t${i}`;
              return (
                <figure
                  key={t.name}
                  className={styles.slide}
                  data-active={active}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${n}`}
                  aria-hidden={!active}
                  inert={!active ? true : undefined}
                >
                  <blockquote id={textId} className={`${styles.text} ${long && !isOpen ? styles.clamped : ""}`}>
                    {t.paragraphs.map((p, j) => (
                      <p key={j} lang={p.lang}>
                        {p.text}
                      </p>
                    ))}
                  </blockquote>
                  {long ? (
                    <button
                      type="button"
                      className={styles.more}
                      aria-expanded={isOpen}
                      aria-controls={textId}
                      onClick={() => setExpanded((v) => !v)}
                    >
                      {isOpen ? "Show less" : "Read the full testimonial"}
                    </button>
                  ) : null}
                  <figcaption className={styles.name} lang={scriptLang(t.name)}>
                    {t.name}
                  </figcaption>
                </figure>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
