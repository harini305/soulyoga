# Soul Yoga Bali — Phase 2 implementation notes

Next.js 16 (App Router, JavaScript) · React 19 · GSAP 3 + ScrollTrigger (`@gsap/react`) · CSS Modules.
The source audit in `docs/source-audit/` is unchanged and remains the content reference.

## Run

```bash
npm install
npm run dev          # http://localhost:3000 (use -- -p 3210 if 3000 is taken)
npm run build && npm start
npm run images       # regenerate WebP derivatives (add -- --force to overwrite)
```

## Where to edit content

| What | File |
|---|---|
| Phone, email, WhatsApp, map links, coordinates, nav, form endpoint | `data/site.js` |
| Timetable, class rates, payment, guidelines, locations, class descriptions, Alignment Vinyasa | `data/classes.js` |
| 200h / 300h dates, prices, highlights, daily schedules, curricula; RecoveRing content and events | `data/trainings.js` |
| Lime-band quotes, merch, About copy, Instagram grid images | `data/content.js` |
| All 36 testimonials (generated verbatim from the audit; edit freely) | `data/testimonials.js` |
| Image map (original file → key, page, section, alt text, sizes) | `scripts/image-sources.mjs` → `data/image-manifest.json` |

Training dates are stored with ISO `start`/`end`; the site labels each one "Past date", "In progress" or "Upcoming" by comparing with today's date in the browser. A label never claims places are available.

## Images

- 48 originals: 44 published as WebP derivatives in `public/images/site/` (≈13 MB for every size of every image, vs ≈270 MB of originals); 4 deliberately excluded (the unrelated "OM AH" logo and 3 Wix stock placeholders). Originals in `docs/source-audit/assets/wix-media/` are untouched.
- `next.config.js` sets `images.unoptimized: true`; pages use plain `<img srcset>` with the derivatives, so there are no `/_next/image` requests.
- The logo is the original 2244 px JPG; `mix-blend-mode: multiply` lets its white background disappear into the cream header, and it sits on a white tile in the teal footer.

## Typography system

All font sizes come from one scale in `app/globals.css` (`--t-*` tokens). No component sets its own size.
Headings use Forum; text and interface use Jost.

| Token | Mobile → desktop | Used for |
|---|---|---|
| `--t-h1` | 38 → 56px | Page titles (Schedule, RecoveRing, Contact, Book Online, Alignment Vinyasa, 404) |
| `--t-h2` | 30 → 42px | Section headings |
| `--t-h3` | 24 → 30px | Subsection headings (class names, curriculum modules, Payment, OUR HIGHLIGHT …) |
| `--t-h4` | 18 → 22px | Small headings and data (price groups, ledger rows, dates, names) |
| `--t-lead` | 18 → 20px | Intro paragraphs, testimonials |
| `--t-body` | 16 → 17px | Body text, form inputs |
| `--t-small` | 14px | Captions, notes, metadata, footer |
| `--t-label` | 13px | Uppercase labels, tags, table headers |
| `--t-nav` / `--t-btn` | 15px / 13px | Navigation / buttons |

Documented exceptions (one formula each): `--t-display` is used for the home hero title and the 200h/300h hero
numerals, `--t-quote` for quote bands and TTC quote blocks, and `--t-statement` for the two closing statements
(Iyengar quote and "More Stretching, Less Stressing"). The logo lockup has its own `--t-brand` sizes.

Decorative eyebrow labels, section label-and-rule lines, decorative 01/02 numbering and giant quote glyphs were
removed. Labels that carry real information remain: training dates and their past/upcoming status, "Today" in the
timetable, the "Weekly Vinyasa Yoga" subtitle, the 200/300-hour markers, "Founder"/"Co-founder" and the RYS badge.

## Palette change (owner request)

The original lime `#C4DD11` bands and the timetable green `≈#558F1E` were removed at the owner's request.
Replacements, defined once in `app/globals.css`:

- `--sand: #ece2d0`: quote bands and the 200h "Lifetime Changing Experience" band
- `--accent: #e3d3b6`: warm sand accents on teal, ink and photographs (labels, curriculum checks, testimonial names)
- Teal `#285461`: timetable header (`data/classes.js → timetable.headerColor`) and "Upcoming" tags on light backgrounds

## Legacy URLs

| URL | Treatment |
|---|---|
| 7 live pages | Same paths |
| `/book-online` | Rebuilt honestly: reservation by WhatsApp, plus the one real service shown as unavailable (no fake services, no booking button). `noindex` |
| `/service-page/alignment-vinyasa` | Real description, "This service is not available, please contact for more information.", contact links only. `noindex` |
| `/service-page/service-name`, `-1`, `-2` | 308 → `/book-online` |
| `/category/all-products`, `/category/yoga-props`, `/cart-page` | 308 → `/` |
| `/my-account` and everything else | Branded 404 |

## Unresolved — needs the owner

1. **RecoveRing date conflict (C1):** home says "1-2 May 2026 Kuala Lumpur, Malaysia", `/recovering` says "17-18 January 2026 - Melacca, Malaysia". Both are past; each is shown where it was published, labelled "Past date", with "For upcoming training dates, please contact the studio."
2. **200h dates (C6):** May, July and September 2026 are past; 6-26 December 2026 shows as upcoming. 300h: "Date to be announced".
3. **20-class price (C2):** home `1.5000.000 IDR` vs schedule `1.500.000 IDR`. The schedule page's published value is displayed on both pages; both source values are kept in `data/classes.js`.
4. **Payment label (C3):** "Wise :" (home) vs "Paypal/wise :" (schedule) — the schedule label is shown.
5. **T-shirt price:** shown exactly as published, `IDR 200.00`, flagged `unresolved` in `data/content.js`.
6. **Registration form:** no submission back end is known. With `site.registration.endpoint = null` the form validates, then states that nothing was sent and offers to open the visitor's own email app or WhatsApp with the details filled in. Set an endpoint to POST JSON.
7. **Instagram:** no API token, so the grid shows the studio's own photos from this site and links to @soulyogabali; it is not presented as a live feed.
8. **Sunday classes:** the timetable had no Sunday column and no statement; nothing is claimed.
9. **Fonts:** Forum (Google Fonts) kept; Jost substitutes for the Wix-licensed Helvetica W01 Light / Futura LT W01 Book.
10. **samahitaretreat.com link (L1):** removed from the 300h schedule text ("Fascia, joint mechanics" is now plain text).
11. **Typos** in the source copy are preserved as published (see audit 06 §2). Exception: the timetable corner label reads "Time" instead of "Day/Tme".
12. **Map:** keyless Google Maps embed at −8.511142, 115.2459197 (where the studio's own short link resolves). Owner to confirm.
13. **No privacy policy or legal pages** exist on the source; none were invented. A privacy notice is advisable once the form collects data.
14. **No LocalBusiness JSON-LD** was added; the source data belonged to another business ("omahbali").
