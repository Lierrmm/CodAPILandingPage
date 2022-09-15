import { defineConfig } from 'vite'
import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteSVG } from 'rollup-plugin-svelte-svg';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [
    svelteSVG({
      svgo: {},
      enforce: "pre",
    }),
    svelte({}),
  ]
})
