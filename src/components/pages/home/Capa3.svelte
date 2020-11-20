<script>
  import Viewport from '../../IntersectingViewport.svelte'
  import Categoria, { categorias } from './Categoria.svelte'
  import Slider from './CategoriasSlider.svelte'
</script>

<div class="my-12 overflow-hidden">
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
    <div
      class="flex w-full h-full lg:hidden"
    >
      <Slider categorias={categorias} />
    </div>
    <div class="flex-wrap hidden m-auto lg:w-9/10 content-lg lg:flex">
      {#each categorias as c, i}
        <div
          class="p-4 m-auto md:w-1/2 lg:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {i * 100}ms"
        >
          <Categoria c={c} />
        </div>
      {/each}

    </div>
    <a href="/something" class="flex items-center justify-center m-auto mt-6 text-2xl text-center">
      <span class="mr-4 cursor-pointer hover:underline">Ver todas las categorías</span> <span class="i jam:chevron-right"></span>
    </a>
  </Viewport>
</div>

<style>
  .animation {
    transition: all 0.8s;
    transition-delay: var(--delay);
  }

  .animation:not(.observing) {
    opacity: 0;
    transform: translateX(-5%);
  }

  @screen md {
    .animation:not(.observing) {
      opacity: 0;
      transform: translateY(-10%) rotate(-5deg);
    }
  }
</style>
