import { defineConfig } from 'astro/config';
import VueIntegration from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
    integrations: [
        // 1. Imported from an installed npm package
        VueIntegration(),
        tailwind()
      ],
      
});
