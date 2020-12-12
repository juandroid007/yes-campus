<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import PrimeraCapa from '../components/pages/home/Capa1.svelte'
  import SegundaCapa from '../components/pages/home/Capa2.svelte'
  import TerceraCapa from '../components/pages/home/Capa3.svelte'
  import CuartaCapa from '../components/pages/home/Capa4'
  import SextaCapa from '../components/pages/home/Capa6.svelte'
  import ZonaOscura, { inZoneMask } from '../components/pages/home/ZonaOscura.svelte'
  import Cursos from '../components/pages/home/Cursos.svelte'

  import { height } from '../components/navigation/Navbar.svelte'

  import { fade } from 'svelte/transition'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  let outOffset

  metatags.title = svitsConfig.name
</script>

<style>
  .darkMask {
    @apply bg-yes-gray-800;
  }
</style>

<div class="w-full min-h-screen">
  {#if $inZoneMask}
    <div
      class="fixed flex w-full h-screen darkMask"
      style="margin-top: -{$height}px;"
      transition:fade|local={{duration: 400}}
    >
    </div>
  {/if}

  <div class:opacity-0={$inZoneMask} class="duration-300">
    <PrimeraCapa/>
    <SegundaCapa/>
    <TerceraCapa/>

    <div bind:this={outOffset} class="mb-16">
      <CuartaCapa/>
    </div>
  </div>

  <div style="z-index: 50">
    <ZonaOscura outOffset={outOffset?.offsetTop} />

    <Cursos/>
  </div>
</div>
