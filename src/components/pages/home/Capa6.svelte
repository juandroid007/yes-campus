<script>
  import Viewport from '../../IntersectingViewport.svelte'
</script>

<style>
  .a1, .a2 {
    transition: all 0.8s;
    transition-delay: var(--delay);
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

<Viewport let:intersecting once>
  <div class="flex flex-col-reverse items-center px-6 py-12 lg:flex-row lg:h-screen content-lg">
    <div class="lg:w-1/2 a1" class:intersecting>
      <div class="text-4xl font-bold leading-tight lg:leading-none lg:text-5xl font-title">Desarrollamos competencias personales y organizacionales</div>
    </div>
    <div class="lg:w-1/2 a2" class:intersecting>
      <img src="/images/logo.svg" class="w-full pb-12 mx-auto lg:pb-0 lg:w-6/10" alt="">
    </div>
  </div>
</Viewport>
