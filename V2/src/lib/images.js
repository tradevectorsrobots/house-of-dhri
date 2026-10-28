import { getImage } from "astro:assets";
import { SITE } from "../data/site.js";

const files = import.meta.glob("../assets/images/*.jpg", { eager: true });

export const imageFile = (name) => {
  const mod = files[`../assets/images/${name}.jpg`];
  if (!mod) throw new Error(`Unknown image: ${name}`);
  return mod.default;
};

// Absolute URL of a 1200px JPEG, for structured data.
export const schemaImage = async (name) => {
  const img = await getImage({ src: imageFile(name), width: 1200, format: "jpg", quality: 80 });
  return `${SITE.url}${img.src}`;
};

// Absolute URL of a 1200 × 630 share image cropped from a site photo.
export const shareImage = async (name) => {
  const img = await getImage({ src: imageFile(name), width: 1200, height: 630, format: "jpg", quality: 82 });
  return `${SITE.url}${img.src}`;
};

export const schemaImages = async (names) =>
  Object.fromEntries(await Promise.all([...new Set(names)].map(async (n) => [n, await schemaImage(n)])));
