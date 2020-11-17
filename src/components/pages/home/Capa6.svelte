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

  .img-wrapper {
    position: relative;
  }

  .wave, .wave2 {
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 100%;
    @apply duration-500;
    transition: transform 0.3s;
    transition-delay: 0.5s;
  }

  .wave {
    @apply transform;
    @apply scale-50;
    @apply rotate-12;
  }

  .intersecting .wave {
    @apply scale-105;
    @apply rotate-45;
    @apply translate-y-12;
    @apply -translate-x-12;
  }

  .wave2 {
    transform: scale(-0.2, -0.2) rotate(-12deg) translate(0, 5rem);
  }

  .intersecting .wave2 {
    transform: scale(-0.8, -0.8) rotate(12deg) translate(3rem, 10rem);
  }
</style>

<Viewport class="overflow-hidden" let:intersecting>
  <div class="flex flex-col-reverse items-center px-6 py-12 -m-4 lg:flex-row lg:h-screen content-lg" style="--wave-color: #0273E3">
    <div class="m-4 lg:w-1/2 a1" class:intersecting>
      <div class="text-4xl font-bold leading-tight lg:leading-none lg:text-5xl font-title">Desarrollamos competencias personales y organizacionales</div>
    </div>
    <div class="m-4 lg:p-16 lg:w-1/2 a2 img-wrapper" class:intersecting>
      <div class="hidden wave lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.12 135.01">
          <defs>
            <style>.cls-1{fill: var(--wave-color);}</style>
          </defs><title>Category_8_down</title>
          <path xmlns="http://www.w3.org/2000/svg" class="cls-1" d="M64.28,112.36c5.68-.75,8.36-3.92,7.84-6.65s-3.32-5.24-5-7.87C58.67,84.45,80.15,70,72.45,56.5c-3.38-5.93-12.26-11.26-12.06-17.39C60.56,34,67,29.48,70.25,24.62c4.12-6.18,2.7-13.34-5.74-18.48S40.12-1.55,27.32,1C12.6,3.94,6.35,12,3.58,19.32-4.14,39.8,2.85,60.58,4,81.16c.39,7-13.44,40,14.45,39.08,9.73-.31,13.28-4.27,20.19-6.63C48.23,110.33,54.36,113.68,64.28,112.36Z"/>
        </svg>
      </div>
      <div class="hidden wave2 lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.12 135.01">
          <defs>
            <style>.cls-2{fill:#34b678;}</style>
          </defs><title>Category_8_down</title>
          <path xmlns="http://www.w3.org/2000/svg" class="cls-2" d="M64.28,112.36c5.68-.75,8.36-3.92,7.84-6.65s-3.32-5.24-5-7.87C58.67,84.45,80.15,70,72.45,56.5c-3.38-5.93-12.26-11.26-12.06-17.39C60.56,34,67,29.48,70.25,24.62c4.12-6.18,2.7-13.34-5.74-18.48S40.12-1.55,27.32,1C12.6,3.94,6.35,12,3.58,19.32-4.14,39.8,2.85,60.58,4,81.16c.39,7-13.44,40,14.45,39.08,9.73-.31,13.28-4.27,20.19-6.63C48.23,110.33,54.36,113.68,64.28,112.36Z"/>
        </svg>
      </div>
      <div class="flex w-full md:my-12 h-96">
        <img src="/images/desarrollo.jpg" alt="" class="object-cover w-full m-auto shadow-xl rounded-3xl">
      </div>
    </div>
  </div>
</Viewport>
