<style>
  .slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height:550px;
    background-image: linear-gradient(0deg, transparent 80%, rgba(90,104,132,0.3939776594231442) 90%, rgba(90,104,132,0.6432773793110995) 95%, rgba(90,104,132,0.6516807406556373) 95%, rgba(90,104,132,1) 100%), var(--slide-image);
  }
</style>

<script>
  import V from '../../IntersectingViewport.svelte'
  import { hoverable } from '/$components/Cursor.svelte'
  import Glide from '@glidejs/glide'

  let glide

  const mountGlide = node => {
    glide = new Glide(node, {
      type: 'carousel',
      perView: 1,
      gap: 0,
      autoplay: 3000,
      hoverpause: false,
    })
    glide.mount()
  }
</script>

<V class="w-full" on:top={() => glide?.update()} oneWay>
  <div class="glide animate" use:mountGlide>
    <div class="w-full glide__track" data-glide-el="track" use:hoverable={{primary: true, text: 'Arrastra', color: '#0273E3'}}>
      <ul class="glide__slides">
        {#each new Array(12).fill() as _, i}
          <li class="glide__slide">
            <div class="w-full">
              <div class="slide" style="--slide-image: url(/images/yefi/slide{i+1}.webp)" alt="">
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</V>
