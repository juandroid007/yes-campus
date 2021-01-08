<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import Wave from '../components/motion/Wave.svelte'
  import { inZone } from '../components/pages/home/ZonaOscura.svelte'
  import V from '../components/IntersectingViewport.svelte'
  import Testimonios from '../components/pages/home/Testimonio.svelte'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import { fly } from 'svelte/transition'

  const description = 'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.'

  metatags.title = 'Young Leaders | ' + svitsConfig.name
  metatags.description = description

  const iconografia = [
    '200 Jóvenes Líderes',
    '6 módulos informativos Online',
    '1 workshop "Liderazgo Trascendental"',
    'Capital semilla para 10 micro proyectos',
  ]
</script>

<style>
  .parallax {
    background-size: cover;
    background-position: center;
  }

  .text-stroke {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: currentColor;
    opacity: 0.5;
    -webkit-font-smoothing: none;
  }

  pre {
    color: inherit;
  }

  :global(.tarjetas) {
    height: 85vh;
  }

  :global(.quienes-somos) {
    width: 100%;
  }

  @screen lg {
    :global(.tarjetas) {
      width: 50%;
    }

    :global(.quienes-somos) {
      width: 50%;
    }
  }

  @screen xxl {
    :global(.tarjetas) {
      width: 33.33%;
      height: 60vh;
    }

    :global(.quienes-somos) {
      width: 66.66%;
    }
  }

  @screen md {
    .valores {
      height: 150vh;
    }
  }
</style>

<div class="w-full overflow-x-hidden">
  <V class="relative w-full overflow-hidden bg-leaders-sky">
    <div class="absolute bottom-0 right-0 hidden animate lg:block w-4/10" style="--animate-y: 40%">
      <img src="/images/leaders/bg1.webp" alt="" class="w-full transform translate-y-6">
    </div>
    <div class="flex flex-wrap py-16 pb-0 text-white lg:py-16 content">
      <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
        <img src="/images/leaders/titulo.svg" alt="" class="w-full mb-6 lg:-ml-4">
        <p class="mb-8 t-p">{description}</p>
        <div class="transform hover:-translate-y-px duration-200">
          <a href="" class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md bg-leaders-yellow">Quiero postularme</a>
        </div>
      </div>
    </div>
    <img src="/images/leaders/bg1.webp" alt="" class="w-full lg:hidden transform translate-y-6 animate">
  </V>
  <div class="py-16 content">
    <h2 class="mb-4 text-center t-h1 text-leaders-yellow">Creemos y apostamos en jóvenes líderes como tú.</h2>
    <p class="text-center t-h3 text-leaders-sky">Descubre cómo ser un agente de cambio y de alto impacto.</p>
  </div>

  <V class="flex flex-wrap items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-leaders-yellow border-leaders-yellow">Potencia tu liderazgo</h2>
      <p class="mb-8 t-p">
      Young Leaders es un programa de desarrollo de competencias de
      liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento
      institucional de las organizaciones lideradas por jóvenes emprendedores y
      estudiantes, mediante la combinación de un programa de formación modular,
      los cuales se realizan a través de webinars y un workshop que les permite
      poner en práctica los conocimientos adquiridos para pasar a una segunda fase.
      </p>
      <div class="transform hover:-translate-y-px duration-200">
        <a
          href=""
          class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md bg-leaders-yellow"
          >Conoce los detalles</a
        >
      </div>
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <img src="/images/leaders/logo.svg" alt="" class="pt-16 ml-auto lg:pt-0 w-5/10">
    </div>
  </V>

  <div class="mb-16 content">
    <V class="flex flex-col w-full px-6 overflow-hidden shadow-lg sm:flex-row sm:justify-between bg-leaders-blue animate" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      {#each iconografia as s, i}
        <div class="w-full py-12 text-white md:w-1/4 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/leaders/iconografia/{i + 1}.svg" alt="" class="w-full mx-auto mb-4 w-6/10 sm:w-5/10">
          <p class="text-center t-h3">{@html s}</p>
        </div>
      {/each}
    </V>
  </div>

  <V class="flex flex-wrap-reverse items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 3rem">
      <img src="/images/leaders/king.webp" alt="" class="w-full pt-16 lg:pt-0 w-9/10">
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 3rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-leaders-yellow border-leaders-yellow">Este programa es para tí, si</h2>
      <ul class="pl-12 list-disc t-p">
        <li>Eres venezolano(a).</li>
        <li>Tienes entre 17 y 26 años de edad.</li>
        <li>Eres estudiante o emprendedor social.</li>
        <li>Te interesan temas como gobernabilidad,
          participación ciudadana, activismo social,
          politica, innovación social.</li>
        <li>Deseas obtener capital semilla para mate-
          rializar tu proyecto, particiando en nuestro
          <strong>#Challenge “Ideas para el cambio”</strong>.</li>
      </ul>
    </div>
  </V>

  <div class="hidden mb-16 content">
    <V class="flex flex-col w-full px-6 shadow-lg bg-leaders-yellow animate" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      <h2 class="my-6 text-center text-leaders-sky t-h2">Fases del programa</h2>
      <div class="flex flex-col w-full px-6 sm:flex-row sm:justify-between">
        {#each iconografia as s, i}
          <div class="w-full py-12 text-leaders-sky md:w-1/4 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
            <img src="/images/leaders/iconografia/{i + 1}.svg" alt="" class="w-full mx-auto mb-4 w-6/10 sm:w-5/10">
            <p class="text-center t-h3">{@html s}</p>
          </div>
        {/each}
      </div>
    </V>
  </div>
</div>
