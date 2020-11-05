<script>
  import ParallaxObject from '../../../motion/ParallaxObject.svelte'
  export let offset
</script>

<ParallaxObject
  offset={offset}
  class="absolute w-24 h-24"
  style="top: 38%; left: 4%"
  scaleFactor={4}
  let:translate
  negative
  >
  <img src="/images/floating/Letters_E_BL.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="absolute w-64 h-64"
  style="top: 30%; left: 10%"
  scaleFactor={2.0}
  let:translate
  negative
  >
  <img src="/images/floating/Letters_C.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="absolute w-48 h-48"
  style="bottom: -5%; right: 30%"
  scaleFactor={7}
  let:translate
  negative
  >
  <img src="/images/floating/Letters_E_GR.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="absolute w-24 h-24"
  style="top: 40%; right: 20%"
  scaleFactor={3}
  let:translate
>
  <img src="/images/floating/Letters_E_BL2.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="absolute w-24 h-24"
  style="top: 60%; right: 10%"
  scaleFactor={1.5}
  let:translate
>
  <img src="/images/floating/Letters_E_BL_1.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="absolute w-24 h-24"
  style="top: 20%; right: 4%"
  scaleFactor={4}
  let:translate
>
  <img src="/images/floating/Letters_L.svg" class="m-auto" alt="">
</ParallaxObject>
