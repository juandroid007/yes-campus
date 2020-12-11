<script context="module">
  export const categoriass = [
    {
      waveColor: '#fddc63',
      img: 'creatividad',
      titulo: 'Creatividad e Innovación',
    },
    {
      waveColor: '#bfd630',
      img: 'emprendimiento',
      titulo: 'Emprendimiento y negocios',
    },
    {
      waveColor: '#00a1e4',
      img: 'liderazgo',
      titulo: 'Liderazgo y Empoderamiento',
    },
    {
      waveColor: '#34b678',
      img: 'sostenibilidad',
      titulo: 'Sostenibilidad',
    },
    {
      waveColor: '#ed2249',
      img: 'marketing',
      titulo: 'Marketing',
    },
    {
      waveColor: '#1d437a',
      img: 'finanzas',
      titulo: 'Finanzas',
    },
    {
      waveColor: '#faba50',
      img: 'legales',
      titulo: 'Legales',
    },
    {
      waveColor: '#ef7a22',
      img: 'bienestar',
      titulo: 'Bienestar',
    },
  ]

  import { getCollection } from '../../../collections'

  export const categorias = getCollection('categorias', { field: 'order', order: 'cresc'}).elements
</script>

<script>
  export let c
  import { hoverable } from '../../Cursor.svelte'
  import Img from '../../Image.svelte'

  export let hover = true

  function hexToRGB (h, a) {
    let r = 0, g = 0, b = 0

    // 3 digits
    if (h.length == 4) {
      r = '0x' + h[1] + h[1]
      g = '0x' + h[2] + h[2]
      b = '0x' + h[3] + h[3]

      // 6 digits
    } else if (h.length == 7) {
      r = '0x' + h[1] + h[2]
      g = '0x' + h[3] + h[4]
      b = '0x' + h[5] + h[6]
    }

    return 'rgba('+ +r + ',' + +g + ',' + +b + ','+ +a +')'
  }

  const noHover = () => {}

  const hovering = hover ? hoverable : noHover
</script>

<style>
  .categoria {
    margin: auto;
    @apply transform;
    @apply duration-300;
  }

  .categoria:hover {
    @apply scale-105;
  }

  .img-wrapper {
    position: relative;
    @apply w-64;
    @apply h-64;
  }

  .wave, .wave2 {
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 100%;
    @apply duration-500;
    transition: transform 0.3s;
  }

  .title {
    background-image: linear-gradient(120deg, var(--wave-color) 0%, var(--wave-color) 100%);
    background-repeat: no-repeat;
    background-size: 0% 40%;
    background-position: 0 100%;
    transition: background-size 0.3s;
    mix-blend-mode: screen;
  }

  .categoria:hover .title {
    background-size: 100% 40%;
  }

  .title {
    background-image: linear-gradient(120deg, var(--underline-color) 0%, var(--underline-color) 100%);
    background-repeat: no-repeat;
    background-size: 0% 40%;
    background-position: 0 100%;
    transition: background-size 0.3s;
  }

  .categoria:hover .title {
    background-size: 100% 40%;
  }

  .wave {
    transform: scale3d(0.9, 0.9, 1) rotate(12deg);
  }

  .categoria:hover .wave {
    transform: scale3d(1.25, 1.25, 1) rotate(12deg) translate3d(1rem, 1.5rem, 0);
  }

  .wave2 {
    transform: scale3d(-0.9, -0.9, 1) rotate(-12deg);
  }

  .categoria:hover .wave2 {
    transform: scale3d(-1.25, -1.25, 1) rotate(12deg) translate3d(1.5rem, 1rem, 0);
  }

  .img-box {
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: gray;
    @apply shadow-md;
    @apply duration-200;
    @apply rounded-2xl;
  }

  .categoria:hover .img-box {
    @apply shadow-lg;
  }

  .img {
    z-index: 10;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>

<div use:hovering={{primary: true, text: 'Ver más', color: c.color}} class="m-auto categoria" style="--wave-color: {c.color}; --underline-color: {hexToRGB(c.color, 0.4)}">
  <div class="img-wrapper">
    <div class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.12 135.01">
        <defs>
          <style>.cls-1{fill: var(--wave-color);}</style>
        </defs><title>Category_8_down</title>
        <path xmlns="http://www.w3.org/2000/svg" class="cls-1" d="M64.28,112.36c5.68-.75,8.36-3.92,7.84-6.65s-3.32-5.24-5-7.87C58.67,84.45,80.15,70,72.45,56.5c-3.38-5.93-12.26-11.26-12.06-17.39C60.56,34,67,29.48,70.25,24.62c4.12-6.18,2.7-13.34-5.74-18.48S40.12-1.55,27.32,1C12.6,3.94,6.35,12,3.58,19.32-4.14,39.8,2.85,60.58,4,81.16c.39,7-13.44,40,14.45,39.08,9.73-.31,13.28-4.27,20.19-6.63C48.23,110.33,54.36,113.68,64.28,112.36Z"/>
      </svg>
    </div>
    <div class="wave2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.12 135.01">
        <defs>
          <style>.cls-1{fill:var(--wave-color);}</style>
        </defs><title>Category_8_down</title>
        <path xmlns="http://www.w3.org/2000/svg" class="cls-1" d="M64.28,112.36c5.68-.75,8.36-3.92,7.84-6.65s-3.32-5.24-5-7.87C58.67,84.45,80.15,70,72.45,56.5c-3.38-5.93-12.26-11.26-12.06-17.39C60.56,34,67,29.48,70.25,24.62c4.12-6.18,2.7-13.34-5.74-18.48S40.12-1.55,27.32,1C12.6,3.94,6.35,12,3.58,19.32-4.14,39.8,2.85,60.58,4,81.16c.39,7-13.44,40,14.45,39.08,9.73-.31,13.28-4.27,20.19-6.63C48.23,110.33,54.36,113.68,64.28,112.36Z"/>
      </svg>
    </div>
    <div class="img-box">
      <!--img src="/images/categorias/{c.img}.jpg" alt={c.titulo} class="img"-->
      <Img src={c.img} alt={c.titulo} class="img"/>
    </div>
  </div>
  <div class="w-64 mt-2 mr-2 lg:h-24">
    <p class="text-2xl font-bold leading-tight font-title"><span class="title">{c.titulo}</span></p>
  </div>
</div>
