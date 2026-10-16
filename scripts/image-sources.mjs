// Map of every original Wix media file (docs/source-audit/assets/wix-media) to the
// website key it is published under, its page/section from the audit (03-asset-inventory.md),
// the derivative widths to generate and its alt text.
//
// preset: "hero"     -> 640, 1080, 1600, 2400
//         "wide"     -> 640, 1080, 1600
//         "content"  -> 480, 960, 1400
//         "mark"     -> 240, 480, 840   (logos / badges, alpha kept)
//         "icon"     -> 96              (social glyphs, PNG kept)
//
// Files listed in EXCLUDED are deliberately not published (reason given).

export const SOURCE_DIR = "docs/source-audit/assets/wix-media";
export const OUTPUT_DIR = "public/images/site";
export const MANIFEST = "data/image-manifest.json";

const P = (id) => `614271_${id}~mv2`;

export const IMAGES = [
  // ---- Brand (all pages) -------------------------------------------------
  { key: "logo", file: `${P("6e5c57e6a28e4045af8e93d78e6c8b2d")}.jpg`, preset: "mark", page: "all", section: "Header / footer logo (favicon master, 2244px JPG on white)", alt: "Soul Yoga Bali logo" },
  { key: "logo-small", file: `${P("8cce79108969465f92f0a20d25cb1ba3")}.png`, preset: "icon", page: "all", section: "Original 100px header logo (superseded by the master; kept for reference)", alt: "Soul Yoga Bali logo" },
  { key: "badge-rys200", file: `${P("f5b4bc907ee049b9a6406afde396e821")}.png`, preset: "mark", page: "home, 200h, 300h", section: "Yoga Alliance RYS 200 badge (hero overlay, 200h teaser)", alt: "Registered Yoga School RYS 200, Yoga Alliance" },
  { key: "logo-recovering", file: `${P("80a2328012664e2a9b5b0ecd62b4e1ae")}.png`, preset: "mark", page: "home, recovering", section: "RecoveRing wordmark (hero overlays, RecoveRing teaser)", alt: "RecoveRing" },
  { key: "logo-recovering-dup", file: `${P("f6796250879640089536372b7b4e7cd7")}.png`, preset: "icon", page: "home", section: "Duplicate upload of the RecoveRing wordmark (identical bytes; site uses logo-recovering)", alt: "RecoveRing" },
  { key: "icon-facebook", file: "0fdef751204647a3bbd7eaa2827ed4f9.png", preset: "icon", page: "all", section: "Facebook icon (header/footer)", alt: "Facebook" },
  { key: "icon-instagram", file: "01c3aff52f2a4dffa526d7a9843d46ea.png", preset: "icon", page: "all", section: "Instagram icon (header/footer)", alt: "Instagram" },

  // ---- Home ---------------------------------------------------------------
  { key: "home-hero", file: `${P("1d63e5949a20419193bebbefbcc6dfbb")}.jpg`, preset: "hero", page: "home", section: "Hero", alt: "Teacher training group at the Soul Yoga Bali studio window making heart shapes with their hands" },
  { key: "home-strip", file: `${P("6a13e872f3604d6c980dd3ac5d429e11")}.jpg`, preset: "hero", page: "home", section: "Full-width strip after class info", alt: "Two students in a revolved side-angle pose in warm morning light" },
  { key: "home-200h", file: `${P("60342b07260340fe89747bcbfdb3c716")}.jpg`, preset: "content", page: "home", section: "200h TTC teaser image", alt: "Teacher giving a hands-on adjustment to a student in a seated pose" },
  { key: "home-testimonials-bg", file: `${P("579a41139ab744b5bfa72c071132260a")}.jpg`, preset: "hero", page: "home", section: "Testimonial slideshow background", alt: "" },
  { key: "home-300h", file: `${P("1ec29382234d4d938937d89c5ac6d8f0")}.jpg`, preset: "content", page: "home", section: "300h TTC teaser image", alt: "Close-up of a hands-on assist during practice" },
  { key: "home-recovering", file: `${P("a1b5863027c943d5a5e06daa7d1a444e")}.png`, preset: "content", page: "home", section: "RecoveRing teaser image", alt: "Sera assisting a student who is stretching with a RecoveRing" },
  { key: "merch-shirts", file: `${P("28bf6a8748964232bacaa16fc39efecc")}.jpg`, preset: "content", page: "home", section: "Cat T-shirt, left", alt: "Two people wearing the black Soul Yoga Bali cat T-shirt, seen from behind" },
  { key: "merch-print", file: `${P("34acec6dd7ff4f58b25063830aba38f5")}.jpg`, preset: "content", page: "home", section: "Cat T-shirt, right", alt: "Close-up of the Soul Yoga Bali cat print on the back of the T-shirt" },

  // ---- Schedule /yogaclass -----------------------------------------------
  { key: "schedule-hero", file: `${P("0c12a625aa4f460990ec1b4cf1f1cbef")}.jpeg`, preset: "hero", page: "yogaclass", section: "Hero", alt: "Class in warrior pose while a teacher adjusts a student's alignment" },
  { key: "schedule-class", file: `${P("66d6ea0d050342919f85098cf9122cf6")}.png`, preset: "wide", page: "yogaclass", section: "Image above testimonials", alt: "Full class practising side-plank variations on colourful mats" },

  // ---- 200h ------------------------------------------------------------------
  { key: "ttc200-hero", file: `${P("a6c3c09b094749c98ae517ce23c134a3")}.jpg`, preset: "hero", page: "200h", section: "Hero", alt: "Teacher training students holding a warrior pose in the studio" },
  { key: "ttc200-quote", file: `${P("7af292f0133c429fbb52c9f8aa4186c3")}.jpeg`, preset: "content", page: "200h", section: "Quote block image", alt: "Group practising together in the studio" },
  { key: "ttc200-strip-1", file: `${P("ad95d5b31fd24b568c1692c21204cd40")}.jpg`, preset: "hero", page: "200h", section: "Strip after Schedule & Tuition", alt: "Students practising on mats while the teacher stands and guides the class" },
  { key: "ttc200-strip-2", file: `${P("3daa9adb0eff4310974900b4751ccbb7")}.jpg`, preset: "hero", page: "200h", section: "Strip after lime band", alt: "Teacher training students embracing in a group hug" },
  { key: "ttc200-strip-3", file: `${P("7b850625912844ff857a49235085f4ea")}.jpg`, preset: "hero", page: "200h", section: "Strip after Curriculum", alt: "Sandi playing guitar while students rest in savasana" },
  { key: "ttc200-graduation", file: `${P("ac4aa5c7c324427eb90deb4020b9f452")}.jpg`, preset: "wide", page: "200h", section: "Graduation photo after testimonials", alt: "Graduates dressed in white holding their teacher training certificates" },
  { key: "ttc200-iyengar", file: `${P("61e0b99561d54e909caa96e2a928c183")}.jpg`, preset: "hero", page: "200h", section: "Closing quote band background", alt: "" },

  // ---- 300h ------------------------------------------------------------------
  { key: "ttc300-hero", file: `${P("c455675dd1694ac0a0ca4fc6af534f6f")}.jpg`, preset: "hero", page: "300h", section: "Hero", alt: "Class moving through downward dog and low lunges" },
  { key: "ttc300-quote", file: `${P("d29a57c123874befa593c42dbb538eb6")}.jpg`, preset: "content", page: "300h", section: "Quote block image", alt: "Teacher observing students practising" },
  { key: "ttc300-strip-1", file: `${P("7d2eaf75a33449c4957a72315d4bd035")}.jpeg`, preset: "wide", page: "300h", section: "Strip after Schedule & Tuition", alt: "Students in white lying in a circle around a flower mandala" },
  { key: "ttc300-strip-2", file: `${P("7db642c422bb4f888bde70a806636c95")}.jpeg`, preset: "wide", page: "300h", section: "Strip after Curriculum", alt: "Group celebrating together in the studio garden" },
  { key: "ttc300-strip-3", file: `${P("fa98fb06547b43a9a20e272f7338f795")}.jpeg`, preset: "wide", page: "300h", section: "Strip before testimonials", alt: "Students dressed in white dancing in the studio" },
  { key: "ttc300-graduation", file: `${P("4355d70f02684f5e8f5150f4626fc390")}.jpeg`, preset: "wide", page: "300h", section: "Graduation photo after testimonials", alt: "Graduates with certificates around a flower mandala" },
  { key: "studio-ricefield", file: `${P("aab42992d39b4146b2188fba2a0e4023")}.jpg`, preset: "hero", page: "300h, aboutus", section: "300h closing band; About studio story", alt: "The Soul Yoga Bali studio house beside a green rice field" },

  // ---- RecoveRing -------------------------------------------------------------
  { key: "recovering-hero", file: `${P("ac643ff769304ca3a72fd48eddb92499")}.jpg`, preset: "hero", page: "recovering", section: "Hero", alt: "RecoveRing class practising on mats with the pink rings" },
  { key: "recovering-details", file: `${P("0c53bec666f340c297cdf0fa01b6bd7a")}.png`, preset: "content", page: "recovering", section: "Image beside tuition details", alt: "RecoveRing workshop group in the studio" },
  { key: "recovering-band", file: `${P("2aa5f72a948649879a55693339a2cbba")}.jpg`, preset: "content", page: "recovering", section: "Band under 'More Stretching, Less Stressing'", alt: "Hands resting on a pink RecoveRing" },
  { key: "benefit-fascia", file: `${P("a6bb5a176ba64009b1a51dd4063788cf")}.jpg`, preset: "content", page: "recovering", section: "Benefit 1 MyOFascia Release", alt: "Woman lying on the floor with a RecoveRing under her neck" },
  { key: "benefit-pressure", file: `${P("1cf809f767df43719fee292a5e4e80bc")}.jpg`, preset: "content", page: "recovering", section: "Benefit 2 Pressure Massage", alt: "Woman in a plank position using a RecoveRing" },
  { key: "benefit-stretching", file: `${P("aeea00b1dde94ee4a3c9f76a97796a49")}.jpg`, preset: "content", page: "recovering", section: "Benefit 3 Deep Stretching", alt: "Woman seen from behind stretching with a RecoveRing behind her head" },
  { key: "benefit-core", file: `${P("dd8bb0cf21424371b39710f016a389b3")}.jpg`, preset: "content", page: "recovering", section: "Benefit 4 Core Practice", alt: "Woman balancing in boat pose holding a RecoveRing" },
  { key: "recovering-closing", file: `${P("c48e83dcaeb24051a0791e97a52c1e18")}.png`, preset: "hero", page: "recovering", section: "Closing image", alt: "Class in a wide-legged stance using props" },

  // ---- About ----------------------------------------------------------------
  { key: "about-hero", file: `${P("4b0455749d464b10b26ee51ceb5a39ba")}.jpg`, preset: "hero", page: "aboutus", section: "Hero", alt: "Students gathered at the studio window beside the SOUL sign" },
  { key: "portrait-sandi", file: `${P("c3fcf6c9ab664ed28aaade5a6b2e418a")}.jpg`, preset: "content", page: "aboutus", section: "Sandi Kalifadani bio", alt: "Portrait of Sandi Kalifadani with the rice fields behind him" },
  { key: "portrait-sera", file: `${P("f3cf4e531f31427bb5dd4d3cd3c1ea62")}.jpg`, preset: "content", page: "aboutus", section: "Sera bio", alt: "Portrait of Sera in the garden" },

  // ---- Contact ----------------------------------------------------------------
  { key: "contact-sunset", file: `${P("c6b8ee8108d346499e51d6173746cf68")}.jpeg`, preset: "content", page: "contact", section: "Rice field at sunset", alt: "Rice fields at sunset with mountains on the horizon" },

  // ---- Orphan Wix bookings page ------------------------------------------------
  { key: "alignment-vinyasa", file: `${P("0385cf1a2c29427eb4ca6e507be2c4df")}.jpeg`, preset: "content", page: "book-online, service-page/alignment-vinyasa", section: "Alignment Vinyasa service image (has photographer watermark)", alt: "Yogi balancing in crow pose on a terrace railing" },
];

export const EXCLUDED = [
  { file: `${P("799ad34b6a5c42aaa65f848cc7db5ed0")}.png`, reason: "'OM AH' logo of an unrelated business (legacy Wix business profile). Must not be used." },
  { file: "59ae78be3b0a4f0fa7b3c77d21838160.jpg", reason: "Wix stock placeholder from an untouched Bookings template service." },
  { file: "b2f7ef303bfa46ffa607186d757eb73f.jpg", reason: "Wix stock placeholder from an untouched Bookings template service." },
  { file: "2b074052bbd24b6385f01ef23168ab53.jpg", reason: "Wix stock placeholder from an untouched Bookings template service." },
];

export const PRESETS = {
  hero: [640, 1080, 1600, 2400],
  wide: [640, 1080, 1600],
  content: [480, 960, 1400],
  mark: [240, 480, 840],
  icon: [96],
};
