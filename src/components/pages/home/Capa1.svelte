<script>
  import { height } from '../../navigation/Navbar.svelte'
  import { fly } from 'svelte/transition'
  import MouseParallax from '../../motion/MouseParallax.svelte'
</script>

<div
  class="relative h-screen py-12 overflow-hidden from-yes-blue-200 to-white bg-gradient-to-b dark:to-transparent dark:from-yes-blue-800"
  style="height: calc(100vh - {$height}px); color: #939BB4;"
>
  <div class="absolute hidden w-full h-full lg:block">
    <MouseParallax
      class="absolute w-64 h-64" style=" top: 10%; right: 20%"
      scaleFactor={5}
    >
      <img src="/images/floating/YESCAMP.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-40 h-40" style="right: 0%"
      scaleFactor={20}
    >
      <img src="/images/floating/YOUNG.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-28 h-28" style="top: 60%; left: 60%"
      scaleFactor={10}
    >
      <img src="/images/floating/LEADERS.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-32 h-32" style="top: 40%; right: 10%"
      scaleFactor={6}
      negative
    >
      <img src="/images/floating/FULL.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-28 h-28" style="top: 40%; right: 10%"
      scaleFactor={8}
    >
      <img src="/images/floating/KIDS.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-52 h-52" style="top: 30%; right: 30%"
      scaleFactor={10}
      negative
    >
      <img src="/images/floating/GIRL.svg" alt="" class="m-auto">
    </MouseParallax>
  </div>

  <div class="flex flex-col items-center h-full transform lg:flex-row content">
    <div class="my-auto lg:w-1/2" in:fly={{x: -100, duration: 800}}>
      <p class="text-4xl font-bold leading-none md:text-6xl font-title">
      Ecosistema de emprendimiento
      </p>
      <p class="mt-4 text-xl">
      Desarrolla habilidades y despréndete de tus límites
      </p>
      <button
        class="flex mt-4 btn-primary"
        in:fly={{x: -20, duration: 800, delay: 200}}
        >Inicia el viaje con nosotros</button
      >
    </div>
  </div>
</div>
