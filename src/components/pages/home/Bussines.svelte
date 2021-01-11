<script>
  import V from '../../IntersectingViewport.svelte'
  import { clientes } from '../../../lib/business'
</script>

<style>
  @screen md {
    .main {
      min-height: 70vh;
    }
  }

  .animation {
    --animate-time: 0.4s;
  }

  .animation {
    --animate-y: -1rem;
    --animate-r: -3deg;
  }

  .animation2 {
    --animate-x: 1rem;
  }

  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -1px 0 white)
        drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>

<div class="overflow-hidden text-white">
  <div class="flex flex-wrap-reverse items-center w-full py-6 text-xl lg:flex-wrap main content-lg font-title">
    <V class="flex flex-wrap items-center w-full px-12 m-auto lg:w-1/2" oneWay>
      {#each clientes as c, i}
        <div class="w-1/2 p-2 p-6 m-auto sm:w-1/3 animate animation" style="transition-delay: {50 * i + 500}ms">
          <img src="/images/business/clientes/{c}.webp" alt="" class="m-auto hover:scale-110 transform duration-200 grayscale">
        </div>
      {/each}
    </V>
    <V class="z-10 w-full py-12 t-p lg:w-1/2" oneWay>
      <div class="flex flex-col w-full animate animation2" style="transition-delay: 500ms">
        <h2 class="mb-6 font-extrabold leading-none uppercase t-h2">Yes Campus<br>for Business</h2>
        <p>
        Creamos soluciones empresariales a través del desarrollo de competencias
        tanto del talento humano como de la organización. Generamos programas de
        carrera a la medida, en sintonía con la visión de desarrollo de la empresa
        y sus desafíos.
        </p>

        <a href="/business" class="mt-6 mr-auto font-light btn-primary-gray">Descúbrelo</a>
      </div>
    </V>
  </div>
</div>
