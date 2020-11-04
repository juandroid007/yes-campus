<script>
  import Viewport from '../../IntersectingViewport.svelte'
  import { fly } from 'svelte/transition'


  let modulos = [
    {
      titulo: 'Eleva tu</br>capacidad',
      texto: 'El 90% de nuestra comunidad reporta haber superado sus limites para alcanzar el éxito.',
    },
    {
      titulo: 'Viaja a</br>tu ritmo',
      texto: 'Administras tu tiempo para aprender donde, cuando y como quieras.',
    },
    {
      titulo: 'Explota tu</br>creatividad',
      texto: 'Explora al maximo tus sentidos y aprende de manera experiencial',
    },
    {
      titulo: 'Ecosistema</br>dinámico',
      texto: 'Explora al maximo tus sentidos y aprende de manera experiencial',
    },
  ]
</script>

<div class="my-12">
  <Viewport let:intersecting once={true}>
    <div class="flex content-lg">
      <h2
        class:observing={intersecting}
        class="px-4 mb-12 text-3xl font-bold leading-none animation md:text-4xl font-title"
        >Cursos y experiencias de aprendizaje <br>en las diferentes categorías</h2
      >
    </div>
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
            <p class="mt-2 text-2xl font-title">{m.titulo} {i + 1}</p>
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
    opacity: 0;
    transform: translateY(-5%);
    transition-delay: var(--delay);
  }
  .animation.observing {
    opacity: 1;
    transform: translateY(0%) scale(1, 1);
  }
</style>
