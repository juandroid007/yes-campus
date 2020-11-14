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

<div class="overflow-hidden bg-gray-100 dark:bg-yes-gray-800 dark:bg-opacity-25">
  <div class="flex flex-wrap items-center w-full py-6 text-xl main content-lg font-title">
    <V class="flex flex-wrap items-center w-full px-12 m-auto lg:w-1/2" let:intersecting once>
      {#each new Array(8) as _, i}
        <div class="w-1/2 p-2 p-6 m-auto sm:w-1/4 animate" class:intersecting style="transition-delay: {50 * i}ms">
          <img src="/images/logo.svg" alt="" class="m-auto hover:scale-110 transform duration-200 hover:-rotate-6">
        </div>
      {/each}
    </V>
    <V class="w-full p-12 text-base lg:w-1/2" let:intersecting once>
      <div class="flex flex-col w-full animate2" class:intersecting>
        <h2 class="mb-6 text-4xl font-extrabold leading-none uppercase">Yes Campus<br>for Business</h2>
        <p>
        Creamos soluciones empresariales a través del desarrollo de
        competencias tanto del talento humano como de la
        organización. Generamos programas de carrera a la medida en
        sintonía con la visión de desarrollo de la empresa y sus
        </p>

        <a href="" class="mt-6 mr-auto font-light btn-fill">Descúbrelo</a>
      </div>
    </V>
  </div>
</div>
