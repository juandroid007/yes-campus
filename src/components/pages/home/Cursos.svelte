<script>
  import V from '../../IntersectingViewport.svelte'
  import CursoCard from '../../CursoCard.svelte'
  import CursoCardBones from '../../CursoCardBones.svelte'
  import { fly } from 'svelte/transition'
  let intersecting

  const prefix = 'https://api.teachlr.com/yescampus/api/courses-online/'

  const urls = [
    prefix+'abc-del-sexo-17137',
    prefix+'competencias-tic',
    prefix+'cocina-70',
    prefix+'como-crear-una-web-desde-cero-para-wordpress',
  ]

  const getCursos = async () => {
    const promises = Promise.all(urls.map(async url => {
      const f = await fetch(url, {
        headers: {
          'Authorization': 'key_xVz0iVgBs5ACOcQ9992Gnlpof1eL',
          'Content-Type': 'application/json',
        }
      })
      const json = f.json()
      if (f.ok) {
        return json
      } else {
        console.log(json)
        return Error(json)
      }
    }))
    return promises
  }

  let cursos = new Promise(() => {})

  $: if (intersecting) {
    cursos = getCursos()
  }
</script>

<V class="pt-16 content-lg" once bind:intersecting>
  <h2 class="text-4xl font-bold lg:text-5xl">Mira nuestros cursos</h2>
  {#await cursos}
    <div class="flex flex-wrap pt-12 pb-6 -m-4"
      in:fly={{y: -20, duration: 800}}
    >
      {#each new Array(4) as _, i}
        <div
          class="w-full p-4 lg:w-1/4 sm:w-1/2"
          in:fly={{y: -20, duration: 800, delay: 300 + i * 100}}
          >
          <CursoCardBones />
        </div>
      {/each}
    </div>
  {:then cursos}
    <div class="flex flex-wrap pt-12 pb-6 -m-4">
      {#each cursos as c, i}
        <div
          class="w-full p-4 lg:w-1/4 sm:w-1/2"
          in:fly={{y: -20, duration: 800, delay: 800 + ( 300 + i * 100 )}}
          >
          <CursoCard title={c.title} thumbnail={c.cover.large} price={c.price} link={c.url} />
        </div>
      {/each}
    </div>
  {:catch}
    <div class="flex w-full">
      <div class="py-16 m-auto overflow-hidden e404">
        <div class="flex flex-col items-center big">
          <div style="font-size: 12rem" class="leading-none text-gray-500 i jam:cactus huge" in:fly={{y: -20, duration: 800}}></div>
          <p class="py-6 text-xl lg:text-lg">Ha habido un error obteniendo los cursos</p>
          <div class="btn btn-primary" on:click={() => cursos = getCursos()}>Reintentar</div>
        </div>
      </div>
    </div>
  {/await}
</V>
