<script>
  export let options = []
  export let placeholder = '-- Seleccione una opción --'
  export let value = ''
</script>

<div class="relative inline-block">
  <select
    class="input pr-8 w-full { value === '' ? 'text-gray-500' : '' }"
    bind:value
  >
    <option value="" selected={value === ''}>{placeholder}</option>
    {#each options as v, _}
      <option value={v} selected={value === v}>{v}</option>
    {/each}
  </select>
</div>
