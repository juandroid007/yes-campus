<script context="module">
  import { writable } from 'svelte/store'
  export const inZone = writable(false)
</script>

<script>
  import { onDestroy } from 'svelte'
  import Viewport from '../../IntersectingViewport.svelte'

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

<div class="mt-48">
  <Viewport
    bind:intersecting={$inZone}
    class="pt-12"
    on:top={
      (evt) => window.scrollTo({
        top: evt.detail.offset,
        behavior: 'smooth'
      })
    }
  >
    <div class="h-screen text-white content-lg animate inZone">
      <h2 class="h-16 mb-6 text-4xl font-bold leading-none font-title">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
    </div>
  </Viewport>
</div>

<div class="flex w-full h-screen mt-4"></div>
