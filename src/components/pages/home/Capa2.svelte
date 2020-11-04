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
    <div class="flex flex-col w-full m-auto md:w-9/10 md:flex-row">
      {#each modulos as m, i}
        <div
          class="md:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {i * 100}ms"
        >
          <div class="p-12 transform hover:-translate-y-2 duration-200">
            <span class="ml-auto text-6xl text-right i jam:moon"></span>
            <h2 class="h-16 mb-6 text-4xl font-bold leading-none font-title">{@html m.titulo}</h2>
            <p>{m.texto}</p>
          </div>
        </div>
      {/each}
    </div>
  </Viewport>
</div>

<style>
  .animation {
    transition: all 0.5s;
    opacity: 0;
    transform: translateY(-60%) scale(0.8, 0.8);
    transition-delay: var(--delay);
  }
  .animation.observing {
    opacity: 1;
    transform: translateY(0%) scale(1, 1);
  }
</style>
