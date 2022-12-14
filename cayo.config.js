
// vite config example
// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";
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
console.log('node env', process.env.NODE_ENV);
const url = process.env.NODE_ENV === 'development' ? '/' : 'default/path/to/'

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
  components: '../lib',
  templateName: '__template',
  svelte: {
    extensions: ['.svelte', '.md'],
    preprocess: [
      sveltePreprocess({
        markupTagName: 'lol',
        replace: [['@base/', url], ['testReplace', 'replaceWorks']]
      }),
      mdsvex(
        { extensions: ['.md'] }
      ),
    ],
    compilerOptions: {
      preserveComments: false,
      dev: false,
    }
  },
  // vite: {
  //   rollupOptions: {
  //     plugins: [resolve()],
  //   },
  //   server: {
  //     port: '5005',
  //   }
  // }
  // base: '/cayo/'
}