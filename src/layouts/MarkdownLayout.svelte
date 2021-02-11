<script context="module">
  import img from '../components/Image.svelte'
  import Img from '../components/Image.svelte'
  export { img }
</script>

<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import { fly } from 'svelte/transition'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import V from '../components/IntersectingViewport.svelte'
  import { preferences } from '../stores/preferences'
  import { calendar } from '../lib/dayjs'

  $: dark = $preferences.darkMode

  const getImg = (src) => {
    const validateExternalSrc = (str) =>
      str.indexOf("http://") == 0 || str.indexOf("https://") == 0
    const isExternal = validateExternalSrc(src)
    const path = isExternal ? src : '/images/' + src
    const extension = path.split('.').pop()
    const pathWithoutExtension = path.substr(0, path.length - extension.length)
    return isExternal ? path : pathWithoutExtension + 'webp'
  }

  export let title
  export let description
  export let thumbnail
  export let date

  metatags.title = title + ' | ' + svitsConfig.name
  metatags.description = description || svitsConfig.description
</script>

<div class="w-full">
  <div
    class="flex flex-col pt-4 pb-16 lg:py-16 content-lg"
    in:fly={{y: -50, duration: 1000, delay: 200}}
  >
    <div class="flex flex-col w-full lg:items-center lg:flex-row">
      <div class="w-full">
        <div class="w-full pb-8">
          <a
            title="Ver todos los YES Talks"
            href="/talks"
            class="flex items-center justify-end w-full py-2 text-center t-h3 text-yes-gray-400"
            ><span class="mr-2 i jam:chevron-left"></span> <span class="cursor-pointer hover:underline">Ver todas las entradas</span></a
          >
        </div>
        <h1 class="flex mb-12 text-3xl font-bold leading-none md:text-5xl font-title">{title}</h1>
        <p class="py-1 pb-2 pl-6 text-xl font-bold leading-none border-l-4 border-yes-blue-500 md:text-xl font-title">{description}</p>
        <Img src={thumbnail} class="w-full mt-16 rounded-lg" />
      </div>
    </div>
  </div>
  <div class="px-6 pb-12 text-gray-600 dark:text-gray-100">
    <div class="w-full pb-12 mx-auto layout lg:px-0 lg:w-5/10">
      <div class="w-full text-base">
        {calendar(date)}
      </div>
    </div>
    <div class="flex flex-col w-full mx-auto layout lg:px-0 lg:w-5/10 space-y-8">
      <slot/>
    </div>
  </div>
</div>

<style>
  @screen sm {
    :global(.layout) {
      @apply text-xl;
    }
  }

  :global(.layout h1, .layout h2, .layout h3, .layout h4, .layout h5, .layout h6) {
    @apply font-title;
    @apply leading-none;
    @apply text-gray-800;
    @apply font-bold;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3, .dark .layout h4, .dark .layout h5, .dark .layout h6) {
    color: white;
  }

  :global(.layout blockquote) {
    border-left: 4px solid #0273E3;
    border-top: 4px solid #0273E3;
    @apply rounded-bl-xl;
    @apply py-4;
    @apply pl-6;
    @apply my-6;
  }

  @screen lg {
    :global(.layout blockquote) {
      @apply -mx-24;
    }
  }

  :global(.layout img) {
    @apply rounded-lg;
  }

  :global(.layout h1) {
    @apply text-5xl;
  }

  :global(.layout h2) {
    @apply text-4xl;
  }

  :global(.layout h3) {
    @apply text-3xl;
  }

  :global(.layout a) {
    @apply text-blue-500;
  }

  :global(.layout a:hover) {
    text-decoration: underline;
  }

  :global(.layout ul) {
    @apply list-disc;
    @apply pl-6;
  }

  :global(.layout li) {
    @apply list-disc;
    @apply my-4;
  }
</style>
