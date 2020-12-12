<script>
  import V from '../../IntersectingViewport.svelte'
</script>

<style>
  @screen md {
    .main {
      min-height: 70vh;
    }
  }

  .animate {
    transition: 0.4s;
  }

  .animate2 {
    transition: 0.8s;
  }

  .animate:not(.intersecting) {
    opacity: 0;
    transform: translateY(-20%) rotate(-3deg);
  }

  .animate2:not(.intersecting) {
    opacity: 0;
    transform: translateX(20%);
  }
</style>

<div class="overflow-hidden text-white">
  <div class="flex flex-wrap-reverse items-center w-full py-6 text-xl lg:flex-wrap main content-lg font-title">
    <V class="flex flex-wrap items-center w-full px-12 m-auto lg:w-1/2" let:intersecting once>
      {#each new Array(8) as _, i}
        <div class="w-1/2 p-2 p-6 m-auto sm:w-1/4 animate" class:intersecting style="transition-delay: {50 * i}ms">
          <img src="/images/logo.svg" alt="" class="m-auto hover:scale-110 transform duration-200 hover:-rotate-6">
        </div>
      {/each}
    </V>
    <V class="z-10 w-full py-12 t-p lg:w-1/2" let:intersecting once>
      <div class="flex flex-col w-full animate2" class:intersecting>
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
