// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://app.netlify.com/sites/famous-axolotl-6f5389/overview",
  integrations: [preact()]
});