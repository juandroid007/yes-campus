<script>
  import Viewport from '../../IntersectingViewport.svelte'
  import Categoria, { categorias } from './Categoria.svelte'
  import Slider from './CategoriasSlider.svelte'
</script>

<div class="my-12">
  <Viewport let:intersecting oneWay>
    <div class="flex content-lg">
      <h2
        class="px-4 mb-12 font-bold leading-none leading-tight animate t-h1 font-title"
        style="--animate-x: -1rem; --animate-y: -1rem"
        >Cursos y experiencias de aprendizaje <br>en las diferentes categorías</h2
      >
    </div>
  </Viewport>
  <Viewport oneWay>
    <div
      class="flex w-full h-full overflow-hidden xl:hidden"
    >
      <Slider categorias={categorias} />
    </div>
    <div class="flex-wrap hidden m-auto lg:w-9/10 content-lg xl:flex">
      {#each categorias as c, i}
        <div
          class="p-4 m-auto md:w-1/2 lg:w-1/4 animation animate"
          style="transition-delay: {i * 100}ms"
        >
          <Categoria c={c} />
        </div>
      {/each}

    </div>
    <a href=" https://yescampus.teachlr.com/#courses-online/" class="flex items-center justify-center m-auto text-2xl text-center">
      <span class="mr-4 cursor-pointer hover:underline">Ver todas las categorías</span> <span class="i jam:chevron-right"></span>
    </a>
  </Viewport>
</div>

<style>
  .animation {
    --animate-x: -2%;
  }

  @screen md {
    .animation {
      --animate-x: -1%;
      --animate-y: -5%;
      --animate-r: -3deg;
    }
  }
</style>
