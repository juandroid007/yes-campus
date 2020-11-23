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
      scaleFactor={5}
    >
      <div
        class="w-full h-full parallax"
        style="background-image: url(/images/bg.jpg), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        ></div
      >
    </P>
  </PC>
  <div class="flex flex-col py-16 mt-24 md:flex-row content">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="text-2xl font-bold font-title">Nuestra visión</h2>
    </div>
    <div class="w-full">
      <p class="text-2xl font-light font-title">
      Ser reconocidos como la red de aprendizaje e innovación para emprendendedores y líderes latinoamericanos de alto impacto.
      </p>
    </div>
  </div>
  <div class="flex flex-col py-16 md:flex-row-reverse content">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="text-2xl font-bold font-title md:text-right">Nuestra misión</h2>
    </div>
    <div class="w-full">
      <p class="text-2xl font-light font-title">
      Ofrecer espacios de aprendizaje, networking y negocios para el fortalecimiento de competencias en emprendimiento, liderazgo e innovación al servicio de personas y organizaciones con deseos de impacto en el logro de sus propósitos y el desarrollo sostenible.
      </p>
    </div>
  </div>
  <div class="py-32 content">
    <h2 class="mb-6 text-4xl font-bold font-title">¿Quiénes somos?</h2>
    <p class="mb-6 text-2xl font-light md:text-justify font-title">
    Somos una comunidad de profesionales creativos que trabajamos bajo el concepto de ecosistema y te invitamos a aprender y emprender junto a nosotros de manera ágil, divertida, innovadora y con impacto.
    </p>
    <h3 class="text-2xl italic font-light md:text-right font-title">
      Aprendizaje Acelerado para personas y organizaciones emprendedoras
    </h3>
  </div>
  <div class="py-16 content">
    <h2 class="mb-6 text-4xl font-bold md:text-center font-title">
      Apostamos al trabajo colaborativo<br>y la búsqueda del bien común
    </h2>
    <div class="flex flex-wrap py-16 -my-6 md:h-screen">
      <div class="py-6 md:w-1/3">
        <h2 class="mb-6 text-2xl font-bold md:text-center font-title">
          Innovación
        </h2>
        <p class="text-2xl font-light md:text-justify font-title">
        Estimulamos la mejora continua y agregamos valor
        </p>
      </div>
      <div class="self-center py-4 md:w-1/3 justify-self-center">
        <h2 class="mb-6 text-2xl font-bold md:text-center font-title">
          Multiculturalidad
        </h2>
        <p class="text-2xl font-light md:text-justify font-title">
        Nos nutrimos de la diversidad y  co creamos de manera disruptiva y divertida
        </p>
      </div>
      <div class="self-end py-4 md:w-1/3 justify-self-end">
        <h2 class="mb-6 text-2xl font-bold md:text-center font-title">
          Agilidad
        </h2>
        <p class="text-2xl font-light md:text-justify font-title">
        Buscamos Soluciones agíles a problemas complejos
        </p>
      </div>
    </div>
  </div>
  <Wave color="#000" time="15s"/>
  <V bind:intersecting={$inZone}>
    <div class="min-h-screen text-white bg-black">
      <div class="py-32 content">
        <h2 class="mb-6 text-4xl font-bold font-title">El Manifiesto YES Campus</h2>
        <p class="mt-12 mb-6 text-2xl italic font-light md:text-justify font-title">
        &ldquo;Pertenezco a una comunidad donde me reconozco y me reconocen, valoramos el compartir ameno y entretenido, donde la creatividad nos lleva a desafíos individuales y colectivos para lograr un mundo más humano, participativo e igualitario.
        </p>
        <p class="mb-6 text-2xl italic font-light md:text-justify font-title">
        Compartimos el espíritu emprendedor, somos agentes de cambio que sirven desde la integridad, el respeto y la pluralidad, a personas, organizaciones y sociedades que buscan alcanzar su propósito, bienestar y promover el desarrollo sostenible.
        </p>
        <p class="mb-6 text-2xl italic font-light md:text-justify font-title">
        Recreamos el futuro desde nuestras acciones en el presente, creemos en el poder de la co-creación y las relaciones que agregan valor.&rdquo;
        </p>
        <h3 class="mt-12 text-xl font-bold text-center uppercase font-title">
          Innovación para emprendedores
        </h3>
      </div>
    </div>
    <div class="rotate-180 transform">
      <Wave color="#000" time="15s"/>
    </div>
  </V>
  <div class="flex flex-col py-16 md:flex-row content">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="text-2xl font-bold font-title">Testimonios</h2>
    </div>
    <div class="w-full">
      <Testimonios image={false} padded={false} />
    </div>
  </div>
  <div class="py-16 content">
    <h2 class="mb-24 text-4xl font-bold md:text-center font-title">
      Súmate a nosotros
    </h2>
    <p class="mb-6 text-2xl font-light md:text-justify font-title">
    Sé parte del ecosistema Yes Campus ¡Trabaja con nosotros!
    </p>
    <p class="mb-6 text-2xl font-light md:text-justify font-title">
    Estamos en constante crecimiento y todos los días trabajamos para ofrecer la mejor experiencia de aprendizaje. ¡Únete a nuestro equipo y transformaremos la manera de aprender y emprender!
    </p>
    <div class="flex mt-32 mb-16">
      <div class="flex flex-col w-full m-auto md:w-4/10 font-title">
        <h2 class="mb-6 text-2xl font-bold font-title">Formulario de contacto</h2>
        <div class="input-label">Nombre y apellido</div>
        <input type="text" class="mb-6 input" placeholder="Ej. Pedro Pérez">

        <div class="input-label">Correo electrónico</div>
        <input type="text" class="mb-6 input" placeholder="Ej. pedroperez@gmail.com">

        <div class="input-label">Whatsapp de contacto</div>
        <input type="text" class="mb-6 input" placeholder="Ej. +584123456789">

        <div class="input-label">Mensaje</div>
        <textarea class="mb-6 input" rows="4"></textarea>

        <button class="btn-primary-gray">Enviar</button>
      </div>
    </div>
  </div>
</div>
