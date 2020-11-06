<script>
  import ParallaxObject from '../../../motion/ParallaxObject.svelte'
  export let offset
</script>

<style>
  :global(.letter-e-bl) {
    position: absolute;
    top: 8%;
    left: 4%;
    @apply w-24;
    @apply h-24;
  }

  @screen lg {
    :global(.letter-e-bl) {
      top: 38%;
      left: 4%;
    }
  }

  :global(.letter-c) {
    position: absolute;
    top: -20%;
    left: 10%;
    @apply w-64;
    @apply h-64;
  }


  @screen lg {
    :global(.letter-c) {
      top: 30%;
      left: 10%;
    }
  }

  :global(.letter-l) {
    position: absolute;
    top: 10%;
    right: 4%;
    @apply w-24;
    @apply h-24;
  }


  @screen lg {
    :global(.letter-l) {
      top: 20%;
      right: 4%;
    }
  }

  :global(.letter-e_bl2) {
    position: absolute;
    top: 65%;
    left: 15%;
    @apply w-24;
    @apply h-24;
  }


  @screen lg {
    :global(.letter-e-bl2) {
      top: 40%;
      right: 20%;
    }
  }
</style>

<ParallaxObject
  offset={offset}
  class="letter-e-bl"
  scaleFactor={4}
  let:translate
  negative
  >
  <img src="/images/floating/Letters_E_BL.svg" class="m-auto" alt="">
</ParallaxObject>

<ParallaxObject
  offset={offset}
  class="letter-c"
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
  class="letter-e_bl2"
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
  class="letter-l"
  scaleFactor={4}
  let:translate
>
  <img src="/images/floating/Letters_L.svg" class="m-auto" alt="">
</ParallaxObject>
