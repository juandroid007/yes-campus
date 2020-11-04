<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import PrimeraCapa from '../components/pages/home/Capa1.svelte'
  import SegundaCapa from '../components/pages/home/Capa2.svelte'
  import TerceraCapa from '../components/pages/home/Capa3.svelte'
  import Carousel from '../components/carousel/Carousel.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  metatags.title = svitsConfig.name
</script>

<div class="w-full min-h-screen">
  <PrimeraCapa/>
  <SegundaCapa/>
  <TerceraCapa/>

  <div
    class="h-screen py-12 mt-6 from-yes-orange-500 to-yes-orange-400 bg-gradient-to-br dark:to-yes-orange-700 dark:from-yes-gray-800"
    style="height: 90vh; border-top-left-radius: 3rem; border-top-right-radius: 3rem;"
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

  <Carousel height="70vh"/>
  <div class="flex flex-col-reverse items-center px-6 py-12 lg:flex-row lg:h-screen content-lg">
    <div class="lg:w-1/2">
      <div class="text-4xl font-bold leading-tight lg:leading-none lg:text-5xl font-title">Desarrollamos competencias personales y organizacionales</div>
    </div>
    <div class="lg:w-1/2">
      <img src="/images/logo.svg" class="w-full pb-12 mx-auto lg:pb-0 lg:w-6/10">
    </div>
  </div>
</div>
