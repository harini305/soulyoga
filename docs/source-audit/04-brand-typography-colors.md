# 04 — Brand Identity: Typography, Colour, Visual Language

Evidence sources:
- The Wix theme CSS variables `--font_0…10` and `--color_0…65`, read from the rendered DOM.
- `getComputedStyle` on every visible text node across 7 pages (`data/typography-rendered.raw.json`).
- Inline rich-text colours and section fill colours from the page HTML/CSS.
- Pixel sampling of screenshots, used **only** where a value lives inside an iframe.

Each value is labelled **VERIFIED** (read from CSS or computed style) or **ESTIMATE** (sampled from pixels).

---

## 1. Typography

### 1.1 Font families (VERIFIED: loaded in `document.fonts`)
| Family | Source | Role on the site |
|---|---|---|
| **Forum** (400 only) | Google Fonts, served by Wix from `static.parastorage.com/.../googlefont/.../forum/v10/` | **Primary brand face.** Site name, all headings, and most body copy on the content pages (prices, lists, curriculum, bios, quotes). Bold (700) is browser-synthesised: Forum ships only 400. |
| **Helvetica W01 Light** (`helvetica-w01-light`) | Wix-licensed Monotype web font (`static.parastorage.com/fonts/v2/8eac109b-…/helvetica-w01-light.woff2`) | Navigation, header email, footer details, testimonial slides, form fields, "Read More" buttons, contact-page text, RecoveRing intro paragraph |
| **Helvetica W01 Roman** (700 rendered) | Wix-licensed | Form **Submit** button label only |
| **Futura LT W01 Book** (`futura-lt-w01-book`) | Wix-licensed Monotype web font | Home hero welcome box only ("WELCOME TO SOUL YOGA BALI / beautiful yoga school…"), with 5 px tracking |

**Licensing note (important for phase 2):** Forum is open source (SIL OFL) and can be loaded freely through `next/font/google`.
Helvetica W01 Light/Roman and Futura LT W01 Book are **Monotype fonts licensed to Wix for Wix sites only**. They cannot legally be self-hosted from the Wix CDN. The owner either needs a licence, or must approve a substitute. Candidate substitutes, which need owner approval:
- Helvetica Light: Helvetica Neue Light, Arial, or `system-ui` light.
- Futura Book: Jost or Futura PT, which would require a licence.

This is listed as an open question. Font files were **not** downloaded for this reason.

### 1.2 Wix theme type scale (VERIFIED: `--font_N` theme variables)
| Token | Definition | Typical use |
|---|---|---|
| font_0 | Forum 22px / 1.41 | "Heading 1" theme slot: site name and quote headings (often overridden inline) |
| font_1 | Helvetica W01 Light 14px / 1.79 | — |
| font_2 | Forum 28px / 1.375 | Section titles (e.g. "Follow us on Instagram") |
| font_3 | Forum 88px / 1.2 | (unused large display) |
| font_4 | Forum 72px / 1.25 | Iyengar quote band (72px white) |
| font_5 | Forum 50px / 1.34 | — |
| font_6 | Forum 40px / 1.35 | Page H1 / section H2 ("SCHEDULE & TUITION", "CURRICULUM") |
| font_7 | Helvetica W01 Light 20px / 1.67 | Class-info block (overridden to Forum inline) |
| font_8 | Helvetica W01 Light 18px / 1.75 | Body text (often overridden to Forum inline) |
| font_9 | Helvetica W01 Light 15px / 1.875 | Small body / captions / tagline |
| font_10 | Helvetica W01 Light 14px / 1.79 | Header email |

### 1.3 Rendered hierarchy, desktop 1440 px (VERIFIED computed values)
| Element | Font | Size / line-height | Weight | Colour | Tracking |
|---|---|---|---|---|---|
| Site name "SOUL YOGA BALI" (header) | Forum | 27 / 38 px | 400 | #181818 | **4.05 px** (0.15em) |
| Tagline | Forum | 19 / 35.7 px | 400 | #181818 | normal |
| Nav items | Helvetica W01 Light | 15 / 30 px | 400 | #181818, active #525252 | normal (authored uppercase) |
| Home hero welcome box | Futura LT W01 Book | 20 / 28 px | 400 | #525252 | **5 px** |
| Teal block title "Daily Yoga Class Open for All Level" | Forum | 30 / 50 px | 700 (synthetic) | **#285461** | normal |
| Teal sub-heads (Class Rates, Regular Price…) | Forum | 25 / 33–42 px | 700 | **#285461** | normal |
| Home program headings ("200 Hours Soul Yoga Teacher Training") | Forum | 31 / 28 px | 700 | **#285461** | normal |
| Class-info body / lists | Forum | 20 / 33.4 px | 400 | #181818 | normal |
| Page H1 (TTC/recovering titles) | Forum | 40 / 44 px | 400 | #181818 | normal |
| Page H1 dates | Forum | 30 / 44 px | 400 | #181818 | normal |
| Section H2 ("SCHEDULE & TUITION", "CURRICULUM") | Forum | 40 / 54 px | 400 (CURRICULUM 700) | #181818 | normal |
| Secondary H2 ("Soul Yoga Teacher Training Program…", "LIMITED EDITION") | Forum | 38–40 / 48 px | 400 | **#383838** | normal |
| Lime-band quotes (H6) | Forum | 30 / 40.5 px | 400 | #181818 | normal |
| TTC price/highlight/schedule (H3) | Forum | 22 / 31 px | 400 | #181818 | normal |
| Curriculum bullets / TTC body | Forum | 18 / 31.5–33.75 px | 400 | #181818 | normal |
| Big statement ("More Stretching, Less Stressing") | Forum | 56 / 79 px | 400 | #181818 | normal |
| Iyengar quote band | Forum | 72 / 90 px | 400 | **#FFFFFF** | normal |
| Testimonial names (TTC pages) | Helvetica W01 Light | 18 / 31.5 px | 400 | #181818 | normal (authored uppercase) |
| Testimonial body | Helvetica W01 Light | 15 / 28 px | 400 | #181818 | normal |
| Footer details | Helvetica W01 Light | 15–16 / 30 px | 400 | #181818 | normal |
| "Read More" button | Helvetica W01 Light | 15 px | 400 | #181818 | normal |
| Submit button | Helvetica W01 Roman | 15 / 21 px | 700 | #FFFFFF on #181818 | normal |

**Mobile (390 px), VERIFIED samples:**
- Section H2 and page H1 drop from 40 to 24 px.
- H1 dates drop from 30 to 22 px.
- Lime-band quotes drop from 30 to 22 px.
- The Iyengar quote drops from 72 to 28 px.
- TTC H3 lists drop from 22 to 20 px.
- Testimonial names drop from 18 to 15 px.

Body copy stays about the same. Full per-page values are in `data/rendered-mobile-*.json` under `headings`. The hero welcome text wraps to 4 lines.

**Text treatment:** All-caps is **authored** in the text (e.g. "SCHEDULE & TUITION", the curriculum intro) rather than produced by `text-transform`. There is no italic use. Wide tracking appears only on the site name (0.15em) and the hero welcome box (5 px). Centred alignment dominates headings and bands; lists and paragraphs are left-aligned.

---

## 2. Colour palette

### 2.1 Brand colours actually visible on the site
| Role | Hex | RGB | Status | Where |
|---|---|---|---|---|
| **Ink / primary text** | `#181818` | 24,24,24 | VERIFIED (theme `color_15/37/45`) | All text, logo, Submit button bg, "Read More" border, About "Why choose Ubud?" band bg, curriculum check icon |
| **Teal accent** | `#285461` | 40,84,97 | VERIFIED (26 inline rich-text uses) | Home/schedule block titles and sub-heads, home program headings and prices |
| **Lime / chartreuse band** | `#C4DD11` | 196,221,17 | VERIFIED (section fill `--bg-overlay-color`) | Testimonial/statement bands: home ×3, 200h ×1, recovering ×1 |
| **Cream** | `#FCF8ED` | 252,248,237 | VERIFIED | Home merch centre panel; 300h "difference" band |
| **Warm white** | `#FFFCF5` | 255,252,245 | VERIFIED | Home hero welcome box |
| **Timetable header green** | ≈ `#558F1E` | ≈ 85,143,30 | **ESTIMATE** (pixel sample; inside the Table Master iframe) | Timetable header row, white text |
| Secondary heading grey | `#383838` | 56,56,56 | VERIFIED (`color_43`) | Secondary H2s, RecoveRing details text |
| Mid grey | `#525252` | 82,82,82 | VERIFIED (`color_14`) | Active nav item, hero welcome text |
| Muted grey | `#787878` | 120,120,120 | VERIFIED (`color_2/18`) | Instagram handle link |
| Light grey band | `#EFEFEF` | 239,239,239 | VERIFIED | Schedule "Class Description" band |
| Off-white panel | `#F8F8F8` | 248,248,248 | VERIFIED (`color_4`) | RecoveRing benefit cells, TTC quote/card panels |
| Silver | `#C5C5C5` | 197,197,197 | VERIFIED (`color_7`) | Slideshow section fallback bg, image band bg |
| Card border | `#E3E3E3` | 227,227,227 | VERIFIED | TTC Schedule & Tuition cards |
| White | `#FFFFFF` | 255,255,255 | VERIFIED | Page and header background |

Present in the CSS but **not visible**:
- `#3F7652` is a column fill behind a full-opacity photo on /recovering.
- `#3D9BE9` / `#2B689C` (Wix default blue) and `#FF4040` (error red) are Wix default form-control states.
- `#116DFF` belongs to the Wix "Skip to Main Content" accessibility button.

**Error red (`#FF4040`)** is the Wix form validation state. It is probably shown when required fields are left empty, but this was not triggered during the audit (see 05).

### 2.2 Wix theme palette (VERIFIED, for reference)
The `--color_0…65` theme is **entirely greyscale** (#FFFFFF, #F8F8F8, #DEDEDE, #C5C5C5, #8C8C8C, #525252, #383838, #2B2B2B, #181818). The brand hues (teal, lime, creams) are applied **inline per element**, not through the theme. Full dump: `data/rendered-desktop-home.json → vars`.

### 2.3 Image colour character (observation)
The photography is warm and natural: honey wood floors, sage-green walls, rice-field greens, and soft daylight. Mats and clothing add muted pinks, purples, blues and greys. RecoveRing images feature a hot-pink ring. The lime bands echo the rice-field greens; the teal echoes deep foliage.

---

## 3. Brand elements

### 3.1 Logos
| Mark | File | Notes |
|---|---|---|
| SOUL square logo: "SO / UL" in a thin black square outline, geometric sans | `614271_6e5c57e6…jpg` (2244² JPG, the favicon master) · `614271_8cce7910…png` (100², header) | **No vector or transparent version found.** Ask the owner for an SVG. Wordmark "SOUL YOGA BALI" is set live in Forum with 0.15em tracking (not an image). |
| Cat logo, a round "SOUL YOGA BALI" badge with a cat face | Only visible printed on the T-shirt photos (`28bf6a87`, `34acec6d`) | No standalone artwork available |
| Yoga Alliance RYS 200 badge | `614271_f5b4bc90…png` | Third-party certification mark; use under Yoga Alliance guidelines |
| RecoveRing wordmark | `614271_80a23280…png` (and the duplicate `f6796250`) | Partner/program brand, tan colour |
| "OM AH" logo | `614271_799ad34b…png` | **Not Soul Yoga Bali.** Leftover Wix business profile ("omahbali"). Do not use. |

### 3.2 Icons
- Facebook and Instagram: black glyphs (Wix stock PNGs).
- Curriculum: black filled circle with a white check (`assets/vector/curriculum-check-icon.svg`).
- Slideshow: thin chevron arrows and small dot pagination.
- Header: a 1 px horizontal rule under the logo row.

### 3.3 Surfaces, borders, shadows
- **Flat design**: no box-shadows (`--shd: 0 0 0 rgba(0,0,0,0)`) and no rounded corners (`--rd: 0px`, `border-radius: 0`) on cards and buttons.
- Buttons are rectangular. "Read More" is a transparent fill with a 1 px #181818 border, 109×45 px. Submit is solid #181818 with white bold text, 142×47 px.
- Form inputs are rectangular with a 1 px grey border and placeholder labels (no floating labels).
- Cards use flat light-grey fills (#F8F8F8 / #EFEFEF) or a 1 px #E3E3E3 border.
- Testimonial card: a translucent light-grey rectangle over the photo (home) or on white (TTC pages).

### 3.4 Image treatment
Full-bleed, edge-to-edge photographs with no rounding, borders or filters (no duotone, no overlays except the slideshow card). They are used as large section dividers. Portraits are cropped tall (720×990 px columns). The Recovering page uses a 50/50 image–text checkerboard.

### 3.5 Tone and personality
The site feels boutique, warm, personal and family-like: "Boutique serenity", "welcomed into the family", the resident cats, Sandi and Sera's home. It is educational and alignment-focused rather than spiritual-luxury. The copy is earnest, with some non-native English (preserve it as published; corrections only with owner sign-off). The visuals combine a serif-led calm look with bright lime accents and a lot of real-people photography (no stock imagery on the live pages).

---

## 4. Rules for phase 2 (from the brief)
- Keep **Forum** as the brand serif and the Helvetica-Light-style sans for UI, after the font licensing decision in §1.1.
- Keep `#181818`, `#285461`, `#C4DD11`, `#FCF8ED` and `#FFFCF5` as the core palette. Do not introduce new brand hues without authorisation.
- Use the original photographs (`assets/wix-media/`). There are no stock or AI replacements on the live pages, and the 3 Wix stock images belong to unused placeholders only.
