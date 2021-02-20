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
  class="flex flex-row border h-10 w-40 rounded-lg border-gray-400 relative mb-6"
>
  <button
    on:click={_ => value == 0 ? null : value--}
    class="font-semibold border-r bg-primary hover:bg-primary-400 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
  >
    <span class="m-auto">-</span>
  </button>
  <input
    bind:this={dom}
    bind:value
    on:keydown={input}
    type="number"
    min="0"
    class="no-appearance bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default text-center"
  >

  <button
    on:click={_ => value++}
    class="font-semibold border-l bg-primary hover:bg-primary-400 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
  >
    <span class="m-auto">+</span>
  </button>
</div>
