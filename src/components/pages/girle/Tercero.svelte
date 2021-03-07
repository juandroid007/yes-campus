<script>
  export let openForm
</script>

<div class="relative flex flex-col items-center xl:flex-row-reverse xl:min-h-screen">
  <p
    class="inset-x-0 top-0 px-12 mt-6 text-lg italic font-light text-center text-girle-primary xl:text-3xl xl:absolute xl:px-0 xl:mx-auto xl:mt-2 xl:w-1/2"
    data-aos="fade-up"
  >
  "Un espacio diseñado para jóvenes madres que desean desarrollar su idea de negocio"
  </p>
  <div
    class="relative flex flex-col justify-center px-12 mx-auto mt-6 mb-6 xl:w-1/2 text-md xl:text-xl xl:mx-24 xl:mt-0 xl:mb-0"
    data-aos="fade-left"
  >
    <h1 class="mb-6 text-xl font-bold text-girle-primary xl:text-4xl">¿Qué es Girl-E?</h1>
    <p class="mb-6 text-justify">
    <strong>Girl-E</strong> es un programa de fortalecimiento para <strong>jóvenes mujeres</strong>
    emprendedoras, con edades comprendidas entre 16 y 25 años, que han sido madres a edades muy tempranas
    y desean explorar emprendimientos asociativos como medios de vida y lograr independencia
    económica. <strong>Girl-E es un programa creado por la asociación civil Aprendo y Emprendo</strong>.
    </p>
    <button
      on:click={openForm}
      class="mx-auto mb-6 text-center uppercase btn bg-girle-secondary hover:bg-girle-secondary-400 xl:mb-0"
      >¡Quiero participar!</button
    >
  </div>
   <img src="/images/girle/seccion3.webp" class="w-screen mt-auto xl:w-1/2" alt="" data-aos="fade-right">
</div>
