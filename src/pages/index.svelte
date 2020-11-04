<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Image from '../components/Image.svelte'
  import { height } from '../components/navigation/Navbar.svelte'
  import { fly } from 'svelte/transition'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  metatags.title = svitsConfig.name
</script>

<div class="w-full min-h-screen">
  <div
    class="h-screen py-12 from-yes-blue-200 to-white bg-gradient-to-b dark:to-yes-blue-700 dark:from-yes-blue-800"
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

  <div
    class="h-screen py-12 my-6 from-yes-orange-500 to-yes-orange-400 bg-gradient-to-br dark:to-yes-orange-700 dark:from-yes-gray-800"
    style="height: 80vh; border-radius: 3rem"
  >
    <div class="flex items-center w-full h-full content">
      <div class="m-auto text-center md:w-1/2" in:fly={{x: -100, duration: 800}}>
        <p class="text-3xl font-bold leading-none text-center text-white md:text-4xl font-title">
        Forma parte del increible ecosistema de emprendimiento
        </p>
        <p class="mt-4 text-xl text-yes-gray-700 dark:text-yes-gray-300">
        Desarrolla habilidades y despréndete de tus límites
        </p>
      </div>
    </div>
  </div>
</div>
