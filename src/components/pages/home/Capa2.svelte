<script>
  import Viewport from '../../IntersectingViewport.svelte'

  let modulos = [
    {
      icon: 'capacidad',
      titulo: 'Elevar tu</br>capacidad',
      texto: 'El 90% de nuestra comunidad ha superado sus límites y aprendido nuevas habilidades para superar los retos de la actualidad.',
    },
    {
      icon: 'ritmo',
      titulo: 'Viajar a</br>tu ritmo',
      texto: 'Administras tu tiempo para aprender donde, cuando y como quieras.',
    },
    {
      icon: 'creatividad',
      titulo: 'Explotar tu</br>creatividad',
      texto: 'Explora al máximo tus sentidos y aprende de manera experiencial.',
    },
    {
      icon: 'ecosistema',
      titulo: 'Colaborar con<br>emprendedores',
      texto: 'Forma parte de una comunidad de aprendizaje donde la colaboración es un código común.',
    },
  ]
</script>

<div class="flex my-12 overflow-hidden content-lg">
  <div class="flex flex-wrap items-center w-full">
    <Viewport class="py-12 lg:w-1/3" oneWay>
      <div class="animate" style="--animate-x: -3rem">
        <p class="t-h3">Yes Campus, el ecosistema de<br>emprendimiento donde podrás</p>
        <div class="hidden mt-4 fill-current stroke-current lg:block w-8/10">
          {#await fetch('/images/arrow.svg') then res}
            {#await res.text() then svg}
              {@html svg}
            {/await}
          {/await}
        </div>
      </div>
    </Viewport>

    <Viewport class="flex flex-wrap w-full lg:w-2/3" oneWay>
      {#each modulos as m, i}
        <div
          class="w-full sm:w-1/2 xl:w-1/4 animation animate"
          style="transition-delay: {i * 200}ms"
        >
          <div class="p-12 px-2 transform hover:-translate-y-4 duration-200 hover:scale-110">
            <img class="mb-4 mr-auto w-6/10 lg:w-8/10" src="/images/icons/{m.icon}.svg" alt="">
            <h2 class="h-8 mb-6 font-bold leading-none t-h3 font-title">{@html m.titulo}</h2>
            <p class="t-p lg:hidden">{m.texto}</p>
          </div>
        </div>
      {/each}
    </Viewport>
  </div>
</div>

<style>
  .animation {
    --animate-x: -10%;
  }

  @screen md {
    .animation:not(.observing) {
      --animate-y: -10%;
      --animate-s: 0.9;
      --animate-r: 3deg;
    }
  }
</style>
