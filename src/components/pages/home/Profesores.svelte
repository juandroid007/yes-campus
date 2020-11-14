<script>
  import Glide from '@glidejs/glide'
  import V from '../../IntersectingViewport.svelte'

  const profesores = [
    {
      nombre: 'Kanye West',
      descripcion: 'Cantante',
      imagen: 'https://assets.eleconomista.com.mx/__export/1594074936885/sites/eleconomista/img/2020/07/06/kanye-west-reuters.jpg_2144533222.jpg',
    },
    {
      nombre: 'Kanye West',
      descripcion: 'Cantante',
      imagen: 'https://assets.eleconomista.com.mx/__export/1594074936885/sites/eleconomista/img/2020/07/06/kanye-west-reuters.jpg_2144533222.jpg',
    },
  ]

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
    transition-delay: 0.4s;
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
</style>

<div class="flex flex-col w-full h-full text-white content-lg">
  <h2 class="h-16 text-4xl font-bold leading-none font-title">Aprende con profesionales<br>disruptivos y de alto impacto</h2>
  <V class="my-auto" bind:intersecting on:top={() => {
    glide.update({
      autoplay: 2000,
    })
  }}>
    <div class="glide animate" use:mountGlide class:intersecting>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {#each profesores as p, i}
            <li class="glide__slide">
              <div class="mx-auto w-60">
                <div
                  class="flex w-full overflow-hidden bg-gray-700 shadow-2xl h-72 rounded-2xl"
                >
                  <img src={p.imagen} alt={p.nombre} class="object-cover w-full h-full">
                </div>
                <p class="mt-6 text-2xl font-bold leading-none font-title">{p.nombre}</p>
                <p class="mt-2 text-lg font-light leading-none font-title">{p.descripcion}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex w-full">
        <div class="mx-auto glide__bullets" data-glide-el="controls[nav]">
          {#each profesores as _, i}
            <button class="glide__bullet" data-glide-dir="={i}"></button>
          {/each}
        </div>
      </div>
    </div>
  </V>
</div>
