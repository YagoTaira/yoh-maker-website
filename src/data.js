// Shared data — services, portfolio, materials, FAQs, testimonials
window.YohData = {
  services: [
    {
      icon: "cube",
      tint: "coral",
      title: "FDM Printing",
      blurb: "Strong, affordable parts in PLA, PETG, ABS and more. Great for prototypes, brackets, props and everyday objects.",
      starting: "$8 / part",
    },
    {
      icon: "drop",
      tint: "purple",
      title: "Resin (SLA) Printing",
      blurb: "Crisp, gallery-ready detail for miniatures, jewelry masters, dental models and tabletop pieces.",
      starting: "$15 / part",
    },
    {
      icon: "palette",
      tint: "blue",
      title: "Multi-color Prints",
      blurb: "Smooth color blends and clean logos with our 4-color toolhead. Perfect for branded gifts and display pieces.",
      starting: "$22 / part",
    },
    {
      icon: "compass",
      tint: "sage",
      title: "Custom CAD Design",
      blurb: "No model? No problem. Send a sketch, photo, or rough idea — we'll model it, print it, ship it.",
      starting: "$45 / hr",
    },
    {
      icon: "stack",
      tint: "yellow",
      title: "Batch & Small Runs",
      blurb: "Need 10, 100, or 500? Volume pricing and tight tolerances for product launches and event swag.",
      starting: "Quote on file",
    },
    {
      icon: "wrench",
      tint: "coral",
      title: "Finishing & Assembly",
      blurb: "Sanding, painting, gluing, threading inserts. Your part shows up ready to use, not ready to fix.",
      starting: "$10 / part",
    },
  ],

  portfolioCategories: ["All", "Prototypes", "Cosplay & Props", "Home & Decor", "Tabletop", "Replacement Parts", "Custom Gifts"],

  portfolio: [
    { id: 1, title: "Custom drone arm", category: "Prototypes", tint: "coral", material: "PETG", time: "9h" },
    { id: 2, title: "Cosplay pauldron set", category: "Cosplay & Props", tint: "purple", material: "PLA + PETG", time: "32h" },
    { id: 3, title: "Honeycomb planter", category: "Home & Decor", tint: "sage", material: "PLA", time: "7h" },
    { id: 4, title: "DnD encounter set (24 pcs)", category: "Tabletop", tint: "blue", material: "Resin", time: "18h" },
    { id: 5, title: "Vintage radio knob", category: "Replacement Parts", tint: "yellow", material: "ABS", time: "2h" },
    { id: 6, title: "Wedding cake topper", category: "Custom Gifts", tint: "coral", material: "Resin", time: "5h" },
    { id: 7, title: "Articulated dragon", category: "Tabletop", tint: "purple", material: "PLA", time: "11h" },
    { id: 8, title: "Camera mount bracket", category: "Prototypes", tint: "blue", material: "Carbon-fiber Nylon", time: "4h" },
    { id: 9, title: "Lithophane night light", category: "Custom Gifts", tint: "yellow", material: "PLA", time: "6h" },
    { id: 10, title: "Helmet visor", category: "Cosplay & Props", tint: "blue", material: "PETG-clear", time: "12h" },
    { id: 11, title: "Geometric vase", category: "Home & Decor", tint: "sage", material: "PLA-Silk", time: "8h" },
    { id: 12, title: "Custom phone stand", category: "Custom Gifts", tint: "coral", material: "PLA-Wood", time: "3h" },
  ],

  materials: [
    { name: "PLA",  blurb: "Easy, affordable, eco-friendly. Best for display pieces and indoor use.", strength: 2, detail: 4, heat: 1, tint: "coral", popular: true },
    { name: "PETG", blurb: "Tough and water-resistant. Great for functional parts and outdoor use.", strength: 4, detail: 3, heat: 3, tint: "blue", popular: true },
    { name: "ABS",  blurb: "Heat- and impact-resistant. Smooth-able with acetone for a glossy finish.", strength: 4, detail: 3, heat: 4, tint: "purple", popular: false },
    { name: "TPU (Flexible)", blurb: "Bendy, rubbery, durable. For grips, gaskets, phone cases.", strength: 3, detail: 2, heat: 3, tint: "yellow", popular: false },
    { name: "Nylon (CF)",   blurb: "Carbon-fiber filled — light, stiff, engineering-grade.", strength: 5, detail: 3, heat: 5, tint: "sage", popular: false },
    { name: "Resin (Standard)", blurb: "Highest detail. For minis, jewelry masters, art.", strength: 2, detail: 5, heat: 2, tint: "purple", popular: true },
    { name: "Resin (Tough)", blurb: "Resin with the durability of ABS. Functional and pretty.", strength: 4, detail: 5, heat: 3, tint: "coral", popular: false },
    { name: "PLA-Silk",  blurb: "Glossy, jewel-toned PLA — beautiful for decor and gifts.", strength: 2, detail: 4, heat: 1, tint: "blue", popular: false },
  ],

  finishes: ["Raw print", "Sanded smooth", "Primed", "Painted (single color)", "Painted (custom)", "Acetone-smoothed (ABS)", "UV-cured & polished (resin)"],

  testimonials: [
    {
      quote: "I sent a napkin sketch of a custom enclosure on a Tuesday. By Friday I had a working prototype on my desk. Yoh just gets it.",
      name: "Marisol C.",
      role: "Hardware Engineer · Austin, TX",
      tint: "coral",
    },
    {
      quote: "Replaced a discontinued knob on my grandfather's radio. It looked like the original — better, even. Worth every penny.",
      name: "David L.",
      role: "Repair hobbyist · Portland, OR",
      tint: "purple",
    },
    {
      quote: "Used Yoh Maker for our wedding cake topper. Friendly, fast, and the resin print was unreal in detail.",
      name: "Aisha & Ben",
      role: "Couple · Brooklyn, NY",
      tint: "blue",
    },
    {
      quote: "I run a small board game studio. They handled a 200-piece batch with zero defects and clear updates the whole way.",
      name: "Reza K.",
      role: "Founder, Wildkit Games",
      tint: "sage",
    },
  ],

  faqs: [
    { q: "Do I need a 3D file to order?", a: "Nope! If you have an STL or STEP file, awesome — upload it on the quote page. If you don't, our CAD design service will model it for you from a sketch, photo, or even a verbal description. Most simple parts run $45–$120 in design fees." },
    { q: "How long does printing take?", a: "Small jobs (under 4 hours of print time) usually ship in 2–3 business days. Larger jobs and multi-color prints typically take 5–7 business days. We always confirm a timeline before charging you." },
    { q: "Where do you ship?", a: "Anywhere in the continental US. Standard shipping is 3–5 business days; we offer 2-day and overnight on request. International shipping is available — just ask." },
    { q: "What's the largest part you can print?", a: "Up to 350 × 350 × 400 mm in a single piece on FDM. Bigger parts can be printed in sections and seamlessly joined." },
    { q: "Can you match a specific color?", a: "Yes — for painted finishes we color-match to a Pantone, RGB code, or sample. For raw prints, we stock 30+ filament colors and can order specialty colors with a small lead time." },
    { q: "Do you keep my files?", a: "We hold them for 30 days so re-orders are easy, then permanently delete unless you ask us to keep them. We'll never reuse, share, or sell your files. Period." },
    { q: "Do you sign NDAs?", a: "Absolutely. Send your NDA along with your quote request — we'll countersign and return same-day for paid jobs." },
    { q: "What payment do you accept?", a: "Card, ACH, Apple Pay, Google Pay, and PayPal. For business accounts, we offer net-30 invoicing on jobs over $300." },
  ],

  stats: [
    { n: "9k+",   label: "Happy customers" },
    { n: "47k+",  label: "Parts shipped" },
    { n: "4.9★",  label: "Avg. rating" },
    { n: "48 hr", label: "Avg. quote turnaround" },
  ],
};
