<script>
  import { url } from '@roxi/routify/runtime'
  import Image from './Image.svelte'

  export let fixedImg = false
  export let fluidTitle = true
  export let hFull = true
  export let thumbnail
  export let title
  export let price
  export let link
  export let modulos
  export let currency
  export let instructor
</script>

<div
  class="flex flex-col overflow-hidden border shadow hover:shadow-lg rounded-2xl dark:border-gray-700 transform sm:hover:-translate-y-2 duration-200"
  class:h-full={hFull}
>
  <Image src={thumbnail} alt={title} class="object-cover w-full rounded-tl-2xl rounded-tr-2xl bg-yes-gray-100 dark:bg-yes-gray-800 {fixedImg ? 'h-40' : ''}" />
  <div class="flex flex-col w-full p-4">
    <h2 title={title} class="text-2xl font-bold leading-none text-gray-700 dark:text-gray-500 font-title" class:h-24={!fluidTitle}>{title}</h2>
    {#if modulos}
      <p class="flex items-center text-xl text-gray-700 dark:text-gray-500 font-title">
        {modulos} {modulos > 1 ? 'módulos' : 'módulo'}
      </p>
    {/if}
    {#if price != null}
      <p class="flex items-center text-xl text-gray-700 dark:text-gray-500 font-title">
      <span class="mr-2 text-yes-blue-500 i mdi:cash"></span>
        {#if price == 0}
          <span>Gratis</span>
        {:else}
          <span>{currency} {price}</span>
        {/if}
      </p>
    {/if}
    <p class="flex items-center mt-6 text-base text-gray-700 dark:text-gray-500 font-title">
      Por {instructor}
    </p>
  </div>
  {#if link}
    <div class="flex p-4 pt-0 mt-auto -mx-2 text-white">
      <a
        href={$url(link)}
        title="Ver curso"
        style="border-width: 2px"
        class="flex items-center justify-center w-full py-2 mx-2 border text-yes-blue-500 border-yes-blue-500 duration-200 hover:bg-yes-blue-500 hover:text-white rounded-md font-title"
        target="_blank"
        >Ver curso <span class="ml-2 i jam:search"></span></a
      >
    </div>
  {/if}
</div>
