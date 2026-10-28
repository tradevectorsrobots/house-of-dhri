// Writes IMAGE-PROMPTS.md from src/data/images.js: every photo slot, its current source and the brief for replacing it.
import { writeFileSync } from "node:fs";
import { IMAGES } from "../src/data/images.js";

const rows = Object.entries(IMAGES).map(
  ([name, img]) => `### ${name}\n\n- File: \`src/assets/images/${name}.jpg\`\n- Alt text: ${img.alt}\n- Current source: ${img.source}\n- Brief for the replacement photo: ${img.prompt}\n`,
);

const doc = `# Image slots and replacement briefs

Every photo on the site lives in \`src/assets/images/\` and is listed in \`src/data/images.js\`.
The current photos are free stock images from Unsplash (Unsplash licence: free for commercial use, no attribution required).
They show the kind of piece House of Dhri makes, not pieces the house has made.
Replace them with your own photography before relying on them in ads or product listings.

To replace a photo: save the new image over the file with the same name (JPEG, at least 2000px on the long side), run \`npm run build\`, and update its alt text in \`src/data/images.js\` if the picture changes.
Each brief below doubles as a shot list for a photographer or a prompt for an image generator.

${rows.join("\n")}`;

writeFileSync(new URL("../IMAGE-PROMPTS.md", import.meta.url), doc);
console.log(`IMAGE-PROMPTS.md written (${rows.length} images)`);
