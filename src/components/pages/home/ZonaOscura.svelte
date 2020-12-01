<script context="module">
  import { writable } from 'svelte/store'
  export const inZone = writable(false)
  export const inZoneMask = writable(false)
</script>

<script>
  import { onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  import Viewport from '../../IntersectingViewport.svelte'
  import Wave from '../../motion/Wave.svelte'

  import Profesores from './Profesores.svelte'
  import Videos from './Videos.svelte'
  import Testimonio from './Testimonio.svelte'
  import Bussines from './Bussines.svelte'
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

<div class="flex flex-col items-center w-full leading-none" class:opacity-0={$inZoneMask}>
    <span class="text-6xl i jam:chevron-down animate-bounce"></span>
    <span class="-mt-12 text-6xl i jam:chevron-down animate-bounce"></span>
</div>

<Viewport
  class="mt-48 mb-4"
>
  <div
    class="flex flex-col items-center w-full leading-none text-white cursor-pointer duration-300 transform rotate-180"
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
      <div class="relative flex flex-col w-full h-full">
        {#if $inZone}
          <div class="absolute w-full h-full bg-yes-gray-800" in:fade|local={{delay: 800, duration: 10}}>
          </div>
        {/if}
        <Viewport
          class="flex w-full h-full animate inZone"
          on:out={
            () => outOffset ? window.scrollTo({
              top: outOffset,
              behavior: 'smooth'
            }) : null
          }
        >
          <Profesores/>
        </Viewport>
        <div class="z-10">
          <Wave color="#000" time="12s"/>
        </div>
      </div>
    </Viewport>
    <div class="z-10 min-h-screen bg-black transform">
      <Videos/>
    </div>
  </Viewport>
  <div class="transform rotate-180">
    <Wave color="#000" time="12s"/>
  </div>
</Viewport>

<Viewport class="animate" once style="--animate-x: -3rem; --animate-y: -3rem; --animate-r: -3deg; --animate-s: 0.9">
  <Testimonio/>
</Viewport>
<Bussines/>
