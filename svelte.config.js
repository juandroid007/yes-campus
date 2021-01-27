const path = require('path')
const { mdsvex } = require('mdsvex')
const { typescript, postcss } = require('svelte-preprocess')
module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    typescript(),
    postcss(),
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: {
        blog: path.join(__dirname, 'src', 'layouts', 'MarkdownLayout.svelte'),
        talks: path.join(__dirname, 'src', 'layouts', 'TalksLayout.svelte'),
      },
    }),
  ],
};
