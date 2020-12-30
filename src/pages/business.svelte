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
  import Tilt from '../components/Tilt.svelte'
  import { fly } from 'svelte/transition'

  metatags.title = 'YES Campus for Business | ' + svitsConfig.name

  const carServicios = [
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

  const servicios = [
    'Formación<br>in Company',
    'Ruta sustentable',
    'Financiamiento<br>e Inversión',
  ]

  const inCompany = [
    'Diagnóstico empresarial',
    'Planificación estratégica y de negocio',
    'Estudios y desarrollo de estrategias de Marketing',
    'Gestión de procesos y desarrollo organizacional',
    'Planes Financieros y de Invrsión',
    'Asistencia Legal y Compliance',
    'Branding y Rebranding',
    'Creación de franquicias',
  ]

  const finInv = [
    'Evaluación financiera',
    'Desarrollo de proyectos',
    'Preparación para la participación en rondas de Inversión',
    'Protección legal y elaboración de documentación según el tipo de inversión demanda en rondas de inversión',
  ]

  const clientes = [
    'agora',
    'perla',
    'frisur',
    'faro',
    'cevac',
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
<div class="w-full overflow-hidden">
  <V class="relative w-full overflow-hidden seccion-1">
    <div class="w-full lg:h-full lg:absolute">
      <div class="z-30 flex flex-wrap items-center h-full content">
        <div class="py-16 lg:w-1/2 animate" style="--animate-x: -3rem">
          <div class="mb-6 t-h1">Es tu oportunidad de fortalecer a tu organización</div>
          <p class="mb-8 t-p">
          Incrementa las capacidades de tu equipo, obtén asistencia técnica presencial o remota sobre cómo consolidar tu empresa y acceder a financiamiento.
          </p>
          <div class="animate" style="--animate-x: -1rem; transition-delay: 200ms">
            <a href="" class="btn-primary">Haz una consulta gratis</a>
          </div>
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

    <div class="w-full my-6 bg-yes-blue-800">
      <div class="py-12 content">
        <V class="overflow-hidden" oneWay>
          <h2 class="text-center text-white t-h2 animate" style="line-height: 1.5 !important; --animate-r: 3deg; --animate-y: 100%">Organizaciones que crecen con nosotros</h2>
        </V>
        <V class="flex flex-wrap items-center" oneWay>
          {#each clientes as c, i}
            <div class="flex w-full p-6 mt-2 animate sm:w-1/2 lg:w-1/5" style="transition-delay: {100 * i + 500}ms; --animate-r-y: -64deg">
              <img src="/images/business/clientes/{c}.webp" alt="" class="w-auto m-auto" style="max-height: 6rem">
            </div>
          {/each}
        </V>
      </div>
    </div>

  <V class="relative w-full min-h-screen overflow-hidden" oneWay>
    <div class="w-full lg:h-full lg:absolute">
      <div class="z-30 flex flex-wrap items-center h-full content">
        <div class="py-16 lg:w-2/3 animate" style="--animate-x: -3rem; transition-delay: 200ms">
          <div class="mb-6 t-h3">Nuestros servicios se caracterizan <br class="hidden lg:inline"> por ser una opción:</div>
          <div class="flex flex-wrap -m-2">
            <div class="flex flex-wrap w-full p-2 -m-2 t-p lg:w-1/2">
              {#each carServicios.splice(0, carServicios.length / 2) as s, i}
                <p class="p-2 animate" style="--animate-x: 0; --animate-r-y: -64deg; transition-delay: {100 * i + 400 + 200}ms">
                  <span class="font-bold text-yes-blue-800">{s.keyword}</span>, {s.desc}
                </p>
              {/each}
            </div>
            <div class="flex flex-wrap w-full p-2 -m-2 t-p lg:w-1/2">
              {#each carServicios.splice(carServicios.length / 2 - 1, carServicios.length) as s, i}
                <p class="p-2 animate" style="--animate-x: 0; --animate-r-y: -64deg; transition-delay: {100 * i + 400 + (100 * 3) + 200}ms">
                  <span class="font-bold text-yes-blue-800">{s.keyword}</span>, {s.desc}
                </p>
              {/each}
            </div>
          <a href="" class="mx-auto mt-6 btn-primary">Conoce qué ofrecemos</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="right-0 flex w-full lg:-mr-24 lg:absolute lg:w-1/2 animate lg:h-full"
      style="--animate-x: 3rem; transition-delay: {100 * 6 + (100 * 6) + 200}ms"
      alt="YES Campus for Business"
    >
      <img
        class="w-full pointer-events-none select-none lg:my-auto lg:ml-auto"
        src="/images/business/macbook.gif"
        alt="Nuestros servicios"
      >
    </div>
  </V>

    <div class="py-16 content">
      <V class="w-full animate" style="--animate-r-y: 64deg; transition-delay: 200ms" oneWay>
        <div class="mb-2 text-center t-h1">¿Qué ofrecemos?</div>
        <div class="text-center t-h3" style="font-weight: normal">Servicios a la medida para resultados<br>más efectivos y eficientes</div>
      </V>
      <V class="flex flex-col mt-16 -my-12 sm:flex-row sm:justify-between" oneWay>
        {#each servicios as s, i}
          <div class="py-12 md:w-1/3 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 1rem">
            <img src="/images/business/Recurso {i + 1}.svg" alt="" class="mx-auto mb-4 w-6/10 md:w-auto md:h-5/10">
            <p class="text-center t-h3">{@html s}</p>
          </div>
        {/each}
      </V>
    </div>

    <V class="py-16 mt-24 bg-yes-blue-800" oneWay>
      <div class="flex flex-wrap-reverse items-center text-white content lg:flex-wrap">
        <div class="w-full lg:w-1/2 md:pr-12 animate" style="--animate-x: -3rem">
          <h2 class="mb-6 t-h1">Formación in Company</h2>
          <p class="t-p animate" style="transition-delay: 200ms; --animate-x: -1rem">
          Desarrollamos programas de formación y capacitación adaptadas a las necesidades de tu organización, con oportunidades de certificación y bajo las modalidades presencial o en línea. 
          </p>
        </div>
        <div class="z-40 w-full mb-12 lg:w-1/2 -mt-36 lg:-mb-36 animate" style="--animate-x: 3rem">
          <img src="/images/business/mac.webp" alt="" class="w-full pointer-events-none select-none">
        </div>
      </div>
    </V>
    <PC class="relative overflow-hidden" let:offset scaleFactor={10}>
      <P
        class="absolute w-full h-full bg-center bg-cover"
        motion={false}
        offset={offset}
        style="background-image: url(/images/business/bg2.webp); height: 110%"
      >
      </P>
      <V class="z-20 flex flex-col py-16 pt-24 text-center content animate" oneWay style="--animate-s: 0.8">
        <p class="mb-6 transform t-h2 text-yes-blue-800">¿Qué abarca la formación?</p>
        <p class="mx-auto italic transform t-h1 text-yes-orange-500 lg:w-6/10">
        Diseño de programas,<br>certificaciones y sistemas de evaluación de competencias.
        </p>
        <a href="" class="mx-auto mt-8 btn-primary">Empecemos</a>
      </V>
    </PC>

    <div class="flex flex-col items-center py-16 -m-6 content-lg lg:flex-row">
      <V class="w-full p-6 lg:w-1/3" oneWay>
        <h2 class="mb-6 t-h2 animate" style="--animate-x: 3rem">Ruta sustentable</h2>
        <p class="t-p animate" style="--animate-x: -3rem; transition-delay: 200ms">
        Ponemos a tu disposición herramientas de evaluación para detectar las
        áreas críticas de su negocio o empresa, complementando con <strong>asesorías y
        mentorías personalizadas en:</strong>
        </p>
        <div class="mt-6 animate" style="--animate-x: -3rem; transition-delay: 400ms">
          <a href="" class="btn-primary">Haz tu prueba gratis</a>
        </div>
      </V>
      <V class="flex flex-wrap w-full p-6 -m-2 lg:w-1/3 lg:order-last" oneWay>
        {#each inCompany as txt, i}
          <div class="w-1/2 p-2 animate" style="transition-delay: {i * 100}ms; --animate-r-y: 64deg">
            <img src="/images/business/Ico_RUTA_{i + 1}.svg" alt="" class="h-12 mx-auto">
            <p class="mt-2 font-bold leading-none text-center">{@html txt}</p>
          </div>
        {/each}
      </V>
      <V class="w-full p-6 lg:w-1/3" oneWay>
        <div class="relative overflow-hidden">
          <img src="/images/business/ipad.webp" alt="" class="w-full animate" style="--animate-y: 100%; --animate-time: 1s">
        </div>
      </V>
    </div>
    <div class="mt-12 content">
      <div class="overflow-hidden">
        <V style="--animate-y: 100%; --animate-r: 3deg" oneWay>
          <div class="overflow-hidden">
            <h2 class="sm:text-center animate text-yes-gray-400 t-h3">Financiamiento e Inversión</h2>
          </div>
          <div class="overflow-hidden">
            <p class="mt-2 sm:text-center t-h2 text-yes-blue-500 animate" style="transition-delay: 100ms">
            Te ayudamos a identificar oportunidades de<br>inversión y desarrollar proyectos financieros<br>para el acceso a capital
            </p>
          </div>
        </V>
      </div>
      <V class="flex flex-wrap py-12 -mx-6" oneWay>
        {#each finInv as t, i}
          <div class="w-full p-6 animate sm:w-1/2 lg:w-1/4" style="transition-delay: {100 * i + 500}ms; --animate-y: 1rem">
            <Tilt>
              <img src="/images/business/fin_inv/{i + 1}.webp" alt="" class="w-48 mx-auto sm:w-full">
              <p class="mt-4 font-bold text-center t-p">{t}</p>
            </Tilt>
          </div>
        {/each}
      </V>
      <V class="flex w-full -mt-6 animate" oneWay style="--animate-s: 0.4">
        <a href="" class="mx-auto text-center btn-primary">Empecemos</a>
      </V>
    </div>
</div>
