// Design ideas shown on the collection and ring pages. Every piece is made to order; photos are inspiration until
// the house's own photography replaces them (see IMAGE-PROMPTS.md).

export const STYLES = [
  {
    slug: "modern",
    name: "Modern",
    image: "gold-stack",
    line: "Clean lines and light pieces you can wear every day.",
    intro:
      "Slim bands, simple settings and small diamonds that sit close to the skin. These are the pieces you put on in the morning and forget you are wearing until someone asks about them.",
  },
  {
    slug: "art",
    name: "Art",
    image: "oval-pendant",
    line: "Sculptural shapes and coloured stones, made to be noticed.",
    intro:
      "Bold forms, unusual stones and shapes that start as a single line in Vidhi's sketchbook. Art pieces are one of a kind, so no two people wear the same thing.",
  },
  {
    slug: "classical",
    name: "Classical",
    image: "halo-pendant",
    line: "Diamonds, halos and pearls that never look dated.",
    intro:
      "Solitaires, halos, pearls and diamond studs. Classical designs follow proportions jewellers have trusted for a long time, made with today's cutting and setting.",
  },
  {
    slug: "traditional",
    name: "Traditional",
    image: "set-on-bust",
    line: "Indian bridal and festive jewellery in gold.",
    intro:
      "Kundan sets, temple necklaces, kada, payal and nath, in 22 karat gold and silver. Made for weddings, festivals and the pieces families pass down.",
  },
];

export const DESIGNS = [
  // Modern
  { slug: "thin-stacking-rings", name: "Thin stacking rings", style: "modern", type: "rings", image: "stacking-rings", detail: "Mixed gold and silver, made to wear together" },
  { slug: "gold-ring-stack", name: "Gold ring stack", style: "modern", type: "rings", image: "gold-stack", detail: "Plain and textured bands in yellow gold" },
  { slug: "two-stone-ring", name: "Two stone ring", style: "modern", type: "rings", image: "ring-on-hand", detail: "Two diamonds side by side, one for each of you" },
  { slug: "slim-gold-bangle", name: "Slim gold bangle", style: "modern", type: "bangles", image: "bangle-wrist", detail: "Light, textured and easy to stack" },
  { slug: "fine-chain-anklet", name: "Fine chain anklet", style: "modern", type: "payal", image: "anklet-chain", detail: "A single gold chain for everyday wear" },
  { slug: "small-nose-ring", name: "Small nose ring", style: "modern", type: "nose-rings", image: "nose-ring", detail: "A fine gold hoop or stud" },
  { slug: "silver-everyday-rings", name: "Silver everyday rings", style: "modern", type: "rings", image: "silver-rings-hand", detail: "925 silver with a small stone" },
  { slug: "gold-bezel-studs", name: "Gold bezel studs", style: "modern", type: "earrings", image: "gold-studs", detail: "A diamond held in a smooth gold rim" },

  // Art
  { slug: "oval-loop-pendant", name: "Oval loop pendant", style: "art", type: "pendants", image: "oval-pendant", detail: "Polished gold on a snake chain" },
  { slug: "green-stone-pendant", name: "Green stone pendant", style: "art", type: "pendants", image: "emerald-pendant", detail: "A large coloured stone in a gold frame" },
  { slug: "stone-drop-necklace", name: "Stone drop necklace", style: "art", type: "necklaces", image: "necklace-bust", detail: "Coloured stones hanging from a fine gold chain" },
  { slug: "silver-drop-necklace", name: "Silver drop necklace", style: "art", type: "necklaces", image: "silver-necklace", detail: "925 silver with small green drops" },
  { slug: "long-drop-earring", name: "Long drop earring", style: "art", type: "earrings", image: "earring-portrait", detail: "A single line of diamonds that moves as you do" },
  { slug: "pearl-in-orbit", name: "Pearl in orbit pendant", style: "art", type: "pendants", image: "pearl-pendant", detail: "A pearl circled by a band of diamonds" },

  // Classical
  { slug: "halo-pendant", name: "Halo pendant", style: "classical", type: "pendants", image: "halo-pendant", detail: "A centre diamond ringed by smaller stones" },
  { slug: "diamond-halo-studs", name: "Diamond halo studs", style: "classical", type: "earrings", image: "halo-studs", detail: "Round diamonds framed in a halo" },
  { slug: "floral-halo-ring", name: "Floral halo ring", style: "classical", type: "rings", image: "halo-ring", detail: "A round diamond inside a flower of smaller stones" },
  { slug: "bridal-ring-set", name: "Bridal ring set", style: "classical", type: "rings", image: "bridal-set", detail: "Engagement ring and matching band" },
  { slug: "chandelier-earrings", name: "Chandelier earrings", style: "classical", type: "earrings", image: "occasion-drops", detail: "Diamond drops for a wedding or evening" },
  { slug: "round-solitaire", name: "Round solitaire", style: "classical", type: "rings", image: "solitaire-satin", detail: "One round diamond on a slim band" },

  // Traditional
  { slug: "kundan-bridal-set", name: "Kundan bridal set", style: "traditional", type: "necklaces", image: "kundan-bride", detail: "Necklace, earrings and maang tikka" },
  { slug: "gold-necklace-set", name: "Gold necklace set", style: "traditional", type: "necklaces", image: "set-on-bust", detail: "22 karat gold with matching earrings" },
  { slug: "temple-necklace", name: "Temple necklace", style: "traditional", type: "necklaces", image: "temple-necklace", detail: "Granulated gold with a round pendant" },
  { slug: "ruby-gold-bangles", name: "Gold bangles with rubies", style: "traditional", type: "bangles", image: "gold-bangles-ruby", detail: "Fine granulation and small rubies" },
  { slug: "gold-kada", name: "Gold kada", style: "traditional", type: "kada", image: "kada-stack", detail: "Solid patterned kada in 22 karat gold" },
  { slug: "silver-payal", name: "Silver payal", style: "traditional", type: "payal", image: "payal", detail: "925 silver with small bells" },
  { slug: "bridal-nath", name: "Bridal nath", style: "traditional", type: "nose-rings", image: "bride-nath", detail: "Gold nose ring with pearls and a chain" },
  { slug: "gemstone-ring", name: "Religious stone ring", style: "traditional", type: "stone-rings", image: "emerald-loupe", detail: "Your astrological stone, set in gold or silver" },
];

export const RINGS = {
  engagement: [
    { slug: "emerald-cut-solitaire", name: "Emerald cut solitaire", image: "hero-solitaire", detail: "A long, step cut diamond on a pavé band" },
    { slug: "two-stone-ring", name: "Two stone ring", image: "ring-on-hand", detail: "Two diamonds side by side, one for each of you" },
    { slug: "floral-halo-ring", name: "Halo ring", image: "halo-ring", detail: "Smaller diamonds make the centre stone look larger" },
    { slug: "pear-halo-ring", name: "Pear halo ring", image: "pear-halo", detail: "A softer shape that lengthens the finger" },
  ],
  couple: [
    { slug: "matching-gold-bands", name: "Matching gold bands", image: "gold-bands", detail: "One plain, one with diamonds" },
    { slug: "two-tone-bands", name: "Two tone bands", image: "two-tone-bands", detail: "Rose and white gold that belong together" },
  ],
  anniversary: [
    { slug: "half-eternity-band", name: "Half eternity band", image: "anniversary-hand", detail: "Diamonds across the top, made to sit beside your ring" },
    { slug: "bridal-ring-set", name: "Bridal ring set", image: "bridal-set", detail: "A band shaped to fit your engagement ring" },
  ],
  earrings: [
    { slug: "chandelier-earrings", name: "Chandelier earrings", image: "occasion-drops", detail: "For the wedding day or the sangeet" },
    { slug: "diamond-halo-studs", name: "Diamond halo studs", image: "halo-studs", detail: "A gift that gets worn every day" },
    { slug: "gold-bezel-studs", name: "Gold bezel studs", image: "gold-studs", detail: "Simple, light, easy to wear" },
  ],
};

export const designsIn = (style) => DESIGNS.filter((d) => d.style === style);
