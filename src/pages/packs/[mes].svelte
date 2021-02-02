<script>
  import { fly, fade } from 'svelte/transition'
  import svitsConfig from '../../../svits.config.json'
  import { getImg } from '/$components/Image.svelte'
  import { getCollection } from '../../collections'
  import { metatags, params } from '@roxi/routify'
  import CursoCard from '/$components/CursoCard.svelte'
  import Wave from '/$components/motion/Wave.svelte'

  metatags.title = `Pack de ${$params.mes} - YES Packs | ` + svitsConfig.name

  const pack = getCollection('packs').filter(e => $params.mes.toLowerCase() === e.mes.toLowerCase()).elements[0]
</script>

<style>
  .pack {
    color: white;
    overflow: hidden;
    display: flex;
    @apply items-end;
    min-height: 20rem
  }
  @screen md {
    .pack {
      min-height: 20rem
    }
    .pack:first-of-type:not(.search) {
      min-height: 30rem
    }
  }
  .pack-bg {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--pack-image);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    transform-origin: center;
    filter: grayscale(0);
  }
</style>

<div class="w-full">
  <!--div
    class="flex flex-col py-16 content-lg"
    in:fly={{x: -100, duration: 1000, delay: 200}}
  >
    <div class="flex flex-col w-full lg:items-center lg:flex-row">
      <div class="w-full">
        <h1 class="flex mb-6 text-5xl font-bold leading-none md:text-6xl font-title">YES Packs
        </h1>
        <p class="mb-6 text-3xl font-bold leading-none md:text-4xl font-title">Disfruta de nuestro contenido mensual</p>
      </div>
    </div>
  </div-->
  <div class="pb-4 content-lg">
    <h2 class="my-6 text-3xl font-bold lg:text-5xl">Pack de {$params.mes}</h2>
    <div
      class="relative mb-8 rounded pack"
      style="--pack-image: url({getImg(pack.thumbnail)})"
      in:fade|local={{ duration: 400 }}
      >
      <div class="absolute pack-bg"></div>
      <div class="p-6 font-bold transform">
        <h1
          class="mb-4 text-3xl font-bold leading-none lg:text-5xl"
          >{pack.title}</h1
        >
        <p class="t-h3">{pack.cursos.length} Curso{pack.cursos.length > 1 ? 's' : ''}</p>
      </div>
    </div>
  </div>
  <div class="mb-6 content-lg">
    <h3 class="my-6 t-h2">Cursos del pack</h3>
    <div class="flex flex-wrap -mx-4">
      {#each pack.cursos as c}
        <div class="w-full p-4 lg:w-1/4 sm:w-1/2">
          <CursoCard
            fixedImg
            title={c.title}
            instructor={c.instructor}
            thumbnail={getImg(c.thumbnail)}
            link={'https://yescampus.teachlr.com/#courses-online/'+c.slug}
          />
        </div>
      {/each}
    </div>
  </div>
  <Wave color="#0273E3"/>
  <div class="w-full py-6 bg-yes-blue-500">
    <div class="flex w-full px-6 mx-auto lg:w-4/10">
      <div class="flex flex-col w-full p-6 bg-white border shadow rounded-2xl dark:bg-yes-gray-800 dark:border-gray-700">
        <p class="t-h2">Obtén el pack<br>y quédate atento a tu correo</p>
        <p class="mt-8 font-bold">Nombre completo</p>
        <input type="text" class="input" placeholder="Ej. Juan Pérez">
        <p class="mt-6 font-bold">Correo electrónico</p>
        <input type="text" class="input" placeholder="Ej. juanperez@gmail.com">
        <div class="mx-auto mt-6 btn-primary-gray">Enviar formulario</div>
      </div>
    </div>
  </div>
  <div class="transform rotate-180">
    <Wave color="#0273E3" time="25s"/>
  </div>
</div>
