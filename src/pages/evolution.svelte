<script>
  import { height } from '../components/navigation/Navbar.svelte'
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import V from '../components/IntersectingViewport.svelte'

  metatags.title = 'Evolution | ' + svitsConfig.name
  let y

  $: scrolled = y < $height / 3

  const detalles = [
    'Programa Online',
    '4 meses de duración',
    '18 sesiones de Mentoría',
    '6 módulos formativos',
    'Recursos descargables',
    '9 especialistas internacionales',
  ]
</script>

<style>
  .a {
    --animate-x: 0;
    --animate-y: 0;
    --animate-s: 1;
    --animate-s-x: var(--animate-s);
    --animate-s-y: var(--animate-s);
    --animate-r: 0deg;
    --animate-r-x: 0deg;
    --animate-r-y: 0deg;
    --animate-time: 1s;
    transition: transform var(--animate-time), opacity var(--animate-time);
  }

  ul {
    padding-left: 6px;
  }

  ul li {
    @apply py-1;
    position: relative;
    margin: 0;
    padding-left: 25px;
  }

  li::after {
    content: '';
    position: absolute;
    background-image: url("/images/evolution/detalles/flecha.png");
    background-repeat: no-repeat;
    background-size: contain;
    left: 0;
    top: 12px;
    width: 12px;
    height: 12px;
  }

  .a:not(.s) {
    opacity: 0;
    transform:
      scale3d(var(--animate-s-x), var(--animate-s-y), 0)
      translate3d(var(--animate-x), var(--animate-y), 0)
      rotateX(var(--animate-r-x))
      rotateY(var(--animate-r-y))
      rotateZ(var(--animate-r));
  }
</style>

<svelte:window bind:scrollY={y} />

<div class="w-full overflow-hidden">
  <PC class="relative w-full overflow-hidden bg-black" let:offset style="transition: all 1.5s">
    <P
      class="h-full py-16 content"
      offset={offset}
      motion={false}
      scaleFactor={6}
    >
    <div class="flex flex-wrap items-center w-full h-full -m-6">
      <div class="w-full p-6 sm:w-1/2">
        <img src="/images/evolution/bg1-2.webp" alt="" class="m-auto">
      </div>
      <div class="w-full p-6 sm:w-1/2">
        <img src="/images/evolution/bg1-1.webp" alt="" class="m-auto">
      </div>
    </div>
    </P>
  </PC>
  <V oneWay class="overflow-hidden" let:intersecting>
    <PC class="flex flex-wrap items-center py-16 content" let:offset>
      <div class="w-full lg:w-1/2 a" class:s={intersecting} style="--animate-y: 5%">
        <div class="mb-6 text-black t-h2 dark:text-white">El crecimiento de tu<br>empresa no tiene porque<br>ser lento.</div>
        <p class="mb-8 t-p">
        <strong>Evolution</strong> es un programa de aceleración empresarial que tiene como objetivo fortalecer los conocimientos del emprendedor, en miras de profesionalización, análisis competitivo, ejecutivo, financiero y así exponencial el desarrollo y proyección de su empresa en miras de comercialización, exportación de servicios/productos, apertura de nuevas sucursales y/o aspirar a convertirse en franquicia. 
        </p>
        <div class="transform hover:-translate-y-px duration-200">
          <a href="/#" class="flex">
            <div class="px-8 py-4 font-bold text-center text-white bg-red-700 rounded-sm shadow duration-200 hover:shadow-lg">Conoce el contenido<br>del programa</div>
          </a>
        </div>
      </div>
      <div class="relative w-full h-48 my-32 lg:my-8 lg:w-1/2 lg:pl-16 sm:h-96 a" class:s={intersecting} style="--animate-x: 3rem">
        <P
          class="absolute bottom-0 shadow-xl w-6/10"
          offset={offset}
          negative
          scaleFactor={10}
          >
          <img src="/images/evolution/parallax1.webp" alt="" class="w-full">
        </P>
        <P
          class="absolute right-0 shadow-xl w-6/10"
          offset={offset}
          scaleFactor={10}
          >
          <img src="/images/evolution/parallax2.webp" alt="" class="w-full">
        </P>
      </div>
    </PC>
  </V>

  <V class="py-16 mt-16 content" style="perspective: 1000px; --animate-r-x: -94deg" oneWay top={300}>
    <div class="flex flex-wrap items-center lg:ml-12">
      <div class="z-10 w-full shadow-2xl animateOut animate lg:w-1/2">
        <img src="/images/evolution/bg3.webp" alt="" class="w-full">
      </div>
      <div
        class="z-20 w-full mx-6 -mt-12 bg-white border shadow-2xl animate animateOut lg:mt-0 lg:w-1/2 lg:-ml-12 border-yes-gray-100 dark:bg-yes-gray-800 dark:border-transparent"
        style="transition-delay: 400ms"
      >
        <div class="w-full p-8">
          <div class="mb-6 text-black t-h2 dark:text-white">Este programa es<br class="hidden lg:block">para ti si</div>
          <ul class="t-p">
            <li>Poseer una empresa o emprendimiento.</li>
            <li>Eres un emprendedor o empresario que desea que su negocio crezca, se expanda o se replique.</li>
            <li>Necesitas acompañamiento de un mentor para analizar áreas críticas de tu negocio.</li>
            <li>Buscas ampliar tu red de contactos internacional.</li>
          </ul>
        </div>
      </div>
    </div>
  </V>

  <V class="relative py-16 text-white bg-black" oneWay style="--animate-r-x: -64deg; perspective: 1000px">
    <img src="/images/evolution/detalles/logo.webp" alt="" class="absolute top-0 hidden h-full py-16 right-4 xl:block animate" style="--animate-x: 70%; --animate-r-x: 0deg; transition-delay: 200ms">
    <div class="content">
      <img src="/images/evolution/detalles/titulo.webp" alt="" class="mx-auto mb-12 animate" style="transition-delay: 400ms">
      <div class="flex flex-wrap w-full -my-6">
        {#each detalles as t, i}
          <div class="w-full py-6 sm:w-1/3 animate" style="transition-delay: {100 * i + 800}ms">
            <img src="/images/evolution/detalles/{i + 1}.webp" alt="" class="h-12 mx-auto">
            <p class="mx-auto mt-6 font-bold text-center t-p lg:w-6/10">{t}</p>
          </div>
        {/each}
      </div>
      <div class="flex flex-col items-center justify-center w-full mx-auto mt-16 lg:flex-row animate" style="transition-delay: {100 * 8 + 800}ms">
        <p class="mx-4 font-bold t-p">En alianza con</p>
        <img src="/images/evolution/detalles/logos.webp" alt="" class="mx-4">
      </div>
    </div>
  </V>
</div>
