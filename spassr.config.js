const { readFileSync } = require('fs')
const html = readFileSync('./dist/__app.html', 'utf-8')
const script = html.match(/src="\/(_assets\/index.\w+.js)"/)[1]
console.log(script)
module.exports = {
  assetsDir: 'dist',
  script: `dist/${script}`,
  entrypoint: 'dist/__app.html',
  ssr: true,
  ssrOptions: {
    inlineDynamicImports: true,
    errorHandler: e => console.log(e)
  },
}
