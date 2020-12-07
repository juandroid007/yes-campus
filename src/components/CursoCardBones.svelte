<script>
  import { url } from '@roxi/routify/runtime'
  import Image from './Image.svelte'
  export let delay = 0
</script>

<div
  class="overflow-hidden bg-gray-200 border shadow bone animate-pulse dark:bg-yes-gray-700 hover:shadow-lg rounded-2xl dark:border-gray-700 transform sm:hover:-translate-y-2 duration-200 h-80"
  style="--delay: {delay}ms"
>
</div>

<style>
  .bone {
    animation-delay: var(--delay);
  }
</style>
