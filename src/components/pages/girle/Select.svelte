<script>
  export let options = []
  export let placeholder = '-- Seleccione una opción --'
  export let value = ''
</script>

<div class="inline-block relative">
  <select
    class="input pr-8 { value === '' ? 'text-gray-500' : '' }"
    bind:value
  >
    <option value="" selected={value === ''}>{placeholder}</option>
    {#each options as v, _}
      <option value={v} selected={value === v}>{v}</option>
    {/each}
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 -mt-6">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
