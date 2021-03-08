<script>
  export let value
  value = 0
  let dom
  function input(evt) {
    evt.preventDefault()
    const number = Number(evt.key)
    if (evt.key === 'Backspace') {
      dom.value = String(dom.value).substr(0, String(dom.value).length - 1)
    } else if (number !== NaN) {
      dom.value = Number(String(dom.value) + String(number))
    }
  }
</script>

<div
  class="relative flex flex-row w-40 h-10 mb-6 border border-gray-400 rounded-lg"
>
  <button
    on:click={_ => value == 0 ? null : value--}
    class="flex w-20 h-full font-semibold text-white border-r border-gray-400 rounded-l cursor-pointer bg-girle-primary hover:bg-girle-primary-400 focus:outline-none"
  >
    <span class="m-auto">-</span>
  </button>
  <input
    bind:this={dom}
    bind:value
    on:keydown={input}
    type="number"
    min="0"
    class="flex items-center justify-center w-24 text-xs text-center bg-white cursor-default no-appearance md:text-base"
  >

  <button
    on:click={_ => value++}
    class="flex w-20 h-full font-semibold text-white border-l border-gray-400 rounded-r cursor-pointer bg-girle-primary hover:bg-girle-primary-400 focus:outline-none"
  >
    <span class="m-auto">+</span>
  </button>
</div>
