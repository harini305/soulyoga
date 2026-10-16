# Soul Yoga Bali — Source Website Audit (Phase 1)

| | |
|---|---|
| Site audited | https://www.soulyogabali.com/ |
| Audit date | 2026-10-15 |
| Platform | Wix (Thunderbolt renderer), single language (English), currency IDR |
| Phase | 1 of 2: investigation only. **No redesign, no code, no packages, no Git push, no deployment.** |

## 1. Method and coverage
1. **Discovery**
   - Read `robots.txt` and `sitemap.xml`, plus its 3 child sitemaps.
   - Crawled every navigation, footer and in-content link.
   - Probed 23 common routes such as `/blog`, `/faq` and `/privacy-policy`.
2. **Server HTML capture**
   - Fetched all 14 sitemap URLs with desktop and mobile user agents (28 HTML snapshots).
   - Extracted every visible text node in document order, plus images, links, forms, iframes and metadata.
3. **Rendered capture**
   - Rendered 10 pages in headless Chrome at 1440 px and 390 px, scrolling to trigger lazy loading.
   - Captured full-page and first-screen screenshots, computed styles for every text node, theme variables, section backgrounds, iframe URLs and image placements.
   - Opened the mobile menu.
   - Clicked through all 4 testimonial slideshows. Only slide 1 exists in the HTML, so the other 32 testimonials were recovered this way.
4. **Asset download:** downloaded all 48 Wix media files at original resolution (~287 MB) and extracted the one inline SVG icon.
5. **Link verification:** external links resolved, and all live internal links returned 200.

**Coverage:**
- **7 live pages** (100%).
- **7 orphan or system Wix pages**, documented.
- 23 probed routes: 21 confirmed absent (404), and 2 found as Wix system pages (`/cart-page`; `/my-account`, which shows a 404 page).

Not covered:
- Form submission (deliberately not sent).
- Hover-state measurement.
- Tablet layout (Wix only has desktop and mobile layouts).

## 2. Deliverables in this folder
| File | Contents |
|---|---|
| [`README.md`](README.md) | Index and how to use this folder in phase 2 |
| [`01-page-inventory.md`](01-page-inventory.md) | Route table, shared components, page-by-page section order, interactions, responsive notes |
| [`02-content-preservation-checklist.md`](02-content-preservation-checklist.md) | Business facts and a per-page checklist of everything that must be carried over |
| [`content/*.md`](content/) | **Verbatim text of every page** (incl. all 36 slideshow testimonials and the transcribed timetable) |
| [`03-asset-inventory.md`](03-asset-inventory.md) + [`assets/asset-inventory.csv`](assets/asset-inventory.csv) | Asset list, page→asset map, quality notes |
| [`assets/wix-media/`](assets/wix-media/) | 48 original image files (untouched) |
| [`assets/vector/`](assets/vector/) | Curriculum check icon (SVG) |
| [`assets/contact-sheet.jpg`](assets/contact-sheet.jpg) | Visual index of all images |
| [`04-brand-typography-colors.md`](04-brand-typography-colors.md) | Fonts, type scale, palette (verified vs. estimated), logos, visual language |
| [`05-functionality-dependencies.md`](05-functionality-dependencies.md) | Forms, booking/payments, widgets, integrations, SEO state, phase-2 considerations |
| [`06-issues-missing-unresolved.md`](06-issues-missing-unresolved.md) | Contradictions, typos, odd links, missing assets, limitations, owner questions |
| [`screenshots/`](screenshots/) | Desktop and mobile full-page and first-screen captures of 10 pages, plus the open mobile menu |
| [`data/`](data/) | Raw machine-readable evidence (rendered styles, asset placements, slideshows, typography) |

## 3. Key findings (summary)

### Site structure
- There are 7 live pages: Home, Schedule (`/yogaclass`), 200h TTC, 300h TTC, RecoveRing Therapy, About Us and Contact.
- The navigation has one dropdown ("TEACHER TRAINING").
- Wix also exposes **orphan template pages that are indexed in the sitemap**:
  - Bookings, with 3 "Service Name / US$19,99" placeholders and 1 real but unavailable service.
  - Two empty store categories.
- There is no blog, FAQ, gallery or legal page.

### Content
- The content is rich and specific: class prices (IDR), payment details, guidelines, two studio locations, full 200h and 300h curricula, daily TTC schedules, RecoveRing tuition and benefits, founder bios, and **36 slideshow testimonials** in English, Korean, Chinese, Japanese and Russian, plus 5 lime-band quotes.
- Several **contradictions and outdated dates** need owner decisions, notably the RecoveRing date and location, and past 2026 TTC dates.

### Brand
- **Forum** (serif, Google Fonts) is the dominant brand typeface. It is used for headings *and* most body copy.
- **Helvetica W01 Light** is used for the nav, footer and testimonials.
- **Futura LT W01 Book** appears only in the hero welcome box.
- The Helvetica and Futura fonts are Wix-licensed Monotype fonts, so a licensing decision is needed.
- Palette:
  - Ink `#181818`
  - Teal `#285461` (block headings)
  - Lime `#C4DD11` (quote bands)
  - Creams `#FCF8ED` / `#FFFCF5`
  - Greys `#383838`, `#525252`, `#F8F8F8`, `#EFEFEF`
  - Timetable green ≈ `#558F1E` (estimate)
- The design is flat (no shadows, no radii) and photography-led, with full-bleed images.

### Assets
- All 48 media files were downloaded.
- Only real studio photography is used on the live pages. The 3 Wix stock images belong to unused placeholders.
- Problems:
  - No vector logo (the best is a 2244 px JPG).
  - The JSON-LD logo is a different brand ("OM AH").
  - Many originals are huge: 13–30 MB, up to 7008 px.
  - A few images are low-resolution for full-width use.

### Functionality
- The site is mostly static.
- Dynamic parts:
  - Testimonial slideshows (autoplay, arrows, dots)
  - Table Master timetable (iframe)
  - Instagram feed with Load More
  - Embedded Google Map
  - Legacy Wix Forms registration on both TTC pages (Name\* and Email\* required)
- Booking and payment are **offline**: reservations by WhatsApp, payment by cash, bank transfer or Wise/PayPal.
- There are no WhatsApp or `tel:` links.
- There is one entrance animation (/recovering).

### Back-end dependencies a frontend rebuild will lose
- Wix Forms submission.
- The Table Master data host.
- The Wix Instagram app.
- The Wix Google Map component.
- The Wix image CDN and its transforms.

Each needs a phase-2 replacement decision (see 05 §9).

## 4. Recommended implementation considerations (no decisions taken)
- **Content as data.** Prices, dates, the timetable and testimonials change, so keep them in editable data files or a CMS rather than hard-coded JSX. Source all text from `content/`.
- **Preserve URLs.** Keep the 7 live slugs, or set up 301 redirects. Redirect or 410 the orphan Wix URLs.
- **Images.** `images.unoptimized: true` will be set, so a build-time or scripted resize to WebP/AVIF in several widths is essential. Never ship the 7008 px originals.
- **Fonts.** Load Forum through `next/font/google` and settle the Helvetica/Futura substitutes. Check CJK and Cyrillic fallback for the testimonials.
- **Forms.** Choose a submission service before building the TTC registration form. Add a privacy notice.
- **WhatsApp.** Consider making it the primary CTA, since it is the actual booking channel (owner decision).
- **Motion.** The current site is almost static (one Tilt-In), so GSAP/ScrollTrigger motion will be new. Respect `prefers-reduced-motion`, as the current Wix animation does.
- **Metadata.** Write correct per-page titles, descriptions, og:images and LocalBusiness JSON-LD using only owner-confirmed facts. Drop the "omahbali" data.
- **Accessibility.** Fix heading hierarchy, alt text, clickable contact methods, and an accessible timetable and slideshow.

## 5. Verified vs. estimated vs. unknown
- **Verified:**
  - All page text (server HTML and rendered DOM).
  - Slideshow text (clicked through).
  - Fonts (`document.fonts` and computed style).
  - Theme and inline colours (CSS).
  - Asset files and sizes, link status codes, form field definitions.
  - The animation definition.
- **Estimated:**
  - Timetable header green (`≈#558F1E`, pixel sample from inside an iframe).
  - Descriptions of image content.
- **Unknown:**
  - Form submission destination and validation messages.
  - Hover-state colours.
  - Slideshow autoplay interval.
  - Purpose of the hidden site-wide Wix app widgets.
  - Font licensing status.
  - Usage rights for third-party marks.

## 6. Confirmation
In this phase, **nothing was built, redesigned or deployed**:
- No UI components were created.
- No packages were installed (the existing Chrome, Node, Python and curl were used, with scripts kept in the session scratchpad outside the project).
- No project configuration was created or changed.
- No files were deleted or overwritten.
- Nothing was pushed to GitHub and nothing was deployed to Vercel.

The workspace was empty at the start. The only additions are this `docs/source-audit/` folder: documentation, verbatim content, screenshots, raw evidence data, and **copies** of the original media.
