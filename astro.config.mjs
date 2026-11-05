// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// enragecolorado.org — a public, independently-maintained critical mirror.
// Static output: Cloudflare Pages serves ./dist directly, no adapter needed.
// https://astro.build/config
export default defineConfig({
  site: 'https://enragecolorado.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  adapter: cloudflare(),
});