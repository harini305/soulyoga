# 03 — Asset Inventory & Page Mapping

- **Full machine-readable inventory:** [`assets/asset-inventory.csv`](assets/asset-inventory.csv). It lists file, local path, original URL, category, pages, placement, description, intended use, pixel size, bytes and notes.
- **Visual index:** [`assets/contact-sheet.jpg`](assets/contact-sheet.jpg), with the files numbered alphabetically.
- **Raw placement data** (desktop/mobile position and size of every image): `data/asset-inventory.raw.json`.

## 1. Local availability
| Item | Status |
|---|---|
| Existing project workspace | **Empty** at audit start (`D:\soulyogabali3` had no files). No previously downloaded assets existed. |
| Wix media originals | **48 files downloaded** at original resolution from `https://static.wixstatic.com/media/<file>` into `docs/source-audit/assets/wix-media/`. Filenames are unchanged Wix media IDs. Total ≈ 287 MB. All returned HTTP 200. |
| Vector art | `assets/vector/curriculum-check-icon.svg`, extracted verbatim from the page markup. No other SVG artwork exists on the site. |
| Fonts | **Not downloaded.** Forum is available from Google Fonts. Helvetica W01 and Futura LT W01 are Wix-licensed (see 04). |
| Instagram feed media | **Not downloaded.** Third-party, signed URLs that expire, and live content. |
| Video | None hosted on the site (only Instagram reels inside the feed widget). |
| Downloadable resources (PDF brochures, etc.) | **None found** on any page. |
| Logo vector / transparent PNG | **Not available.** The best source is the favicon JPG (2244×2244 on white). |

## 2. Summary by category
| Category | Count | Files (short IDs) |
|---|---|---|
| Logo (Soul) | 2 | `6e5c57e6` (master, 2244²), `8cce7910` (header, 100²) |
| Logo (wrong brand, do not use) | 1 | `799ad34b` "OM AH" |
| Badges / partner marks | 3 | `f5b4bc90` RYS 200, `80a23280` + `f6796250` RecoveRing (duplicates) |
| Social icons | 2 | `0fdef751` Facebook, `01c3aff5` Instagram |
| Hero images | 6 | home `1d63e594`, 200h `a6c3c09b`, 300h `c455675d`, recovering `ac643ff7`, schedule `0c12a625`, about `4b045574` |
| Portraits | 2 | Sandi `c3fcf6c9`, Sera `f3cf4e53` |
| Section / divider / background photos | 26 | see the page map below |
| Merch photos | 2 | `28bf6a87`, `34acec6d` |
| Service image (orphan bookings) | 1 | `0385cf1a` |
| Wix stock placeholders (do not use) | 3 | `59ae78be`, `b2f7ef30`, `2b074052` |
| Inline SVG icon | 1 | curriculum check |

## 3. Page → asset map (in on-page order)
Short IDs drop the `614271_` prefix and `~mv2` suffix. Look up full names in the CSV.

| Page | Assets in order |
|---|---|
| **All pages (header/footer)** | `8cce7910` logo · `0fdef751` Facebook · `01c3aff5` Instagram · favicon `6e5c57e6` |
| **Home** | `1d63e594` hero + `f5b4bc90` RYS badge + `80a23280` RecoveRing logo → `6a13e872` strip → `60342b07` (200h, + RYS badge) → `579a4113` slideshow bg → `1ec29382` (300h) → `a1b58630` + `f6796250` (RecoveRing) → Instagram feed (external) → `28bf6a87` + `34acec6d` (T-shirt) |
| **Schedule** `/yogaclass` | `0c12a625` hero → `66d6ea0d` class photo |
| **200h TTC** | `a6c3c09b` hero + `f5b4bc90` → `7af292f0` quote image → `ad95d5b3` strip → `3daa9adb` strip → check icon ×8 → `7b850625` strip → `ac4aa5c7` graduation → `61e0b995` quote band bg |
| **300h TTC** | `c455675d` hero + `f5b4bc90` → `d29a57c1` quote image → `7d2eaf75` strip → check icon ×8 → `7db642c4` strip → `fa98fb06` strip → `4355d70f` graduation → `aab42992` closing band |
| **RecoveRing** | `ac643ff7` hero + `80a23280` → `0c53bec6` details image → `2aa5f72a` band → `a6bb5a17`, `1cf809f7`, `aeea00b1`, `dd8bb0cf` (4 benefits) → `c48e83dc` closing |
| **About** | `4b045574` hero → `aab42992` studio/rice field → `c3fcf6c9` Sandi → `f3cf4e53` Sera |
| **Contact** | Google Map (embed) → `c6b8ee81` rice-field sunset |
| **Book online / service pages** | `0385cf1a` (Alignment Vinyasa) · placeholders `59ae78be`, `b2f7ef30`, `2b074052` |

Shared across pages: `aab42992` (300h + About), `f5b4bc90` (home, 200h, 300h), `80a23280` (home + recovering).

## 4. Asset quality notes for implementation
- **Very large originals.** 19 of the 48 files are over 5 MB (17 used on live pages plus 2 Wix placeholders), and 7008×4672 camera originals reach up to 16 MB. Three HEIC→PNG conversions are huge: `0c53bec6` is 30.7 MB, `c48e83dc` is 26.2 MB, and `a1b58630` is 14.0 MB. Because Next.js image optimization will be **disabled**, produce resized WebP/AVIF/JPG derivatives (e.g. 640/1024/1600/2400 px) in a preprocessing step. Keep the originals untouched in `docs/source-audit/assets/wix-media/`.
- **Low-resolution for their current use:**
  - The header logo `8cce7910` is 100 px; use `6e5c57e6`.
  - The RecoveRing images `2aa5f72a`, `a6bb5a17`, `1cf809f7`, `aeea00b1` and `dd8bb0cf` are 1280×961. The first is used as a full-width band.
  - The contact photo `c6b8ee81` is 1024×768.
  - `7db642c4` is 1521×1000, used full-width.
- **Watermark:** `0385cf1a` has a photographer watermark.
- **Duplicates:** `80a23280` = `f6796250` (same RecoveRing logo).
- **Alt text:** the current alts are mostly original camera filenames. Descriptive alt text must be written in phase 2; the CSV "description" column is a starting point.
- **Orientation:** portraits (`c3fcf6c9`, `f3cf4e53`, `60342b07`, `1ec29382`, `a1b58630`, `0c53bec6`) are tall. Wix crops them with focal points. Check the crops when re-laying them out.
- **Rights:** the photos appear to be the studio's own (event and class photography, some named "soul yoga-NNN.jpg" from a shoot). The Yoga Alliance badge and RecoveRing logo are third-party marks. Confirm usage rights with the owner.
