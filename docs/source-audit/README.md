# docs/source-audit — Soul Yoga Bali source website audit

Phase-1 audit of https://www.soulyogabali.com/ (captured 2026-10-15). It is the reference for the phase-2 rebuild (Next.js App Router, JavaScript, React, GSAP/ScrollTrigger).

**Start with [`00-audit-report.md`](00-audit-report.md).**

| Need | Go to |
|---|---|
| What pages and routes exist, and what is on each | [`01-page-inventory.md`](01-page-inventory.md) |
| Exact text to reuse | [`content/`](content/) (one file per page; verbatim, including testimonials and the timetable) |
| What must not be lost | [`02-content-preservation-checklist.md`](02-content-preservation-checklist.md) |
| Images and where each one goes | [`03-asset-inventory.md`](03-asset-inventory.md), [`assets/asset-inventory.csv`](assets/asset-inventory.csv), [`assets/contact-sheet.jpg`](assets/contact-sheet.jpg) |
| Fonts, colours, logo, visual style | [`04-brand-typography-colors.md`](04-brand-typography-colors.md) |
| Forms, widgets, integrations, SEO | [`05-functionality-dependencies.md`](05-functionality-dependencies.md) |
| Problems and questions for the owner | [`06-issues-missing-unresolved.md`](06-issues-missing-unresolved.md) |
| What the original looks like | [`screenshots/`](screenshots/) (`desktop-*` = 1440 px, `mobile-*` = 390 px; `*-fold` = first screen, `*-full` = whole page) |
| Raw evidence | [`data/`](data/) |

Page keys used in filenames: `home` = `/`, `yogaclass` = `/yogaclass` (nav label "SCHEDULE"), `200ytt` = `/200yogateachertraining`, `300ytt` = `/300yogateachertraining`, `recovering` = `/recovering`, `aboutus` = `/aboutus`, `contact` = `/contact`, `book-online`, `svc-alignment` = `/service-page/alignment-vinyasa`, `cat-all` = `/category/all-products`.

**Original assets** in `assets/wix-media/` are untouched downloads (Wix media IDs as filenames, ~287 MB). Treat them as read-only masters. Generate web-sized derivatives elsewhere in phase 2, because Next.js image optimization will be disabled.
