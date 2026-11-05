// @ts-check
import { defineConfig } from 'astro/config';

// enragecolorado.org — static output. Cloudflare serves ./dist directly, no adapter.
// https://astro.build/config
export default defineConfig({
  site: 'https://enragecolorado.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
