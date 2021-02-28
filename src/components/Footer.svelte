<script>
  import navs from './navigation/navigation'
  import { prefetch, url } from '@roxi/routify'

  $: isolated = navs.filter(e => !e.childrens)
  $: childrens = navs.filter(e => e.childrens)

  $: isolated
    .filter(node => node.href)
    .forEach(node => prefetch(node.href))
  $: childrens
    .filter(node => node.href)
    .forEach(node => prefetch(node.href))
</script>

<footer class="py-8">
  <div class="flex flex-col justify-between -my-4 text-gray-400 md:flex-row content">
    {#if isolated.length}
      <div
        class="flex flex-col my-4"
      >
        <p class="text-white title">Menú</p>
        <div class="flex flex-col w-full mt-2">
          {#each isolated as n}
            <a href={n.href} class="my-1 hover:underline link">{n.titulo}</a>
          {/each}
        </div>
      </div>
    {/if}
    {#each childrens as n, i}
      <div
        class="
               my-4
               flex flex-col
               { i == childrens.length - 1 ? 'md:text-right' : '' }
               "
      >
        <p class="text-white title">{n.titulo}</p>
          <!--p
            class="
                   flex items-center title
                   { n.childrens && i == navs.length - 1 ? 'md:justify-end' : '' }
                  "
            ><span>{n.titulo}</span> <span class="i jam:chevron-down"></span></p
          -->
        <div class="flex flex-col w-full mt-2">
          {#each n.childrens as c}
            <a href={$url(c.href)} class="my-1 hover:underline link">{c.titulo}</a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <div class="flex flex-wrap justify-between mt-6 text-gray-500 dark:text-gray-400 content" style="mix-blend-mode: difference">
    <p class="w-full pb-6 text-sm md:pb-0 md:w-auto">Desarrollado por <strong>Marketing Shakers</strong> y <strong>Bisual Media</strong></p>
    <p class="w-full text-sm md:w-auto"><strong>YES CAMPUS</strong>© 2020. Todos los derechos reservados</p>
  </div>
</footer>

<style>
  @screen md {
    .section {
      width: 25%;
    }

    footer {
      background: url(/images/footer.svg);
      background-position: bottom right;
      background-size: 25%;
      background-repeat: no-repeat;
    }
  }

  .title {
    @apply text-xl;
    @apply uppercase;
    @apply font-title;
    @apply font-bold;
    @apply text-gray-400;
  }

  :global(.dark) .title {
    @apply text-gray-300;
  }

  .title, .link {
    mix-blend-mode: difference;
  }
</style>
