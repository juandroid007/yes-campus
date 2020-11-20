<script>
  import Categoria from './Categoria.svelte'
  import Glide from '@glidejs/glide'
  import V from '../../IntersectingViewport.svelte'
  import { hoverable } from '../../Cursor.svelte'

  export let categorias

  let glide
  let intersecting

  const mountGlide = node => {
    glide = new Glide(node, {
      type: 'carousel',
      perView: 1,
      hoverpause: false,
    })
    glide.mount()
  }
</script>

<style>
  .animate {
    transition: 0.4s;
    transition-delay: 0.4s;
  }

  .animate:not(.intersecting) {
    opacity: 0;
    transform: translateY(10%);
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

  :global(.categoria-slider .glide__bullet--active) {
    background-color: #605F5F;
  }
</style>

<div class="flex flex-col w-full h-full mb-6 content-lg categoria-slider">
  <V class="w-full my-auto" bind:intersecting once on:top={() => {
    glide.update({
      autoplay: 2000,
    })
  }}>
    <div class="m-auto glide animate" use:mountGlide class:intersecting>
      <div use:hoverable class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {#each categorias as c, i}
            <li class="glide__slide">
              <div class="flex w-full pt-24">
                <div class="mx-auto">
                  <Categoria c={c} />
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex w-full">
        <div class="mx-auto glide__bullets" data-glide-el="controls[nav]">
          {#each categorias as _, i}
            <button class="glide__bullet" data-glide-dir="={i}"></button>
          {/each}
        </div>
      </div>
    </div>
  </V>
</div>
