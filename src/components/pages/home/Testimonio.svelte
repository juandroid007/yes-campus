<script>
  import V from '../../IntersectingViewport.svelte'
</script>

<style>
  .a1, .a2 {
    transition: all 0.8s;
  }

  .a1:not(.intersecting) {
    opacity: 0;
    transform: translateX(-5%);
  }

  .a2:not(.intersecting) {
    opacity: 0;
    transform: translateX(5%);
  }
</style>

<V class="flex flex-wrap items-center w-full min-h-screen py-12 -m-12 text-xl content-lg font-title" let:intersecting once>
  <div class="w-full h-full p-12 lg:w-1/2">
    <div class="flex flex-col w-full h-full a1" class:intersecting>
      <p class="text-lg italic font-light">
      "El apoyo de aprendo y emprendo, en especial de Mauricio, ha sido clave en la manera de entender mi negocio de una forma integral. Me han aportado una perspectiva más amplia y eficiente. También hemos compartido como aliados estratégicos y ha sido un placer trabajar con un equipo tan capaz, innovador, estratégico, en donde la excelencia y la amistad son parte de los encuentros."
      </p>
      <p class="mt-6 font-bold">
      Maria Perez - Fundadora de Panasteleria
      </p>
    </div>
  </div>
  <div class="w-full p-12 lg:w-1/2">
    <div class="w-full overflow-hidden bg-gray-500 shadow-2xl min-w-min-content rounded-3xl a2" class:intersecting>
      <img src="/images/testimonio.webp" alt="" class="object-cover w-full h-full">
    </div>
  </div>
</V>
