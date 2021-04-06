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
  import Image from '/$components/Image.svelte'
  import Viewport from '/$components/IntersectingViewport.svelte'

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

<div class="min-h-screen w-full">
  {#if $inZoneMask}
    <div
      class="flex h-screen w-full fixed darkMask"
      style="margin-top: var(--navbarHeightNegative);"
      transition:fade|local={{duration: 400}}
    >
    </div>
  {/if}

  <div class:opacity-0={$inZoneMask} class="duration-300">
    <div class="bg-gradient-to-b to-transparent from-yes-blue-600 dark:from-yes-blue-800">
      <PrimeraCapa/>
      <div id="servicios">
        <Servicios/>
      </div>
    </div>
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

    <Viewport
      class="flex my-8 content items-center justify-center"
      style="--animate-s: 0.8; --animate-time: 1.5s;"
      oneWay
     >
      <Image
        src="aliados.png"
        class="m-auto w-full animate sm:w-8/10"
        style="transition-delay: 0.3s"
        alt="Aliados de YES Campus"
        title="Aliados de YES Campus"
      />
    </Viewport>
  </div>
</div>
