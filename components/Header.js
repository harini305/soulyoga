"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Picture from "./Picture";
import SocialLinks from "./SocialLinks";
import { nav, site } from "@/data/site";
import styles from "./Header.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const barRef = useRef(null);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const ddRef = useRef(null);
  const menuOpenRef = useRef(false);

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    if (restoreFocus) menuBtnRef.current?.focus();
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, [pathname]);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
    document.documentElement.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Hide the bar while scrolling down, bring it back when scrolling up —
  // and keep it hidden whenever the footer is on screen.
  useGSAP(
    () => {
      const bar = barRef.current;
      const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tween = gsap.quickTo(bar, "yPercent", { duration: 0.45, ease: "power3.out" });
      const show = (v) => (reduce() ? gsap.set(bar, { yPercent: v }) : tween(v));
      let footerInView = false;

      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate(self) {
          const y = self.scroll();
          bar.dataset.scrolled = y > 24 ? "true" : "false";
          if (menuOpenRef.current || bar.contains(document.activeElement)) return show(0);
          if (footerInView && y > 120) return show(-100);
          if (self.direction === 1 && y > 320 && !reduce()) show(-100);
          else if (self.direction === -1) show(0);
        },
      });

      const footer = document.querySelector("body > footer");
      const io = footer
        ? new IntersectionObserver(([entry]) => {
            footerInView = entry.isIntersecting;
            if (menuOpenRef.current || bar.contains(document.activeElement)) return;
            // short pages can show the footer at the very top: never hide the bar there
            if (window.scrollY <= 120) return show(0);
            show(footerInView ? -100 : 0);
          })
        : null;
      if (footer) io.observe(footer);

      return () => {
        st.kill();
        io?.disconnect();
      };
    },
    { scope: barRef }
  );

  // Desktop dropdown: close on outside click / Escape
  useEffect(() => {
    if (!ddOpen) return;
    const onDown = (e) => {
      if (!ddRef.current?.contains(e.target)) setDdOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDdOpen(false);
        ddRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ddOpen]);

  // Mobile menu: focus management, Escape, focus trap, entrance animation
  useEffect(() => {
    if (!menuOpen) return;
    const root = menuRef.current;
    const focusables = () => [...root.querySelectorAll("a[href], button:not([disabled])")];
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") return closeMenu();
      if (e.key !== "Tab") return;
      const f = focusables();
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    let tween;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tween = gsap.from(root.querySelectorAll("[data-menu-item]"), {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.045,
        ease: "power3.out",
        delay: 0.05,
      });
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      tween?.revert();
    };
  }, [menuOpen, closeMenu]);

  const trainingActive = nav.find((n) => n.children)?.children.some((c) => isActive(pathname, c.href));

  return (
    <>
      <header ref={barRef} className={styles.bar} data-scrolled="false">
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.brand} aria-label="Soul Yoga Bali, home">
            <span className={styles.logoWrap}>
              <Picture name="logo" sizes="48px" alt="" priority className={styles.logo} />
            </span>
            <span className={styles.wordmark}>
              <span className={styles.name}>SOUL YOGA BALI</span>
              <span className={styles.tagline}>Sayan · Ubud · Bali</span>
            </span>
          </Link>

          <nav aria-label="Main" className={styles.nav}>
            <ul className={styles.navList}>
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label} ref={ddRef} className={styles.ddItem}>
                    <button
                      type="button"
                      className={`${styles.navLink} ${trainingActive ? styles.active : ""}`}
                      aria-expanded={ddOpen}
                      aria-controls="training-menu"
                      onClick={() => setDdOpen((v) => !v)}
                    >
                      {item.label}
                      <span className={styles.chev} aria-hidden="true" />
                    </button>
                    <ul id="training-menu" className={styles.dd} data-open={ddOpen}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={styles.ddLink}
                            aria-current={isActive(pathname, c.href) ? "page" : undefined}
                            onClick={() => setDdOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive(pathname, item.href) ? styles.active : ""}`}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <button
            ref={menuBtnRef}
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.menuBtnLabel}>{menuOpen ? "Close" : "Menu"}</span>
            <span className={styles.burger} data-open={menuOpen} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={styles.overlay}
        data-open={menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!menuOpen}
      >
        <div className={styles.overlayTop}>
          <span className={styles.name}>SOUL YOGA BALI</span>
          <button type="button" className={styles.menuBtn} onClick={() => closeMenu()} aria-label="Close menu">
            <span className={styles.menuBtnLabel}>Close</span>
            <span className={styles.burger} data-open="true" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
        <nav aria-label="Mobile" className={styles.mNav}>
          <ul>
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className={styles.mGroup} data-menu-item>
                  <span className={styles.mGroupLabel}>{item.label}</span>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className={styles.mSubLink} aria-current={isActive(pathname, c.href) ? "page" : undefined}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href} data-menu-item>
                  <Link href={item.href} className={styles.mLink} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className={styles.mContact} data-menu-item>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.phone.displayCompact}
          </a>
          <SocialLinks size={22} />
        </div>
      </div>
    </>
  );
}
