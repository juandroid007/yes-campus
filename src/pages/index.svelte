<script>
  import svitsConfig from '../../svits.config'
  import { metatags } from '@roxi/routify'
  import Servicios from '../components/pages/home/Servicios.svelte'
  import PrimeraCapa from '../components/pages/home/Capa1.svelte'
  import SegundaCapa from '../components/pages/home/Capa2.svelte'
  import TerceraCapa from '../components/pages/home/Capa3.svelte'
  import CuartaCapa from '../components/pages/home/Capa4'
  import ZonaOscura, { inZoneMask } from '../components/pages/home/ZonaOscura.svelte'
  import Programas from '../components/pages/home/Programas.svelte'
  import Cursos from '../components/pages/home/Cursos.svelte'

  import { fade } from 'svelte/transition'

  let outOffset

  metatags.title = svitsConfig.name
</script>

<style>
  .darkMask {
    @apply bg-yes-gray-800;
  }
</style>

<!-- routify:options preload=1 -->

<div class="w-full min-h-screen">
  {#if $inZoneMask}
    <div
      class="fixed flex w-full h-screen darkMask"
      style="margin-top: var(--navbarHeightNegative);"
      transition:fade|local={{duration: 400}}
    >
    </div>
  {/if}

  <div class:opacity-0={$inZoneMask} class="duration-300">
    <PrimeraCapa/>
    <Servicios/>
    <TerceraCapa/>

    <SegundaCapa/>
    <CuartaCapa/>
    <div bind:this={outOffset} class="mb-32">
      <Programas/>
    </div>
  </div>

  <div style="z-index: 50">
    <ZonaOscura outOffset={outOffset?.offsetTop} />

    <Cursos/>
  </div>
</div>
