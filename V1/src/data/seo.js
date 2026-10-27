import { SITE_NAME, SITE_URL, TAGLINE, TELEPHONE, WHATSAPP_NUMBER, COLLECTIONS } from "./site.js";

export const absUrl = (path = "/") => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const ORG_ID = `${SITE_URL}/#organization`;
const STORE_ID = `${SITE_URL}/#jewelrystore`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const INDIA = { "@type": "Country", name: "India", identifier: "IN" };

const INDIA_CITIES = [
  ["Mumbai", "Maharashtra"],
  ["Surat", "Gujarat"],
  ["Vadodara", "Gujarat"],
  ["Ahmedabad", "Gujarat"],
  ["Gandhinagar", "Gujarat"],
  ["GIFT City", "Gujarat"],
  ["Rajkot", "Gujarat"],
  ["Bengaluru", "Karnataka"],
  ["Delhi", "Delhi"],
  ["Chennai", "Tamil Nadu"],
  ["Pune", "Maharashtra"],
];

const GLOBAL_MARKETS = [
  { "@type": "Country", name: "United States", identifier: "US" },
  { "@type": "Country", name: "United Kingdom", identifier: "GB" },
  { "@type": "Place", name: "Europe" },
  { "@type": "Country", name: "Singapore", identifier: "SG" },
  { "@type": "Place", name: "Hong Kong", identifier: "HK" },
  { "@type": "Place", name: "Middle East" },
  { "@type": "Country", name: "United Arab Emirates", identifier: "AE" },
];

export const AREA_SERVED = [
  INDIA,
  ...INDIA_CITIES.map(([name, state]) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: state, containedInPlace: INDIA },
  })),
  ...GLOBAL_MARKETS,
];

const SERVICES = [
  ["Bespoke jewellery design and manufacturing", "Made-to-order fine jewellery, with customisation discussed in private consultation and subject to feasibility."],
  ["Custom diamond engagement rings", "Solitaire, halo and eternity engagement and bridal rings made to your brief."],
  ["Certified CVD lab-grown diamonds", "Type IIa CVD lab-grown diamonds with grading reports shared where available."],
  ["Certified natural diamonds", "Natural diamonds on request, with grading reports shared where available."],
  ["Gold jewellery", "Fine jewellery in gold."],
  ["Silver jewellery", "Fine jewellery in silver."],
];

export const KEYWORDS = [
  "House of Dhri",
  "fine jewellery India",
  "bespoke jewellery manufacturer",
  "custom diamond rings",
  "custom engagement rings",
  "lab-grown diamond jewellery",
  "CVD diamonds",
  "Type IIa diamonds",
  "certified lab-grown diamonds",
  "certified natural diamonds",
  "gold jewellery",
  "silver jewellery",
  "diamond jewellery Mumbai",
  "diamond jewellery Surat",
  "jewellery Vadodara",
  "jewellery Ahmedabad",
  "jewellery Gandhinagar",
  "GIFT City jewellery",
  "jewellery Rajkot",
  "diamond jewellery Bangalore",
  "diamond jewellery Delhi",
  "diamond jewellery Chennai",
  "diamond jewellery Pune",
  "lab-grown diamond jewellery USA",
  "lab-grown diamond jewellery UK",
  "lab-grown diamond jewellery Europe",
  "lab-grown diamond jewellery Singapore",
  "lab-grown diamond jewellery Hong Kong",
  "lab-grown diamond jewellery Dubai",
  "lab-grown diamond jewellery Middle East",
].join(", ");

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/logo-full.webp`,
    width: 1672,
    height: 1102,
  },
  image: `${SITE_URL}/og-image.jpg`,
  slogan: TAGLINE,
  description:
    "Contemporary fine jewellery house from India featuring Type IIa CVD lab-grown diamonds, bespoke design and custom diamond rings, with Prithvi bridal, Nitya everyday and Akarsha architectural collections.",
  telephone: TELEPHONE,
  areaServed: AREA_SERVED,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: TELEPHONE,
    contactType: "customer service",
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    areaServed: ["IN", "US", "GB", "Europe", "SG", "HK", "AE", "Middle East"],
    availableLanguage: ["English"],
  },
};

const jewelryStore = {
  "@type": "JewelryStore",
  "@id": STORE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/brand/logo-full.webp`,
  slogan: TAGLINE,
  description:
    "Contemporary fine jewellery house featuring Type IIa CVD lab-grown diamonds, with Prithvi bridal, Nitya everyday and Akarsha architectural collections. Bespoke jewellery, custom diamond rings, certified lab-grown and natural diamonds, gold and silver jewellery. Enquiry-led via WhatsApp.",
  telephone: TELEPHONE,
  priceRange: "Price on enquiry",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  parentOrganization: { "@id": ORG_ID },
  areaServed: AREA_SERVED,
  knowsAbout: [
    "Bespoke jewellery manufacturing",
    "Custom diamond rings",
    "Engagement rings",
    "Lab-grown diamonds",
    "CVD diamonds",
    "Type IIa diamonds",
    "Natural diamonds",
    "Diamond grading",
    "Gold jewellery",
    "Silver jewellery",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "House of Dhri — jewellery and services",
    itemListElement: [
      ...SERVICES.map(([name, description]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, description, provider: { "@id": STORE_ID } },
      })),
      ...COLLECTIONS.map((c) => ({
        "@type": "OfferCatalog",
        name: `${c.name} — ${c.line}`,
        url: `${SITE_URL}/collections/${c.slug}`,
      })),
    ],
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

export const breadcrumbList = (crumbs) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(path),
  })),
});

export const productSchema = (p, c) => ({
  "@type": "Product",
  "@id": `${absUrl(`/pieces/${p.slug}`)}#product`,
  name: p.name,
  description: `${p.line}. ${p.note}`,
  image: p.images.map((src) => `${SITE_URL}${src}`),
  url: absUrl(`/pieces/${p.slug}`),
  sku: p.slug,
  category: `Fine jewellery — ${c.name} collection`,
  brand: { "@type": "Brand", name: SITE_NAME },
  manufacturer: { "@id": ORG_ID },
  material: p.specs.find((s) => s.label === "Metal")?.value,
  additionalProperty: p.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
});

export const faqSchema = (faq) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const pageGraph = ({ path, title, description, extra = [] }) => ({
  "@context": "https://schema.org",
  "@graph": [
    organization,
    jewelryStore,
    website,
    {
      "@type": "WebPage",
      "@id": `${absUrl(path)}#webpage`,
      url: absUrl(path),
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": STORE_ID },
      inLanguage: "en-IN",
    },
    ...extra,
  ],
});
