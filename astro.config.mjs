import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  site: 'https://JustinWebDevs.github.io/soju',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/soju' : '/',
});
