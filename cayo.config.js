
// vite config example
// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'
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
  css: {
    internal: true,
  },
  // tom: 'foolery',
  // foolery: 'tom',
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
  // rollup: {
  //   plugins: [image({ dom: true })],
  // },
  vite: {
    server: {
      port: '5005',
    }
  }
  // base: '/cayo/'
}