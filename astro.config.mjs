import { defineConfig } from 'astro/config';

// https://astro.build/config
import tokencss from "@tokencss/astro";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tokencss(), preact()],
  vite: {
    ssr: {
      external: ["svgo"]
    },
  }
});