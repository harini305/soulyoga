// Shared studio facts. Values are as published on soulyogabali.com (audit 2026-10-15,
// docs/source-audit/02-content-preservation-checklist.md §A). Edit here, not in components.

export const site = {
  name: "Soul Yoga Bali",
  url: "https://www.soulyogabali.com",
  tagline: "Boutique serenity in the heart of Bali, Ubud",
  footerLocation: "Sayan Ubud Bali",
  address: "Kutuh, Sayan, Ubud, Bali, Indonesia",
  locationDescription:
    "Located about 10 minutes from Ubud Center in Sayan village, the neighbour of Penestanan village. The studio is surrounded by rice fields with amazing views of Mount Agung and Mount Batur.",

  email: "soulyogabali@gmail.com",

  // One number, published in two formats. The digits are identical.
  phone: {
    e164: "+62817279665",
    display: "+62 81 727 9665", // contact page, merch
    displayCompact: "+62817279665", // footer, class rates
  },
  // Published as "Reservation by whatsapp +62817279665"
  whatsappUrl: "https://wa.me/62817279665",

  social: {
    instagram: { label: "@soulyogabali", url: "https://www.instagram.com/soulyogabali" },
    facebook: { label: "Facebook", url: "https://www.facebook.com/soulyogabali" },
  },

  maps: {
    // Short links verified in the audit (05 §6)
    studio: { label: "Soul Yoga Center", url: "https://maps.app.goo.gl/CJw7YJ5t4gK9bK8j6" },
    dharmaKula: { label: "Dharma Kula Branch", url: "https://maps.app.goo.gl/cxsgWJPNPdkUHYbg6" },
    // Coordinates the studio short link resolves to (Google place "Soul Yoga School").
    // The audit asks the owner to confirm them (06 §8 Q10).
    studioCoords: { lat: -8.511142, lng: 115.2459197 },
  },

  // TTC registration form. No submission back end was found in the audit, so the
  // endpoint is null and the form runs in an honest "not connected" mode.
  // Set to a URL (e.g. a Route Handler or form service) to POST JSON submissions.
  registration: {
    endpoint: null,
  },
};

export const nav = [
  { label: "HOME", href: "/" },
  { label: "SCHEDULE", href: "/yogaclass" },
  {
    label: "TEACHER TRAINING",
    children: [
      { label: "200 HOURS TTC", href: "/200yogateachertraining" },
      { label: "300 HOURS TTC", href: "/300yogateachertraining" },
      { label: "RECOVERING THERAPY", href: "/recovering" },
    ],
  },
  { label: "ABOUT US", href: "/aboutus" },
  { label: "CONTACT", href: "/contact" },
];
