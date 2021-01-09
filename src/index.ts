import './index.css'
import './icons.css'
import './nprogress.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import 'prismjs-tomorrow-theme/prism-tomorrow.css'
import App from './App.svelte'
import wf from 'webfontloader'

wf.load({
  google: {
    families: ['Oxygen:300,400,800,900', 'Ubuntu', 'Inconsolata']
  }
})

const app = new App({
  target: document.getElementById('app'),
})

export default app
