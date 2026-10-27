export const SITE_NAME = "House of Dhri";
export const SITE_URL = "https://houseofdhri.com";
export const TAGLINE = "Distinctive by design. Brilliant by nature.";
export const DEFAULT_DESC =
  "House of Dhri — contemporary fine jewellery with Type IIa CVD lab-grown diamonds. Sculptural design, transparent specifications, private WhatsApp consultations.";

export const WHATSAPP_NUMBER = "917021001862";
export const WHATSAPP_DISPLAY = "+91 70210 01862";
export const TELEPHONE = "+91 7021001862";

export const waLink = (message = "Hello House of Dhri, I would like to know more about your jewellery.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { to: "/collections", label: "Collections" },
  { to: "/our-story", label: "Our Story" },
  { to: "/diamonds-and-materials", label: "Diamonds & Materials" },
  { to: "/contact", label: "Private Enquiries" },
];

export const COLLECTIONS = [
  {
    slug: "prithvi",
    numeral: "I",
    name: "Prithvi",
    line: "Modern bridal & meaningful milestones",
    intro:
      "Solitaires and bridal designs drawn with restraint — where proportion, setting and stone carry the weight of a promise.",
    directions: ["Solitaire engagement rings", "Bridal designs", "Milestone pieces"],
    image: "/images/prithvi.jpg",
  },
  {
    slug: "nitya",
    numeral: "II",
    name: "Nitya",
    line: "Everyday fine jewellery",
    intro:
      "Pieces made for the rhythm of ordinary days — light enough to forget, considered enough to notice.",
    directions: ["Stackable rings", "Minimal necklaces", "Pavé huggies", "Versatile everyday pieces"],
    image: "/images/nitya.jpg",
  },
  {
    slug: "akarsha",
    numeral: "III",
    name: "Akarsha",
    line: "Expressive, architectural jewellery",
    intro:
      "Structure as ornament. Ear cuffs, bands and textured forms that treat the body as a site for architecture.",
    directions: ["Statement ear cuffs", "Structural bands", "Textured designs"],
    image: "/images/akarsha.jpg",
  },
];

export const getCollection = (slug) => COLLECTIONS.find((c) => c.slug === slug);
