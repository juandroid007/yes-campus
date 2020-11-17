<script context="module">
  export const categorias = [
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
</script>

<script>
  export let c
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
    @apply duration-300;
  }

  .title {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 0% 30%;
    background-position: 0 100%;
    transition: background-size 0.3s ease-in;
  }

  .categoria:hover .title {
    background-size: 100% 40%;
  }

  .wave {
    @apply transform;
    @apply scale-90;
    @apply rotate-12;
  }

  .categoria:hover .wave {
    @apply scale-125;
    @apply rotate-45;
    @apply translate-y-6;
  }

  .wave2 {
    transform: scale(-0.9, -0.9) rotate(-12deg);
  }

  .categoria:hover .wave2 {
    transform: scale(-1.25, -1.25) rotate(12deg) translate(2rem, 1rem);
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

<div class="categoria" style="--wave-color: {c.waveColor || '#ef7a22'}">
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
      <img src="/images/categorias/{c.img}.jpg" alt={c.titulo} class="img">
    </div>
  </div>
  <div class="w-64 mt-2 mr-2 lg:h-24">
    <span class="text-2xl font-bold leading-tight font-title title">{c.titulo}</span>
  </div>
</div>
