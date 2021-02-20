<script>
  import { onMount } from 'svelte'

  const requisitos = [
    'Eres una joven madre con edades comprendidas entre 16 y 25 años',
    'Tienes experiencia o emprendimientos en las áreas de tecnología, servicios, gastronomía o moda',
    'Resides actualmente en Venezuela',
    'Tienes acceso a internet durante 3 horas semanales por 4 semanas'
  ]
</script>


<div class="relative">
  <img
    src="/images/girle/libro2.webp"
    class="absolute top-0 left-0 hidden w-32 lg:block transform translate-y-10 translate-x-10"
    alt=""
  >

  <div class="flex flex-col py-6 mx-auto xl:min-h-screen">
    <h3 class="flex flex-col items-center mb-6 text-lg font-bold text-center xl:text-3xl text-girle-secondary xl:mb-0">
      Este programa es para tí, si<span class="block w-20 h-1 mt-4 bg-girle-secondary"></span>
    </h3>
    <div class="my-auto">
      <div class="content-center mb-6 grid grid-cols-1 xl:grid-cols-4 lg:px-24 gap-16 xl:gap-0">
        {#each requisitos as req, i}
          <div class="relative z-10 m-auto" data-aos="fade-up">
            {#if i == 0}
              <img
                src="/images/girle/rompecabeza2.webp"
                class="absolute bottom-0 left-0 z-20 w-32 transform translate-y-10 -translate-x-10"
                alt=""
              >
            {/if}
            <div class="z-10 w-64 m-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg transform hover:-translate-y-5">
              <img src="/images/girle/req{i+1}.webp" class="w-full" alt="">
              <div class="flex h-48 px-6">
                <p class="m-auto text-lg font-bold text-center text-girle-secondary">{req}</p>
              </div>
              <span class="block w-20 h-1 mx-auto mt-4 mb-6 bg-girle-secondary">
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <img
    src="/images/girle/fondo.webp"
    class="bottom-0 right-0 hidden lg:block lg:absolute transform"
    alt=""
    >
</div>
