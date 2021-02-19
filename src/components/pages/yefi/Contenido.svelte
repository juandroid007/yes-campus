<script>
  import V from '../../IntersectingViewport.svelte'
  import { hoverable } from '/$components/Cursor.svelte'
  import Glide from '@glidejs/glide'

  const page = (array, unit) => {
    var results = [],
      length = Math.ceil(array.length / unit);

    for (var i = 0; i < length; i++) {
      results.push(array.slice(i * unit, (i + 1) * unit));
    }
    return results;
  }

  let glide

  const mountGlide = node => {
    glide = new Glide(node, {
      type: 'carousel',
      perView: 1,
    })
    glide.mount()
  }

  const contenidos = page([
    {
      title: 'Detectando mis fortalezas',
      img: 'a',
    },
    {
      title: 'Entorno productivo y Discapacidad',
      img: 'b',
    },
    {
      title: 'Maestría personal',
      img: 'c',
    },
    {
      title: 'ABC de emprender',
      img: 'd',
    },
    {
      title: 'Modelos de negocios inclusivos',
      img: 'e',
    },
    {
      title: 'Marketing estratégico y segmentación de mercado',
      img: 'f',
    },
    {
      title: 'Creamos un Canvas',
      img: 'g',
    },
    {
      title: 'Identidad y marca',
      img: 'h',
    },
    {
      title: 'Costos y finanzas para emprender',
      img: 'i',
    },
    {
      title: 'Storytelling del emprendimiento',
      img: 'j',
    },
  ], 4)
</script>

<V class="w-full" on:top={() => glide?.update()} oneWay>
  <div class="glide animate" use:mountGlide>
    <div class="w-full glide__track" data-glide-el="track" use:hoverable={{primary: true, text: 'Arrastra', color: '#0273E3'}}>
      <ul class="glide__slides">
        {#each contenidos as c, i}
          <li class="glide__slide">
            <div class="w-full mx-auto">
              <div class="mt-12 grid grid-cols-1 md:grid-cols-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {#each c as item, ii}
                    <div>
                      <img src="/images/yefi/{item.img}.webp" class="m-auto" alt="">
                      <p class="text-2xl font-bold text-center text-primary">Módulo { ii + 4 * i + 1 }</p>
                      <p class="text-2xl font-bold text-center text-secondary">{ item.title }</p>
                    </div>
                  {/each}
                </div>
                <img src="/images/yefi/contenido{i+1}.webp" class="hidden pl-16 m-auto mt-6 md:block md:mt-0" alt="">
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</V>
