// Daily classes: timetable, rates, guidelines and class descriptions.
// Source: docs/source-audit/content/home.md and yogaclass.md (verbatim).

// --- Timetable -------------------------------------------------------------
// Transcribed from the Table Master widget render of 2026-10-15 (identical on
// home and /yogaclass). There was no Sunday column. Add/remove slots or days here.
export const timetable = {
  header: "Day/Tme", // original header label, typo included (kept for reference only)
  // The source widget header was green (≈#558F1E, pixel estimate). Replaced with the
  // brand teal at the owner's request; change here to restyle the timetable header.
  headerColor: "#285461",
  slots: [
    {
      time: "07.30 - 09.00",
      label: "SOUL YOGA",
      classes: {
        Mon: "Alignment Hatha",
        Tue: "Hatha Flow / Vinyasa",
        Wed: "Alignment Hatha",
        Thu: "Alignment Hatha",
        Fri: "Hatha Flow / Vinyasa",
        Sat: "Stretch & Release",
      },
    },
  ],
  days: [
    { key: "Mon", label: "Monday" },
    { key: "Tue", label: "Tuesday" },
    { key: "Wed", label: "Wednesday" },
    { key: "Thu", label: "Thursday" },
    { key: "Fri", label: "Friday" },
    { key: "Sat", label: "Saturday" },
  ],
  // The source widget had no Sunday column, but did not say whether Sunday has classes
  // (audit 06 §5). Leave null until the owner confirms; a string here is shown under the table.
  note: null,
};

// --- Rates -------------------------------------------------------------------
export const payment = {
  methods: "Payment by cash or bank transfer",
  bank: { account: "701831857200", bankName: "Bank CIMB Niaga,", holder: "Sandi Kalifadani" },
  // Home shows "Wise :", /yogaclass shows "Paypal/wise :" (audit issue C3). The fuller
  // /yogaclass label is displayed; confirm with the owner.
  online: { label: "Paypal/wise :", email: "kalifadani@gmail.com", sourceVariants: { home: "Wise :", yogaclass: "Paypal/wise :" } },
  cards: "Credit/debit card is not available",
  reservation: "Reservation by whatsapp +62817279665",
};

export const rates = [
  {
    title: "Regular Price",
    items: [
      { label: "Drop in", price: "150.000 IDR" },
      { label: "3 Classes", price: "330.000 IDR", note: "(valid for 1 month)" },
      { label: "5 Classes", price: "500.000 IDR", note: "(valid for 1 month)" },
      { label: "10 Classes", price: "900.000 IDR", note: "(valid for 1 month)" },
      {
        label: "20 Classes",
        // UNRESOLVED (audit C2): home publishes "1.5000.000 IDR", /yogaclass publishes
        // "1.500.000 IDR". The well-formed /yogaclass value is shown on both pages;
        // the owner must confirm.
        price: "1.500.000 IDR",
        note: "(valid for 1 month)",
        sourceVariants: { home: "1.5000.000 IDR", yogaclass: "1.500.000 IDR" },
        unresolved: true,
      },
    ],
  },
  {
    title: "Indonesian KTP Holder & TTC Graduates",
    items: [
      { label: "Drop in", price: "100.000 IDR" },
      { label: "3 Classes", price: "270.000 IDR", note: "(valid for 1 month)" },
      { label: "5 Classes", price: "400.000 IDR", note: "(valid for 1 month)" },
      { label: "10 Classes", price: "600.000 IDR", note: "(valid for 1 month)" },
    ],
  },
  {
    title: "Private Class",
    items: [
      { label: "1-2 person", price: "750.000 IDR", note: "(60 minutes)" },
      { label: "1-2 person", price: "1.000.000 IDR", note: "(90 minutes)" },
      { label: "Additional charge for more than 2 person", price: "100.000 IDR", note: "per person" },
    ],
  },
];

export const guidelines = [
  "Free yoga mat & props are available in the studio",
  "Bring your own towel",
  "Please arrive 15 minutes before class",
  "Children under 10 are not allowed in the class",
  "No pets are allowed to bring to the studios except our lovely cat",
];

export const locations = [
  {
    name: "Soul Yoga Center",
    mapKey: "studio",
    lines: [
      "is located in the middle of the rice paddies, the studio only could be reached by walk or scooter.",
      "If you take a car, please park your car near Moksa restaurants and take a walk about 10 minutes and enjoy the beautiful scenery around the studio",
    ],
  },
  {
    name: "Dharma Kula Branch",
    mapKey: "dharmaKula",
    lines: ["is in Dharma Kula Cafe", "Gojek and Grab scooter are available", "Please arrive 15 minutes before class started"],
  },
];

export const soulYogaClass = [
  "Our classes are open for different level practitioner",
  "We provides high quality yoga by offering small classes with personalised attention to meet the individual needs of all students.",
];

// --- Class descriptions (/yogaclass) ------------------------------------------
export const classDescriptions = [
  {
    name: "Hatha Yoga",
    paragraphs: [
      "Hatha yoga is practiced at a slower pace, with focus on the postures, breath, controlled movements, stretching, mindfulness and meditation. If you’re looking to become more flexible, hatha yoga can help, especially in the hamstrings and spine. Hatha yoga can also help to improve flexibility, strengthen the body, improve balance and releasing stress.",
    ],
  },
  {
    name: "Alignment Hatha",
    paragraphs: [
      "Hatha Yoga based on the Iyengar system. In this class, students will be introduced asanas with different variety with prop.",
      "There are also different themes every week such as forward bend, twist, hip opening, back bend, etc. Students also learn many alternate poses by props like walls, chairs, etc.",
    ],
  },
  {
    name: "Hatha Flow",
    paragraphs: [
      "Hatha Flow is a slow version of Vinyasa.",
      "All the poses are arranged like in vinyasa sequence and students hold the poses for several breaths and connect to the body with alignment.",
    ],
  },
  {
    name: "Vinyasa",
    paragraphs: [
      "Vinyasa is an approach to yoga in which you move from one pose directly into the next. It is a dynamic practice where you move through a flow of different yoga poses. This heart-pumping session may be a good addition to your cardio routine.",
      "Vinyasa is also a great way to improve your strength, muscle tone, and endurance.",
    ],
  },
  {
    name: "Inside Flow",
    paragraphs: [
      "Based on vinyasa flow, Inside Flow links yoga poses with smooth and controlled transitions and is practised to the rhythm of the music. The speed of the music defines the speed of the breath, making this an intense breathing practice.",
    ],
  },
  {
    name: "Stretch & Release",
    paragraphs: [
      "Stretch & Release is gentle Hatha mix with yin yoga target specific muscle groups and focus on deep long stretches. This class will help people reduce tension in the body, open blockage, release stress, relax and recover. All the poses are sitting and laying down which are friendly for all level students",
    ],
  },
];

// --- Orphan Wix Bookings service (/service-page/alignment-vinyasa) -------------
// Real class content, but the source marks it unavailable. Never show a booking action.
export const alignmentVinyasa = {
  name: "Alignment Vinyasa",
  subtitle: "Weekly Vinyasa Yoga",
  price: "Free",
  available: false,
  availabilityText: "This service is not available, please contact for more information.",
  description:
    "75 minutes slow VINYASA based on ASHTANGA system with sun salutation opening, mix of flow and longer-held postures with alignment modified for ALL LEVEL student . The class is FREE but if you want to make donation also available",
  location: "Bali, Indonesia",
};
