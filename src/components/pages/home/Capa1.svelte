<script>
  import { height } from '../../navigation/Navbar.svelte'
  import { fly } from 'svelte/transition'
</script>

<div
  class="h-screen py-12 from-yes-blue-200 to-white bg-gradient-to-b dark:to-transparent dark:from-yes-blue-800"
  style="height: calc(100vh - {$height}px); color: #939BB4;"
>
  <div class="flex flex-col items-center h-full lg:flex-row content">
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
