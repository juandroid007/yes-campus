<script context="module">
  import { writable } from 'svelte/store'
  export const inZone = writable(false)
  export const inZoneMask = writable(false)
</script>

<script>
  import { onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  import { url } from '@roxi/routify'
  import Viewport from '../../IntersectingViewport.svelte'
  import Wave from '../../motion/Wave.svelte'

  import Profesores from './Profesores.svelte'
  import Videos from './Videos.svelte'
  import Testimonio from './Testimonio.svelte'
  import Bussines from './Bussines.svelte'
  import Image from '/$components/Image.svelte'
  export let outOffset

  onDestroy(() => {
    $inZone = false
    $inZoneMask = false
  })
</script>

<style>
  .animate {
    transition: 0.8s;
    transition-delay: 0.4s;
  }

  .animate:not(.inZone) {
    opacity: 0;
    transform: translateX(-5%);
  }
</style>

<div class="flex flex-col leading-none w-full items-center" class:opacity-0={$inZoneMask}>
    <span class="text-6xl i jam:chevron-down animate-bounce"></span>
    <span class="-mt-12 text-6xl i jam:chevron-down animate-bounce"></span>
</div>

<Viewport
  class="mt-48 mb-4"
>
  <div
    class="cursor-pointer flex flex-col text-white leading-none w-full transform rotate-180 duration-300 items-center"
    class:opacity-0={!$inZoneMask}
    on:click={
      () => outOffset ? window.scrollTo({
        top: outOffset,
        behavior: 'smooth'
      }) : null
    }
  >
    <span class="text-6xl i jam:chevron-down animate-bounce"></span>
    <span class="-mt-12 text-6xl i jam:chevron-down animate-bounce"></span>
  </div>
  <Viewport
    bind:intersecting={$inZone}
    class="pt-16"
    on:top={
      (evt) => window.scrollTo({
        top: evt.detail.offset,
        behavior: 'smooth'
      })
    }
  >
    <Viewport
      bind:intersecting={$inZoneMask}
    >
      <div class="flex flex-col h-full w-full relative">
        {#if $inZone}
          <div class="h-full bg-yes-gray-800 w-full absolute" in:fade|local={{delay: 800, duration: 10}}>
          </div>
        {/if}
        <Viewport
          class="flex h-full w-full animate inZone"
          on:out={
            () => outOffset ? window.scrollTo({
              top: outOffset,
              behavior: 'smooth'
            }) : null
          }
        >
          <Bussines/>
        </Viewport>
        <div class="z-10">
          <Wave color="#000" time="12s"/>
        </div>
      </div>
    </Viewport>
    <div class="bg-black min-h-screen transform z-10">
      <Videos/>
    </div>
  </Viewport>
  <div class="transform rotate-180">
    <Wave color="#000" time="12s"/>
  </div>
</Viewport>

<div class="flex flex-col items-center justify-center">
  <Profesores take={10} color="#0273E3"/>
  <Viewport class="animate" style="--animate-y: 2rem" oneWay>
    <a
      href={$url('/especialistas')}
      class="flex mx-auto max-w-max-content mt-12 items-center btn-fill"
      >
      Todos los especialistas
      <span class="cursor-pointer ml-2 i jam:chevron-right"></span>
    </a>
  </Viewport>
</div>

<Viewport class="animate animateOut" oneWay style="--animate-r-y: -64deg" top={220}>
  <Testimonio/>
</Viewport>

<Viewport class="flex my-8 content items-center justify-center" oneWay style="--animate-s: 0.8; --animate-time: 1.5s;">
  <Image src="aliados.png" class="m-auto w-full animate sm:w-8/10" style="transition-delay: 0.3s"/>
</Viewport>
