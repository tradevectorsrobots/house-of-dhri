// Every photo on the site, with its alt text, where the current stock photo came from (Unsplash, free licence),
// and the brief for the brand photograph that should replace it. IMAGE-PROMPTS.md is generated from this list.
const UNSPLASH = (id) => `https://unsplash.com/photos/${id}`;
const CDN = (id) => `https://images.unsplash.com/photo-${id}`;

export const IMAGES = {
  "hero-solitaire": {
    alt: "Yellow gold ring with an emerald cut diamond and a pavé band",
    source: CDN("1598560917807-1bae44bd2be8"),
    prompt:
      "Studio product photo of a House of Dhri emerald cut solitaire engagement ring in 18k yellow gold with a thin pavé band, three quarter angle, ring standing upright, plain light grey seamless background, soft diffused key light from the left, crisp shadow under the band, sharp focus on the stone, square 1:1, 4000px.",
  },
  "hero-solitaire-sketch": {
    alt: "Gold line drawing of the same ring on dark green paper",
    source: "Generated from hero-solitaire.jpg (edge drawing). Replace with Vidhi's own gouache drawing of the ring.",
    prompt:
      "Scan of Vidhi Parikh's hand drawn design of the hero ring, gouache and fine white and gold pencil on deep emerald (#0E3B32) jewellery rendering paper, drawn at the same angle and scale as the hero product photo so the two line up, square 1:1, 4000px.",
  },
  "solitaire-satin": {
    alt: "Round diamond solitaire resting in folds of blue satin",
    source: CDN("1724937798320-d0c4fac1787d"),
    prompt:
      "Round brilliant solitaire in white gold resting between folds of deep blue satin, low angle, narrow depth of field, cool soft light, wide 3:2 frame with space on the right, editorial jewellery campaign style.",
  },
  "ring-on-hand": {
    alt: "Hand with a two stone diamond ring against a black top",
    source: CDN("1716366193038-495a3702fe22"),
    prompt:
      "Close crop of a woman's hand with natural nails resting on her shoulder, wearing a House of Dhri two stone diamond ring, black top, warm skin tones, soft window light, portrait 2:3.",
  },
  "halo-ring": {
    alt: "White gold ring with a round diamond inside a floral halo",
    source: CDN("1591209627710-d2427565a41f"),
    prompt:
      "Floral halo engagement ring in white gold on a pure white background, front three quarter view, even soft light, high detail on the halo stones, 3:2.",
  },
  "pear-halo": {
    alt: "Pear shaped diamond ring with a halo on black fabric",
    source: CDN("1605100804567-1ffe942b5cd6"),
    prompt:
      "Pear shaped diamond ring with a halo and a scalloped pavé band lying on black velvet, single hard spotlight for sparkle, square 1:1.",
  },
  "bridal-set": {
    alt: "Cushion halo engagement ring stacked with a matching diamond band",
    source: CDN("1589674668791-4889d2bba4c6"),
    prompt:
      "Bridal set of a cushion halo engagement ring and matching diamond wedding band, stacked, on a soft white surface with a dry twig out of focus behind, 3:2.",
  },
  "gold-bands": {
    alt: "Two gold wedding bands, one plain and one set with diamonds",
    source: CDN("1654699643507-3047b3e07045"),
    prompt:
      "Pair of House of Dhri couple rings in yellow gold, one plain polished band and one with a line of diamonds, lying together on white silk, soft daylight, 3:2.",
  },
  "couple-hands": {
    alt: "A couple holding hands, both wearing wedding rings",
    source: CDN("1769038931402-5c6b387cb8d6"),
    prompt:
      "Indian couple's hands gently holding each other, both wearing matching House of Dhri gold bands, wedding outfit fabrics at the edges, warm natural light, portrait 2:3.",
  },
  "anniversary-hand": {
    alt: "Hand touching the face, wearing a diamond ring and a band",
    source: CDN("1762505464779-17f78cbfa8b4"),
    prompt:
      "Woman's hand resting against her cheek, wearing an engagement ring with a half eternity anniversary band beside it, dark knit sleeve, soft side light, portrait 3:4.",
  },
  "two-tone-bands": {
    alt: "Rose gold and white gold bands lying together",
    source: CDN("1627293509201-cd0c780043e6"),
    prompt:
      "Two tone couple bands, one rose gold and one white gold, lying on white fabric with a ribbon, bright airy light, square 1:1.",
  },
  "halo-studs": {
    alt: "Pair of round diamond halo stud earrings",
    source: CDN("1588444650700-fd887f15a9e7"),
    prompt:
      "Pair of round diamond halo stud earrings in white gold standing upright on a pale grey surface, lilac flower blurred behind, macro, 3:2.",
  },
  "occasion-drops": {
    alt: "Diamond chandelier drop earrings hanging from a dark stand",
    source: CDN("1782224743942-fbe4cdf2ce6b"),
    prompt:
      "Diamond chandelier drop earrings for a wedding, hanging from a matte black stand draped with black satin, grey backdrop, crisp studio light, portrait 2:3.",
  },
  "earring-portrait": {
    alt: "Black and white portrait of a woman wearing a long drop earring",
    source: CDN("1758142634620-88bc83e5a4d0"),
    prompt:
      "Black and white profile portrait of a woman with her head tilted back, wearing a long House of Dhri diamond drop earring, deep shadows, portrait 2:3.",
  },
  "gold-studs": {
    alt: "Gold bezel set diamond studs on a stone block",
    source: CDN("1787520309842-6a8e4b7cdd7f"),
    prompt:
      "Yellow gold bezel set diamond studs on a rough sandstone block, blush pink background with dry branches out of focus, warm light, square 1:1.",
  },
  "gold-bangles-ruby": {
    alt: "Two gold bangles with fine granulation and small rubies",
    source: CDN("1728381031272-ba3f537feadd"),
    prompt:
      "Pair of 22k gold bangles with fine granulation work and small ruby accents, one standing and one lying, deep maroon velvet, warm low light, square 1:1.",
  },
  "bangle-wrist": {
    alt: "Slim gold bangle on a wrist against a white sleeve",
    source: CDN("1740567389909-b36e9cadbef9"),
    prompt:
      "Slim textured gold bangle worn on a wrist, white linen sleeve, bright clean daylight, square 1:1.",
  },
  "kada-stack": {
    alt: "A row of gold bangles and kada lying on their sides",
    source: CDN("1758995116383-f51775896add"),
    prompt:
      "Row of patterned 22k gold kada and bangles lying on their sides on a reflective black surface, warm spotlight, wide 3:2.",
  },
  payal: {
    alt: "Feet wearing silver payal under an embroidered outfit",
    source: CDN("1548790176-f46bb4d5ef7f"),
    prompt:
      "Bride's feet in silver payal with small bells, embroidered red and gold lehenga hem, mosaic floor, natural light, portrait 3:4.",
  },
  "anklet-chain": {
    alt: "Fine gold chain anklet on an ankle",
    source: CDN("1744722091259-ed1cf11ac97f"),
    prompt: "Fine gold chain anklet on a bare ankle against a cream trouser hem, soft daylight, portrait 4:5.",
  },
  "bride-nath": {
    alt: "Bride wearing a large gold nath, maang tikka and necklace",
    source: CDN("1594140700783-f9e70c7abc25"),
    prompt:
      "Indian bride in red, wearing a large gold nath with pearls, maang tikka and choker set, smiling, studio portrait on a dark background, portrait 2:3.",
  },
  "nose-ring": {
    alt: "Close up of a small gold nose ring",
    source: CDN("1710301443142-b9a3883a8b59"),
    prompt: "Close up of a woman's face in warm side light, wearing a small House of Dhri gold nose ring, dark background, 3:2.",
  },
  "kundan-bride": {
    alt: "Bride wearing a kundan necklace, earrings and maang tikka",
    source: CDN("1756483560049-e7b2208f99a0"),
    prompt:
      "Smiling Indian bride wearing a kundan and polki necklace with matching jhumka earrings and maang tikka, pink lehenga, soft studio light, portrait 2:3.",
  },
  "set-on-bust": {
    alt: "Gold necklace and earring set on a green display bust",
    source: CDN("1722410180687-b05b50922362"),
    prompt:
      "Traditional gold necklace and earring set displayed on a deep green velvet bust, matching green backdrop, soft studio light, portrait 2:3.",
  },
  "necklace-bust": {
    alt: "Gemstone drop necklace and earrings on a green display bust",
    source: CDN("1722410180670-b6d5a2e704fa"),
    prompt:
      "Fine gold necklace with coloured stone drops and matching earrings on a deep green velvet bust, emerald backdrop, portrait 2:3.",
  },
  "temple-necklace": {
    alt: "Gold temple necklace with matching earrings on black",
    source: CDN("1601121141418-c1caa10a2a0b"),
    prompt: "Gold temple style necklace with a round pendant and matching earrings on black velvet, warm spotlight, 3:2.",
  },
  "oval-pendant": {
    alt: "Polished gold oval pendant on a snake chain resting on sand",
    source: CDN("1783541507490-edb026e2a961"),
    prompt: "Sculptural polished gold oval loop pendant on a snake chain lying on fine sand, low warm light, portrait 2:3.",
  },
  "halo-pendant": {
    alt: "Cushion halo diamond pendant on a white gold chain",
    source: CDN("1598560917505-59a3ad559071"),
    prompt: "Cushion halo diamond pendant on a white gold box chain, hanging, light grey background, square 1:1.",
  },
  "pearl-pendant": {
    alt: "Pearl pendant wrapped in a diamond ring on a fine chain",
    source: CDN("1682629846138-7db022565bd5"),
    prompt: "Pearl pendant held in a curved diamond set band on a fine chain, black sparkling background, portrait 2:3.",
  },
  "emerald-pendant": {
    alt: "Large green gemstone pendant in a gold frame",
    source: CDN("1599643477877-530eb83abc8e"),
    prompt: "Octagonal green gemstone pendant in a gold bezel on a chunky chain, warm bokeh background, portrait 2:3.",
  },
  "stacking-rings": {
    alt: "Thin gold and silver stacking rings on white fabric",
    source: CDN("1717605877844-b506a1f5b914"),
    prompt: "Three thin stacking rings in yellow gold, white gold and silver interlocked on white fabric, airy light, portrait 2:3.",
  },
  "gold-stack": {
    alt: "Stack of gold rings on a white block",
    source: CDN("1708222169741-dc9616cfdb83"),
    prompt: "Stack of four plain and textured gold rings on a white plaster block, clean shadow, portrait 2:3.",
  },
  "silver-rings-hand": {
    alt: "Hand against a blue sky wearing two silver rings",
    source: CDN("1612239396116-4da3087f8f79"),
    prompt: "Raised hand against a clear blue sky wearing two House of Dhri 925 silver rings, bright daylight, portrait 4:5.",
  },
  "silver-necklace": {
    alt: "Silver chain necklace with small green stone drops",
    source: CDN("1676329945867-01c9975aa9d1"),
    prompt: "925 silver chain necklace with small green stone drops laid flat on pale grey, top down, 1:1.",
  },
  "gouache-design": {
    alt: "Hand painting a jewellery design in gouache",
    source: CDN("1790950812645-08421e1c41d8"),
    prompt:
      "Vidhi Parikh's hands painting a gold bangle design in gouache in a sketchbook, brushes and paint tubes around, warm desk lamp, 3:2. Use Vidhi herself, not a model.",
  },
  "design-desk": {
    alt: "Gold necklace laid on a desk next to its design drawings and tools",
    source: CDN("1777126413571-8ec9bf884245"),
    prompt:
      "Top down shot of a finished House of Dhri gold necklace and earrings next to Vidhi's original drawings, pliers and a loupe, white desk, portrait 2:3.",
  },
  "bench-hands": {
    alt: "Jeweller's hands filing a ring at the bench",
    source: CDN("1621926184057-c5e1ba8d6f6b"),
    prompt: "Close up of a craftsman's hands filing a gold ring at the House of Dhri workshop bench, warm lamp light, 3:2.",
  },
  "bench-tools": {
    alt: "Jeweller working at a bench full of tools",
    source: CDN("1778077128762-594e292467a2"),
    prompt: "Over the shoulder view of a craftsman setting a stone at the House of Dhri workshop bench, tools in the foreground, 3:2.",
  },
  loupe: {
    alt: "Man checking a stone through a jeweller's loupe",
    source: CDN("1660860548716-a750ac5b2bbc"),
    prompt: "Vidhi's husband checking a diamond through a loupe, side profile, natural light from a window, 3:2. Use him, not a model.",
  },
  "loose-diamonds": {
    alt: "Row of loose diamonds in different shapes on dark grey",
    source: CDN("1599707367072-cd6ada2bc375"),
    prompt: "Row of loose diamonds in round, oval, pear and princess shapes on a dark grey reflective surface, crisp light, wide 16:9.",
  },
  "diamond-tweezers": {
    alt: "Diamond held in steel tweezers",
    source: CDN("1631013636761-c533d81e96a4"),
    prompt: "Round diamond held in steel diamond tweezers against a textured white paper background, macro, 16:9.",
  },
  "emerald-loupe": {
    alt: "Green gemstone, tweezers and a loupe on a white desk",
    source: CDN("1605821628253-8120cd950c03"),
    prompt: "Emerald cut green gemstone with diamond tweezers and a folding loupe on a white desk, clean daylight, 3:2.",
  },
};

export const SOURCE_PAGE = UNSPLASH;
