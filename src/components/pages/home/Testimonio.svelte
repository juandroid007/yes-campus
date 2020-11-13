<script>
  import V from '../../IntersectingViewport.svelte'
</script>

<style>
  .a1, .a2 {
    transition: all 0.8s;
  }

  .a1:not(.intersecting) {
    opacity: 0;
    transform: translateX(-5%);
  }

  .a2:not(.intersecting) {
    opacity: 0;
    transform: translateX(5%);
  }
</style>

<V class="flex flex-wrap items-center w-full min-h-screen py-6 -m-4 text-xl content-lg font-title" let:intersecting once>
  <div class="w-full h-full p-4 lg:w-1/2">
    <div class="flex flex-col w-full h-full a1" class:intersecting>
      <p class="italic">
      "This required very tight collaboration and
      incremental deliveries over many months until final
      delivery. We are extremely pleased with the
      outcome, resulting in a well-received experience
      for our customers."
      </p>
      <p class="mt-6 font-bold">
      Maria Perez - Fundadora de Panasteleria
      </p>
    </div>
  </div>
  <div class="w-full p-4 lg:w-1/2">
    <img src="https://source.unsplash.com/random/600x480" alt="" class="shadow-2xl rounded-3xl a2" class:intersecting>
  </div>
</V>
