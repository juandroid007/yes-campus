<script context="module">
  import img from '../components/ImageCaption.svelte'
  export { img }
</script>

<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import { fly } from 'svelte/transition'
  import { calendar } from '../lib/dayjs'

  export let title
  export let description
  export let date
  export let video

  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return (match && match[2].length === 11)
      ? match[2]
      : null
  }

  metatags.title = title + ' | ' + svitsConfig.name
  metatags.description = description || svitsConfig.description
</script>

<div class="relative w-full">
  <div in:fly={{y: -10, duration: 500, delay: 100}}>
    <div class="pt-8 content lg:hidden">
      <a
        title="Ver todos los YES Talks"
        href="/talks"
        class="flex items-center justify-end w-full py-2 text-center t-h3 text-yes-gray-400"
        ><span class="mr-2 i jam:chevron-left"></span> <span class="pointer-events-none hover:underline">Ver todos los YES Talks</span></a
      >
    </div>
    <div class="pt-4 pb-12">
      <div class="flex flex-col content-lg lg:flex-row lg:space-x-8 space-y-8">
        <div class="flex flex-col w-full lg:w-1/2 lg:flex-grow">
          <div class="top-0 w-full pt-8 lg:sticky">
            <div class="relative w-full transform" style="height: 0; padding-bottom: 56.25%;">
              <iframe
                title={title}
                src="https://www.youtube.com/embed/{getId(video)}"
                class="absolute w-full h-full overflow-hidden rounded-lg transform"
                frameborder="0"
                allowfullscreen
                ></iframe
              >
            </div>
            <div class="flex flex-col w-full my-8 lg:flex-row">
              <h1 class="t-h1">{title}</h1>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/2">
          <div class="hidden w-full pb-8 lg:block">
            <a
              title="Ver todos los YES Talks"
              href="/talks"
              class="flex items-center justify-end w-full py-2 text-center t-h3 text-yes-gray-400"
              ><span class="mr-2 i jam:chevron-left"></span> <span class="cursor-pointer hover:underline">Ver todos los YES Talks</span></a
            >
          </div>
          <div class="w-full mb-6 text-base">
            {calendar(date)}
          </div>
          <div class="flex flex-col w-full mb-8">
            <h2 class="t-h2">Sinopsis:</h2>
          </div>
          <div class="w-full p-4 mx-auto overflow-auto border rounded-lg shadow layout t-p">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(.layout p) {
    @apply mb-6;
  }

  :global(.layout p:last-child) {
    @apply mb-0;
  }

  :global(.layout h1, .layout h2, .layout h3) {
    @apply font-title;
    @apply mb-6;
    @apply leading-none;
    @apply text-gray-800;
    font-weight: 400;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3) {
    color: white;
  }

  :global(.layout blockquote) {
    @apply border-l-2;
    @apply border-yes-blue-500;
    @apply pl-6;
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
    @apply pl-4;
  }

  :global(.layout li) {
    @apply list-disc;
    @apply my-2;
  }

  :global(.layout pre) {
    @apply rounded-xl;
    @apply mb-6;
  }

  .wave {
    display: block;
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 94px;
  }

  @screen sm {
    .wave {
      height: 128px;
    }
  }

  .wave path {
    transition: fill .2s ease;
  }

  .white-path {
    fill: #fff;
  }

  .dark-path {
    fill: #222;
  }
</style>
