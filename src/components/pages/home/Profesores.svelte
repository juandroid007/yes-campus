<script>
  import { hoverable } from '../../Cursor.svelte'
  import Glide from '@glidejs/glide'
  import V from '../../IntersectingViewport.svelte'

  import { getCollection } from '../../../collections'

  $: profesores = getCollection('profesores').elements

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
    transform: translateY(15%);
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
  }

  img {
    isolation: isolate;
  }
</style>

<div class="z-10 flex flex-col w-full h-full text-white content-lg">
  <h2 class="mb-12 text-4xl font-bold leading-none md:text-5xl font-title">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
  <V class="my-auto" bind:intersecting on:top={() => {
    glide.update({
      autoplay: 2000,
    })
  }}>
    <div class="glide animate" use:mountGlide class:intersecting>
      <div class="glide__track" data-glide-el="track" use:hoverable={{primary: true, text: 'Arrastra', color: '#0273E3'}}>
        <ul class="glide__slides">
          {#each profesores as p, i}
            <li class="glide__slide">
              <div class="mx-auto w-60">
                <div
                  class="flex w-full overflow-hidden bg-gray-700 shadow-2xl h-80 rounded-2xl"
                >
                <img src="/images/{p.thumbnail}" alt={p.nombre} class="object-cover w-full h-full">
                </div>
                <p class="mt-6 text-base font-bold leading-none font-title">{p.nombre}</p>
                <p class="mt-2 text-sm font-light leading-none font-title">{p.ocupacion}</p>
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
