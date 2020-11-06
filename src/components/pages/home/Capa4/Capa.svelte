<script>
  import Viewport from '../../../IntersectingViewport.svelte'
  import ParallaxContainer from '../../../motion/ParallaxContainer.svelte'
  import Parallaxes from './Parallaxes.svelte'
</script>

<style>
  .animation {
    transition: all 0.8s;
  }
  .animation:not(.intersecting) {
    opacity: 0;
    transform: translateY(40%);
  }
</style>

  <ParallaxContainer
    class="relative py-12 mt-6 overflow-hidden from-yes-orange-500 to-yes-orange-400 bg-gradient-to-br dark:to-yes-orange-700 dark:from-yes-orange-800"
    style="bbackground: #FC643F; height: 90vh; border-top-left-radius: 3rem; border-top-right-radius: 3rem;"
    let:offset
  >
    <Viewport let:intersecting class="absolute w-full h-full" once>
      <div class="absolute w-full h-full animation" class:intersecting>
        <Parallaxes offset={offset} />
      </div>
    </Viewport>
    <div class="z-20 flex items-center w-screen h-full transform content">
      <Viewport class="flex m-auto" let:intersecting once>
        <div class="m-auto text-center md:w-6/10 animation" class:intersecting style="transition-delay: 0.2s">
          <p class="text-3xl font-bold leading-none text-center text-white md:text-4xl font-title">
          Forma parte del increible ecosistema de emprendimiento
          </p>
          <p class="mt-4 text-xl text-yes-gray-700 dark:text-yes-gray-300">
          Desarrolla habilidades y despréndete de tus límites
          </p>
        </div>
      </Viewport>
    </div>
  </ParallaxContainer>
