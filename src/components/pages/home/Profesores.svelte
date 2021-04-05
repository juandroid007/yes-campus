<script>
  import { hoverable } from '../../Cursor.svelte'
  import Glide from '@glidejs/glide'
  import V from '../../IntersectingViewport.svelte'
  import Image from '../../Image.svelte'

  import { getCollection } from '../../../collections'

  export let take = null
  export let programa = 'general'
  export let titulo = true
  export let square = false
  export let noShadow = false
  export let color = ''

  $: profesores = getCollection('profesores')
    .filter(e => e.programas[programa])
    .paginate(take === null ? 100 : take, 1)
    .elements

  let glide
  let intersecting

  const mountGlide = node => {
    glide = new Glide(node, {
      type: 'carousel',
      perView: 4,
      breakpoints: {
        1280: {
          perView: 3
        },
        800: {
          perView: 1
        }
      },
    })
    glide.mount()
  }
</script>

<style>
  .animate {
    transition: 1s;
    transition-delay: 0.2s;
  }

  .animate:not(.intersecting) {
    opacity: 0;
    transform: translateY(1rem);
  }

  .glide__bullets {
    margin-top: 2em;
    position: initial;
    z-index: 2;
    display: inline-flex;
    list-style: none;
    transform: translateX(0);
  }

  .glide__bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(96, 95, 95, 0.25);
  }
  .glide__bullet:hover, .glide__bullet:focus {
    border: 2px solid #605F5F;
    background-color: rgba(96, 95, 95, 0.25);
  }

  :global(.profesores-slider .glide__bullet--active) {
    background-color: #605F5F;
  }
</style>

{#if profesores.length}
  <div class="flex flex-col h-full w-full z-10 content-lg profesores-slider" id="mentores">
    {#if titulo}
      <h2 class="font-bold font-title mb-12 leading-none t-h1">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
    {/if}
    <V class="my-auto w-full" bind:intersecting oneWay on:top={() => {
      glide.update({
        autoplay: 2000,
      })
    }}>
      <div class="animate glide" use:mountGlide class:intersecting>
        <div class="w-full glide__track" data-glide-el="track" use:hoverable={{primary: true, text: 'Arrastra', color: '#0273E3'}}>
          <ul class="glide__slides">
            {#each profesores as p, i}
              <li class="glide__slide">
                <div class="mx-auto w-60">
                  <div
                    class="bg-gray-700 h-80 w-full overflow-hidden relative"
                    class:rounded-2xl={!square}
                    class:shadow-lg={!noShadow}
                  >
                  {#if color}
                    <div
                      class="h-full w-full opacity-50 absolute pointer-events-none"
                      style="background-color: {color};"
                     ></div>
                  {/if}
                  <Image src="{p.thumbnail}" alt={p.nombre} class="h-full object-cover w-full"/>
                  </div>
                  <p class="font-title mt-6 leading-none t-h3">{p.nombre}</p>
                  {#if p.ocupacion}
                    <p class="font-light font-title mt-2 leading-none t-p">{p.ocupacion}</p>
                  {/if}
                </div>
              </li>
            {/each}
          </ul>
        </div>
        <div class="flex w-full">
          <div class="mx-auto glide__bullets" data-glide-el="controls[nav]">
            {#each profesores as _, i}
              <button class="glide__bullet" data-glide-dir="={i}" use:hoverable></button>
            {/each}
          </div>
        </div>
      </div>
    </V>
  </div>
{/if}
