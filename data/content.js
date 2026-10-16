// Remaining page copy, verbatim from docs/source-audit/content/.

// Lime-band quotes and statements (5 in the source: home x3, 200h x1, recovering x1;
// the RecoveRing workshop quote appears on both home and /recovering).
export const quotes = {
  studio: {
    lines: [
      "“This was the most beautiful and peaceful yoga studio that I visited in Bali.",
      "Sandi and Sera are wonderful teachers - I really enjoyed the inside flow and alignment hatha classes. Cherry on top of the cake were the cute kitties who sometimes join for class.”",
    ],
  },
  grateful: {
    lines: [
      "“I am very grateful to be part of Soul Yoga. Thank you, Sandi and Sera. With your guidance, my journey has been meaningful, and your studio feels like a second home to me. Besides the solid RYT200 training, you also reminded me of the importance of enjoying life. Looking forward to RYT300.",
      "For those who love yoga, Soul Yoga is a must.”",
    ],
  },
  recoveringWorkshop: {
    lines: [
      "“Love every part of Recovering workshop. I've learned so many things just in two days of training. Sera is very knowledgeable. She delivered the material and classes very clear. Enjoy this training very much”",
    ],
  },
};

export const homeHero = {
  title: "WELCOME TO SOUL YOGA BALI",
  subtitle: "beautiful yoga school in the heart of Bali, UBUD",
};

export const dailyClassHeading = "Daily Yoga Class Open for All Level";

export const instagram = {
  heading: "Follow us on Instagram",
  // The original used the Wix "Instagram Feed" app (live, signed media URLs).
  // Until an Instagram API integration is configured, the grid shows the studio's own
  // photographs from this site and links to the profile. Keys refer to image-manifest.
  liveFeed: false,
  initialCount: 8,
  pageSize: 4,
  images: [
    "ttc300-strip-1",
    "ttc200-strip-3",
    "ttc300-strip-3",
    "ttc200-strip-2",
    "ttc200-graduation",
    "recovering-band",
    "ttc300-strip-2",
    "ttc200-quote",
    "ttc300-graduation",
    "schedule-class",
    "benefit-stretching",
    "ttc300-quote",
  ],
};

export const merch = {
  heading: ["SOUL YOGA BALI", "LIMITED EDITION", "CAT T-SHIRT"],
  details: [
    { label: "Material", value: "Cotton" },
    { label: "Color", value: "Black" },
    { label: "Size Available", value: "XL, L, M" },
    // UNRESOLVED (audit §2 / Q11): published as "IDR 200.00", probably a typo.
    // Shown exactly as published until the owner confirms the price.
    { label: "Price", value: "IDR 200.00", unresolved: true },
  ],
  orderLabel: "Order",
};

export const about = {
  whyUbud: {
    heading: "Why choose Ubud?",
    text: "Situated in the heart of Bali, Ubud derives its name from the Balinese word Ubad, meaning medicine—a tribute to the region's ancient legacy as a source of medicinal herbs and \"holy inspiration.\" Beyond its breathtaking landscapes, Ubud has served as the island’s cultural and artistic epicenter since the 1930s, offering a profound atmosphere for meditation and self-discovery. What truly distinguishes this sanctuary is the local Balinese community, whose daily lives are a living embodiment of yoga. Through their sacred traditions, intricate architecture, and spiritual devotion, the people of Ubud practice yoga naturally from birth, making this the world’s most authentic destination for those seeking to study spiritualism and the yogic arts..",
  },
  founders: [
    {
      name: "Sandi Kalifadani",
      image: "portrait-sandi",
      paragraphs: [
        "A Bali-based yoga teacher, musician, and DJ, Sandi Kalifadani has been a dedicated explorer of the yogic arts since 2002. His profound foundation in Iyengar Yoga (since 2005) and Ashtanga Mysore (since 2015) informs a teaching career that spans over two decades. Since 2006, Sandi has facilitated thousands of hours of classes, workshops, and teacher training programs (TTC) at premier studios across Indonesia and internationally throughout Asia and the Americas.",
        "Sandi is the architect of Alignment Hatha, a signature style that harmonizes structural precision with creative sequencing. His methodology is defined by meticulous hands-on adjustments and the innovative use of props to make advanced practice accessible. Beyond physical postures, Sandi integrates a diverse background in mindfulness and healing arts—including Zen meditation, Jin Shin Jyutsu, Hypnotherapy, and NLP—into his sessions to foster mental and spiritual clarity.",
        "In 2020, following years of teaching at Bali’s top institutions, Sandi founded Soul Yoga Bali in Ubud as a dedicated space for empowerment and community. When he is not on the mat guiding students through their personal transformations, Sandi continues his creative journey as a professional DJ and music producer, blending the rhythms of sound and movement.",
      ],
    },
    {
      name: "Sera",
      image: "portrait-sera",
      paragraphs: [
        "With a lifelong passion for movement, Sera transitioned from a successful career as a senior K-Pop and Pole Dance instructor in Korea and Australia to the profound world of yoga. Following a personal injury, she dedicated herself to the academic and therapeutic study of the discipline, earning a Bachelor’s degree in Yoga & Meditation from Wongwang University in Korea.",
        "An esteemed member of the Korean Yoga Instructor Association, Sera has taught at Seoul’s most prestigious institutions. Her extensive expertise spans Hatha, Vinyasa, and Mahahatha, alongside a specialized focus on Prenatal, Postnatal, and Baby Massage—a passion stemming from her previous professional background as a certified baby planner.",
        "Today, Sera is recognized as one of the few Recovering Yoga Masters in Korea. Having utilized these techniques for her own rehabilitation, she integrates the \"Recovering\" prop to complement traditional tools like straps and blocks, offering a uniquely effective approach to therapy and physical progress. Her classes often feature Inside Flow, where she beautifully bridges her dance heritage with modern yoga. As the co-founder of Soul Yoga Bali, Sera brings a compassionate, science-based, and rhythmic energy to the Ubud yoga community.",
      ],
    },
  ],
};
