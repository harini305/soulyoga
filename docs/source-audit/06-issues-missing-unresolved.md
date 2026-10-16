# 06 — Issues, Missing Assets, Inaccessible Pages & Unresolved Questions

Everything here is **recorded, not fixed**. Phase 2 must not change published facts without owner confirmation.
The audit date is **2026-10-15**, which matters for the date-sensitive items.

## 1. Content contradictions (owner must choose the correct value)
| # | Issue | Where | Values as published |
|---|---|---|---|
| C1 | **RecoveRing training date/location conflict** | home vs /recovering | Home: "1-2 May 2026 Kuala Lumpur, Malaysia". /recovering: "17-18 January 2026 - Melacca, Malaysia". **Both dates are in the past** at audit date. |
| C2 | 20-class price | home vs /yogaclass | Home "1.5000.000 IDR" (typo), schedule "1.500.000 IDR" |
| C3 | Payment method label | home vs /yogaclass | Home "Wise :", schedule "Paypal/wise :" |
| C4 | 200h price display | home vs /200yogateachertraining | Home shows only "Special Offer IDR 32.000.000 (not including accomodation)". The TTC page also lists "IDR 17.500.000 (rate for Indonesian/KTP holder)". |
| C5 | 200h highlights wording | home vs 200h page | Similar but differently worded lists. For example, home says "morning walk, sauna, swimming pool, live music, sunset etc"; the TTC page says "sunset walk, sauna, swimming pool, purification ceremony, etc". |
| C6 | **Past training dates still advertised** | home, 200h | "3-23 May 2026", "5-25 July 2026" and "6-26 September 2026" have passed. Only "6-26 December 2026" is upcoming. |
| C7 | 300h dates | home, 300h | "Training 2027 – Date to be announced" (no date) |
| C8 | Number of cats | about vs testimonial | About: "live on-site with their four cats". The YIXIN YU testimonial says "5 lovely cats". Minor; testimonials stay verbatim. |
| C9 | Business identity in Wix profile / JSON-LD | site-wide `<head>` | LocalBusiness `name: "omahbali"`, description "We are yoga & vinyl record studio", OM AH logo, coordinates −8.3405, 115.0920 (not the studio). These conflict with the Soul Yoga Bali facts. |

## 2. Typos and wording (preserve verbatim unless the owner approves corrections)
These are real typos, verified against single text nodes and the screenshots. The span-fragment artefacts explained in the `content/` headers are **not** included here.
- "Day/Tme" (timetable header)
- "accomodation" (home 200h teaser)
- "1.5000.000" (home 20 classes)
- "Price : IDR 200.00" (T-shirt; probably 200.000)
- "Melacca" (recovering; usually Malacca or Melaka)
- "Aligment" (300h schedule)
- "students's diet" (200h and 300h highlights)
- "Bhagavad-Git" (200h curriculum)
- "We provides high quality yoga" (home, schedule)
- "Our body experiences problems when its Novembers are not smooths." (recovering, Deep Stretching; probably "movements are not smooth")
- "fascilitate", "strenghten", "MyOFascia Release", "Recovering … Is a prop" (recovering)
- "Hatha yoga is practiced… releasing stress" and general non-native grammar across class descriptions
- "`BKS Iyengar" (stray backtick before the name, 200h quote band)
- "Wongwang University" (About, Sera's bio; possibly "Wonkwang University". Verify.)
- "iyengar/shtanga" (AMY testimonial; a testimonial, so keep it verbatim)
- Mixed spellings across pages: "RecoveRing", "Recovering", "Recove-Ring", "recoveRing"

## 3. Broken, odd or risky links
| # | Link | Where | Problem |
|---|---|---|---|
| L1 | `https://samahitaretreat.com/300-hours-advanced-curriculum` | 300h daily schedule, on the text "F" + "ascia, joint mechanics" | Outbound link to **another yoga school's** curriculum. Almost certainly a copy-paste artefact. |
| L2 | `/aboutus` on "founding couple" | About | Links to the same page (no-op) |
| L3 | Footer phone and email | all pages | Plain text, not clickable |
| L4 | WhatsApp | all mentions | No `wa.me` link even though WhatsApp is the main booking channel |
| L5 | Contact phone | /contact | Plain text, not `tel:` |
All other internal and external links were checked and return HTTP 200.

## 4. Inaccessible / non-existent / placeholder pages
| Route | Result |
|---|---|
| `/my-account` | Wix **404** page ("404 \| Soul Yoga Bali") |
| `/sitemap_index.xml` | HTTP **504** (`/sitemap.xml` works) |
| `/service-page/service-name`, `-1`, `-2` | **Wix template placeholders** ("Service Name", "US$19,99", stock photos), **indexed in the sitemap** |
| `/service-page/alignment-vinyasa` | "This service is not available, please contact for more information." |
| `/category/all-products`, `/category/yoga-props` | Empty store ("No products here yet...") |
| `/cart-page` | Wix cart, `noindex` |
| `/blog`, `/faq`, `/privacy-policy`, `/terms`, `/gallery` and others (see 01) | 404: **these pages do not exist** |

## 5. Missing assets
| Missing | Impact | Request from owner |
|---|---|---|
| **Vector / transparent logo** (SVG or PNG) | The only sources are a 2244 px JPG on white and a 100 px PNG | SVG or a high-res transparent PNG of the SOUL mark |
| **Cat logo artwork** (seen on T-shirts) | Only visible in product photos | Original artwork file, if it is to be used |
| **Licensed font files** (Helvetica W01 Light/Roman, Futura LT W01 Book) | Cannot be legally reused from the Wix CDN | A licence, or approval of substitutes |
| **og:image / social share images** | None exist for the main pages | Approve which photos to use |
| **Instagram post media** | Not downloadable (live, third-party) | Decide: live feed (API token) vs. link |
| **Table Master source data** | Only available as the rendered table (transcribed) | Confirm the current timetable and whether Sunday has classes |
| Higher-res versions of `2aa5f72a`, `a6bb5a17`, `1cf809f7`, `aeea00b1`, `dd8bb0cf` (1280 px), `c6b8ee81` (1024 px), `7db642c4` (1521 px) | May look soft when used full-width | Originals, if they exist |
| Proper alt text | Current alts are filenames | Approve the descriptions in the CSV |
| Privacy policy / terms | None exist, although the forms collect personal data | Owner to provide or approve |

## 6. Rendering / responsive issues observed on the current site
- **Mobile header:** the email is clipped at the top-left ("soulyogabali@gmai.com" cut off) and overlaps the logo row (`screenshots/mobile-home-fold.jpg`).
- **Mobile menu:** "TEACHER TRAINING" is truncated to "TEACH…".
- **Mobile home:** large blank vertical gaps under the 200h image and in other stacked sections, from Wix mobile layout artefacts (`screenshots/mobile-home-full.jpg`).
- **Desktop:** a fixed 980 px content grid inside full-width sections. On wide screens the text columns look narrow and left-weighted in places (Contact).
- **Heading semantics:** multiple H1s, H6 used for quotes, H3 used for list rows (affects SEO and accessibility).

## 7. Audit limitations (what could not be verified)
- **Form submission back end:** not submitted, so the destination, notification email and spam protection are unknown.
- **Hover and focus states:** not systematically captured; Wix defaults are assumed.
- **Slideshow timing:** autoplay is on, but the exact interval was not measured.
- **Timetable colours:** the header green is a pixel **estimate** because it is inside an iframe.
- **Instagram feed content** changes over time; the 2026-10-15 posts are not part of the brand content.
- **Members area, Events, Reservations and Google Reviews apps** are installed, but no visible UI was found. Two site-wide app widgets sit in a hidden container; their purpose is unconfirmed.
- **Tablet breakpoint:** only 1440 px and 390 px were rendered. Wix serves only desktop and mobile layouts (the desktop layout is scaled between them).
- **Analytics / tracking:** Wix built-ins only. No third-party analytics tags were inventoried in detail.

## 8. Unresolved questions for the owner (needed before or during phase 2)
1. Which RecoveRing date and location is current (C1)? Should past training dates be removed (C6)? Are 2027 dates known (C7)?
2. Correct the typos (section 2), or keep the copy exactly as published?
3. Who receives TTC registrations, and how (email, WhatsApp, Google Sheet)? Which form service should be used?
4. Should WhatsApp become a clickable primary CTA (`wa.me/62817279665`)?
5. Fonts: buy Helvetica/Futura web licences, or approve substitutes (keeping Forum)?
6. Instagram: live feed (requires an API token) or a static follow link?
7. Orphan pages: drop the bookings/store/service URLs with redirects, or keep Alignment Vinyasa as a class listing?
8. Is the samahitaretreat.com link intentional (L1)?
9. Can a vector logo and the cat-logo artwork be supplied?
10. Should the LocalBusiness data be corrected (C9)? Please confirm the exact studio address and coordinates (map pin "Soul Yoga School", −8.511142, 115.2459197).
11. Is the T-shirt still for sale, and what is the correct price?
12. Is a privacy policy needed or available?
