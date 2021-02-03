<script>
  import { fly, fade } from 'svelte/transition'
  import faker from 'faker'
  import svitsConfig from '../../../svits.config.json'
  import V from '/$components/IntersectingViewport.svelte'
  import { getImg } from '/$components/Image.svelte'
  import { getCollection } from '../../collections'
  import { metatags } from '@roxi/routify'
  import { calendar } from '/$lib/dayjs'

  metatags.title = 'YES Packs | ' + svitsConfig.name

  const meses = [
    //'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    // 'Agosto',
    // 'Septiembre',
    // 'Octubre',
    // 'Noviembre',
    // 'Diciembre',
  ]

  const packs = {}
  meses.map(m => {
    packs[m] = [...getCollection('packs').filter(e => e.mes === m).elements.slice(0, 1)]
  })
  $: console.log(packs)
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
  .pack:hover .pack-bg {
    filter: grayscale(1);
    transform: scale(1.1, 1.1);
  }
</style>

<div class="w-full">
  <div
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
  </div>
  <div class="content-lg">
    {#each meses as mes}
      <h2 class="pb-4 mb-6 border-b border-yes-gray-500 t-h2">{mes}</h2>
      {#if packs[mes].length}
        {#each packs[mes] as i}
          <a
            href={i.url}
            class="relative mb-8 rounded cursor-pointer pack"
            style="--pack-image: url({getImg(i.thumbnail)})"
            in:fade|local={{ duration: 400 }}
            >
            <div class="absolute pointer-events-none pack-bg"></div>
            <div class="p-6 font-bold pointer-events-none transform">
              <h1
                class="mb-4 text-3xl font-bold leading-none lg:text-5xl"
                >{i.title}</h1
              >
              <p class="t-h3">{i.cursos.length} Curso{i.cursos.length > 1 ? 's' : ''}</p>
            </div>
          </a>
        {/each}
      {:else}
        <p
          in:fade|local={{ duration: 100 }}
          class="pt-2 pb-12 text-center t-h3"
          >Próximamente</p
        >
      {/if}
    {/each}
  </div>
</div>
