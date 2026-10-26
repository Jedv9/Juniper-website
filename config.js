/*
  ============================================================
  JUNIPER HAIR — SITE SETTINGS
  Edit everything in this one file. No other code changes needed.
  ============================================================
*/
window.SITE = {
  name: "Juniper Hair",
  tagline: "Thoughtful color, modern cuts, and hair that feels like you.",
  intro:
    "Juniper is a calm, private studio built around one idea: unhurried, one-on-one appointments where your hair gets the full attention it deserves.",

  // ---- BOOKING ------------------------------------------------
  // Pick ONE provider: "calendly" or "google".
  //  • Calendly: paste your scheduling link, e.g. "https://calendly.com/juniper-hair"
  //  • Google Calendar: in Google Calendar create an "Appointment schedule",
  //    click "Share" > "Website embed" and paste the src URL from the iframe code
  //    (looks like "https://calendar.google.com/calendar/appointments/schedules/...").
  booking: {
    provider: "calendly",
    calendlyUrl: "",
    googleUrl: "",
  },

  // ---- CONTACT ------------------------------------------------
  contact: {
    phone: "(555) 555-0123",
    email: "hello@juniper-hair.com",
    addressLine1: "123 Main Street, Suite 4",
    addressLine2: "Your City, ST 00000",
    mapsUrl: "https://maps.google.com/?q=Juniper+Hair",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  hours: [
    ["Monday", "Closed"],
    ["Tuesday", "10am – 7pm"],
    ["Wednesday", "10am – 7pm"],
    ["Thursday", "10am – 7pm"],
    ["Friday", "9am – 5pm"],
    ["Saturday", "9am – 3pm"],
    ["Sunday", "Closed"],
  ],

  // ---- ABOUT --------------------------------------------------
  about: {
    heading: "Meet your stylist",
    name: "Your Name",
    title: "Owner & Stylist",
    photo: "", // e.g. "images/stylist.jpg" — leave blank for a botanical placeholder
    paragraphs: [
      "With more than a decade behind the chair, I specialize in soft, dimensional color, precision bobs, and lived-in looks that grow out beautifully.",
      "Every appointment starts with a real conversation about your routine, your goals, and what you love (and don't) about your hair. You'll leave knowing exactly how to style it at home.",
    ],
  },

  // ---- SERVICES -----------------------------------------------
  // price can be any text: "$65", "from $120", "Consult"
  services: [
    {
      category: "Cuts & Styling",
      items: [
        { name: "Signature Haircut", detail: "Consultation, wash, cut & style", price: "from $65", time: "60 min" },
        { name: "Bob & Precision Cut", detail: "Structured shapes, tailored to you", price: "from $70", time: "60 min" },
        { name: "Bang Trim", detail: "Between-appointment refresh", price: "$15", time: "15 min" },
        { name: "Blowout", detail: "Wash and smooth or voluminous finish", price: "from $45", time: "45 min" },
      ],
    },
    {
      category: "Color",
      items: [
        { name: "Single-Process Color", detail: "Root touch-up or all-over color", price: "from $90", time: "90 min" },
        { name: "Dimensional Color", detail: "Multi-tonal highlights & lowlights", price: "from $150", time: "2.5 hrs" },
        { name: "Balayage", detail: "Hand-painted, soft grow-out", price: "from $180", time: "3 hrs" },
        { name: "Gloss / Toner", detail: "Shine, tone correction & refresh", price: "from $45", time: "45 min" },
      ],
    },
    {
      category: "Treatments & Events",
      items: [
        { name: "Keratin Smoothing", detail: "Frizz control that lasts months", price: "from $250", time: "3 hrs" },
        { name: "Deep Conditioning", detail: "Add to any service", price: "$25", time: "15 min" },
        { name: "Bridal & Event Styling", detail: "Trials and on-the-day styling", price: "Consult", time: "Varies" },
        { name: "New Client Consultation", detail: "Free, 15 minutes, no pressure", price: "Free", time: "15 min" },
      ],
    },
  ],

  // ---- GALLERY ------------------------------------------------
  // Drop photos in the /images folder and list them here.
  // Leave the list empty to hide the gallery section.
  gallery: [
    // { src: "images/work-1.jpg", alt: "Soft copper balayage" },
  ],

  // ---- REVIEWS ------------------------------------------------
  reviews: [
    { quote: "Best color I've ever had. She actually listened, and it grew out beautifully.", name: "Client review" },
    { quote: "A calm, beautiful space and a cut that's easy to style every morning.", name: "Client review" },
    { quote: "I trust her completely with my hair. Worth every minute.", name: "Client review" },
  ],

  // ---- POLICIES -----------------------------------------------
  policies: [
    ["Cancellations", "Please give at least 24 hours' notice to cancel or reschedule. Late cancellations may be charged 50% of the service."],
    ["Late arrivals", "Arriving more than 15 minutes late may mean shortening or rescheduling your service."],
    ["New color clients", "A quick consultation is recommended before major color changes so we can plan time and pricing."],
    ["Payment", "Cards, cash, and tap-to-pay accepted. Gratuity is appreciated but never expected."],
  ],
};
