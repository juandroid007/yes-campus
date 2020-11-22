<script>
  import { fly } from 'svelte/transition'
  import elements from './navigation'
  import { url, isActive } from '@roxi/routify/runtime'
  import { preferences } from '../../stores/preferences'
  export let open = true

  let inside
  let menu

  $: if (!open) menu = null;

  function handleClick() {
    if (!inside && open) {
      //open = false
    }
  }
</script>

<svelte:window on:click={handleClick}/>

{#if open}
  <aside
    on:mouseenter={() => inside = true}
    on:mouseleave={() => inside = false}
    class="absolute w-screen h-screen font-bold shadow font-title text-yes-gray-700 dark:text-yes-gray-200"
    class:open
    transition:fly={{ x: 100, duration: 500 }}
  >
    <div
      class="flex flex-col h-full px-6 pt-32 text-4xl"
    >
      {#if !menu}
        <div>
          {#each elements as el, i}
            {#if el.childrens}
              <div
                class="flex justify-between w-full py-1 my-4 cursor-pointer nav-link"
                on:click={() => menu = el.childrens}
                in:fly={{ x: 100, duration: 500, delay: 100 + (i * 500 / elements.length)}}
              >
                <p
                  class="self-end hidden text-lg cursor-pointer lg:block alt-title"
                  >{el.alt}</p
                >
                <p
                  class="flex items-center cursor-pointer"
                >
                <span class="cursor-pointer">{el.titulo}</span>
                <span class="cursor-pointer i jam:chevron-right"></span>
                </p>
              </div>
            {:else}
              <a
                class="flex justify-between w-full py-1 my-4 nav-link"
                href={$url(el.href)}
                class:selected-nav={$isActive(el.href)}
                in:fly={{ x: 100, duration: 500, delay: 100 + (i * 500 / elements.length)}}
              >
                <p
                  class="self-end hidden text-lg cursor-pointer lg:block alt-title"
                  >{el.alt}</p
                >
                <p
                  class="cursor-pointer"
                  >{el.titulo}</p
                >
              </a>
            {/if}
          {/each}
        </div>
        <div class="flex flex-col lg:flex-col-reverse lg:items-end">
          <div
            class="py-6 pt-8 -m-4 buttons"
            in:fly={{ x: 100, duration: 500, delay: 100 + (elements.length * 500 / elements.length)}}
          >
            <button
              title="Change theme"
              on:click={() => $preferences.darkMode = !$preferences.darkMode}
              class="focus:outline-none mx-4 uppercase cursor-pointer i jam:{$preferences.darkMode ? 'sun' : 'moon'}"
              ></button
            >
          </div>
          <div
            class="flex my-4 text-base"
            in:fly={{ x: 100, duration: 500, delay: 100 + ((elements.length + 1) * 500 / elements.length)}}
          >
            <button
              class="mx-2 btn-secondary-gray"
              >Iniciar sesión</button
            >
            <button
              class="mx-2 btn-primary-gray"
              >Regístrate</button
            >
          </div>
        </div>
      {:else}
        <div class="mb-6 overflow-x-hidden overflow-y-auto">
          {#each menu as el, i}
              <a
                class="block w-full py-1 my-2 text-xl lg:text-right nav-link"
                href={$url(el.href)}
                class:selected-nav={$isActive(el.href)}
                in:fly={{ x: 100, duration: 500, delay: 100 + (i * 500 / elements.length)}}
                >{el.titulo}</a
              >
          {/each}
        </div>
      {/if}
    </div>
  </aside>
{/if}

<style>
  aside {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 1);
  }

  .buttons {
    display: flex;
    @apply text-4xl;
  }

  :global(.dark aside) {
    background-color: rgba(10, 10, 10, 1);
  }

  .nav-link {
    --border: 2px solid #3A3939;
    --alt-opacity: 0;
    border-bottom: 2px solid transparent;
    @apply duration-200;
  }

  :global(.dark .selected-nav) {
    --border: 2px solid #D7D7D7;
  }

  .alt-title {
    opacity: var(--alt-opacity);
    @apply duration-200;
  }

  .selected-nav {
    --alt-opacity: 1;
    border-bottom: var(--border);
  }

  .nav-link:hover {
    --alt-opacity: 1;
    border-bottom: var(--border);
  }
</style>
