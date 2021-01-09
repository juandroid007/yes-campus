<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import V from '../components/IntersectingViewport.svelte'

  metatags.title = 'Evolution | ' + svitsConfig.name
</script>

<div class="w-full">
  <PC class="relative py-16 overflow-hidden bg-black" let:offset scaleFactor={10}>
    <P
      class="h-full content"
      motion={false}
      offset={offset}
    >
    <div class="flex flex-wrap items-center w-full h-full -m-6">
      <div class="w-full p-6 sm:w-1/2">
        <img src="/images/evolution/bg1-2.webp" alt="" class="m-auto">
      </div>
      <div class="w-full p-6 sm:w-1/2">
        <img src="/images/evolution/bg1-1.webp" alt="" class="m-auto">
      </div>
    </div>
    </P>
  </PC>
  <PC class="flex flex-wrap items-center py-16 overflow-hidden content" let:offset>
    <V class="w-full lg:w-1/2 animate" oneWay>
      <div class="mb-6 text-black t-h2">El crecimiento de tu<br>empresa no tiene porque<br>ser lento.</div>
      <p class="mb-6 t-p">
      <strong>Evolution</strong> es un programa de aceleración empresarial que tiene como objetivo fortalecer los conocimientos del emprendedor, en miras de profesionalización, análisis competitivo, ejecutivo, financiero y así exponencial el desarrollo y proyección de su empresa en miras de comercialización, exportación de servicios/productos, apertura de nuevas sucursales y/o aspirar a convertirse en franquicia. 
      </p>
    </V>
    <div class="relative w-full h-48 lg:w-1/2 lg:pl-16 sm:h-96">
      <P
        class="absolute bottom-0 shadow w-6/10"
        offset={offset}
        negative
        scaleFactor={10}
      >
        <img src="/images/evolution/parallax1.webp" alt="" class="w-full">
      </P>
      <P
        class="absolute right-0 shadow w-6/10"
        offset={offset}
        scaleFactor={10}
      >
        <img src="/images/evolution/parallax2.webp" alt="" class="w-full">
      </P>
    </div>
  </PC>
</div>
