import './index.css'
import './icons.css'
import './nprogress.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import App from './App.svelte'
import wf from 'webfontloader'

wf.load({
  google: {
    families: ['Oxygen:300,400,800,900', 'Roboto:300,400,700,900', 'Inconsolata']
  }
})

const element = document.getElementById('app')

const app = new App({
  target: document.getElementById('app'),
  hydrate: element.hasChildNodes(),
})

export default app
