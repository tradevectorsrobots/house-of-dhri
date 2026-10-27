// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://houseofdhri.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // collections.html / collections/prithvi.html → served as clean URLs without a trailing slash
    format: 'file',
  },
});
