export const SITE = {
  name: "House of Dhri",
  url: "https://houseofdhri.com",
  designer: "Vidhi Parikh",
  whatsapp: "917021001862",
  whatsappDisplay: "+91 70210 01862",
  telephone: "+91 7021001862",
};

export const wa = (text = "Hello House of Dhri, I would like to talk about a piece of jewellery.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/bespoke/", label: "Bespoke" },
  { href: "/engagement-and-couple-rings/", label: "Engagement & couple rings" },
  { href: "/collections/", label: "Collections" },
  { href: "/diamonds-and-certification/", label: "Diamonds & certification" },
  { href: "/our-story/", label: "Our story" },
];

export const INDIA_CITIES = [
  "Mumbai",
  "Surat",
  "Vadodara",
  "Ahmedabad",
  "Gandhinagar",
  "GIFT City",
  "Rajkot",
  "Bangalore",
  "Delhi",
  "Chennai",
  "Pune",
];

export const WORLD = ["USA", "UK", "Europe", "Singapore", "Hong Kong", "Middle East"];

export const JEWELLERY_TYPES = [
  { key: "rings", label: "Rings" },
  { key: "stone-rings", label: "Religious stone rings" },
  { key: "bangles", label: "Bangles" },
  { key: "kada", label: "Kada" },
  { key: "payal", label: "Payal" },
  { key: "necklaces", label: "Necklaces" },
  { key: "pendants", label: "Pendants" },
  { key: "earrings", label: "Earrings" },
  { key: "nose-rings", label: "Nose rings" },
];
