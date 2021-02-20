<script>
  import { onMount } from 'svelte'
  import aos from 'aos'

  onMount(() => {
    aos.init()
  })
</script>
<div class="relative flex flex-col items-center lg:flex-row lg:min-h-screen">
  <div
    class="relative flex flex-col justify-center px-12 mx-auto mt-6 mb-6 lg:w-1/2 text-md lg:text-lg lg:px-24 lg:mt-0 lg:mb-0"
    data-aos="fade-right"
  >
    <h1
      class="mb-6 text-xl font-bold text-center text-girle-secondary lg:text-left lg:text-3xl"
      >Ser madre no es un impedimiento para desarrollar tu emprendimiento</h1
    >
    <p class="mb-6 text-justify">
    Las jóvenes madres en edades muy tempranas tienden a abandonar sus estudios
    y pierden la oportunidad de trabajar su independencia económica por falta
    de herramientas, desarrollo de visión y apoyo.
    </p>
    <p class="mb-6 font-bold text-justify text-girle-primary lg:mb-0">
    ¿Te sientes identificada? Entonces este programa es para tí.
    </p>
  </div>
  <img src="/images/girle/seccion2.webp" class="w-screen mt-auto lg:w-1/2" alt="" data-aos="fade-left">
</div>
