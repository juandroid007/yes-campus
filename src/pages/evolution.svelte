<script>
  import { height } from '../components/navigation/Navbar.svelte'
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import V from '../components/IntersectingViewport.svelte'
  import Accordion from '/$components/pages/evolution/Accordion.svelte'
  import Especialistas from '/$components/pages/home/Profesores.svelte'
  import Formulario from '/$components/pages/evolution/Formulario.svelte'

  metatags.title = 'Evolution | ' + svitsConfig.name
  let y

  let openForm

  $: scrolled = y < $height / 3

  const modulos = [
    {
      title: 'Introducción Corporativa',
      body: 'El participante aprenderá acerca de: <strong>cultura organizacional</strong>, <strong>contexto e impacto empresarial</strong>, <strong>modelo de negocio</strong>, <strong>adyacencias/enterno de la empresa</strong>, <strong>elevator</strong> y <strong>tweet pitch</strong>.',
    },
    {
      title: 'Sistematización de innovación',
      body: 'En este módulo el participante aprenderá acerca de: <strong>innovación en el mercado</strong> implementando como herramienta el <strong>Modelo Doblin</strong>, <strong>tipos de innovación</strong>, <strong>inteligencia competitiva</strong>, <strong>Design Thinking</strong>, <strong>Benchmarking & Mistery Shopper</strong>, <strong>mapa de empatía / journey map</strong> y por último el <strong>pitch deck</strong>.',
    },
    {
      title: 'Marketing empresarial y ventas',
      body: 'El participante conocerá, aprenderá y será capaz de manejar temas como: <strong>Branding & manual de imagen corporativa</strong>, <strong>comunicación efectiva en RRSS</strong>, <strong>SEO & Redes Sociales</strong>, <strong>métricas & conversión</strong> y <strong>realizar funnel de ventas</strong>.',
    },
    {
      title: 'Administrando y liderando personas en organizaciones',
      body: 'El emprendedor aprenderá acerca de: <strong>el poder del profesionalismo, gobierno corporativo, valuación de puestos y relaciones laborales y gestión del desempeño de empleados.</strong>',
    },
    {
      title: 'Toma de decisiones con base en escenarios financieros y fuentes alternativas de capital',
      body: 'En este módulo el emprendedor aprenderá acerca de los siguientes temas: <strong>bases de desarrollo, balance score card, planificación y análisis de escenarios & flujos, factores financieros críticos, fuentes alternativas de capital y requerimientos para inversión.</strong>',
    },
    {
      title: 'Comercialización',
      body: 'En este último módulo el participante aprenderá los principios de expansión que abarcan los siguientes temas: <strong>técnicas de ventas y negociación, alianzas estrategicas, comercio internacional, estrategias de comercialización y franquicias y sucursales.</strong>',
    },
  ]

  const detalles = [
    'Programa Online',
    '4 meses de duración',
    '18 sesiones de Mentoría',
    `${modulos.length} módulos formativos`,
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

<Formulario bind:open={openForm} />

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
        <img src="/images/evolution/bg1-2.svg" alt="" class="m-auto">
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
          <a href="#contenido" class="flex">
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
          <div class="mb-6 text-black t-h2 dark:text-white">Este programa es <br class="hidden lg:block">para ti si</div>
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
      <div class="flex flex-wrap w-full -my-6 lg:-my-12">
        {#each detalles as t, i}
          <div class="w-full py-6 lg:py-12 sm:w-1/3 animate" style="transition-delay: {100 * i + 800}ms">
            <img src="/images/evolution/detalles/{i + 1}.webp" alt="" class="h-12 mx-auto lg:h-16">
            <p class="mx-auto mt-6 font-bold text-center t-p lg:w-6/10">{t}</p>
          </div>
        {/each}
      </div>
      <div class="flex flex-col items-center justify-center w-full mx-auto mt-16 lg:flex-row animate" style="transition-delay: {100 * 8 + 800}ms">
        <img src="/images/evolution/detalles/logos.svg" alt="" class="h-12 mx-4">
      </div>
    </div>
  </V>

  <PC class="flex flex-wrap items-center py-16 content" let:offset id="contenido">
    <div class="w-full lg:w-1/2">
      <h2 class="mb-4 t-h3" style="font-weight: normal">Contenido del programa</h2>
      <h3 class="text-red-700 t-h1">¿Qué aprenderé en<br>este programa?</h3>
      <div class="flex flex-col mt-12 space-y-4">
        {#each modulos as m}
          <Accordion {...m} />
        {/each}
      </div>
    </div>
    <div class="relative w-full h-48 my-32 lg:my-8 lg:w-1/2 lg:pl-16 sm:h-96" style="--animate-x: 3rem">
      <P
        class="absolute bottom-0 shadow-xl w-6/10"
        {offset}
        negative
        scaleFactor={10}
        >
        <img src="/images/evolution/parallax3.webp" alt="" class="w-full">
      </P>
      <P
        class="absolute right-0 shadow-xl w-6/10"
        {offset}
        scaleFactor={10}
        >
        <img src="/images/evolution/parallax4.webp" alt="" class="w-full">
      </P>
    </div>
  </PC>

  <PC class="relative overflow-hidden" let:offset scaleFactor={10}>
    <P
      class="absolute w-full h-full bg-center bg-cover"
      motion={false}
      offset={offset}
      style="background-image: url(/images/evolution/bg4.webp); height: 110%"
    >
    </P>
    <V class="z-20 flex flex-col py-16 text-center content animate" oneWay style="--animate-s: 0.8">
      <p class="mx-auto mb-6 font-black leading-none text-white t-h2 transform">
      Apúntate ahora al programa<br>de aceleración empresarial
      </p>
      <p class="mx-auto text-center text-white transform t-p lg:w-8/10">
      Aprende todo lo necesario para potenciar el<br>crecimiento de tu negocio de forma rápida y rentable.
      </p>
      <button
        class="px-6 py-4 mx-auto mt-6 font-bold text-white rounded-full transform hover:scale-95 duration-200"
        style="background-color: #5CB540"
        on:click={openForm}
        >Solicitar info.</button
      >
    </V>
  </PC>
  <div class="w-full py-16">
    <div class="mb-12 text-center content">
      <h2 class="t-h3">Especialistas</h2>
      <div class="w-16 mx-auto my-4 bg-red-500" style="height: 4px"></div>
      <div class="text-black t-h2">9 mentores de primer<br>nivel a tu disposición</div>
    </div>
    <Especialistas titulo={false} programa={'evolution'} square noShadow />
  </div>
  <div class="mt-24 bg-red-500">
    <div class="flex flex-col-reverse lg:flex-row content-lg">
      <div class="flex flex-col w-full py-12 text-white lg:w-1/2">
        <h2 class="mx-auto text-center border-b-4 border-white t-h2">Precio del programa</h2>
        <div class="flex flex-wrap justify-between mt-12 space-y-6 lg:space-y-0">
          <img src="/images/evolution/preventa.webp" class="w-full lg:w-4/10" alt="">
          <img src="/images/evolution/venta.webp" class="w-full lg:w-4/10" alt="">
        </div>
      </div>
      <div class="z-20 w-full lg:w-1/2 transform">
        <img src="/images/evolution/surface.webp" alt="" class="-mt-24 lg:-my-24 lg:w-9/10 lg:ml-auto">
      </div>
    </div>
  </div>

  <PC class="relative overflow-hidden bg-black" let:offset scaleFactor={10}>
    <P
      class="absolute w-full h-full bg-black bg-center bg-no-repeat bg-cover"
      motion={false}
      offset={offset}
      style="background-image: linear-gradient(0deg, rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/images/evolution/bg-final.webp); background-size: 50%; height: 110%"
    >
    </P>
    <V class="z-10 flex flex-col py-16 text-center content animate" oneWay style="--animate-s: 0.8">
      <img src="/images/evolution/logo-final.webp" alt="" class="w-full mx-auto mb-6 lg:w-auto transform">
      <h2 class="t-h1 transform" style="color: #5CB540">Enciende la evolución<br>de tu empresa</h2>
      <p class="mx-auto mt-6 text-center text-white transform t-p lg:w-8/10">
      Reserva ahora tu cupo para el programa de aceleración empresarial<br>y dale rienda suelta a la evolución.
      </p>
      <button on:click={openForm} class="px-6 py-4 mx-auto mt-6 font-bold text-white rounded-full transform hover:scale-95 duration-200" style="background-color: #5CB540">Apúntate ahora</button>
    </V>
  </PC>
</div>
