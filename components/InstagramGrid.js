"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Picture from "./Picture";
import { instagram } from "@/data/content";
import { site } from "@/data/site";
import styles from "./InstagramGrid.module.css";

/*
  Replacement for the Wix "Instagram Feed" app. No Instagram API is configured
  (instagram.liveFeed === false), so the grid shows the studio's own photographs from
  this website and links to the real profile. It does not present itself as a live feed.
  "Load More" reveals further photographs in pages of `pageSize`.
*/
export default function InstagramGrid() {
  const { images, initialCount, pageSize } = instagram;
  const [count, setCount] = useState(Math.min(initialCount, images.length));
  const gridRef = useRef(null);
  const prevCount = useRef(count);

  useEffect(() => {
    const items = gridRef.current?.children;
    if (!items || count <= prevCount.current) return;
    const fresh = [...items].slice(prevCount.current);
    prevCount.current = count;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(fresh, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
    return () => tween.kill();
  }, [count]);

  const remaining = images.length - count;

  return (
    <div>
      <ul ref={gridRef} className={styles.grid}>
        {images.slice(0, count).map((key) => (
          <li key={key} className={styles.item}>
            <Picture name={key} sizes="(min-width: 900px) 25vw, 50vw" className={styles.img} />
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <p className={styles.count} aria-live="polite">
          Showing {count} of {images.length} studio photographs
        </p>
        <div className={styles.actions}>
          {remaining > 0 ? (
            <button type="button" className={styles.more} onClick={() => setCount((c) => Math.min(c + pageSize, images.length))}>
              Load More
            </button>
          ) : null}
          <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" className={styles.profile}>
            {site.social.instagram.label} on Instagram
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
