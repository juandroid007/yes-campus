<script>
  import Viewport from '../../IntersectingViewport.svelte'

  let modulos = [
    {
      icon: 'capacidad',
      titulo: 'Eleva tu</br>capacidad',
      texto: 'El 90% de nuestra comunidad reporta haber superado sus limites para alcanzar el éxito.',
    },
    {
      icon: 'ritmo',
      titulo: 'Viaja a</br>tu ritmo',
      texto: 'Administras tu tiempo para aprender donde, cuando y como quieras.',
    },
    {
      icon: 'creatividad',
      titulo: 'Explota tu</br>creatividad',
      texto: 'Explora al maximo tus sentidos y aprende de manera experiencial',
    },
    {
      icon: 'ecosistema',
      titulo: 'Ecosistema</br>dinámico',
      texto: 'Explora al maximo tus sentidos y aprende de manera experiencial',
    },
  ]
</script>

<div class="my-12">
  <Viewport let:intersecting once={true}>
    <div class="flex flex-col w-full m-auto lg:w-9/10 md:flex-row">
      {#each modulos as m, i}
        <div
          class="lg:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {i * 200}ms"
        >
          <div class="p-12 transform hover:-translate-y-4 duration-200 hover:scale-110">
            <img class="h-24 mb-4 mr-auto" src="/images/icons/{m.icon}.svg" alt="">
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
    transition: all 0.8s;
    transition-delay: var(--delay);
  }

  .animation:not(.observing) {
    opacity: 0;
    transform: translateX(-10%);
  }

  @screen md {
    .animation:not(.observing) {
      opacity: 0;
      transform: translateY(-20%) scale(0.9, 0.9) rotate(5deg);
    }
  }
</style>
