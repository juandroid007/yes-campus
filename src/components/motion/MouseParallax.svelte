<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  let _class = ''
  let _style = ''
  export { _class as class, _style as style }

  let translate = { x: 0, y: 0 }

  export let offset = { w: 0, h: 0 }

  export let scaleFactor: number = 10
  export let screen: string = 'all'
  export let negative: boolean = false

  const coords = spring({ x: 0, y: 0 }, { stiffness: 0.07 })

  const getOffset = () => {
    offset.w = window.innerWidth / 2
    offset.h = window.innerHeight / 2
  }

  onMount(getOffset)

  $: {
    //translate = -y * 10 / (offset / 10)
    translate.x = ($coords.x - offset.w) / scaleFactor
    translate.y = ($coords.y - offset.h) / scaleFactor
  }

  $: final = {
    x: negative ? translate.x - (translate.x * 2) : translate.x,
    y: negative ? translate.y - (translate.y * 2) : translate.y,
  }
</script>

<svelte:window
  on:resize={getOffset}
  on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
/>

<div
  class="{_class} {screen}:parallax"
  style="--parallax-transform: translate({final.x.toFixed(2)}px, {final.y.toFixed(2)}px); {_style ? `${_style}` : ''} "
>
  <slot translate={translate}></slot>
</div>

<style>
  .parallax {
    will-change: transform;
    transform: var(--parallax-transform);
  }

  .all\:parallax{
    @extend .parallax;
  }

  @screen sm {
    .sm\:parallax {
      @extend .parallax;
    }
  }

  @screen md {
    .md\:parallax {
      @extend .parallax;
    }
  }

  @screen lg {
    .lg\:parallax {
      @extend .parallax;
    }
  }

  @screen xl {
    .xl\:parallax {
      @extend .parallax;
    }
  }
</style>
