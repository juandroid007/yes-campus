<script>
  import { height } from '../components/navigation/Navbar.svelte'
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'

  metatags.title = 'Nosotros | ' + svitsConfig.name
</script>

<style>
  .parallax::after {
    /* Position the pseudo-element to fill the parent */
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Scale the image to full */
    background-size: cover;

    /* Move the element back then scale the element, it helps to appears more slowly */
    transform: translateZ(-1px) scale(1.7);

    /* Set the parallax section before the other elements. */
    z-index: -1;
  }

  /* Different background images */
  .parallax::after {
    background-image: url(https://source.unsplash.com/vs6a4EHj_Ro/1600x900);
  }
</style>

<div class="w-full">
  <div class="flex content-lg" style="height: calc(70vh - {$height}px)">
    <h1 class="my-auto text-6xl font-title">Acerca de nosotros</h1>
  </div>
  <div class="relative flex w-full bg-red-500" style="height: 100vh">
  </div>
  <div class="flex flex-col py-16 md:flex-row content">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="text-2xl font-bold font-title">Nuestra visión</h2>
    </div>
    <div class="w-full">
      <p class="text-2xl md:text-justify font-title">
      Ser reconocidos como la red de aprendizaje e innovación para emprendendedores y líderes latinoamericanos de alto impacto.
      </p>
    </div>
  </div>
  <div class="flex flex-col py-16 md:flex-row-reverse content">
    <div class="w-full mb-6 md:w-1/2">
      <h2 class="text-2xl font-bold font-title md:text-right">Nuestra misión</h2>
    </div>
    <div class="w-full">
      <p class="text-2xl md:text-justify font-title">
      Ofrecer espacios de aprendizaje, networking y negocios para el fortalecimiento de competencias en emprendimiento, liderazgo e innovación al servicio de personas y organizaciones con deseos de impacto en el logro de sus propositos y el desarrollo sosenible.
      </p>
    </div>
  </div>
  <div class="py-16 content">
    <h2 class="mb-6 text-4xl font-bold font-title">¿Quiénes somos?</h2>
    <p class="mb-6 text-2xl md:text-justify font-title">
    Somos una comunidad de profesionales creativos que trabajamos bajo el concepto de ecosistema y te invitamos  a aprender y emprender junto a nosotros de manera agil, divertida, innovadora y con impacto.
    </p>
    <h3 class="text-2xl font-bold text-right font-title">
      Aprendizaje Acelerado para personas y organizaciones emprendedoras
    </h3>
  </div>
</div>
