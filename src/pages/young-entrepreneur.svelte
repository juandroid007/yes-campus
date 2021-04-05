<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import List from '/$components/pages/young/List.svelte'
  import V from '/$components/IntersectingViewport.svelte'
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
      title: 'El Descubrimiento',
      description: 'Descubre la magia de los mundos y las ideas sencillas para comenzar la ruta',
    },
    {
      title: 'La brújula',
      description: ' Comparte tus ideas, habla de tus sueños de emprender y declara tu propósito creativamente.',
    },
    {
      title: 'El trazado de la ruta',
      description: 'Comprende y reflexiona sobre las complejidades de tu emprendimiento, los problemas a los que da respuesta con tu oferta de productos y servicios.',
    },
    {
      title: 'Encuentra el tesoro',
      description: 'Encuentra un repertorio de casos y referencias entretenidas que te ayudarán a aprender divertida.',
    },
    {
      title: 'Subiendo la cuesta',
      description: 'Celebra la primera cima y practica tu mejor pitch, dando a relucir lo mejor de tu emprendimiento en la fiesta de los campistas.',
    },
  ]

  modulos.forEach((e, i) => {
    e.title = `Nivel ${i + 1}: ${e.title}`
  })

  const modulos2 = [
    {
      title: 'La dimensión creativa',
      description: '',
    },
    {
      title: 'El mundo de las Gemas',
      description: '',
    },
    {
      title: 'El Circo',
      description: '',
    },
    {
      title: 'Vamos al Cine',
      description: '',
    },
    {
      title: 'La Fiesta',
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
  <V class="bg-young-orange w-full relative overflow-hidden" style="background-image: url(/images/programas/young-entrepreneur/fondo.svg)">
    <div class="right-0 bottom-0 animate w-4/10 absolute hidden lg:block" style="--animate-y: 40%">
      <img src="/images/programas/young-entrepreneur/personajes.webp" alt="" class="w-full transform translate-y-6">
    </div>
    <div class="flex flex-wrap text-white py-16 pb-0 content lg:py-12">
      <div class="w-full animate lg:w-1/2" style="--animate-x: -3rem">
        <img src="/images/programas/young-entrepreneur/titulo.svg" alt="" class="mb-6 w-full w-8/10">
        <p class="mb-8 t-p">{description}</p>
        <div class="transform duration-200 hover:-translate-y-px">
          <button on:click={openForm} class="bg-gradient-to-r to-black rounded-full font-bold from-yes-gray-600 shadow text-white py-4 px-8 duration-200 hover:shadow-md">Quiero postularme</button>
        </div>
      </div>
    </div>
    <img src="/images/young/young-entrepreneur/personajes.webp" alt="" class="w-full transform animate translate-y-6 lg:hidden">
  </V>
  <div class="py-16 content">
    <h2 class="font-black text-center text-black mb-4 t-h1">Una expedición en el mundo digital</h2>
    <p class="text-center text-young-orange t-h3">Donde serás un expedicionista que busca llegar a la cumbre del emprendimiento</p>
  </div>

  <V class="flex flex-wrap pb-16 items-center content" oneWay>
    <div class="w-full animate lg:w-1/2" style="--animate-x: -3rem">
      <h2 class="border-young-orange rounded border-b-4 text-young-orange mb-4 w-full pb-2 t-h2">Young Entrepreneur</h2>
      <p class="mb-8 t-p">
        Es la inmersión en un mundo digital donde el participante se transforma en un expedicionista.
        Evalúa su fortaleza, rendimiento, y traza, con la ayuda de un grupo de sherpas, la ruta para iniciar
        el camino emprendedor, teniendo que alcanzar diversos niveles hasta llegar a la cima.
        En su andar, tendrá la oportunidad de conocer patrocinadores que estén dispuestos a apoyar su
        próxima expedición. Al llegar a la meta, su visión será otra y ya no estará solo, habrá encontrado
        que forma parte de un mundo ahora, más grande.
      </p>
      <div class="transform duration-200 hover:-translate-y-px">
        <a
          href="#detalles"
          class="bg-young-orange rounded-full font-bold shadow text-black py-4 px-8 duration-200 hover:shadow-md"
          >Conoce los detalles</a
        >
      </div>
    </div>
    <div class="w-full animate lg:w-1/2" style="--animate-x: -3rem">
      <img src="/images/programas/young-entrepreneur/simbolo.svg" alt="" class="mx-auto ml-auto pt-16 w-7/10 lg:mr-0 lg:pt-0 lg:w-4/10">
    </div>
  </V>

  <div class="mb-16 content" id="detalles">
    <V class="bg-gradient-to-r to-black flex flex-col from-gray-600 shadow-lg w-full px-6 animate overflow-hidden sm:flex-row sm:justify-between" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      {#each iconografia as s, i}
        <div class="text-white w-full py-4 animate md:w-1/4" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/young/iconografia/{i + 1}.svg" alt="" class="mx-auto mb-4 w-full w-6/10 sm:w-7/10">
          <p class="font-bold text-lg text-center">{@html s}</p>
        </div>
      {/each}
    </V>
  </div>

  <V class="flex flex-wrap-reverse pb-16 items-center content" oneWay>
    <div class="w-full animate lg:w-1/2" style="--animate-x: 3rem">
      <img src="/images/young/perfil.png" alt="" class="w-full pt-16 lg:pt-0 lg:w-8/10">
    </div>
    <div class="w-full animate lg:pl-24 lg:w-1/2" style="--animate-x: 3rem">
      <h2 class="border-young-orange rounded border-b-4 text-young-orange mb-4 w-full pb-2 t-h2">Este programa es para</h2>
      <ul class="list-disc pl-12 t-p">
        <li>Jóvenes entre 16 y 25 años, dispuestos a vivir experiencias de aprendizaje y acción</li>
        <li>Animados a colaborar en la construcción de un mundo mejor.</li>
        <li>Deseosos de probar su resistencia y construir una ruta para su futuro emprendedor.</li>
        <li>Curisosos, creativos e innovadores, con ideas potentes y que buscan oportunidades para su desarrollo.</li>
        <li>Dispuestos a iniciar una expedición y llegar a la meta.</li>
      </ul>
    </div>
  </V>

  <!--div class="mb-16 content">
    <V class="bg-gradient-to-r to-black flex flex-col from-gray-600 shadow-lg text-white w-full px-6 animate" style="border-radius: 3rem; - -animate-r-y: 64deg" oneWay>
      <h2 class="my-4 text-center t-h2">Fases del programa</h2>
      <div class="flex w-full px-6 hidden sm:flex sm:flex-row sm:justify-center">
        <div class="py-4 animate" style="transition-delay: {100 * 0 + 400}ms; - -animate-y: 0.5rem; - -animate-r-y: 0deg; - -animate-r-x: -64deg">
          <img src="/images/leaders/fases/fase1.png" alt="" class="mx-auto h-36 mb-4 px-4 xxl:h-56 lg:h-48">
        </div>
        <div class="py-4 animate" style="transition-delay: {100 * 1 + 400}ms; - -animate-y: 0.5rem; - -animate-r-y: 0deg; - -animate-r-x: -64deg">
          <img src="/images/leaders/fases/fase2.png" alt="" class="mx-auto h-40 mb-4 px-4 xxl:h-60 lg:h-52">
        </div>
      </div>
      <div class="flex flex-col w-full px-6 pt-4 sm:flex-row sm:hidden sm:justify-between">
        {#each fases as s, i}
          {#if i == 0}
            <p class="font-bold text-center text-white animate t-h3">Fase 1</p>
          {:else if i == 2}
            <p class="font-bold text-center text-white animate t-h3">Fase 2</p>
          {/if}
          <div class="text-young-orange w-full py-6 animate md:w-1/4" style="transition-delay: {100 * i + 400}ms; - -animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
            <img src="/images/leaders/fases/{i + 1}.svg" alt="" class="mx-auto mb-4 w-full w-6/10 sm:w-5/10">
            <p class="text-center t-h3">{@html s}</p>
          </div>
        {/each}
      </div>
    </V>
  </div-->

  <V class="flex flex-wrap py-16 items-center content" oneWay>
    <div class="w-full animate lg:w-1/2" style="--animate-x: -2rem">
      <div class="flex mb-8 items-center">
        <div class="bg-yes-gray-500 mr-4 w-24 dark:bg-gray-300" style="height: 1px"></div>
        <h2 class="font-light t-p" style="line-height: 0">5 niveles formativos</h2>
      </div>
      <List elements={modulos} bind:index={modulos1} />
    </div>
    <div class="w-full animate lg:w-1/2" style="--animate-x: 2rem; --animate-y: -2rem; --animate-r: 1deg">
      <div class="my-6 w-full overflow-hidden modulos1-wrapper lg:ml-auto lg:w-8/10">
        {#each [modulos[modulos1]] as _, i (modulos1)}
          <div class="modulos1-img" in:fly|local={{x: 100}} out:fly|local={{x: -100, opacity: 0.8}}>
            <img src="/images/young/niveles/{modulos1 + 1}.svg" alt="" class="h-full object-cover w-full">
          </div>
        {/each}
      </div>
    </div>
  </V>

  <!--PC class="relative overflow-hidden" let:offset scaleFactor={10}>
    <P
      class="bg-center bg-cover h-full w-full absolute"
      motion={false}
      offset={offset}
      style="background-image: url(/images/leaders/challenge.webp); height: 110%"
    >
    </P>
    <V class="flex flex-col text-center py-16 pt-24 animate z-20 content" oneWay style="- -animate-s: 0.8">
      <img src="/images/leaders/challenge-titulo.svg" alt="#Challenge" class="h-16 mb-4 transform">
      <p class="font-black mx-auto text-white mb-6 leading-none transform text-4xl uppercase lg:text-6xl">
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
  </PC-->

  <V class="flex flex-wrap py-16 items-center content" oneWay>
    <div class="w-full animate lg:w-1/2" style="--animate-x: -2rem">
      <h2 class="border-young-orange rounded border-b-4 text-young-orange mb-4 w-full pb-2 t-h2">Espacios de Networking</h2>
      <p class="mb-8 t-p">
        Bajo el ambiente de realidad virtual y como si estuviera
        completando niveles de un videojuego, el participante
        tendrá la oportunidad de incluir en su mochila de viaje
        poderes adicionales que le permitirán desarrollar nuevas competencias
        individuales y se enfrentará a retos en equipo, donde
        además le permitirá co-crear de manera colaborativa
        soluciones para llegar a un próximo nivel.
      </p>
      <div class="transform duration-200 hover:-translate-y-px">
        <button
          on:click={openForm}
          class="bg-young-orange rounded-full font-bold shadow text-black py-4 px-8 duration-200 hover:shadow-md"
          >Postúlate aquí</button
        >
      </div>
    </div>
    <div class="w-full pt-16 animate lg:pt-0 lg:pl-16 lg:w-1/2" style="--animate-x: 2rem">
      <div class="flex mb-8 items-center">
        <div class="bg-yes-gray-500 mr-4 w-24 dark:bg-gray-300" style="height: 1px"></div>
        <h2 class="font-light t-p" style="line-height: 0">5 espacios de networking</h2>
      </div>
      <List elements={modulos2} />
    </div>
  </V>

  <div class="w-full">
    <h2 class="text-center text-black mb-12 t-h2">Facilitadores del Bootcamp</h2>
    <Especialistas titulo={false} programa="young-entrepeneur" />
  </div>

  <div class="mt-12 text-black w-full" id="aliados">
    <div class="py-12 content">
      <V class="overflow-hidden" oneWay>
        <h2 class="text-center animate t-h2" style="line-height: 1.5 !important; --animate-r: 3deg; --animate-y: 100%">Organizaciones que hacen posible el Bootcamp</h2>
        <p class="text-center text-young-orange pb-2 animate t-h3" style="transition-delay: 200ms; --animate-r: 3deg; --animate-y: 100%">Young Entrepreneur es posible gracias a</p>
      </V>
      <V class="flex flex-wrap items-center" oneWay>
        {#each aliados as c, i}
          <div class="flex mx-auto mt-2 p-6 animate w-1/2 lg:w-1/4" style="transition-delay: {50 * i + 500}ms">
            <img src="/images/leaders/aliados/{c}.webp" alt="" class="m-auto w-auto transform duration-200 grayscale hover:scale-110" style="max-height: 6rem">
          </div>
        {/each}
      </V>
    </div>
  </div>
  <V class="bg-yes-gray-100" oneWay>
    <div class="flex flex-col-reverse py-16 items-center italic content t-p lg:flex-row">
      <p class="w-full animate lg:w-1/2" style="--animate-x: -3rem">
      <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización cuidan el equilibrio en la conformación de sus equipos de trabajo y participantes en sus actividades, por lo tanto se asegura la participación equitativa entre hombres y mujeres en cada una de las fases del programa Young Entrepreneur, tanto en la selección de speaker, facilitadores y participantes beneficiarios del programa.
      </p>
      <div class="flex w-full pb-16 animate justify-center lg:pb-0 lg:pl-16 lg:w-1/2" style="--animate-x: 3rem">
        <img src="/images/logo.svg" alt="" class="w-72">
      </div>
    </div>
  </V>
</div>
