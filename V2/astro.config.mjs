// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://houseofdhri.com',
  output: 'static',
  // Folder-style pages (bespoke/index.html) work on any static host, GoDaddy included, with no rewrite rules.
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: {
    responsiveStyles: false,
  },
});
