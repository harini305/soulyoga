# Soul Yoga Bali

Website for Soul Yoga Bali (Sayan, Ubud), rebuilt with Next.js (App Router), React, GSAP + ScrollTrigger and CSS Modules.

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm start        # serve the production build
```

- Editable content (timetable, prices, dates, testimonials, contact details): `data/`
- Typography scale and colours: `app/globals.css`
- Implementation notes, open questions for the owner: `docs/implementation-notes.md`
- Source-site audit: `docs/source-audit/`

Images are served as pre-resized WebP files from `public/images/site` (Next.js image optimisation is disabled).
They are generated from the original photographs with `npm run images`; the originals
(`docs/source-audit/assets/wix-media/`) are not committed because of their size.
