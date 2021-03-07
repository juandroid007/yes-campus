<script>
  const modulos = [
    'Explorándome',
    'Preparándome para la travesía',
    'La ventaja de ser mujer',
    'El ABC de emprender',
    'Marketing a la vista',
    'Costos y Finanzas',
    'Mujer que comunica',
    'Prácticas de bienestar',
    'Hablemos de Negocios',
  ]
  export let openForm
</script>

<div class="relative bkg2">
  <img
    src="/images/girle/libro2.webp"
    class="absolute top-0 right-0 hidden w-32 lg:block transform translate-y-5"
    alt=""
  >

  <div class="flex flex-col py-6 mx-auto lg:min-h-screen">
    <h3 class="flex flex-col items-center mb-6 text-lg font-bold text-center text-white xl:text-3xl lg:mb-0">
      Conoce los módulos del Girl-E<span class="block w-20 h-1 mt-4 mb-6 bg-white"></span>
    </h3>
    <div class="my-auto">
      <div class="content-center mb-6 grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-12 lg:gap-16">
        {#each modulos as mod, i}
          <!--{#each profesores.slice(0, 5) as img}-->
          <div class="m-auto" data-aos="fade-up">
            <img src="/images/girle/modulos/{i+1}.webp" class="m-auto img-shadow" alt="">
            <p class="text-xl italic font-light text-center text-white img-shadow">{i+1}. {mod}</p>
          </div>
        {/each}
      </div>
    </div>
  <button
    on:click={openForm}
    class="mx-auto my-6 mb-6 text-center bg-white btn hover:bg-white text-girle-secondary hover:text-girle-secondary-400 xl:mb-0"
    data-aos="fade-up"
    >¡Postúlate aquí!</button
  >
  </div>
</div>
