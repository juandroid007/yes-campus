<script context="module">
  import { writable } from 'svelte/store'
  export const inZone = writable(false)
  export const inZoneMask = writable(false)
</script>

<script>
  import { onDestroy } from 'svelte'
  import Viewport from '../../IntersectingViewport.svelte'
  import Wave from '../../motion/Wave.svelte'

  onDestroy(() => ($inZone = false))
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
    <Viewport bind:intersecting={$inZoneMask}>
      <div class="h-screen text-white content-lg animate inZone">
        <h2 class="h-16 mb-6 text-4xl font-bold leading-none font-title">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
      </div>
      <div class="min-h-screen bg-black">
        <div class="transform rotate-180">
          <Wave color="#3E3E3E" />
        </div>
      </div>
    </Viewport>
  </Viewport>
</div>

<div class="flex w-full h-screen"></div>
