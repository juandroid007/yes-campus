<script>
  import Viewport from '../../../IntersectingViewport.svelte'
  import ParallaxContainer from '../../../motion/ParallaxContainer.svelte'
  import Parallaxes from './Parallaxes.svelte'
  // import Carousel from '../../../carousel/Carousel.svelte'
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
  class="relative py-12 mt-6 overflow-hidden from-yes-orange-500 to-yes-orange-400 bg-gradient-to-b dark:to-yes-orange-700 dark:from-yes-orange-800"
  style="bbackground: #FC643F; height: 85vh; border-top-left-radius: 3rem; border-radius: 3rem;"
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
        Conoce y forma parte de nuestros campamentos especializados
        </p>
      </div>
    </Viewport>
  </div>
</ParallaxContainer>

<!--div
  style="border-bottomm-left-radius: 3rem; border-bottomm-right-radius: 3rem;"
  class="overflow-hidden"
>
  <Carousel height="90vh"/>
</div-->
