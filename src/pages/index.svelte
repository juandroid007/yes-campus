<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import PrimeraCapa from '../components/pages/home/Capa1.svelte'
  import SegundaCapa from '../components/pages/home/Capa2.svelte'
  import TerceraCapa from '../components/pages/home/Capa3.svelte'
  import CuartaCapa from '../components/pages/home/Capa4'
  import SextaCapa from '../components/pages/home/Capa6.svelte'
  import ZonaOscura, { inZone } from '../components/pages/home/ZonaOscura.svelte'

  import { height } from '../components/navigation/Navbar.svelte'

  import { fade } from 'svelte/transition'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  metatags.title = svitsConfig.name
</script>

<div class="w-full min-h-screen">
  {#if $inZone}
    <div
      class="fixed flex w-full h-screen"
      style="z-index: -10; margin-top: -{$height}px; background: #3E3E3E"
      transition:fade|local={{duration: 400}}
    >
    </div>
  {/if}

  <div class:opacity-0={$inZone} class="duration-300">
    <PrimeraCapa/>
    <SegundaCapa/>
    <TerceraCapa/>
    <CuartaCapa/>

    <SextaCapa/>
  </div>

  <div style="z-index: 50">
    <ZonaOscura/>
  </div>
</div>
