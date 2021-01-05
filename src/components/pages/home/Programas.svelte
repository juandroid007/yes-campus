<script lang="ts">
  import { onMount } from 'svelte'
  import {
    quintOut
  } from 'svelte/easing'
  import { fly } from 'svelte/transition'

  let width: number
  let index = 0
  const speed = 700

  let interval: () => number
  onMount(() => {
    interval = () => setInterval(next, 5000)
  })
  $: if (interval) interval()

  const superFly = (
    node: HTMLElement, {
      delay,
      duration,
      x = 0,
      y = 0,
      motion = quintOut,
      none = false,
    }: any
  ) => {
    const style = getComputedStyle(node)
    const transform = style.transform === 'none' ? '' : style.transform

    return {
      delay,
      duration,
      css: (t: number) => {
        const easeMotion = motion(t)
        if (none) return ``
        return `
          transform: ${ transform } translate(${ (1 - easeMotion) * x }px, ${ (1 - easeMotion) * y }px)`
      },
    }
  }

  const elements = [
    'yes-camp',
    'young-entrepeneur',
    'full-inclusion',
  ]

  const next = () => {
    index = (index + 1) % elements.length
  }
</script>

<style>
  .wrapper {
    overflow: hidden;
    display: grid;
    align-items: start;
    width: 100%;
    height: 85vh;
  }

  @screen sm {
    .wrapper {
      height: 80vh;
    }
  }

  .bg, .element {
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/2 relative;
  }

  .bg {
    background-image: var(--bg);
    background-size: cover;
    background-position: center;
  }
</style>

<div
  class="z-10 mb-6 wrapper"
  style="border-bottom-left-radius: 3rem; border-bottom-right-radius: 3rem;"
  bind:clientWidth={width}
  >
  {#each [elements[index]] as el (index)}
    <div
      in:superFly={{ x: width, duration: speed }}
      out:superFly={{ delay: speed, duration: speed, none: true }}
      class="bg"
      style="--bg: url(/images/programas/{el}/fondo.svg)">
      </div
    >
    <div
      class="z-10 text-4xl text-white element"
      in:fly={{x: 20, duration: speed, delay: speed / 2}}
      out:fly={{x: -20, duration: speed}}>
      <div class="flex flex-wrap-reverse items-center w-full h-full sm:flex-wrap">
        <div class="flex items-end w-full mt-auto sm:h-full sm:w-1/2">
          <img src="/images/programas/{el}/personajes.png" alt="" class="hidden w-full px-6 sm:block">
          <img src="/images/programas/{el}/personajes-sm.png" alt="" class="w-full px-6 sm:hidden">
        </div>
        <div class="w-full p-6 sm:w-1/2">
          <div class="flex justify-end w-full mb-12 sm:hidden">
            <img src="/images/programas/{el}/simbolo.svg" alt="" class="w-3/10">
          </div>
          <img src="/images/programas/{el}/titulo.svg" alt="" class="w-full sm:w-8/10">
          <div class="mt-6 ml-auto sm:ml-0 w-5/10 transform hover:scale-105 duration-200">
            <a href="" title="Conoce más">
              <img src="/images/programas/{el}/boton.svg" alt="Conoce más" class="w-full">
            </a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
