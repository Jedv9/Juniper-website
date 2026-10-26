/*
  =====================================================================
   JUNIPER — WEBSITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.

   Rules of thumb:
   • Change the words between the "quotes". Keep the quotes.
   • Keep the commas at the end of lines.
   • To add a service/review/photo, copy an existing line and edit it.
   • Photos go in the "images" folder. Refer to them like "images/name.jpg".
  =====================================================================
*/
window.SITE = {
  name: "Juniper",
  stylist: "Faith",
  welcome: "Welcome to Juniper, I'm so glad you're here!",
  tagline: "Come as you are. Make yourself at home. Leave feeling like you, with hair you love.",
  motto: "Blending meaningful connection, expert haircare, and dedication to deliver.",
  heroPhoto: "images/faith-hero.jpg",

  // ---- BOOKING ------------------------------------------------------
  // provider can be:  "glossgenius", "calendly", or "google"
  //  • glossgenius: shows a "Book online" button that opens your GlossGenius page
  //  • calendly:    paste your link, e.g. "https://calendly.com/juniper-hair"
  //  • google:      Google Calendar > Appointment schedule > Share > Website embed,
  //                 then paste the link that is inside src="..."
  booking: {
    provider: "glossgenius",
    glossgeniusUrl: "https://juniperfk.glossgenius.com/",
    calendlyUrl: "",
    googleUrl: "",
  },

  // ---- CONTACT ------------------------------------------------------
  contact: {
    phone: "(920) 505-0930",
    email: "",           // optional, e.g. "hello@juniper-hair.com"
    address1: "N2750 County Rd QQ, Suite 4",
    address2: "Waupaca, WI 54981",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=N2750+County+Rd+QQ+Suite+4+Waupaca+WI+54981",
    instagram: "",       // optional, full link
    facebook: "",        // optional, full link
  },

  hours: [
    ["Monday", "Closed"],
    ["Tuesday", "12 – 8 pm"],
    ["Wednesday", "12 – 8 pm"],
    ["Thursday", "8 am – 4 pm"],
    ["Friday", "8 am – 4 pm"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],

  policies: [
    ["No-shows", "Not showing up the day of your appointment results in a 30% service charge to the card on file."],
    ["Running late or need to reschedule?", "Just call or text (920) 505-0930 as soon as you can."],
  ],

  // ---- THE NAME -----------------------------------------------------
  story: [
    "A juniper is a resilient evergreen shrub. Its name combines junio (meaning \"young\" or \"fresh\") and parere (meaning \"to produce\"), literally translating to \"young and evergreen.\"",
    "That's what Juniper is all about: embracing youthfulness and your true self. It's a space where you can come just as you are, make yourself at home, and receive a personalized salon experience that leaves you feeling rejuvenated and confident.",
    "At Juniper, it's about so much more than hair. It's about genuine connection and embracing all the unique things that make you, you. I want you to leave feeling like your best self, with results you love, and an experience that makes you as excited to come back as I am!",
  ],
  studioPhotos: [
    { src: "images/studio-1.jpg", alt: "Cozy corner of the Juniper studio" },
    { src: "images/studio-3.jpg", alt: "Shampoo station at Juniper" },
    { src: "images/studio-2.jpg", alt: "Juno resting by the dresser" },
    { src: "images/studio-4.jpg", alt: "Faith with Juno in the styling chair" },
  ],

  // ---- ABOUT FAITH --------------------------------------------------
  about: {
    photo: "images/selfie.jpg",
    intro: "Hey there! Allow me to introduce myself.",
    paragraphs: [
      "My name is Faith. I'm a 24-year-old hair stylist who loves haircuts, low-maintenance queens, and hair health. I specialize in curly hair, low-maintenance color, and advanced cuts, but I do just about anything.",
      "When I'm not doing hair, you'll usually find me at home with my family and dogs, drawing, picnicking, going for walks, out with friends, or reading. I'm also an artist: I paint and draw personal portraits, greeting cards, and watercolors. Check out some of my work for sale at the studio!",
      "I can't wait to get to know you!",
    ],
    facts: [
      ["Hometown", "Waupaca, WI"],
      ["Sisters", "Older sis Grace & twin sister Hope"],
      ["Best girl", "Juno, my one-year-old cocker spaniel"],
      ["Grew up", "On a horse farm (say hi to Mac, our retired show horse!)"],
    ],
    loves: ["Animals of all kinds", "Coffee", "Sleeping", "Books", "The outdoors", "Blowouts", "Pilates", "Art"],
    lifePhotos: [
      { src: "images/hope.jpg", alt: "A cocker spaniel in the sunshine" },
      { src: "images/mac.jpg", alt: "Faith with Mac the horse" },
      { src: "images/art.jpg", alt: "Watercolor painting supplies" },
      { src: "images/family.jpg", alt: "Faith with her family" },
      { src: "images/drawing.jpg", alt: "A pencil portrait drawn by Faith" },
      { src: "images/roses.jpg", alt: "Picking roses in the garden" },
      { src: "images/friends.jpg", alt: "Picnic with friends" },
      { src: "images/thor.jpg", alt: "A family dog on the farm" },
    ],
  },

  // ---- SERVICES -----------------------------------------------------
  // Each line: name, description, price, time
  services: [
    {
      category: "Cuts",
      items: [
        ["Signature Cut", "Average amount of hair, full shampoo, cut & style", "$45", "60 min"],
        ["Signature Cut XL", "Extra long or thick hair, full wash, cut & style", "$50", "75 min"],
        ["Curly Cut", "A cut specialized for your wavy or curly hair, full wash & style", "$50", "75 min"],
        ["Mini / Barber Cut", "30 minutes or less, cut (shampoo not guaranteed)", "$30", "30 min"],
        ["Bang Trim", "Bang trim only", "$15", "15 min"],
      ],
    },
    {
      category: "Color",
      items: [
        ["Root Retouch", "Refreshing your outgrowth, shampoo & style", "$75", "90 min"],
        ["Maintenance Refresh", "Color refresh, shampoo, cut & style", "$125+", "2.5 hrs"],
        ["Full Head Solid Color", "Roots to tips, one solid color", "$100", "2 hrs"],
        ["Full Head Color & Cut", "Color roots to ends, cut, shampoo & style", "$150+", "2.5 hrs"],
        ["Toner", "Solo toner refresh, shampoo & style", "$40", "45 min"],
        ["Gloss & Cut", "Prioritizing the cut, adding a toning gloss at the bowl", "$75", "90 min"],
      ],
    },
    {
      category: "Foils",
      items: [
        ["Mini Foil", "Minimal foils pinpointing specific areas to refresh your color. Tone, shampoo & style", "$100+", "90 min"],
        ["Mini Foil & Cut", "Minimal foiling, cut, tone, shampoo & style", "$150+", "2 hrs"],
        ["Mid Foil", "A highlight refresh with custom placement to enhance your dimension. Tone, shampoo & style", "$150", "2 hrs"],
        ["Mid Foil & Cut", "Custom-placed foils to bring your dimensional color back to life. Tone, cut, shampoo & style", "$200+", "3 hrs"],
        ["Lux Foil", "Full-head highlight, completely customized for you. Tone, shampoo & style", "$200", "2.5 hrs"],
        ["Lux Foil & Cut", "Full-head foils customized per appointment. Cut, tone, shampoo & style", "$250+", "3.5 hrs"],
      ],
    },
    {
      category: "Styling & More",
      items: [
        ["Shampoo & Style", "Shampoo, condition & style", "$40", "45 min"],
        ["Bridal Updo", "Trial and day-of are the same price. Full-service updo on clean, dry hair", "$100", "90 min"],
        ["Mini Updo", "Casual event styling: pins, braids, dances & formals", "$75", "60 min"],
        ["Facial Waxing", "Eyebrow, lip, or chin, charged per area", "$20", "30 min"],
      ],
    },
  ],

  // ---- PORTFOLIO ----------------------------------------------------
  portfolio: [
    { src: "images/work-1.jpg", alt: "Bright blonde with soft waves" },
    { src: "images/work-2.jpg", alt: "Copper-rose brunette curls" },
    { src: "images/work-3.jpg", alt: "Layered copper cut" },
    { src: "images/work-4.jpg", alt: "Rich dark brunette waves" },
    { src: "images/work-5.jpg", alt: "Curly cut in progress" },
    { src: "images/work-6.jpg", alt: "Dimensional bronde balayage" },
  ],

  // ---- REVIEWS ------------------------------------------------------
  reviews: [
    "My very first haircut and color with Faith made an incredible difference with my hair. I loved it so much I was taking selfies in the parking lot and sending them to all my friends.",
    "The first time I met Faith I was worried about getting my haircut since my old hairdresser never listened to me. Faith listened and helped me learn how to style my hair for events and just everyday.",
    "Faith takes time and patience to actively listen to what her clients want out of their appointment. She makes the space feel safe and comfortable, and always creates beautiful work.",
    "Faith can make my uncontrollable hair beautiful.",
    "Faith treats people more like friends than appointments.",
    "Faith never takes shortcuts and always puts my wants first.",
  ],
};
