<script>
  import V from '../../IntersectingViewport.svelte'
</script>

<style>
  .media {
    object-fit: cover;
  }
</style>

<div class="flex flex-col w-full py-12 overflow-hidden font-light text-white t-p font-title">
  <V class="flex w-full animate" oneWay style="--animate-time: 1s">
    <div class="flex flex-col w-9/10 lg:w-4/10">
      <div class="mb-12 overflow-hidden media rounded-tr-3xl rounded-br-3xl">
        <video src="/images/video2.webm" autoplay loop muted class="w-full h-full media"></video>
      </div>
      <div class="ml-6 md:ml-12">
        <p class="font-bold leading-none t-h2 font-title">
        Aprendemos en redes y a través del trabajo colaborativo
        </p>
        <p class="mt-6 font-title">
        Contamos con espacios de co-creación para
        Vivir experiencias de aprendizaje colaborativo
        que impulsan la conexión como comunidad
        </p>
      </div>
    </div>
  </V>
  <div class="flex flex-wrap justify-between my-24 lg:justify-center lg:my-24 lg:w-9/10 lg:mx-auto lg:-mt-64">
    <V class="flex flex-col ml-auto w-9/10 lg:w-4/10 lg:ml-0 lg:mt-96 animate" oneWay style="--animate-time: 1s">
      <div class="mb-12 overflow-hidden media rounded-tl-3xl rounded-bl-3xl lg:rounded-3xl">
        <video src="/images/video.webm" autoplay loop muted class="w-full h-full media"></video>
      </div>
      <img src="https://source.unsplash.com/random/480x600" alt="" class="hidden mb-12 media rounded-tl-3xl rounded-bl-3xl lg:rounded-3xl">
      <div class="mr-6 lg:mr-0">
        <p class="leading-none t-h2 font-title">
        Microlearning como recurso<br>de aprendizaje
        </p>
        <p class="mt-6 font-light font-title">
        Obtén los conocimientos y herramientas
        necesarios para superar los retos del día a día
        a través de videos corta duración
        </p>
      </div>
    </V>

    <V class="flex flex-col mt-24 lg:mr-0 lg:ml-0 w-9/10 lg:w-4/10 lg:pl-16 lg:mt-0 animate" oneWay style="--animate-time: 1s">
      <img src="https://source.unsplash.com/random/480x600" alt="" class="mb-12 media rounded-tr-3xl rounded-br-3xl lg:rounded-3xl">
      <div class="ml-6 lg:ml-0">
        <p class="font-bold leading-none t-h2 font-title">
        Dispara tu potencial gracias a una atención centrada en la experiencia
        </p>
        <p class="mt-6 font-title">
        Formaciones especialmente diseñadas para
        disparar la creatividad y la innovación en tiempo real
        </p>
      </div>
    </V>
  </div>

  <V class="flex justify-end w-full lg:-mt-96 animate" oneWay style="--animate-time: 1s">
    <div class="flex flex-col w-9/10 lg:w-4/10">
      <img src="/images/desarrollo.jpg" alt="" class="w-full mb-12 ml-auto rounded-tl-3xl rounded-bl-3xl">
      <div class="mr-6 lg:mr-12">
        <p class="font-bold leading-none t-h2 font-title">
        Gestionamos proyectos de aprendizaje grupal a la medida
        </p>
        <p class="mt-6 font-title">
        Dispara el potencial de tus equipos gracias a través de nuestras capacitaciones
        especializadas totalmente a la medida de tus necesidades
        </p>
      </div>
    </div>
  </V>
</div>
