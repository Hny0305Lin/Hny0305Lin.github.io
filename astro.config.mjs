// @ts-check
import { defineConfig } from "astro/config";
import robotsTxt from 'astro-robots-txt';
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://Hny0305Lin.github.io',
  integrations: [
    tailwind(),
    robotsTxt(),
    astroIcon({
      include: {
        mdi: ["*"],
        'ri': ['*'],
        'simple-icons': ['*'],
        'devicon': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
      },
    })
  ],
});
