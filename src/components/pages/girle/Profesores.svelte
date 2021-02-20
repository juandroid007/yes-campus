<script>
  const profesores = [
    'Mauricio',
    'Lucia',
    'Olga',
    'Yasmin',
    'Brirkelva',
    'Martha',
    'Eveleyn',
    'Yiluska',
    'Annella',
    'Susana'
  ]
</script>


<div class="relative">
  <img
    src="/images/girle/lupa.webp"
    class="absolute bottom-0 left-0 hidden w-32 lg:block transform -translate-y-5"
    alt=""
  >
  <img
    src="/images/girle/bombillo.webp"
    class="absolute top-0 right-0 hidden w-32 lg:block transform translate-y-5"
    alt=""
  >

  <div class="flex flex-col py-6 mx-auto lg:h-screen">
    <h3 class="flex flex-col items-center mb-6 text-lg font-bold text-center xl:text-3xl text-girle-primary lg:mb-0">
      Conoce al equipo colaborador de Girl-E<span class="block w-20 h-1 mt-4 bg-girle-primary"></span>
    </h3>
    <div class="my-auto">
      <div class="content-center mb-6 grid grid-cols-1 lg:grid-cols-5 lg:px-24 gap-6 lg:gap-24">
        {#each profesores as img}
        <!--{#each profesores.slice(0, 5) as img}-->
          <img src="/images/girle/facilitadores/{img}.webp" class="m-auto img-shadow" alt="" data-aos="fade-up">
        {/each}
      </div>
      <!--div class="content-center mb-6 grid grid-cols-1 lg:grid-cols-4 lg:px-24 gap-6 lg:gap-0">
        {#each profesores.slice(5, profesores.length) as img}
          <img src="/images/girle/facilitadores/{img}.webp" class="mx-auto" alt="">
        {/each}
      </div-->
    </div>
  </div>
  <img
    src="/images/girle/izq forma.webp"
    class="bottom-0 right-0 hidden lg:block lg:absolute transform"
    alt=""
  >
</div>
