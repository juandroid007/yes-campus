<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import PrimeraCapa from '../components/pages/home/Capa1.svelte'
  import SegundaCapa from '../components/pages/home/Capa2.svelte'
  import TerceraCapa from '../components/pages/home/Capa3.svelte'
  import CuartaCapa from '../components/pages/home/Capa4'
  import SextaCapa from '../components/pages/home/Capa6.svelte'
  import Carousel from '../components/carousel/Carousel.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  metatags.title = svitsConfig.name
</script>

<div class="w-full min-h-screen">
  <PrimeraCapa/>
  <SegundaCapa/>
  <TerceraCapa/>
  <CuartaCapa/>

  <Carousel height="70vh"/>

  <SextaCapa/>
</div>
