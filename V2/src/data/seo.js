import { SITE, INDIA_CITIES } from "./site.js";

export const abs = (path = "/") => `${SITE.url}${path}`;

const ORG = `${SITE.url}/#organization`;
const STORE = `${SITE.url}/#store`;
const WEBSITE = `${SITE.url}/#website`;
const INDIA = { "@type": "Country", name: "India" };

const STATES = {
  Mumbai: "Maharashtra",
  Pune: "Maharashtra",
  Surat: "Gujarat",
  Vadodara: "Gujarat",
  Ahmedabad: "Gujarat",
  Gandhinagar: "Gujarat",
  "GIFT City": "Gujarat",
  Rajkot: "Gujarat",
  Bangalore: "Karnataka",
  Delhi: "Delhi",
  Chennai: "Tamil Nadu",
};

export const AREA_SERVED = [
  INDIA,
  ...INDIA_CITIES.map((name) => ({
    "@type": "City",
    name: name === "Bangalore" ? "Bengaluru" : name,
    ...(name === "Bangalore" ? { alternateName: "Bangalore" } : {}),
    containedInPlace: { "@type": "State", name: STATES[name], containedInPlace: INDIA },
  })),
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Place", name: "Europe" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "Place", name: "Hong Kong" },
  { "@type": "Place", name: "Middle East" },
  { "@type": "Country", name: "United Arab Emirates" },
];

export const KEYWORDS = [
  "custom jewellery",
  "custom jewelry",
  "bespoke jewellery designer",
  "custom engagement rings",
  "couple rings",
  "anniversary bands",
  "occasion earrings",
  "natural diamonds",
  "lab grown diamonds",
  "CVD diamonds",
  "certified diamond jewellery",
  "hallmarked gold jewellery",
  "925 silver jewellery",
  "jewellery manufacturer",
  "kada",
  "payal",
  "nose ring",
  "religious stone rings",
  ...INDIA_CITIES.map((c) => `custom jewellery ${c}`),
  "custom engagement rings USA",
  "custom engagement rings UK",
  "Indian jewellery designer Singapore",
  "Indian jewellery designer Dubai",
  "Indian jewellery Hong Kong",
].join(", ");

const founder = {
  "@type": "Person",
  name: SITE.designer,
  jobTitle: "Jewellery designer",
  worksFor: { "@id": ORG },
};

const organization = {
  "@type": "Organization",
  "@id": ORG,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: `${SITE.url}/og/logo.png`,
  founder,
  telephone: SITE.telephone,
  areaServed: AREA_SERVED,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.telephone,
    contactType: "customer service",
    url: `https://wa.me/${SITE.whatsapp}`,
    availableLanguage: ["English"],
  },
};

const store = {
  "@type": "JewelryStore",
  "@id": STORE,
  name: SITE.name,
  url: `${SITE.url}/`,
  image: `${SITE.url}/og/logo.png`,
  logo: `${SITE.url}/og/logo.png`,
  description:
    "Custom jewellery design and manufacturing house led by designer Vidhi Parikh. Custom engagement rings, couple rings, anniversary bands and occasion earrings, plus modern, art, classical and traditional jewellery in certified gold, 925 silver, natural diamonds and lab grown (CVD) diamonds, made in house.",
  telephone: SITE.telephone,
  priceRange: "On request",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  founder,
  parentOrganization: { "@id": ORG },
  areaServed: AREA_SERVED,
  knowsAbout: [
    "Custom jewellery design",
    "Jewellery manufacturing",
    "Engagement rings",
    "Couple rings",
    "Natural diamonds",
    "Lab grown diamonds",
    "CVD diamonds",
    "Diamond grading",
    "BIS hallmarked gold",
    "925 sterling silver",
    "Kundan jewellery",
    "Temple jewellery",
  ],
  makesOffer: [
    ["Custom jewellery design", "Pieces designed by hand to your idea, budget and occasion."],
    ["Diamond sourcing", "Natural and lab grown diamonds bought directly, each with a grading certificate."],
    ["In house jewellery manufacturing", "Casting, setting and polishing in our own workshop under the founders' supervision."],
    ["Custom engagement and couple rings", "Engagement rings, couple rings and anniversary bands made to order."],
  ].map(([name, description]) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, description, provider: { "@id": STORE } },
  })),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE,
  name: SITE.name,
  url: `${SITE.url}/`,
  inLanguage: "en-IN",
  publisher: { "@id": ORG },
};

export const breadcrumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export const faqPage = (faq) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

// Made to order designs: described as products of the house, without a fixed price.
export const productList = (name, items, imageUrl) => ({
  "@type": "ItemList",
  name,
  itemListElement: items.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: d.name,
      description: `${d.detail}. Made to order by ${SITE.name}.`,
      image: imageUrl(d.image),
      brand: { "@type": "Brand", name: SITE.name },
      manufacturer: { "@id": ORG },
      category: "Jewellery",
    },
  })),
});

export const graph = ({ path, title, description, extra = [] }) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    store,
    website,
    {
      "@type": "WebPage",
      "@id": `${abs(path)}#webpage`,
      url: abs(path),
      name: title,
      description,
      isPartOf: { "@id": WEBSITE },
      about: { "@id": STORE },
      inLanguage: "en-IN",
    },
    ...extra,
  ],
});
