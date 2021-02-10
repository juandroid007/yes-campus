<script>
  import './sw/sw'
  import { isOffline } from './sw/store'

  import { Router, isChangingPage } from '@roxi/routify'
  import { routes } from '../.routify/routes'

  import NProgress from 'nprogress'

  import FacebookPixel from '/$components/FacebookPixel.svelte'
  import OfflineBanner from './components/OfflineBanner.svelte'
  import BannerUpdate from './components/BannerUpdate.svelte'

  import { facebook } from './stores/trackers'

  import svitsConfig from '../svits.config.json'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($isChangingPage) {
      NProgress.start()
    }

    if (!$isChangingPage) {
      NProgress.done()
    }
  }

  import { preferences } from './stores/preferences'

  if (svitsConfig.routifyRuntimeConfig?.useHash) {
    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`)
  }
  $: document.documentElement.classList.toggle('dark', $preferences.darkMode)

  function handleNetworkChange() {
    $isOffline = !navigator.onLine
  }

  import { onMount } from 'svelte'

  onMount(() => {
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)
  })

  $: if ($isOffline != undefined) {
    handleNetworkChange()
  }
</script>

<div id="modals"></div>

<FacebookPixel bind:this={$facebook} id={465266784484638} />
<OfflineBanner/>
<BannerUpdate/>
<Router {routes} config={{ ...svitsConfig?.routifyRuntimeConfig }} />
