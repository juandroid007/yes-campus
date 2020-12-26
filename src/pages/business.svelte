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

  metatags.title = 'YES Campus for Business | ' + svitsConfig.name

  const servicios = [
    {
      keyword: 'Práctica',
      desc: 'porque llevamos la teoría a la práctica: incluye un método, persigue un fin útil, genera utilidad y puede estar bajo la dirección de un guía, un mentor.'
    },
    {
      keyword: 'Flexible',
      desc: 'puedes elegir si desarrolla todos los pasos o solo los que el negocio necesite.',
    },
    {
      keyword: 'Segura',
      desc: 'porque garantiza la confidencialidad de la información, protege la propiedad intelectual y respalda la inversión.',
    },
    {
      keyword: 'Exitosa',
      desc: 'porque canaliza el cumplimiento de los objetivos de negocio.',
    },
    {
      keyword: 'Progresiva',
      desc: 'permite que el negocio avance y se perfeccione con el tiempo. Puedes armar tu proyecto desde cero o fortalecer el que ya se encuentra en marcha.',
    },
    {
      keyword: 'Multiplica',
      desc: 'porque el negocio puede expandir fronteras y/o convertirse en franquicia.',
    },
  ]
</script>

<style>
  @screen lg {
    .bg1 {
      --animate-y: -3rem;
    }
    :global(.seccion-1) {
      height: calc(100vh - var(--navbarHeight));
    }
    :global(.seccion-2) {
      min-height: calc(100vh - var(--navbarHeight));
    }
  }
</style>
<div class="w-full">
  <V class="relative w-full overflow-hidden seccion-1" once>
    <div class="w-full lg:h-full lg:absolute">
      <div class="z-30 flex flex-wrap items-center h-full content">
        <div class="py-16 lg:w-1/2 animate" style="--animate-x: -3rem">
          <div class="mb-6 t-h1">Es tu oportunidad de fortalecer a tu organización</div>
          <p class="mb-8 t-p">
          Incrementa las capacidades de tu equipo, obtén asistencia técnica presencial o remota sobre cómo consolidar tu empresa y acceder a financiamiento.
          </p>
          <a href="" class="btn-primary">Haz una consulta gratis</a>
        </div>
      </div>
    </div>
    <img
      class="right-0 w-full pointer-events-none select-none lg:absolute lg:w-auto lg:h-6/10 xl:h-9/10 animate bg1"
      src="/images/business/bg1.webp"
      style="--animate-x: 3rem"
      alt="YES Campus for Business"
    >
  </V>

  <div class="w-full h-32 my-6 bg-yes-blue-800"></div>

  <div class="relative w-full min-h-screen overflow-hidden">
    <div class="w-full lg:h-full lg:absolute">
      <div class="z-30 flex flex-wrap items-center h-full content">
        <V class="py-16 lg:w-2/3 animate" style="--animate-x: -3rem" oneWay>
          <div class="mb-6 t-h3">Nuestros servicios se caracterizan <br class="hidden lg:inline"> por ser una opción:</div>
          <div class="flex flex-wrap -m-2">
            <div class="flex flex-wrap w-full p-2 -m-2 t-p lg:w-1/2">
              {#each servicios.splice(0, servicios.length / 2) as s, i}
                <p class="p-2 animate" style="--animate-x: 0; --animate-r-y: -64deg; transition-delay: {100 * i + 400}ms">
                  <span class="font-bold text-yes-blue-800">{s.keyword}</span>, {s.desc}
                </p>
              {/each}
            </div>
            <div class="flex flex-wrap w-full p-2 -m-2 t-p lg:w-1/2">
              {#each servicios.splice(servicios.length / 2 - 1, servicios.length) as s, i}
                <p class="p-2 animate" style="--animate-x: 0; --animate-r-y: -64deg; transition-delay: {100 * i + 400 + (100 * 3)}ms">
                  <span class="font-bold text-yes-blue-800">{s.keyword}</span>, {s.desc}
                </p>
              {/each}
            </div>
          <a href="" class="mx-auto mt-6 btn-primary">Conoce qué ofrecemos</a>
          </div>
        </V>
      </div>
    </div>
    <V
      class="right-0 flex w-full lg:-mr-24 lg:absolute lg:w-1/2 animate lg:h-full"
      style="--animate-x: 3rem; transition-delay: {100 * 6 + (100 * 6)}ms"
      alt="YES Campus for Business"
      oneWay
    >
      <img
        class="w-full pointer-events-none select-none lg:my-auto lg:ml-auto"
        src="/images/business/macbook.gif"
        alt="Nuestros servicios"
      >
    </V>
  </div>

    <div class="py-16 content">
      <V class="w-full animate" style="--animate-r-y: -32deg; --animate-r-x: 32deg">
        <div class="mb-2 text-center t-h1">¿Qué ofrecemos?</div>
        <div class="text-center t-h3" style="font-weight: normal">Servicios a la medida para resultados<br>más efectivos y eficientes</div>
      </V>
    </div>
</div>
