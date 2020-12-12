<script>
  import { height } from '../components/navigation/Navbar.svelte'
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import Wave from '../components/motion/Wave.svelte'
  import { inZone } from '../components/pages/home/ZonaOscura.svelte'
  import V from '../components/IntersectingViewport.svelte'
  import Testimonios from '../components/pages/home/Testimonio.svelte'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import { fly } from 'svelte/transition'

  metatags.title = 'Nosotros | ' + svitsConfig.name
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

<div class="w-full overflow-x-hidden" style="perspective: 4px">
  <div
    class="flex py-16 content-lg"
    style="min-height: calc(70vh - {$height}px)"
    in:fly={{x: -100, duration: 1000, delay: 200}}
  >
    <div class="my-auto">
      <h1 class="mb-6 text-5xl font-bold leading-none md:text-6xl font-title">Innovation for Entrepeneurs</h1>
      <p class="text-3xl font-bold leading-none md:text-4xl font-title">Acerca de YES Campus</p>
    </div>
  </div>
  <PC let:offset class="relative overflow-hidden">
    <div
      class="absolute z-10 w-full h-full shadow-inner"
      ></div
    >
    <div
      class="absolute z-10 w-full h-full shadow-inner transform rotate-180"
      ></div
    >
    <P
      offset={offset}
      class="flex w-full"
      style="height: 90vh"
      motion={false}
      scaleFactor={6}
    >
      <div
        class="w-full h-full parallax"
        style="background-image: url(/images/bg.webp), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        ></div
      >
    </P>
  </PC>
  <V class="flex flex-col py-16 mt-24 md:flex-row content animate" style="--animate-x: -3rem" oneWay>
    <div class="w-full mb-6 md:w-1/2">
    <h2 class="t-h3 animate font-title">Nuestra visión</h2>
    </div>
    <div class="w-full">
      <p class="font-light t-p font-title md:text-justify">
      Ser reconocidos como la red de aprendizaje e innovación para emprendendedores y líderes latinoamericanos de alto impacto.
      </p>
    </div>
  </V>
  <V class="flex flex-col py-16 md:flex-row-reverse content animate" style="--animate-x: 3rem" oneWay>
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="t-h3 md:text-right animate">Nuestra misión</h2>
    </div>
    <div class="w-full">
      <p class="font-light t-p md:text-justify">
      Ofrecer espacios de aprendizaje, networking y negocios para el fortalecimiento de competencias en emprendimiento, liderazgo e innovación al servicio de personas y organizaciones con deseos de impacto en el logro de sus propósitos y el desarrollo sostenible.
      </p>
    </div>
  </V>

  <PC class="relative -mx-6 overflow-hidden text-xl sm:text-4xl sm:-mx-14 lg:-mx-24 lg:text-5xl" let:offset>
    <div class="transform -translate-x-12">
      <P class="flex py-4" offset={offset} horizontal scaleFactor={8} negative>
        <pre class="px-6 font-sans font-bold text-stroke sm:px-14 lg:px-24">Ecosistema</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Emprendimiento</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Financiamiento</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Ecosistema</pre>
      </P>
      <P class="flex py-4" offset={offset} horizontal scaleFactor={6} negative>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Networking</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Aprendizaje</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Aceleración</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Networking</pre>
      </P>
      <P class="flex py-4" offset={offset} horizontal scaleFactor={4} negative>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Financiamiento</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Ecosistema</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Emprendimiento</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Financiamiento</pre>
      </P>
      <P class="flex py-4" offset={offset} horizontal scaleFactor={3} negative>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Aprendizaje</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Networking</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 font-title">Networking</pre>
        <pre class="px-6 font-bold sm:px-14 lg:px-24 text-stroke font-title">Aprendizaje</pre>
      </P>
    </div>
  </PC>

  <div class="flex flex-wrap items-center py-32 content">
    <V class="relative hidden tarjetas lg:flex animate" style="--animate-x: -3rem; --animate-y: -3rem" oneWay>
      <div class="absolute w-full h-2/10 bg-gradient-to-b from-white dark:from-yes-gray-900 to-transparent"></div>
      <div class="absolute bottom-0 w-full h-2/10 bg-gradient-to-t from-white dark:from-yes-gray-900 to-transparent"></div>
      <PC class="relative w-full h-full overflow-hidden -z-10" let:offset>
        <P
          class="absolute ml-6 overflow-hidden bg-gray-500 shadow-xl mt-28 w-52 h-80 rounded-xl"
          offset={offset}
          scaleFactor={6}
        >
          <PC let:offset class="w-full h-full">
            <P class="w-full" offset={offset} motion={false} style="height: 130%" scaleFactor={8}>
              <div class="w-full h-full bg-cover" style='background-image: url("/images/1_quienes somos.png")'>
              </div>
            </P>
          </PC>
        <!--img src="/images/uploads/juan-camilo.webp" alt="" class="object-cover object-top w-full h-full"-->
        </P>
        <P
          class="absolute right-0 mt-16 mr-6 overflow-hidden bg-gray-500 shadow-xl w-52 h-80 rounded-xl"
          offset={offset}
          scaleFactor={3}
        >
          <PC let:offset class="w-full h-full">
            <P class="w-full" offset={offset} motion={false} style="height: 130%" scaleFactor={7}>
              <div class="w-full h-full bg-cover" style='background-image: url("/images/2_quienes somos.png")'>
              </div>
            </P>
          </PC>
        <!--img src="/images/uploads/juan-camilo.webp" alt="" class="object-cover object-top w-full h-full"-->
        </P>
        <div class="absolute bottom-0 mb-16 mr-12 w-52 left-2/4 transform -translate-x-1/2">
        <P
          class="overflow-hidden bg-gray-500 shadow-xl w-52 h-80 rounded-xl"
          offset={offset}
          negative
          scaleFactor={3}
        >
          <PC let:offset class="w-full h-full">
            <P class="w-full" offset={offset} motion={false} style="height: 130%" scaleFactor={7}>
              <div class="w-full h-full bg-cover" style='background-image: url("/images/3_quienes somos.png")'>
              </div>
            </P>
          </PC>
        <!--img src="/images/desarrollo.jpg" alt="" class="object-cover object-right-top w-full h-full"-->
        </P>
        </div>
      </PC>
    </V>
    <V class="quienes-somos lg:pl-6 animate" style="--animate-x: 3rem; --animate-y: -3rem" oneWay>
      <h2 class="mb-6 t-h2 animate">¿Quiénes somos?</h2>
      <p class="mb-6 font-light t-p md:text-justify">
      Somos una comunidad de profesionales creativos que trabajamos bajo el concepto de ecosistema y te invitamos a aprender y emprender junto a nosotros de manera ágil, divertida, innovadora y con impacto.
      </p>
      <h3 class="text-sm italic font-light md:text-right md:pl-16">
        Aprendizaje Acelerado para personas y organizaciones emprendedoras
      </h3>
    </V>
  </div>

  <div class="pb-16 content">
    <V oneWay style="--animate-y: -2rem">
      <h2 class="mb-6 t-h2 md:text-center font-title animate">
        Apostamos al trabajo colaborativo<br>y la búsqueda del bien común
      </h2>
    </V>
    <div class="flex flex-wrap py-16 -m-6 valores">
      <V class="p-6 md:w-1/3 animate" style="--animate-x: -2rem" oneWay>
        <img src="/images/nosotros/innovacion.svg" class="mb-6 w-7/10" alt="">
        <h2 class="mb-4 t-h3">
          Innovación
        </h2>
        <p class="font-light t-p">
        Estimulamos la mejora continua y agregamos valor
        </p>
      </V>
      <V class="self-center p-6 md:w-1/3 justify-self-center animate" style="--animate-y: -2rem" oneWay>
        <img src="/images/nosotros/agilidad.svg" class="mb-6 w-7/10" alt="">
        <h2 class="mb-4 t-h3">
          Agilidad
        </h2>
        <p class="font-light t-p">
        Buscamos Soluciones agíles a problemas complejos
        </p>
      </V>
      <V class="self-end p-6 md:w-1/3 justify-self-end animate" style="--animate-x: 2rem" oneWay>
        <img src="/images/nosotros/multiculturalidad.svg" class="mb-6 w-7/10" alt="">
        <h2 class="mb-4 t-h3">
          Multiculturalidad
        </h2>
        <p class="font-light t-p">
        Nos nutrimos de la diversidad y  co creamos de manera disruptiva y divertida
        </p>
      </V>
    </div>
  </div>
  <Wave color="#0273E3" time="10s"/>
  <V bind:intersecting={$inZone}>
    <div class="text-white bg-yes-blue-500">
      <V class="py-12 italic font-light content lg:w-5/10 animate t-p md:text-justify" oneWay style="--animate-x: -2rem">
        <h2 class="mb-6 not-italic font-bold md:text-left t-h1 font-title">El Manifiesto YES Campus</h2>
        <p class="mt-12 mb-4">
        &ldquo;Pertenezco a una comunidad donde me reconozco y me reconocen, valoramos el compartir ameno y entretenido, donde la creatividad nos lleva a desafíos individuales y colectivos para lograr un mundo más humano, participativo e igualitario.
        </p>
        <p class="mb-4">
        Compartimos el espíritu emprendedor, somos agentes de cambio que sirven desde la integridad, el respeto y la pluralidad, a personas, organizaciones y sociedades que buscan alcanzar su propósito, bienestar y promover el desarrollo sostenible.
        </p>
        <p class="mb-4">
        Recreamos el futuro desde nuestras acciones en el presente, creemos en el poder de la co-creación y las relaciones que agregan valor.&rdquo;
        </p>
        <h3 class="mt-12 not-italic text-center uppercase t-h3">
          Innovación para emprendedores
        </h3>
      </V>
    </div>
    <div class="rotate-180 transform">
      <Wave color="#0273E3" time="15s"/>
    </div>
  </V>
  <V class="flex flex-col py-16 md:flex-row content animate" oneWay style="--animate-x: 3rem; --animate-y: -3rem;">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="t-h3">Testimonios</h2>
    </div>
    <div class="w-full animate">
      <Testimonios image={false} padded={false} />
    </div>
  </V>
  <div class="py-16 content">
    <V class="animate" oneWay style="--animate-y: -2rem; --animate-x: -3rem">
      <h2 class="mb-12 font-bold t-h2 md:text-center font-title">
        Súmate a nosotros
      </h2>
      <p class="mb-6 font-light t-p md:text-justify font-title">
      Sé parte del ecosistema Yes Campus ¡Trabaja con nosotros!
      </p>
      <p class="font-light t-p md:text-justify font-title">
      Estamos en constante crecimiento y todos los días trabajamos para ofrecer la mejor experiencia de aprendizaje. ¡Únete a nuestro equipo y transformaremos la manera de aprender y emprender!
      </p>
    </V>
    <V class="flex mt-16 mb-16 animate" oneWay style="--animate-s: 0.9">
      <div class="flex flex-col w-full m-auto md:w-4/10 xxl:w-3/10 font-title">
        <h2 class="mb-6 text-2xl font-bold font-title">Formulario de contacto</h2>
        <div class="input-label">Nombre y apellido</div>
        <input type="text" class="mb-6 input" placeholder="Ej. Maria Rondón">

        <div class="input-label">Correo electrónico</div>
        <input type="text" class="mb-6 input" placeholder="Ej. mariarondon@gmail.com">

        <div class="input-label">Whatsapp de contacto</div>
        <input type="text" class="mb-6 input" placeholder="Ej. +584123456789">

        <div class="input-label">Mensaje</div>
        <textarea class="mb-6 input" rows="4"></textarea>

        <button class="btn-primary-gray">Enviar</button>
      </div>
    </V>
  </div>
</div>
