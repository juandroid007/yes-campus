const path = require('path')
const { mdsvex } = require('mdsvex')
const autoPreprocess = require('svelte-preprocess')
module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    autoPreprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: {
        blog: path.join(__dirname, 'src', 'layouts', 'BlogLayout.svelte'),
        talks: path.join(__dirname, 'src', 'layouts', 'TalksLayout.svelte'),
      },
    }),
  ],
};
