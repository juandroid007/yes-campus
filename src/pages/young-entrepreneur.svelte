<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import List from '/$components/pages/leaders/List.svelte'
  import V from '/$components/IntersectingViewport.svelte'
  import PC from '/$components/motion/ParallaxContainer.svelte'
  import P from '/$components/motion/ParallaxObject.svelte'
  import Especialistas from '/$components/pages/home/Profesores.svelte'
  import Formulario from '/$components/pages/leaders/Formulario.svelte'
  import { fly } from 'svelte/transition'

  const description = 'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.'

  let openForm

  metatags.title = 'Young Entrepreneur | ' + svitsConfig.name
  metatags.description = description

  const aliados = [
    'aye',
    'yes',
    '1001',
    'ashoka',
    'vayalo',
    'esperanza',
    'kala',
    'compromiso',
  ]

  const iconografia = [
    'Bootcamp para jóvenes emprendedores',
    'Módulos formativos online',
    'Facilitadores de 1er nivel',
    'Posibilidad para captar capital semilla en el "Cazón Tank"',
  ]

  const fases = [
    'Convocatoria y selección',
    'Ciclo de Webinars',
    '#Challenge "Ideas por el Cambio"',
    'Workshop "Liderazgo Trascendental"',
    'Selección de los ganadores del capital semilla',
  ]

  const modulos = [
    {
      title: 'Rol de la juventud y la democracia',
      description: 'y su participación ciudadana',
    },
    {
      title: 'El poder de una visión y la construcción de cambios',
      description: 'a partir de la búsqueda de soluciones a problemas locales',
    },
    {
      title: 'Herramientas para el desarrollo de habilidades ágiles',
      description: 'en los líderes jóvenes ante situaciones complejas',
    },
    {
      title: 'Activismo social, participación política y ciudadana',
      description: 'a través de los medios digitales',
    },
    {
      title: 'Cambio sistémico y participación ciudadana',
      description: 'en atención a los ODS 2030',
    },
  ]

  const modulos2 = [
    {
      title: 'Agilismo',
      description: 'para líderes transformadores',
    },
    {
      title: 'Construcción de mapa de mapa de incidencia',
      description: 'y tablero de control',
    },
    {
      title: 'Gestión de proyectos y gobernanzas',
      description: '',
    },
    {
      title: 'Sostenibilidad y estrategias para la autogestión',
      description: '',
    },
    {
      title: 'Articulación y comunicación de impacto',
      description: '',
    },
  ]

  let modulos1
</script>

<style>
  .modulos1-wrapper {
    overflow: hidden;
    display: grid;
    align-items: start;
  }

  .modulos1-img {
    grid-column: 1/2;
    grid-row: 1/2 relative;
  }

  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -1px 0 white)
        drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>

<Formulario bind:open={openForm} />

<div class="w-full overflow-hidden">
  <V class="relative w-full overflow-hidden bg-young-orange" style="background-image: url(/images/programas/young-entrepreneur/fondo.svg)">
    <div class="absolute bottom-0 right-0 hidden animate lg:block w-4/10" style="--animate-y: 40%">
      <img src="/images/programas/young-entrepreneur/personajes.webp" alt="" class="w-full transform translate-y-6">
    </div>
    <div class="flex flex-wrap py-16 pb-0 text-white lg:py-12 content">
      <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
        <img src="/images/programas/young-entrepreneur/titulo.svg" alt="" class="w-full mb-6 w-8/10">
        <p class="mb-8 t-p">{description}</p>
        <div class="transform hover:-translate-y-px duration-200">
          <button on:click={openForm} class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md bg-gradient-to-r from-yes-gray-600 to-black">Quiero postularme</button>
        </div>
      </div>
    </div>
    <img src="/images/leaders/bg1.webp" alt="" class="w-full lg:hidden transform translate-y-6 animate">
  </V>
  <div class="py-16 content">
    <h2 class="mb-4 font-black text-center text-black t-h1">Una expedición en el mundo digital</h2>
    <p class="text-center t-h3 text-young-orange">Donde serás un expedicionista que busca llegar a la cumbre del emprendimiento</p>
  </div>

  <V class="flex flex-wrap items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-young-orange border-young-orange">Young Entrepreneur</h2>
      <p class="mb-8 t-p">
      Es una inmersión en un mundo digital donde el participante se transforma en un expedicionista, evalúa su
      fortaleza, rendimiento y traza, con la ayuda de un grupo de sherpas, una ruta para iniciar el camino
      emprendedor, teniendo que alcanzar diversos niveles hasta llegar a la cima. En el camino conocerá a otros
      expedicionistas con los cuales se divertirá, aprenderá y trabajará para superar los obstáculos y encontrar
      su propio ritmo de llegar a la meta; en su andar, tendrá la oportunidad de conocer patrocinantes que
      estén dispuestos a apoyar su próxima expedición y en todo momento se sentirá acompañado por los
      mejores. Al llegar a la meta, su visión será otra y ya no estará solo, habrá encontrado que forma parte de
      un mundo ahora mas grande.
      </p>
      <div class="transform hover:-translate-y-px duration-200">
        <a
          href="#detalles"
          class="px-8 py-4 font-bold text-black rounded-full shadow duration-200 hover:shadow-md bg-young-orange"
          >Conoce los detalles</a
        >
      </div>
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <img src="/images/programas/young-entrepreneur/simbolo.svg" alt="" class="pt-16 mx-auto ml-auto lg:mr-0 lg:pt-0 w-7/10 lg:w-4/10">
    </div>
  </V>

  <div class="mb-16 content" id="detalles">
    <V class="flex flex-col w-full px-6 overflow-hidden shadow-lg sm:flex-row sm:justify-between bg-gradient-to-r from-gray-600 to-black animate" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      {#each iconografia as s, i}
        <div class="w-full py-4 text-white md:w-1/4 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/leaders/iconografia/{i + 1}.svg" alt="" class="w-full mx-auto mb-4 w-6/10 sm:w-7/10">
          <p class="text-lg font-bold text-center">{@html s}</p>
        </div>
      {/each}
    </V>
  </div>

  <V class="flex flex-wrap-reverse items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 3rem">
      <img src="/images/leaders/king.webp" alt="" class="w-full pt-16 lg:pt-0">
    </div>
    <div class="w-full lg:w-1/2 animate lg:pl-24" style="--animate-x: 3rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-young-orange border-young-orange">Este programa es para</h2>
      <ul class="pl-12 list-disc t-p">
        <li>Jóvenes entre 16 y 25 años, dispuestos a vivir experiencias de aprendizaje y acción</li>
        <li>Animados a colaborar en la construcción de un mundo mejor.</li>
        <li>Deseosos de probar su resistencia y construir una ruta para su futuro emprendedor.</li>
        <li>Curisosos, creativos e innovadores, con ideas potentes y que buscan oportunidades para su desarrollo.</li>
        <li>Dispuestos a iniciar una expedición y llegar a la meta.</li>
      </ul>
    </div>
  </V>

  <div class="mb-16 content">
    <V class="flex flex-col w-full px-6 text-white shadow-lg bg-gradient-to-r from-gray-600 to-black animate" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      <h2 class="my-4 text-center t-h2">Fases del programa</h2>
      <div class="flex hidden w-full px-6 sm:flex sm:flex-row sm:justify-center">
        <div class="py-4 animate" style="transition-delay: {100 * 0 + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/leaders/fases/fase1.png" alt="" class="px-4 mx-auto mb-4 h-36 lg:h-48 xxl:h-56">
        </div>
        <div class="py-4 animate" style="transition-delay: {100 * 1 + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/leaders/fases/fase2.png" alt="" class="h-40 px-4 mx-auto mb-4 lg:h-52 xxl:h-60">
        </div>
      </div>
      <div class="flex flex-col w-full px-6 pt-4 sm:hidden sm:flex-row sm:justify-between">
        {#each fases as s, i}
          {#if i == 0}
            <p class="font-bold text-center text-white t-h3 animate">Fase 1</p>
          {:else if i == 2}
            <p class="font-bold text-center text-white t-h3 animate">Fase 2</p>
          {/if}
          <div class="w-full py-6 text-leaders-sky md:w-1/4 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
            <img src="/images/leaders/fases/{i + 1}.svg" alt="" class="w-full mx-auto mb-4 w-6/10 sm:w-5/10">
            <p class="text-center t-h3">{@html s}</p>
          </div>
        {/each}
      </div>
    </V>
  </div>

  <V class="flex flex-wrap items-center py-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -2rem">
      <div class="flex items-center mb-8">
        <div class="w-24 mr-4 bg-yes-gray-500 dark:bg-gray-300" style="height: 1px"></div>
        <h2 class="font-light t-p" style="line-height: 0">6 módulos formativos</h2>
      </div>
      <List elements={modulos} bind:index={modulos1} />
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 2rem; --animate-y: -2rem; --animate-r: 1deg">
      <div class="w-full my-6 overflow-hidden modulos1-wrapper lg:w-8/10 lg:ml-auto">
        {#each [modulos[modulos1]] as _, i (modulos1)}
          <div class="modulos1-img" in:fly|local={{x: 100}} out:fly|local={{x: -100, opacity: 0.8}}>
            <img src="/images/leaders/modulos1/{modulos1 + 1}.webp" alt="" class="w-full">
          </div>
        {/each}
      </div>
    </div>
  </V>

  <PC class="relative overflow-hidden" let:offset scaleFactor={10}>
    <P
      class="absolute w-full h-full bg-center bg-cover"
      motion={false}
      offset={offset}
      style="background-image: url(/images/leaders/challenge.webp); height: 110%"
    >
    </P>
    <V class="z-20 flex flex-col py-16 pt-24 text-center content animate" oneWay style="--animate-s: 0.8">
      <img src="/images/leaders/challenge-titulo.svg" alt="#Challenge" class="h-16 mb-4 transform">
      <p class="mx-auto mb-6 text-4xl font-black leading-none text-white uppercase lg:text-6xl transform">
      Ideas por el cambio
      </p>
      <p class="mx-auto text-center text-white transform t-p lg:w-8/10">
      <strong>IDEAS POR EL CAMBIO</strong>, es un <strong>#challenge</strong> donde los 200 participantes iniciales, construyen y postulan
      iniciativas para la promoción de la democracia, construcción de una visión de cambio y promueven
      la articulación, el activismo y la incidencia pública basada en innovación social, del challenge son
      seleccionados 10 micro proyectos, los cuales son financiados con un capital semilla para la
      implementación de dichas iniciativas, que buscan elevar el nivel de participación e interés de los
      jóvenes venezolanos en los temas gobernabilidad, desarrollo, articulación social y cambio sistémico
      </p>
    </V>
  </PC>

  <V class="flex flex-wrap items-center py-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -2rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-leaders-sky border-leaders-sky">Liderazgo Trascendental</h2>
      <p class="pb-2 mb-4 t-h3 text-leaders-sky" style="font-weight: 300">Workshop</p>
      <p class="mb-8 t-p">
      El workshop tiene como objetivo fortalecer las
      herramientas de trabajo colaborativo y gestión de
      proyectos en los grupos o proyectos que resulten
      ganadores del challenge, pudiendo participar un
      máximo de 3 participantes por iniciativa para un
      total de 30 participantes.
      </p>
      <div class="transform hover:-translate-y-px duration-200">
        <button
          on:click={openForm}
          class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md bg-leaders-sky"
          >Postúlate aquí</button
        >
      </div>
    </div>
    <div class="w-full pt-16 lg:pt-0 lg:w-1/2 animate lg:pl-16" style="--animate-x: 2rem">
      <div class="flex items-center mb-8">
        <div class="w-24 mr-4 bg-yes-gray-500 dark:bg-gray-300" style="height: 1px"></div>
        <h2 class="font-light t-p" style="line-height: 0">5 módulos formativos</h2>
      </div>
      <List elements={modulos2} />
    </div>
  </V>

  <div class="w-full">
    <h2 class="mb-12 text-center text-black t-h2">Facilitadores del Bootcamp</h2>
    <Especialistas titulo={false} programa="young-leaders" />
  </div>

  <div class="w-full mt-12 text-black" id="aliados">
    <div class="py-12 content">
      <V class="overflow-hidden" oneWay>
        <h2 class="text-center t-h2 animate" style="line-height: 1.5 !important; --animate-r: 3deg; --animate-y: 100%">Organizaciones que hacen posible el Bootcamp</h2>
        <p class="pb-2 text-center t-h3 animate text-young-orange" style="transition-delay: 200ms; --animate-r: 3deg; --animate-y: 100%">Young Entrepreneur es posible gracias a</p>
      </V>
      <V class="flex flex-wrap items-center" oneWay>
        {#each aliados as c, i}
          <div class="flex w-1/2 p-6 mx-auto mt-2 animate lg:w-1/4" style="transition-delay: {50 * i + 500}ms">
            <img src="/images/leaders/aliados/{c}.webp" alt="" class="w-auto m-auto grayscale duration-200 hover:scale-110 transform" style="max-height: 6rem">
          </div>
        {/each}
      </V>
    </div>
  </div>
  <V class="bg-yes-gray-100" oneWay>
    <div class="flex flex-col-reverse items-center py-16 italic lg:flex-row content t-p">
      <p class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización cuidan el equilibrio en la conformación de sus equipos de trabajo y participantes en sus actividades, por lo tanto se asegura la participación equitativa entre hombres y mujeres en cada una de las fases del programa Young Leaders, tanto en la selección de speaker, facilitadores y participantes beneficiarios del programa.
      </p>
      <div class="flex justify-center w-full pb-16 lg:w-1/2 lg:pb-0 lg:pl-16 animate" style="--animate-x: 3rem">
        <img src="/images/logo.svg" alt="" class="w-72">
      </div>
    </div>
  </V>
</div>
