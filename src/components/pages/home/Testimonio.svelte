<script>
  import Glide from '@glidejs/glide'
  import V from '../../IntersectingViewport.svelte'

  let glide

  const mountGlide = node => {
    glide = new Glide(node, {
      type: 'carousel',
      perView: 1,
      hoverpause: false,
    })
    glide.mount()
  }

  const testimonios = [
    {
      imagen: 'testimonio',
      cita: 'El apoyo de aprendo y emprendo, en especial de Mauricio, ha sido clave en la manera de entender mi negocio de una forma integral. Me han aportado una perspectiva más amplia y eficiente. También hemos compartido como aliados estratégicos y ha sido un placer trabajar con un equipo tan capaz, innovador, estratégico, en donde la excelencia y la amistad son parte de los encuentros.',
      autor: 'Lucía Galota - CEO de Planning RH',
    },
    {
      imagen: 'juan-camilo',
      cita: 'Aprendo y Emprendo ha sido una gran familia para el crecimiento de mi negocio, acompañándonos desde la creación de nuestra marca Trapiche Cacao hasta la exclente empresa que somos hoy en día. Sin duda alguna programas como el Youn Entrepreneur, y el Cazón Tank  han sido de apoyo fundamental para el crecimiento emprendedor de jóvenes a lo largo del territorio nacional ayudando a transformar ideas e iniciativas a negocios, fundaciones y marcas con un norte y un crecimiento. Desde el estado Táchira, Venezuela un gran Saludo de la familia Tapiche Cacao y mi persona Juan Camilo Restrepo Malavé apoyado este nuevo proyecto Yes Campus.',
      autor: 'Juan Camilo Restrepo - Trapiche Cacao',
    },
  ]
</script>

<style>
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

  :global(.testimonios-slider .glide__bullet--active) {
    background-color: #605F5F;
  }
</style>

<div class="py-12 testimonios-slider content-lg">
  <V class="w-full my-auto" on:top={() => {
    glide.update({
      autoplay: 5000,
    })
  }}>
    <div class="m-auto glide" use:mountGlide>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {#each testimonios as t, i}
            <li class="py-12 glide__slide">
              <div class="flex flex-wrap-reverse items-center w-full mx-auto -m-12 text-xl md:flex-wrap font-title">
                <div class="w-full h-full p-12 lg:w-1/2">
                  <div class="flex flex-col w-full h-full">
                    <p class="text-lg italic font-light">
                    {t.cita}
                    </p>
                    <p class="mt-6 font-bold">
                    {t.autor}
                    </p>
                  </div>
                </div>
                <div class="w-full px-12 lg:w-1/2">
                  <div class="w-full overflow-hidden bg-gray-500 shadow-xl md:my-12 h-96 rounded-3xl">
                    <img src="/images/{t.imagen}.webp" alt={t.autor} class="object-cover w-full h-full">
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex w-full">
        <div class="mx-auto glide__bullets" data-glide-el="controls[nav]">
          {#each testimonios as _, i}
            <button class="glide__bullet" data-glide-dir="={i}"></button>
          {/each}
        </div>
      </div>
    </div>
  </V>
</div>
