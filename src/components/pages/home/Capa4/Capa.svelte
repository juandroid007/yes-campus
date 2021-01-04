<script>
  import Viewport from '../../../IntersectingViewport.svelte'
  import ParallaxContainer from '../../../motion/ParallaxContainer.svelte'
  import Parallaxes from './Parallaxes.svelte'
  // import Carousel from '../../../carousel/Carousel.svelte'
</script>

<ParallaxContainer
  class="relative py-12 mt-6 overflow-hidden from-yes-orange-500 to-yes-orange-400 bg-gradient-to-b dark:to-yes-orange-700 dark:from-yes-orange-800"
  style="background: linear-gradient(to bottom, #0033CC, #4372ff); height: 65vh; border-top-left-radius: 3rem; border-radius: 3rem;"
  let:offset
>
  <Viewport let:intersecting class="absolute w-full h-full" oneWay>
    <div class="absolute w-full h-full animate" style="--animate-y: 40%">
      <Parallaxes offset={offset} />
    </div>
  </Viewport>
  <div class="z-20 flex items-center w-screen h-full transform content">
    <Viewport class="flex m-auto" oneWay>
      <div class="m-auto text-center md:w-6/10 animate" style="--animate-y: 40%; transition-delay: 0.2s">
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
