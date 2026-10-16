# 05 — Functionality & Technical Dependencies

Legend: **VERIFIED** = exercised during the audit with a confirmed result · **OBSERVED** = seen in markup or render but not exercised · **UNCONFIRMED** = the back-end behaviour cannot be determined from the outside.

## 1. Platform
- **Wix** (Thunderbolt renderer). `meta generator = "Wix.com Website Builder"`, metaSiteId `8066846d-b19d-4aa3-afee-1e9a81360676`, site revision 2659. The site is a single language (`lang="en"`, business locale `id-id`, currency IDR, timezone Asia/Makassar).
- All pages are server-side rendered by Wix; most text exists in the HTML. **Slideshows** (slides 2+), **Table Master**, **Instagram feed** and **Google Map** load client-side only.
- Wix apps **installed** on the site (from the page model). Many are not used on any visible page: Wix Bookings, Wix Stores (+ Checkout & Orders), Wix Members Area (+ My Account, My Wallet, My Subscriptions, My Addresses, Profile Card, Members About), Wix Events & Tickets, Wix Reservations, Wix Pro Gallery, Wix Video, Old Wix Forms and Payments, Data Binding, Table Master, Instagram Feed (New) + Instagram Feed (legacy), Google Reviews, Common Ninja Comparison Tables, ShoutOut (Legacy).

## 2. Navigation & routing
| Feature | Status | Detail |
|---|---|---|
| Desktop dropdown menu | VERIFIED (rendered) | "TEACHER TRAINING" is a non-link parent with 3 children. Hover reveals the submenu. |
| Mobile hamburger | VERIFIED (clicked) | Full-screen white overlay, centred items, X to close, chevron to expand "TEACH…" |
| Active-page state | VERIFIED | The current item is greyed (#525252/#787878) |
| Internal links | VERIFIED (all 200) | All nav, Read More and in-text internal links resolve |
| Anchors | OBSERVED | Wix-generated `./#comp-…` skip/anchor links only; no in-page navigation for users |
| Breadcrumbs | OBSERVED | Only on the Wix Bookings and Stores templates (orphan pages) |
| Search | — | **None** |
| Login / account | OBSERVED | No visible login. `/my-account` returns a Wix 404 page. |

**URLs to preserve or redirect in phase 2** (all indexed in the sitemap):
`/`, `/yogaclass`, `/200yogateachertraining`, `/300yogateachertraining`, `/recovering`, `/aboutus`, `/contact`.
The orphans are `/book-online`, `/service-page/*` and `/category/*`. Decide whether to drop them with 301s (e.g. to `/yogaclass` and `/`) or rebuild them.

## 3. Forms
### 3.1 TTC "Contact & Registration" (200h and 300h pages): Wix Forms (legacy `FormContainer`)
| Field | `name` | Type | Required |
|---|---|---|---|
| Name | `name` | text | **yes** (`required`) |
| Nationality | `nationality` | text | no |
| Email | `email` | email | **yes** (`required`) |
| Phone | `phone` | tel | no |
| How you find our program | `how-you find our program` | text | no |
| Your questions or comment | (textarea) | textarea | no |
| **Submit** button | | | |

The success message "Thanks for submitting!" is pre-rendered and hidden.
- **Validation:** OBSERVED as HTML `required` plus Wix's own error styling (red `#FF4040` state exists in CSS). Not triggered.
- **Submission destination:** UNCONFIRMED. It is presumably Wix Forms → site owner's Wix inbox and email notification. **The form was not submitted**, to avoid sending a fake registration to the business.
- **Phase 2 requirement:** a frontend rebuild **will not** carry the Wix back end. A replacement submission service is needed: e.g. a Next.js Route Handler plus email (Resend/SMTP), Formspree, a Google Form, or a WhatsApp deep link. Owner decision required.

### 3.2 Other enquiry paths
- **No contact form** on `/contact`, `/recovering` or `/yogaclass`.
- WhatsApp (+62817279665) appears in text only. **There is no `wa.me` link and no `tel:` link anywhere.**
- Email links are `mailto:soulyogabali@gmail.com` (header) and `mailto:kalifadani@gmail.com` (payment line). The footer email is **not** linked.

## 4. Booking, payments, e-commerce
| Feature | Status | Detail |
|---|---|---|
| Class booking | OBSERVED | Real process: "Reservation by whatsapp +62817279665". No online booking in use. |
| Wix Bookings | OBSERVED (orphan) | `/book-online` lists 3 template services plus "Alignment Vinyasa", which is marked unavailable. Not linked from navigation. |
| Payments | OBSERVED | Offline only: cash, bank transfer (CIMB Niaga 701831857200, Sandi Kalifadani), Wise/PayPal kalifadani@gmail.com. "Credit/debit card is not available". |
| Wix Stores | OBSERVED (orphan, empty) | 2 categories, 0 products. A cart page exists. |
| Merch (cat T-shirt) | OBSERVED | Order by phone "+62 81 727 9665". No cart. |

## 5. Interactive UI components
| Component | Where | Behaviour | Status |
|---|---|---|---|
| Testimonial slideshow (Wix SlideShowContainer) | home (10), 200h (10), 300h (8), yogaclass (8) | Autoplay, prev/next arrows, dot nav (`nav a "Slide N"`), loops, cross-fade/slide transition | VERIFIED (all slides captured by clicking) |
| Timetable (**Table Master**, Wix TPA app id `134139f3-f2a0-2c2c-693c-ed22165cfd84`) | home, yogaclass | Iframe from `wix-visual-data.appspot.com` holding a 7-column table. On mobile it becomes a stacked list with an expandable row. | VERIFIED (rendered); data transcribed in content/home.md |
| Instagram feed (Wix "Instagram Feed (New)") | home | Grid of the latest posts and reels with captions, "Load More" button, links to Instagram | VERIFIED (rendered); content is live and changes |
| Google Map (Wix GoogleMap) | contact | Interactive map with Map/Satellite toggle, zoom, Street View and a "Soul Yoga Bali" pin with Directions link | VERIFIED (rendered) |
| Read More buttons | home ×3 | Link to the TTC / recovering pages | VERIFIED |
| Hover states | nav, buttons | Wix default hover (colour change); not measured | OBSERVED |
| Entrance / scroll animations | /recovering only | **One** Wix entrance animation, on the tuition text column (`comp-m7g9jo3k`): "Tilt In" = fadeIn 240 ms + rotate from 30° 1200 ms + clip reveal 960 ms, easing `cubic-bezier(0.215,0.61,0.355,1)`, gated by `prefers-reduced-motion: no-preference`. No other entrance, parallax or scroll effects on any page. | VERIFIED (CSS in page HTML) |
| Lightbox / gallery | — | None (`robots.txt` mentions `?lightbox=` but no lightbox is in use) | OBSERVED |
| Video | home (Instagram reels only) | Played inside the Instagram feed widget | OBSERVED |

## 6. External services & links
| Service | Purpose | Phase-2 implication |
|---|---|---|
| Google Maps short-links `maps.app.goo.gl/CJw7YJ5t4gK9bK8j6` → "Soul Yoga School" (-8.511142, 115.2459197) | Soul Yoga Center location | Keep the link (VERIFIED 200) |
| `maps.app.goo.gl/cxsgWJPNPdkUHYbg6` → "Dharma Kula Yoga" (-8.4915391, 115.2532673) | Dharma Kula branch | Keep the link (VERIFIED 200) |
| Google place viewer link (About page, `mid=/g/11qm3ck8wr`) | Same Google place as Soul Yoga Center | Keep or replace with the maps link |
| Embedded Google Map (contact) | Studio map | Needs an embed: a Google Maps Embed API key, a keyless `maps?q=` iframe, or a static map |
| Instagram `@soulyogabali` | Profile + feed | The feed needs an Instagram Graph API token, a third-party widget, or a static "follow" link. The Wix app's media URLs are signed and expire. |
| Facebook `/soulyogabali` | Profile link | Keep (VERIFIED 200) |
| Table Master (`wix-visual-data.appspot.com`) | Timetable data | **Wix-only.** Rebuild as a static or CMS-driven table. The data is in content/home.md. |
| `samahitaretreat.com/300-hours-advanced-curriculum` | **Accidental** link on 300h page text "F/ascia, joint mechanics" | Likely a copy-paste artefact pointing to another school; do not carry over without owner confirmation |
| Wix CDN `static.wixstatic.com` | All images | Images are downloaded locally (`assets/wix-media/`). Do not hot-link after migration. |
| Wix fonts CDN `static.parastorage.com` | Helvetica/Futura (licensed) | See the licensing note in 04 |

## 7. SEO / metadata (current state)
- Titles: see 01 §1. Only the home page has a tailored meta description. TTC pages share "Soul Yoga Bali Academy by Sandi Kalifadani". The others have none.
- **No `og:image`** on the main pages. Twitter card is `summary_large_image` on home, which has no image.
- **JSON-LD:** `WebSite` "Soul Yoga Bali" (OK). `LocalBusiness` **name "omahbali"** with the OM AH logo. The Wix business profile also says "We are yoga & vinyl record studio" with coordinates −8.3405, 115.0920 (not the studio). This is wrong data that should not be carried over.
- `robots: index` on content pages and `noindex` on the cart. Canonicals are present.
- Image alt text is mostly original camera filenames (e.g. "soul yoga-227.jpg", "WhatsApp Image 2026-02-21…"). Write proper alt text in phase 2.

## 8. Accessibility observations (current site)
- Headings are used for styling, not structure: several H1s per page, H6 used for quotes, H3 used for list items.
- Quote bands and nav use low-contrast greys in places (#787878 on white ≈ 4.4:1, borderline). Lime #C4DD11 with #181818 text has high contrast (fine).
- Social icons have alt text ("Facebook", "Instagram"). Many content images use filename alts.
- Wix provides "Skip to Main Content" and the menu has an aria-label.

## 9. Phase-2 implementation considerations (no decisions made)
1. **Content source**: static JS data files vs. a headless CMS. Prices, dates and timetable change often (training dates by year).
2. **Forms**: choose a submission back end (§3).
3. **Timetable**: re-implement as an accessible HTML table that becomes cards on mobile, using data from content/.
4. **Slideshows**: re-implement 36 testimonials. Consider whether autoplay is wanted (GSAP is allowed). Keep the multilingual text, and check font fallback for CJK and Cyrillic: Forum and Helvetica have no CJK glyphs.
5. **Instagram**: live feed vs. curated static posts vs. a simple link.
6. **Images**: originals total ~287 MB. Many are 7008×4672 at 13–16 MB, and three PNGs converted from HEIC are 14–30 MB. Because `next.config` will set `images: { unoptimized: true }` (to avoid Vercel Image Optimization quota), **pre-generate responsive WebP/AVIF/JPG sizes at build or in a script**. Never serve the originals.
7. **Redirects** for orphan Wix URLs, and keep the 7 live slugs (or 301 them if renamed).
8. **Fonts**: resolve the Helvetica/Futura licensing first (see 04 §1.1).
9. **Metadata**: write per-page titles, descriptions, og:image and a correct LocalBusiness JSON-LD (Soul Yoga Bali, Kutuh, Sayan, Ubud) **using only owner-confirmed facts**.
