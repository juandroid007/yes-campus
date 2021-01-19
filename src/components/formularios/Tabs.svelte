<script>
  export let pages = 3
  export let page = 1
  export let validate = () => true

  function changePage(toGo) {
    if (toGo < 1 || toGo > pages) {
      return
    }
    if (validate()) {
      page = toGo
    }
  }
</script>

<div class="relative w-full mx-auto overflow-hidden bg-white shadow-lg rounded-xl">
  <div class="grid" style="grid-template-columns: repeat({pages}, minmax(0, 1fr));">
    {#each {length: pages} as _, v}
      <div
        class="
        {page == v + 1 ? 'bg-yes-blue-600 text-white' : 'bg-yes-blue-400'}
        p-4
        duration-200
        "
        on:click={_ => changePage(v + 1)}
        >
        <div
          class="
          {page == v + 1 ? 'bg-yes-blue-400 text-primary' : 'bg-yes-blue-600 text-white'}
          shadow-md
          duration-200
          rounded-full text-md m-auto h-12 w-12 flex items-center justify-center font-bold
          "
          >{ page > v + 1 ? '✓' : v + 1 }</div
        >
      </div>
    {/each}
  </div>
</div>
