// Images are design renders. Specs list only design facts; carat, grading and metal purity are confirmed per piece on enquiry.
const img = (n) => [`/pieces/${n}_1.webp`, `/pieces/${n}_2.webp`];
const DIAMOND = { label: "Diamond", value: "Type IIa CVD lab-grown" };
const GRADING = { label: "Carat & grading", value: "Shared per stone on enquiry" };

export const PRODUCTS = [
  {
    slug: "dhara-solitaire",
    collection: "prithvi",
    name: "Dhara Solitaire",
    line: "Cathedral solitaire · knife-edge band",
    note: "A single round brilliant raised on an architectural four-prong cathedral, carried by a slim knife-edge band. Quiet, precise, built to hold a promise.",
    images: img("dhara"),
    specs: [DIAMOND, { label: "Shape", value: "Round brilliant" }, { label: "Setting", value: "Four-prong cathedral" }, { label: "Band", value: "Knife-edge" }, { label: "Metal", value: "Shown in white metal · options on enquiry" }, GRADING],
  },
  {
    slug: "vasudha-oval",
    collection: "prithvi",
    name: "Vasudha Oval",
    line: "Oval solitaire · hidden halo",
    note: "An oval held in four refined claws, with a hidden halo of fine pavé that reveals itself only from the side — a private detail for the wearer.",
    images: img("vasudha"),
    specs: [DIAMOND, { label: "Shape", value: "Oval" }, { label: "Setting", value: "Four-claw with hidden halo" }, { label: "Band", value: "Fine tapered" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "sthira-eternity",
    collection: "prithvi",
    name: "Sthira Eternity",
    line: "Step-cut eternity band",
    note: "Step-cut diamonds set end to end in a low, architectural profile. Designed to sit flush beside a solitaire or to be worn alone as the milestone itself.",
    images: img("sthira"),
    specs: [DIAMOND, { label: "Shape", value: "Step-cut" }, { label: "Setting", value: "Full eternity, low profile" }, { label: "Metal", value: "Shown in white metal · options on enquiry" }, GRADING],
  },
  {
    slug: "nitya-stack",
    collection: "nitya",
    name: "Nitya Stack",
    line: "Three stackable bands",
    note: "A polished band, a micro-pavé band and a baguette band — designed to be worn together, apart, or in whatever order the day asks for.",
    images: img("trio"),
    specs: [DIAMOND, { label: "Pieces", value: "Set of three bands" }, { label: "Details", value: "Polished · micro-pavé · baguette" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "bindu-pendant",
    collection: "nitya",
    name: "Bindu Pendant",
    line: "Floating bezel solitaire",
    note: "Bindu — the point. A single round brilliant in a slim bezel, floating on a whisper-fine chain. The piece you stop noticing you're wearing.",
    images: img("bindu"),
    specs: [DIAMOND, { label: "Shape", value: "Round brilliant" }, { label: "Setting", value: "Bezel" }, { label: "Chain", value: "Fine cable" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "kshana-huggies",
    collection: "nitya",
    name: "Kshana Huggies",
    line: "Pavé huggie hoops",
    note: "Kshana — a moment. Close-fitting hoops with a single line of micro-pavé, made for every moment from morning to late.",
    images: img("kshana"),
    specs: [DIAMOND, { label: "Style", value: "Huggie hoops, pair" }, { label: "Setting", value: "Micro-pavé, front-facing" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "rekha-ear-cuff",
    collection: "akarsha",
    name: "Rekha Ear Cuff",
    line: "Twin-line sculptural cuff",
    note: "Rekha — the line. Two parallel arcs trace the curve of the ear, one left bare, one lit with a fine row of diamonds. Drawing, in metal.",
    images: img("rekha"),
    specs: [DIAMOND, { label: "Style", value: "Ear cuff, no piercing" }, { label: "Setting", value: "Single diamond line" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "stambha-band",
    collection: "akarsha",
    name: "Stambha Band",
    line: "Faceted structural band",
    note: "Stambha — the pillar. A wide band cut into crisp architectural planes, with a single diamond set flush into one face like a keystone.",
    images: img("stambha"),
    specs: [DIAMOND, { label: "Shape", value: "Round brilliant" }, { label: "Setting", value: "Flush-set" }, { label: "Form", value: "Wide faceted band" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
  {
    slug: "tala-ring",
    collection: "akarsha",
    name: "Tala Ring",
    line: "Textured scattered-diamond ring",
    note: "A hand-worked, hammered surface catches light differently with every movement, scattered with flush-set diamonds like light on water.",
    images: img("tala"),
    specs: [DIAMOND, { label: "Shape", value: "Round brilliant, scattered" }, { label: "Setting", value: "Flush-set" }, { label: "Surface", value: "Hammered texture" }, { label: "Metal", value: "Shown in yellow gold · options on enquiry" }, GRADING],
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const productsIn = (collection) => PRODUCTS.filter((p) => p.collection === collection);
