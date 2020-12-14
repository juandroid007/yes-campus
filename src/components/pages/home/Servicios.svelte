<script>
  import { url } from '@roxi/routify'
  import Viewport from '../../IntersectingViewport.svelte'

  let modulos = [
    {
      id: 'aprendizaje',
      titulo: 'Aprendizaje',
      texto: 'Adquiere las habilidades necesarias para sobresalir, de la mano de expertos.',
    },
    {
      id: 'networking',
      titulo: 'Networking',
      texto: 'Conecta y aprende<br>junto a toda la comunidad emprendedora YES.',
    },
    {
      id: 'financiamientos',
      titulo: 'Financiamiento',
      texto: 'Obtén el financimianto para tu nuevo proyecto<br>o para escalar tu negocio.',
    },
    {
      id: 'asesorias',
      titulo: 'Asesorías',
      texto: 'Resuelve problemas específicos<br>en tu negocio y logra tus metas gracias a nuestros mentores.',
    },
  ]
</script>

<div class="my-12 overflow-hidden content-lg">
  <Viewport class="mb-6 text-center" once style="--animate-x: -1rem">
    <h2 class="mb-2 t-h2 animate">Un ecosistema virtual como ningún otro</h2>
    <p  class="animate" style="font-size: 1.33rem">Aprende. Conecta. Obtén financiamiento. Asesórate.</p>
  </Viewport>
  <Viewport let:intersecting once={true}>
    <div class="flex flex-wrap w-full m-auto">
      {#each modulos as m, i}
        <div
          class="w-full sm:w-1/2 xl:w-1/4 animation"
          class:observing={intersecting}
          style="--delay: {300 + i * 200}ms"
        >
          <div class="p-6 transform hover:-translate-y-4 duration-200 hover:scale-110">
            <img class="mb-4 mr-auto w-6/10" src="/images/icons/{m.id}.svg" alt="">
            <h2 class="mb-4 font-bold leading-none t-h3 font-title">{@html m.titulo}</h2>
            <p class="mb-6 t-p desc" style="">{@html m.texto}</p>
            <a href={$url('/'+m.id)} class="flex items-center max-w-max-content btn-fill">Más información <span class="ml-2 cursor-pointer i jam:chevron-right"></span></a>
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
      transform: translateY(-15%) scale(0.9, 0.9) rotate(5deg);
    }
  }

  @screen xl {
    .desc {
      height: calc(1.5 * 4rem);
    }
  }

  @screen sm {
    .desc {
      height: calc(1.5 * 3rem);
    }
  }

  @screen xl {
    .desc {
      height: calc(1.5 * 3rem);
    }
  }

  @screen xxl {
    .desc {
      height: calc(1.5 * 3rem);
    }
  }
</style>
