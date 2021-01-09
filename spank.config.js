const { readFileSync } = require('fs')
const html = readFileSync('./dist/index.html', 'utf-8')
const script = html.match(/src="\/(_assets\/index.\w+.js)"/)[1]
console.log(script)
module.exports = {
  script: `dist/${script}`,
  entrypoint: 'dist/index.html',
  inlineDynamicImports: true,
  sitemap: '.routify/urlIndex.json',
  output: 'dist',
  eventName: 'app-loaded',
}
