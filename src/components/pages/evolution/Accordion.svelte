<script>
  export let title = 'Título'
  export let body = 'Cuerpo'
  let open = false
</script>

<div class="overflow-hidden rounded-sm shadow-lg accordion" class:open>
  <div class="cursor-pointer accordion__header" on:click={() => (open = !open)}>
    <p class="font-bold t-p">{title}</p>
    <div class="accordion__header--arrow"></div>
  </div>
  <div class="accordion__body">
    <div class="accordion__body--content t-p">
      {@html body}
    </div>
  </div>
</div>

<style>
  .accordion {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    widows: 100%;
  }

  .accordion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: black;
  }

  .accordion__header, .accordion__body--content {
    padding: 1rem;
  }

  .accordion__header--arrow {
    background-image: url("/images/evolution/detalles/flecha.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(90deg);
  }

  .open .accordion__header--arrow {
    transform: rotate(-90deg);
  }

  .accordion__body {
    background-color: white;
    max-height: 0px;
    transition: max-height 0.8s ease-in-out;

    @apply border-b;
    @apply border-l;
    @apply border-r;
    @apply rounded-bl-sm;
    @apply rounded-br-sm;
  }

  .open .accordion__body {
    max-height: 1000px;
  }
</style>
