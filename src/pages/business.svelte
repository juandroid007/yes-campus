<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import V from '../components/IntersectingViewport.svelte'
  import Testimonios from '../components/pages/home/Testimonio.svelte'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import Tilt from '../components/Tilt.svelte'

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
    'Planes Financieros y de Inversión',
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

  import { clientes } from '../lib/business'

  import Formulario from '/$/components/pages/business/Formulario.svelte'

  let openForm
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

  :global(.tarjetas) {
    width: 100%;
    height: 75vh;
  }

  :global(.mentores) {
    width: 100%;
  }

  @screen lg {
    :global(.tarjetas) {
      width: 66.66%;
    }

    :global(.mentores) {
      width: 33.33%;
    }
  }

  @screen xxl {
    :global(.tarjetas) {
      width: 66.66%;
      height: 60vh;
    }

    :global(.mentores) {
      width: 33.33%;
    }
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

<Formulario bind:open={openForm}/>

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
            <button on:click={openForm} class="btn-primary">Haz una consulta gratis</button>
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

  <div class="w-full my-6 bg-yes-blue-800" id="clientes">
    <div class="py-12 content">
      <V class="overflow-hidden" oneWay>
        <h2 class="text-center text-white t-h2 animate" style="line-height: 1.5 !important; --animate-r: 3deg; --animate-y: 100%">Organizaciones que crecen con nosotros</h2>
      </V>
      <V class="flex flex-wrap items-center" oneWay>
        {#each clientes as c, i}
          <div class="flex w-full p-6 mt-2 animate sm:w-1/2 lg:w-1/5" style="transition-delay: {100 * i + 500}ms; --animate-r-y: -64deg">
            <img src="/images/business/clientes/{c}.webp" alt="" class="w-auto m-auto grayscale duration-200 hover:scale-110 transform" style="max-height: 6rem">
          </div>
        {/each}
      </V>
    </div>
  </div>

  <V class="relative w-full min-h-screen overflow-hidden" oneWay id="caracteristicas">
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
          <a href="#servicios" class="mx-auto mt-6 btn-primary">Conoce qué ofrecemos</a>
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

    <div class="py-16 content" id="servicios">
      <V class="w-full animate" style="--animate-r-y: 64deg; transition-delay: 200ms" oneWay>
        <div class="mb-2 text-center t-h1">¿Qué ofrecemos?</div>
        <div class="text-center t-h3" style="font-weight: normal">Servicios a la medida para resultados<br>más efectivos y eficientes</div>
      </V>
      <V class="flex flex-col mt-16 -my-12 sm:flex-row sm:justify-between" oneWay>
        {#each servicios as s, i}
          <div class="py-12 md:w-1/3 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 1rem">
            <img src="/images/business/servicios/{i + 1}.svg" alt="" class="mx-auto mb-4 w-6/10 md:w-auto md:h-5/10">
            <p class="text-center t-h3">{@html s}</p>
          </div>
        {/each}
      </V>
    </div>

    <V class="py-16 mt-24 bg-yes-blue-800" top={100} oneWay id="formacion-in-company">
      <div class="flex flex-wrap-reverse items-center text-white content lg:flex-wrap">
        <div class="w-full lg:w-1/2 md:pr-12 animate animateOut" style="--animate-x: -3rem">
          <h2 class="mb-6 t-h1">Formación in Company</h2>
          <p class="t-p animate" style="transition-delay: 200ms; --animate-x: -1rem">
          Desarrollamos programas de formación y capacitación adaptadas a las necesidades de tu organización, con oportunidades de certificación y bajo las modalidades presencial o en línea. 
          </p>
        </div>
        <div class="z-10 w-full mb-12 lg:w-1/2 -mt-36 lg:-mb-36 animate animateOut" style="--animate-x: 3rem">
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
        <button on:click={openForm} class="mx-auto mt-8 btn-primary">Empecemos</button>
      </V>
    </PC>

    <div class="flex flex-col items-center py-16 -m-6 content-lg lg:flex-row" id="ruta-sustentable">
      <V class="w-full p-6 lg:w-1/3" oneWay>
        <h2 class="mb-6 t-h2 animate" style="--animate-x: 3rem">Ruta sustentable</h2>
        <p class="t-p animate" style="--animate-x: -3rem; transition-delay: 200ms">
        Ponemos a tu disposición herramientas de evaluación para detectar las
        áreas críticas de su negocio o empresa, complementando con <strong>asesorías y
        mentorías personalizadas en:</strong>
        </p>
        <div class="mt-6 animate" style="--animate-x: -3rem; transition-delay: 400ms">
          <button on:click={openForm} class="btn-primary">Haz tu prueba gratis</button>
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
    <div class="mt-12 content" id="financiamiento-e-inversion">
      <div class="overflow-hidden">
        <V style="--animate-y: 100%; --animate-r: 3deg" oneWay>
          <div class="overflow-hidden">
            <h2 class="sm:text-center animate text-yes-gray-400 t-h3">Financiamiento e Inversión</h2>
          </div>
          <div class="overflow-hidden">
            <p class="pb-2 mt-2 sm:text-center t-h2 text-yes-blue-500 animate" style="transition-delay: 100ms">
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
        <button on:click={openForm} class="mx-auto text-center btn-primary">Empecemos</button>
      </V>
    </div>

  <div class="mt-12 bg-yes-blue-800">
    <div class="content-lg">
      <div class="flex flex-wrap items-center">
        <V class="py-12 text-white mentores" oneWay>
          <h2 class="mb-6 t-h2 animate" style="--animate-x: -3rem">Una red de mentores y especialistas de alto impacto</h2>
          <p class="t-p animate" style="--animate-x: -3rem; transition-delay: 200ms">
          Más de 30 mentores de prestigio que aportarán su experiencia para lograr el crecimiento que tu organización necesita.
          </p>
          <div class="mt-6 animate" style="--animate-x: -3rem; transition-delay: 400ms">
            <a href="/#mentores" class="btn-primary">Ver todos</a>
          </div>
        </V>
        <V class="relative hidden overflow-hidden sm:flex sm:pl-6 tarjetas" oneWay>
          <div class="absolute z-20 w-full h-2/10 bg-gradient-to-b from-yes-blue-800 to-transparent"></div>
          <div class="absolute bottom-0 z-20 w-full h-2/10 bg-gradient-to-t from-yes-blue-800 to-transparent"></div>
          <PC class="relative w-full h-full overflow-hidden animate" let:offset>
            <P
              class="absolute ml-6 overflow-hidden bg-gray-500 shadow-xl mt-28 w-52 h-80 rounded-xl"
              offset={offset}
              scaleFactor={6}
            >
              <PC let:offset class="w-full h-full">
                <P class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={8}>
                  <div class="w-full h-full bg-right bg-cover" style='background-image: url("/images/business/mentores/alberto.webp")'>
                  </div>
                </P>
              </PC>
            <!--img src="/images/uploads/juan-camilo.webp" alt="" class="object-cover object-top w-full h-full"-->
            </P>
            <P
              class="absolute bottom-0 right-0 mb-16 mr-6 overflow-hidden bg-gray-500 shadow-xl w-52 h-80 rounded-xl"
              offset={offset}
              scaleFactor={3}
              negative
            >
              <PC let:offset class="w-full h-full">
                <P class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={7}>
                  <div class="w-full h-full bg-right bg-cover" style='background-image: url("/images/business/mentores/karla.webp")'>
                  </div>
                </P>
              </PC>
            <!--img src="/images/uploads/juan-camilo.webp" alt="" class="object-cover object-top w-full h-full"-->
            </P>
            <div class="absolute right-0 mb-16 ml-6 mr-12 w-52 -translate-x-3/4 transform mt-28">
            <P
              class="overflow-hidden bg-gray-500 shadow-xl w-52 h-80 rounded-xl"
              offset={offset}
              scaleFactor={5}
            >
              <PC let:offset class="w-full h-full">
                <P class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={8}>
                  <div class="w-full h-full bg-cover" style='background-image: url("/images/business/mentores/monica.webp")'>
                  </div>
                </P>
              </PC>
            <!--img src="/images/uploads/juan-camilo.webp" alt="" class="object-cover object-top w-full h-full"-->
            </P>
            </div>
            <div class="absolute bottom-0 mb-16 mr-12 w-52 left-2/4 transform -translate-x-9/10">
            <P
              class="overflow-hidden bg-gray-500 shadow-xl w-52 h-80 rounded-xl"
              offset={offset}
              negative
              scaleFactor={4}
            >
              <PC let:offset class="w-full h-full">
                <P class="w-full" offset={offset} motion={false} style="height: 115%" scaleFactor={7}>
                  <div class="w-full h-full bg-cover" style='background-image: url("/images/business/mentores/juancarlos.webp")'>
                  </div>
                </P>
              </PC>
            <!--img src="/images/desarrollo.jpg" alt="" class="object-cover object-right-top w-full h-full"-->
            </P>
            </div>
          </PC>
        </V>
      </div>
    </div>
  </div>

  <div class="pt-16 content-lg">
    <V style="--animate-y: 100%; --animate-r: 3deg" oneWay>
      <div class="overflow-hidden">
        <p class="pb-2 mb-2 sm:text-center t-h2 animate" style="transition-delay: 100ms">
        Hemos apoyado a más de<br>50 organizaciones, entre empresas y ONGs
        </p>
      </div>
      <div class="mb-12 overflow-hidden">
        <h2 class="sm:text-center animate text-yes-gray-300 t-h3">Testimonios de nuestros clientes</h2>
      </div>
    </V>
  </div>
  <V class="mb-12 animate" oneWay style="--animate-r-y: -64deg">
    <Testimonios padded={false} />
  </V>

  <div class="bg-yes-blue-800">
    <V class="py-16 text-center text-white content animate" oneWay style="--animate-r: 3deg; --animate-s: 0.8">
      <img src="/images/business/circulos.svg" alt="" class="w-32 mx-auto">
      <h2 class="t-h1">Te ayudamos a acelerar el<br>crecimiento de tu organización</h2>
      <p class="mt-4">
      Rellena el formulario de contacto  para acceder a nuestros<br> servicios y obtener una consulta gratuita
      </p>
      <div class="flex w-full mt-4">
        <button on:click={openForm} class="mx-auto text-center btn-primary">Empieza ahora</button>
      </div>
    </V>
  </div>
</div>
