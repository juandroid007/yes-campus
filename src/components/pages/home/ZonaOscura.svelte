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

  import Videos from './Videos.svelte'
  import Testimonio from './Testimonio.svelte'
  import Bussines from './Bussines.svelte'

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

<div class="flex flex-col items-center w-full leading-none">
  <span class="text-6xl i jam:chevron-down animate-bounce duration-300" class:opacity-0={$inZoneMask}></span>
  <span class="-mt-12 text-6xl i jam:chevron-down animate-bounce duration-300" class:opacity-0={$inZoneMask}></span>
</div>

<div class="mt-48 mb-4">
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
      <div class="relative h-screen">
        {#if $inZone}
          <div class="absolute w-full h-full" in:fade|local={{delay: 800, duration: 10}} style="background: #3E3E3E">
          </div>
        {/if}
        <div class="absolute flex w-full h-full animate inZone">
          <div class="flex flex-col w-full h-full text-white content-lg">
            <h2 class="h-16 mb-6 text-4xl font-bold leading-none font-title">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
          </div>
        </div>
      </div>
      <div style="background: #3E3E3E">
        <Wave color="#000" time="15s"/>
      </div>
    </Viewport>
    <div class="min-h-screen bg-black">
      <Videos/>
    </div>
  </Viewport>
  <div class="transform rotate-180">
    <Wave color="#000" time="15s"/>
  </div>
</div>

<Testimonio/>
<Bussines/>
