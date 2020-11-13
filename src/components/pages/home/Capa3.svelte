<script>
  import Viewport from '../../IntersectingViewport.svelte'

  const categorias = [
    {
      title: 'Creatividad e Innovación',
    },
    {
      title: 'Emprendimiento y negocios',
    },
    {
      title: 'Liderazgo y Empoderamiento',
    },
    {
      title: 'Sostenibilidad',
    },
    {
      title: 'Marketing',
    },
    {
      title: 'Finanzas',
    },
    {
      title: 'Legales',
    },
    {
      title: 'Bienestar',
    },
  ]
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
      {#each categorias.map(e => ({ bkg: 'gray', ...e })) as c, i}
        <div
          class="p-4 m-auto md:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {i * 100}ms"
        >
          <div class="m-auto transform hover:-translate-y-4 duration-200 hover:-rotate-2">
            <div class="w-64 h-64 overflow-hidden shadow-md rounded-2xl hover:shadow-lg duration-200" style="background: {c.bkg}">
              <img src="https://source.unsplash.com/random/236x236" alt="" class="object-cover w-full h-full">
            </div>
            <p class="w-64 mt-2 mr-2 text-2xl font-bold leading-tight lg:h-24 font-title">{c.title}</p>
          </div>
        </div>
      {/each}

      <a href="/something" class="flex items-center m-auto mt-6 text-2xl text-center">
        <span class="mr-4 hover:underline">Ver todas las categorías</span> <span class="i jam:chevron-right"></span>
      </a>
    </div>
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
