<script>
  import { url } from '@roxi/routify/runtime'
  import Image from './Image.svelte'

  export let thumbnail
  export let title
  export let price
  export let link
</script>

<div
  class="overflow-hidden border shadow hover:shadow-lg rounded-2xl dark:border-gray-700 transform sm:hover:-translate-y-2 duration-200"
>
  <img src={thumbnail} alt={title} class="object-cover w-full rounded-tl-2xl rounded-tr-2xl">
  <div class="flex flex-col w-full p-4">
    <h2 title={title} class="h-32 text-2xl font-bold leading-none text-gray-700 dark:text-gray-500 font-title">{title}</h2>
    <p class="flex items-center text-xl text-gray-700 dark:text-gray-500 font-title">
    <span class="mr-2 text-yes-blue-500 i mdi:cash"></span>
    {#if price == 0}
      <span>Gratis</span>
    {:else}
      <span>${price}</span>
    {/if}
    </p>
    <div class="flex mt-2 -mx-2 text-white">
      <a
        href={$url(link)}
        title="Ver curso"
        style="border-width: 2px"
        class="flex items-center justify-center w-full py-2 mx-2 border text-yes-blue-500 border-yes-blue-500 duration-200 hover:bg-yes-blue-500 hover:text-white rounded-md font-title"
        target="_blank"
        >Ver curso <span class="ml-2 i jam:search"></span></a
      >
    </div>
  </div>
</div>
