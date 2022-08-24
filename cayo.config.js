
// vite config example
// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
// import image from '@rollup/plugin-image';
// const viteConfig = defineConfig({
//   // root: './.cayo/',
//   plugins: [svelte({
//     preprocess: sveltePreprocess({ preserve: ['json'] }),
//     compilerOptions: {
//       hydratable: true,
//     },
//   })],
// });

export default {
  // projectRoot: '.',
  // src: './beans',
  debug: true,
  // css: {
  //   internal: true,
  // },
  // tom: 'foolery',
  // foolery: 'tom',
  build: {
    // assetsDir: 'stuff',
  },
  templateName: '__template',
  svelte: {
    preprocess: [
      sveltePreprocess(),
    ],
    compilerOptions: {
      preserveComments: false,
      dev: false,
    }
  },
  rollup: {
    plugins: [resolve()],
  },
  vite: {
    rollupOptions: {
      plugins: [resolve()],
    },
    server: {
      port: '5005',
    }
  }
  // base: '/cayo/'
}