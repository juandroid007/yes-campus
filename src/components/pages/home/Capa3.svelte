<script>
  import Viewport from '../../IntersectingViewport.svelte'
</script>

<div class="my-12">
  <Viewport let:intersecting once={true}>
    <div class="flex content-lg">
      <h2
        class:observing={intersecting}
        class="px-4 mb-12 text-4xl font-bold leading-none leading-tight animation md:text-4xl font-title"
        >Cursos y experiencias de aprendizaje <br>en las diferentes categorías</h2
      >
    </div>
  </Viewport>
  <Viewport let:intersecting once={true}>
    <div class="flex flex-wrap m-auto lg:w-9/10 content-lg">
      {#each new Array(8).fill().map(() => ({ bkg: 'gray', titulo: 'Categoría' })) as m, i}
        <div
          class="p-4 m-auto md:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {i * 100}ms"
        >
          <div class="transform hover:-translate-y-4 duration-200">
            <div class="w-64 h-64 shadow-md rounded-2xl hover:shadow-lg duration-200" style="background: {m.bkg}">
            </div>
            <p class="mt-2 text-2xl font-bold font-title">{m.titulo} {i + 1}</p>
          </div>
        </div>
      {/each}

      <a href={null} class="flex items-center m-auto mt-6 text-2xl text-center">
        <span class="mr-4 hover:underline">Ver todas las categorías</span> <span class="i jam:chevron-right"></span>
      </a>
    </div>
  </Viewport>
</div>

<style>
  .animation {
    transition: all 0.5s;
    transition-delay: var(--delay);
  }

  .animation:not(.observing) {
    opacity: 0;
    transform: translateX(-5%);
  }

  @screen md {
    .animation:not(.observing) {
      opacity: 0;
      transform: translateY(-10%);
    }
  }
</style>
