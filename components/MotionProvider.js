"use client";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
  Route-scoped motion. Pages stay server components and opt in with attributes:

    data-hero-item          first-screen items, played in DOM order on load
    data-hero-media         first-screen image frame (clip reveal)
    data-split              heading built by <SplitHeading> (words rise from masks)
    data-reveal             fade + rise when scrolled into view
    data-reveal-stagger     same, applied to the element's direct children in turn
                            (kept available, but lists now reveal as one block)
    data-clip="up|left|right"  image frame clip-path reveal
    data-parallax           photo drifts inside its frame while scrolling (scrubbed)
    data-draw               hairline that draws from the left
    data-tilt               RecoveRing "tilt in" (a calmer take on the original Wix effect)
    data-drift="left|right" statement lines that pull apart as you scroll

  Everything is created inside gsap.matchMedia("(prefers-reduced-motion: no-preference)"),
  so nothing is hidden or moved for visitors who prefer reduced motion, and everything is
  reverted when the route changes.
*/

// Image frames are never fully hidden: they start slightly inset (the photo is always
// visible) and open out as soon as they enter the screen.
const CLIP_FROM = {
  up: "inset(8% 4% 0% 4%)",
  left: "inset(0% 8% 0% 0%)",
  right: "inset(0% 0% 0% 8%)",
};

export default function MotionProvider() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = document.documentElement;
      const mm = gsap.matchMedia();
      const q = (sel) => gsap.utils.toArray(sel);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ---- First screen ------------------------------------------------
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.05 });
        q("[data-hero-media]").forEach((frame) => {
          const img = frame.querySelector("img");
          tl.fromTo(frame, { clipPath: "inset(14% 6% 0% 6%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.out" }, 0);
          if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 2, ease: "expo.out" }, 0);
        });
        q("[data-hero-item]").forEach((el, i) => {
          const at = 0.15 + i * 0.12;
          if (el.classList.contains("split-host")) {
            // y is set explicitly: the CSS pre-hide offset must not be read back as a pixel value
            tl.fromTo(el.querySelectorAll(".split-word"), { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: 1.1, stagger: 0.06 }, at);
          } else {
            tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, at);
          }
        });

        // ---- Split headings (outside the hero) ---------------------------
        q("[data-split]:not([data-hero-item])").forEach((el) => {
          gsap.fromTo(
            el.querySelectorAll(".split-word"),
            { y: 0, yPercent: 110 },
            { y: 0, yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.05, scrollTrigger: { trigger: el, start: "top 88%", once: true } }
          );
        });

        // ---- Fade + rise -------------------------------------------------
        q("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 95%", once: true } }
          );
        });
        q("[data-reveal-stagger]").forEach((el) => {
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } }
          );
        });

        // ---- Image clip reveals ----------------------------------------------
        q("[data-clip]").forEach((frame) => {
          const from = CLIP_FROM[frame.dataset.clip] || CLIP_FROM.up;
          const img = frame.querySelector("img");
          const tl2 = gsap.timeline({ scrollTrigger: { trigger: frame, start: "top bottom", once: true } });
          tl2.fromTo(frame, { clipPath: from }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" });
          if (img && !frame.hasAttribute("data-parallax")) {
            tl2.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power3.out" }, 0);
          }
        });

        // ---- Parallax photographs --------------------------------------------
        q("[data-parallax]").forEach((frame) => {
          const img = frame.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { yPercent: -7, scale: 1.16 },
            {
              yPercent: 7,
              scale: 1.16,
              ease: "none",
              scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.6 },
            }
          );
        });

        // ---- Hairlines ---------------------------------------------------------
        q("[data-draw]").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } }
          );
        });

        // ---- RecoveRing: tilt in --------------------------------------------------
        q("[data-tilt]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, rotate: -4, y: 48, transformOrigin: "0% 100%" },
            {
              opacity: 1,
              rotate: 0,
              y: 0,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          );
        });

        // ---- RecoveRing: "More Stretching, Less Stressing" lines drift apart -----
        q("[data-drift]").forEach((el) => {
          const dir = el.dataset.drift === "left" ? -1 : 1;
          gsap.fromTo(
            el,
            { xPercent: -dir * 6 },
            {
              xPercent: dir * 6,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 },
            }
          );
        });
      });

      root.classList.remove("motion-pending");

      // Positions depend on web fonts and late layout; recalculate once they settle.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh);
      const t = setTimeout(refresh, 600);

      return () => {
        clearTimeout(t);
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
