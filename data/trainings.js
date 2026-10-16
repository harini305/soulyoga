// Teacher trainings and RecoveRing. Verbatim from docs/source-audit/content/
// (home.md, 200ytt.md, 300ytt.md, recovering.md). Dates use ISO start/end so the
// site can label past dates honestly; edit the list when new dates are confirmed.

// --- 200 hours -------------------------------------------------------------------
export const ttc200 = {
  title: "200 HOURS Yoga Teacher Training",
  // As published for 2026 on home + 200h page. Status (past/upcoming) is computed
  // from today's date; nothing here claims a place is available.
  dates: [
    { label: "3-23 May 2026", start: "2026-05-03", end: "2026-05-23" },
    { label: "5-25 July 2026", start: "2026-07-05", end: "2026-07-25" },
    { label: "6-26 September 2026", start: "2026-09-06", end: "2026-09-26" },
    { label: "6-26 December 2026", start: "2026-12-06", end: "2026-12-26" },
  ],
  datesHeading: "Training 2026",
  quote: "“It's never too late, it's never too bad, and you never too old and too sick to start from the scratch once again”",
  prices: [
    { label: "Price", value: "IDR 32.000.000" },
    { label: "", value: "IDR 17.500.000", note: "(rate for Indonesian/KTP holder)" },
  ],
  highlights: [
    "Exclusive program, limited only for 16 students.",
    "Beautiful location in Ubud, local neighbourhood, surrounded by rice paddies.",
    "Balinese cultural activities; sunset walk, sauna, swimming pool, purification ceremony, etc",
    "Daily buffet vegetarian meals, also customised based on the students's diet",
    "Manual book and merchandise",
    "Yoga Alliance certification",
    "FREE ONLINE VIDEOS study; asanas, classes, anatomy, lecture, hands on technique, etc.",
    "FREE Aromatherapy Workshop",
    "Lifetime Consultation",
  ],
  schedule: {
    intro: ["Monday until Saturday, 06.30-18.30", "Sunday no class"],
    slots: [
      { time: "06.30 - 07.30", what: "Pranayama & Meditation" },
      { time: "07.30 - 09.00", what: "Practice (Hatha/Vinyasa/Alignment Hatha, Ashtanga, Gentle Flow, etc)" },
      { time: "09.00 - 10.00", what: "Breakfast" },
      { time: "10.00 - 12.00", what: "Lecture 1" },
      { time: "12.00 - 14.00", what: "The Art of Asanas (Asana breakdown Alignment, Hands on, etc)" },
      { time: "14.00 - 15.00", what: "Break Lunch" },
      { time: "15.00 - 16.30", what: "Lecture 2" },
      { time: "16.30 - 18.30", what: "Teaching Practice or Practice (Gentle class, Yin Yoga, etc)" },
    ],
    note: "Schedule can be changed as appropriate",
  },
  transformation: {
    heading: ["Soul Yoga Teacher Training Program", "is Lifetime Changing Experience"],
    blocks: [
      {
        title: "More Than a Training: A Transformation.",
        text: "Many graduates describe our program as a profound journey of self-healing and discovery. It is designed for those ready to align with their life’s purpose and find their authentic voice.",
      },
      {
        title: "Exclusivity Matters.",
        text: "We accept only 16 students per intake. This ensures an intimate learning environment where every individual has the opportunity to thrive, rather than getting lost in a large crowd.",
      },
    ],
  },
  curriculum: [
    {
      title: "Yoga History & Philosophy",
      items: [
        "The History of Yoga,",
        "Philosophy & evolution of yoga",
        "Yoga Figures",
        "Yoga Styles (Classic & Modern Yoga Styles)",
        "Eight Limb Path of Yoga",
        "Yoga Bible : Bhagavad-Git, The Yoga Sutras of Patanjali, Hatha Yoga Pradipika",
        "Subtle Anatomy & Chakra System",
      ],
    },
    {
      title: "Meditation",
      items: [
        "What meditation is, and why it’s practiced",
        "Variety of meditation techniques and tools",
        "Quieting the mind to develop deeper levels of awareness",
        "Connecting with nature and the world you live in",
        "Connecting with the true Self",
      ],
    },
    {
      title: "Pranayama - Breathing",
      items: [
        "The use of breath as a transformative tool for Self-awareness",
        "Breath control",
        "Different breathing techniques",
        "Exploration of benefits",
      ],
    },
    {
      title: "Asana - Posture",
      items: [
        "Asana alignment",
        "Daily yoga practice with different yoga level (gentle, beginner, intermediate & advance) and different styles (Hatha, Vinyasa, Flow Yoga, Ashtanga, Restorative, Inside Flow, Stretch & Release, Yin, My Fascia Ball, Couple Yoga, Yoga Massage, etc)",
        "How to do Asanas for different level of students (Students will learn at least 5 different approach to do one asanas)",
        "Asana variations with prop (block, strap, chair, table, wall, etc)",
        "How to do adjustment & hands on to avoid injuries and deepening the pose",
        "How to do asanas for student with specific condition (stiff muscle, senior people, student with back, knee & shoulder problem, etc)",
        "Foundational yogic anatomy & physiology",
        "Balance between body, mind and breath",
        "Medical benefits",
        "Sequencing",
      ],
    },
    {
      title: "The Art Of Teaching",
      items: [
        "Teaching clinics; demonstration, adjusting and assisting students",
        "How to address a group of students",
        "How to use your own body as a teaching tool",
        "How to use your voice, volume, tempo, and pacing",
        "How to correct postures",
        "Choosing the right words",
        "Energy, passion, confidence, humor",
        "Using your own presence and Self-awareness as a transformative teaching tool",
        "Teaching Styles",
        "Class Sequencing and Layout",
        "Preparation a Class Check-List",
        "Meeting the Needs of Students",
      ],
    },
    {
      title: "The Business Of Yoga",
      items: [
        "Teacher guidelines & etiquette",
        "Appropriate conduct inside and outside the yoga room",
        "How to apply for a teaching position",
        "Teacher expectations",
        "Student interaction",
        "Role playing",
        "Receiving feedback",
      ],
    },
    {
      title: "Anatomy",
      items: ["Anatomy based on yoga tradition", "Anatomy based on medical", "Anatomy of back, knee and shoulder problem"],
    },
    { title: "BONUS", items: ["Aromatherapy Workshop", "Yoga, aromatherapy and chakra energy"] },
  ],
  closingQuote: {
    text: "“Confidence, Clarity and Compassion are essential qualities of a teacher.”",
    author: "BKS Iyengar", // published as "`BKS Iyengar" (stray backtick, audit §2)
  },
  // Home-page teaser (worded differently from the TTC page in the source; audit C4/C5)
  teaser: {
    heading: ["200 Hours", "Soul Yoga", "Teacher Training"],
    accreditation: "*Accredited Yoga School by Yoga Alliance",
    priceLabel: "Special Offer",
    price: "IDR 32.000.000",
    priceNote: "(not including accomodation)",
    bullets: [
      "Exclusive for 16 students only",
      "Beautiful Location in Ubud, local neighbourhood surrounded by rice paddies",
      "Balinese Culture Experience and fun activities; morning walk, sauna, swimming pool, live music, sunset etc",
      "Daily Buffet Vegetarian Meals",
      "Manual Book & Merchandise",
      "Yoga Alliance Certificate",
      "FREE Online videos study; asanas, anatomy, lecture",
      "FREE Aromatherapy Workshop",
    ],
  },
};

// --- 300 hours -------------------------------------------------------------------
export const ttc300 = {
  title: "300 HOURS Yoga Teacher Training",
  dates: [], // none published
  datesText: "Date to be announced",
  datesHeading: "Training 2027",
  quote: ttc200.quote,
  prices: [
    { label: "Price", value: "IDR 45.000.000" },
    { label: "", value: "IDR 41.000.000", note: "(Soul Yoga Graduate)" },
    { label: "", value: "IDR 23.500.000", note: "(rate for Indonesian/KTP holder)" },
  ],
  highlights: [
    "Exclusive program, limited only for 16 students.",
    "Beautiful location in Ubud, local neighbourhood, surrounded by rice paddies.",
    "Balinese cultural activities; sunset walk, sauna, swimming pool, purification ceremony, etc",
    "Daily buffet vegetarian meals, also customised based on the students's diet",
    "Manual book and merchandise",
    "Yoga Alliance certification",
    { before: "Double Certification, From Yoga Alliance and ", link: { text: "Recove-Ring Therapy", href: "/recovering" }, after: " Korea" },
    "FREE ONLINE VIDEOS study; asanas, classes, anatomy, lecture, hands on technique, etc.",
    "Lifetime Consultation",
  ],
  schedule: {
    intro: ["Monday - Saturday | Sunday no class"],
    slots: [
      { time: "06.30 - 07.30", what: "Advance Pranayama & Meditation", detail: "Shatkarma & Kriya" },
      { time: "07.30 - 09.00", what: "Advance Asana Practice", detail: "Hatha, Vinyasa, Ashtanga, Aligment" },
      { time: "09.00 - 10.00", what: "Healthy Breakfast Break" },
      // The source linked "Fascia, joint mechanics" to another school's website
      // (samahitaretreat.com, audit L1). That accidental link is removed.
      { time: "10.00 - 11.30", what: "Anatomy & Bio-mechanics Lab –", detail: "Fascia, joint mechanics or therapeutic applications." },
      { time: "11.30 - 13.30", what: "The Art of Asanas (Asana breakdown)", detail: "Advance HandsOn, Prop modification" },
      { time: "13.30 - 14.30", what: "Lunch Break & rest" },
      { time: "14.30 - 16.00", what: "Philosophy & Sacred Yoga Text" },
      { time: "16.00 - 17.30", what: "Teaching Methodology", detail: "Sequencing, Advance Yoga Theme" },
      { time: "17.30-19.00", what: "Specialized Yoga Class", detail: "Rotating sessions on Yin, Restorative, or Yoga Therapy for injuries." },
    ],
  },
  curriculum: [
    {
      title: "Yoga History & Philosophy",
      items: [
        "Mastery of Sacred Texts: Analytical study of the Yoga Sutras (beyond the 8 limbs), the Bhagavad Gita (Dharma & the 3 Paths), and the Hatha Yoga Pradipika.",
        "Eastern Philosophical Systems: In-depth exploration of Samkhya (Dualism), Advaita Vedanta (Non-dualism), and the roots of Tantra.",
        "The Subtle Body & Energy: Advanced mapping of the Chakra system, the Pancha Koshas (5 Sheaths), and Prana Vayus.",
        "The Psychology of Yoga: Bridging ancient wisdom with modern mental health, focus on Samskaras (patterns) and Vasanas (tendencies).",
        "Ethics & Leadership: Applying the Yamas and Niyamas to professional boundaries, teacher-student dynamics, and conscious business.",
      ],
    },
    {
      title: "Meditation",
      items: [
        "Vedic & Tantric Meditation: Mastery of Mantra (sound vibration), Yantra (visual focus), and Trataka (candle gazing).",
        "Buddhist Foundations: In-depth practice of Vipassana (Insight), Metta (Loving-Kindness), and Samatha (Tranquility).",
        "Yoga Nidra Mastery: Learning the science of \"Psychic Sleep\" and how to script and lead 45-minute deep-relaxation sessions.",
        "Holding Space: The ethics and energy of leading a meditation group, including managing emotional releases in students.",
        "Sequencing Meditation: Learning to integrate \"mini-meditations\" into asana classes or design 60-minute stand-alone workshops.",
        "Mudras for Meditation: Utilizing specific hand gestures to seal energy and shift the mental state.",
      ],
    },
    {
      title: "Pranayama - Breathing",
      items: [
        "Expansion of Foundation: Moving from basic \"Yogic Breath\" to advanced stages of Nadi Shodhana and Kapalabhati.",
        "Classical Ratios: Practicing specific breathing ratios (Matras) for inhalation, exhalation, and both internal and external breath retention (Kumbhaka).",
        "The Vital Breaths: Mastering techniques like Bhastrika, Surya Bhedana (Solar Piercing), Chandra Bhedana (Lunar Piercing), and Sheetali/Sheetkari.",
        "Kriyas & Purification: Integrating cleansing techniques like Jal Neti (Nasal Cleansing) to prepare the respiratory system for deeper practice.",
        "Sequencing Breath: Learning how to safely sequence a 30-to-60 minute stand-alone pranayama session.",
        "Precautions & Contraindications: Identifying when to avoid specific techniques for students with conditions like high blood pressure, pregnancy, or anxiety.",
      ],
    },
    {
      title: "Advance Asana Mastery",
      items: [
        "Precision Alignment & Integration: A deep dive into the skeletal and muscular mechanics of complex postures, focusing on joint stability and kinetic chains.",
        "The Art of Multi-Level Integration: Mastering the ability to lead \"Open Level\" classes where beginner, intermediate, and advanced practitioners are challenged simultaneously.",
        "Creative Prop Mastery: Innovative use of blocks, straps, chairs, bolsters, and the wall to make advanced poses accessible or to add restorative depth.",
        "Elevate the practice: Discover how purposeful props allow you to access deeper and more advanced variations of classical poses.",
        "Creative Modifications: Discover unique asana variations and creative sequences that integrate props in fresh, innovative ways",
        "Intuitive Adjustments: Moving beyond \"correcting\" to \"deepening.\" Learning safe, hands-on assists that empower the student’s own alignment.",
        "Correct common misalignments: Learn to prevent injury and protect your joints by finding the \"ideal\" alignment for your unique body.",
      ],
    },
    {
      title: "The Art Of Teaching",
      items: [
        "Intelligent Sequencing : Mastering the \"peak pose\" methodology, building complex anatomical ladders, and creating \"pyramid sequences\".",
        "Thematic Integration: Learning how to weave complex philosophical concepts, mythic storytelling, and spiritual intentions into physical movement.",
        "Energetic Arc (Guna & Vayu): Designing classes based on the subtle body, such as \"Grounding Earth\" flows or \"Dynamic Fire\" sessions",
        "Public Speaking: Building confidence for leading larger groups and workshops.",
        "Non-Verbal Cueing: Developing the \"teacher's eye\" to read a room and provide adjustments that prioritize student safety and energetic flow.",
        "Inclusive Teaching: Advanced protocols for teaching seniors, prenatal/postnatal students, and those with chronic injuries (back, knee, or shoulder issues).",
        "Embodied Leadership & Self-Awareness: Developing the teacher’s persona as a transformative tool; learning to remain centered while holding space for the students' emotional or physical breakthroughs.",
      ],
    },
    {
      title: "Anatomy",
      items: [
        "Bio-Individuality: Studying how skeletal variations (compression vs. tension) dictate a student’s range of motion.",
        "Biotensegrity & Fascia: Exploring the connective tissue web that holds the body together and how \"Fascial Lines\" impact whole-body movement.",
        "Joint Mechanics: Advanced study of the hip, shoulder, and spine—focusing on stability, mobility, and common pathologies like impingements or herniations.",
        "Chronic Pain & Trauma: The physiological manifestation of emotions and how to teach from a trauma-informed perspective.",
        "Injury Management: Proactive strategies for teaching students with back pain, knee issues, or rotator cuff injuries.",
        "Specialized Anatomy: In-depth study of Pre/Postnatal physiology and the unique anatomical needs of the aging body (Seniors).",
        "The Subtle-Physical Bridge: Mapping the relationship between the physical body and the Chakra/Nadi systems.",
      ],
    },
    {
      title: "Yoga Business",
      items: [
        "Entrepreneurial Strategy: Building a unique brand identity, identifying your niche, and mastering advanced marketing for digital and in-person audiences.",
        "Workshop & Retreat Management: The logistics, budgeting, and scaling of high-revenue events, from local immersions to international retreats.",
        "Digital Ecosystems: Creating sustainable income through online platforms, on-demand content, and virtual community building.",
        "Professional Operations: Financial literacy, tax planning, liability protection, and mastering industry-standard studio management software.",
        "Advanced Ethics: Navigating professional boundaries, teacher-student dynamics, and socially conscious business leadership.",
      ],
    },
    { title: "BONUS", items: [{ link: { text: "RECOVE-RING THERAPY Workshop", href: "/recovering" } }] },
  ],
  difference: {
    heading: ["What’s the difference between", "the 200-hour and 300-hour programs?"],
    paragraphs: [
      "In essence, a 200-hour program serves as your essential foundation, focusing on the fundamental \"how-to\" of yoga. It provides the building blocks—basic alignment, safety, and introductory philosophy—needed to lead a safe and effective class for beginners. It is a journey of initial discovery, transforming a dedicated practitioner into a qualified teacher equipped with the standard tools to enter the professional yoga world.",
      "In contrast, a 300-hour program is an advanced evolution designed to refine your craft into true mastery. While the 200-hour course teaches you how to teach, the 300-hour course teaches you how to heal and specialize. By diving into complex biomechanics, therapeutic applications, and advanced spiritual texts, you move beyond standard instruction to become an expert who can guide students through deep physical and energetic transformations.",
    ],
  },
  teaser: {
    heading: ["300 Hours Soul Yoga", "Teacher Training"],
    accreditation: "*Accredited Yoga School by Yoga Alliance",
    priceLabel: "Price",
    prices: ["IDR 45.000.000", "IDR 41.000.000 (Soul Yoga Graduate)", "IDR 23.500.000 (local/KTP holder)"],
    intro: [
      "What makes the Soul Yoga Bali teacher training program different is its deeply personal, immersive, and holistic approach.",
      "Unlike many large-scale trainings, the program is intentionally kept small—limited to around 16 students—so each participant receives close guidance, personalized feedback, and space to grow.",
    ],
    bulletsIntro: "It goes beyond just learning yoga poses. The training emphasizes:",
    bullets: [
      "Self-transformation and healing, not just certification",
      "A balance of physical practice, philosophy, meditation, and breathwork",
      "Practical teaching skills like communication, sequencing, and hands-on adjustments",
      "Exposure to Balinese culture and rituals, creating a more meaningful and immersive experience",
      "A supportive, community-focused environment",
      "Lifetime consultation and continued learning support",
      "A unique setting in Ubud surrounded by nature, which enhances reflection and growth",
    ],
    closing:
      "Overall, the program stands out because it focuses on helping you become not just a yoga teacher—but a more aware, confident, and authentic version of yourself.",
  },
};

// Shared by both TTC registration sections
export const registrationIntro = {
  heading: "CONTACT & REGISTRATION",
  fields: [
    { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
    { name: "nationality", label: "Nationality", type: "text", autoComplete: "country-name" },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
    { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
    { name: "how-you find our program", label: "How you find our program", type: "text" },
    { name: "message", label: "Your questions or comment", type: "textarea" },
  ],
};

// --- RecoveRing ------------------------------------------------------------------
// UNRESOLVED (audit C1): the two published 2026 trainings conflict and both have passed
// (audit date 2026-10-15). Neither is presented as upcoming. Add confirmed dates here.
export const recoveringEvents = [
  {
    id: "recovering-page",
    label: "17-18 January 2026 - Melacca, Malaysia",
    start: "2026-01-17",
    end: "2026-01-18",
    location: "Melacca, Malaysia",
    publishedOn: "/recovering",
  },
  {
    id: "home-teaser",
    label: "1-2 May 2026 Kuala Lumpur, Malaysia",
    start: "2026-05-01",
    end: "2026-05-02",
    location: "Kuala Lumpur, Malaysia",
    publishedOn: "/",
  },
];

export const recovering = {
  title: "RecoveRing Therapy Training Level 1",
  teaser: {
    heading: ["RecoveRing Therapy Yoga", "Teacher Training Course (15 Hours)"],
    datesHeading: "2026 Training",
    eventId: "home-teaser",
  },
  intro:
    "Recovering yoga Is a prop that can be used to deepen stretches, perform resistance workouts, or to massage sore muscles. Recovering is designed to exactly fit the curves of the human body, so it completes the asanas of yoga more accurately, improves the flow of energy and bring the deep relaxation",
  tuition: {
    heading: "RecoveRing Therapy Training Level 1 (2days, 15h)",
    label: "TRAINING TUITION",
    price: "BALI PRICE : IDR 3.700.000",
    otherCountries: "Price in other countries please check",
    partners: ["Surya Fly, Kuala Lumpur - Malaysia", "Fengyun Yoga Life, Taichung - Taiwan", "Pause Yoga, Singapore"],
  },
  youWillGet: {
    label: "YOU WILL GET",
    items: ["2 Original RecoveRings from Korea", "Manual book (full of illustration)", "Vegetarian lunch & snack", "Certificate from Recovering Official Korea"],
  },
  qualification: { label: "QUALIFICATION", items: ["Yoga practice minimum 3 months", "Fundamental knowledge of Yoga"] },
  goodFor: {
    label: "THIS TRAINING GOOD FOR PEOPLE who",
    items: [
      "Want to deepen own Practice",
      "Learn different way of yoga",
      "Have difficulties to practice normal yoga class",
      "Have Injury or Pain",
      "Want to develop more of anatomy",
      "Want to learn more alignment & rehabilitation",
      "Seek for your own signature class",
      "Expand your teaching knowledge",
    ],
  },
  statement: "More Stretching, Less Stressing",
  benefitsHeading: "The 4 top benefits of RecoveRing",
  benefits: [
    {
      title: "MyOFascia Release",
      image: "benefit-fascia",
      text: "The fascia is one of the connective tissues in human body that wraps and protects tissues including muscles, ligaments, tendons, bones and other organs. Poor posture, injury, overuse and other factors can cause problems such as muscle pain, decreased mobility and postural imbalances. These problems can be addressed through techniques such as pressure, stroking and stretching using RecoveRing. In particular, Recovering’s two edges are designed with an optimal structure for fascia release, allowing for stroking along the muscle fibres to release tension in the fascia.",
    },
    {
      title: "Pressure Massage",
      image: "benefit-pressure",
      text: "Recovering’s 6 TOP (Trigger) points offer the advantage of dispersing pressure evenly through the use of body weight during pressure massage, resulting in a smoother and deeper pressure, allowing for a more comfortable massage experience. Pressure massage can help reduce muscle tension, increase blood circulation and remove toxins. Thus helping to maintain muscles in a normal state.",
    },
    {
      title: "Deep Stretching",
      image: "benefit-stretching",
      text: "Our body experiences problems when its Novembers are not smooths. That’s why yoga and other exercises that emphasise movement are gaining attention. RecoveRing is a highly useful training tool that not only assists in increasing the range of motion of the joints but also enhances stability by utilising fine muscle control. RecoveRing’s grip and curb are designed to fit the folds of the human body, and the stable grip helps fascilitate comfortable stretching.",
    },
    {
      title: "Core Practice",
      image: "benefit-core",
      text: "The core refers to the centre of the body, where the muscles that make up the core must function properly for our body to maintain stability from the centre. If the core muscles do not function properly, our body risk of instability from the centre, changes in body shapes, and injuries during exercises. There are many training methods to strenghten the core, but they can be very difficult for beginners. recoveRing can assist with more efficient core training by helping to maintain balance and engage all muscles during core exercises",
    },
  ],
};

// --- Helpers -----------------------------------------------------------------------
// Returns "past" | "current" | "upcoming" for an event, relative to `now`.
export function dateStatus(event, now = new Date()) {
  const end = new Date(`${event.end}T23:59:59+08:00`); // Bali time (WITA)
  const start = new Date(`${event.start}T00:00:00+08:00`);
  if (now > end) return "past";
  if (now >= start) return "current";
  return "upcoming";
}
