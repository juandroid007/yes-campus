<script>
  export let title = 'Título'
  let open = false
</script>

<div class="overflow-hidden rounded-sm shadow-lg cursor-pointer accordion">
  <div class="accordion__header" on:click={() => (open = !open)}>
    <p class="font-bold t-p">{title}</p>
  </div>
  <div class="accordion__body" class:open>
    <div class="accordion__body--content"></div>
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
    justify-content: space-between;
    color: white;
    background-color: black;
  }

  .accordion__header, .accordion__body--content {
    padding: 1rem;
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

  .accordion__body.open {
    max-height: 1000px;
  }
</style>
