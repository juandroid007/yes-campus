<script context="module">
  import { writable } from 'svelte/store'
  export const height = writable(0)
  export const transparent = writable(false)
</script>

<script>
  import Hamburger from './Hamburger.svelte'
  import Sidebar from "./Sidebar.svelte"
  import navigation from "./navigation"
  import { url, isActive } from '@roxi/routify/runtime'
  import { isChangingPage } from '@roxi/routify'
  import { preferences } from '../../stores/preferences'
  import { fly } from 'svelte/transition'
  import { inZone } from '../pages/home/ZonaOscura.svelte'

  $: dark = $preferences.darkMode

  export let sidebar = false

  let navbar

  $: if (!$isChangingPage) sidebar = false;

  let y

  let isTransparent = $transparent
  let top = true

  const setHeight = (n) => {
    $height = n ? n.offsetHeight : 0
  }

  $: top = y <= $height || y === undefined
  $: isTransparent = $transparent && top
  $: setHeight(navbar)
</script>

<svelte:window bind:scrollY={y} on:resize={() => setHeight(navbar)}/>

<header
  class="
    fixed z-10 w-full duration-200 {!isTransparent && top ? 'bg' : ''} pointer-events-none
  "
  class:shadow-md={y > 0 && top}
>
  <div class="pointer-events-auto">
    <Sidebar bind:open={sidebar}/>
  </div>
  <div class="flex items-center justify-between h-24 p-4 px-6 m-auto pointer-events-none duration-200" bind:this={navbar}>
    {#if top || sidebar}
      <nav class="flex pointer-events-auto" transition:fly|local={{ x: -50, duration: 400 }}>
        <a href="/" title="Home" class="duration-100 rounded-xl">
          <img
            src="/images/logo{dark ? '-white' : ''}.svg"
            class="h-16 transform hover:scale-110 duration-200"
            alt="logo"
          />
        </a>
      </nav>
    {/if}
    <div
      class="
        pointer-events-auto
        ml-auto
        items-center px-2 -mx-4 text-base flex font-title text-yes-gray-500 dark:text-yes-gray-300
        {isTransparent ? 'shadow-md glass' : ''}
      "
    >
      {#if top && !sidebar}
        <div class="items-center hidden lg:flex" transition:fly|local={{ x: -50, duration: 400 }}>
        {#each navigation as n}
          {#if n.childrens}
          <div
            class="flex items-center mx-4"
            ><span>{n.titulo}</span><span class="ml-2 i jam:chevron-down"></span></div
          >
          {:else}
            <a
              href={$url(n.href)}
              class="mx-4 nav-link"
              class:selected-nav={$isActive(n.href)}>{n.titulo}</a
            >
          {/if}
        {/each}
        <div class="flex text-base">
          <button
            class="mx-2 btn-secondary"
            >Iniciar sesión</button
          >
          <button
            class="mx-2 btn-primary"
            >Regístrate</button
          >
        </div>
        <div class="h-4 mx-2 border-l border-yes-gray-500 dark:border-yes-gray-300 dark:border-white duration-800"></div>
        <button
          on:click={() => $preferences.darkMode = !$preferences.darkMode}
          title="Change theme"
          class="focus:outline-none mx-4 cursor-pointer nav-link i jam:{$preferences.darkMode ? 'sun' : 'moon'}"
          ></button
        >
        </div>
      {/if}
      <div class="{ top && !sidebar ? 'lg:hidden' : '' } my-auto pointer-events-auto ml-auto" transition:fly|local={{ x: -50, duration: 400 }}>
        <Hamburger bind:open={sidebar} white={isTransparent || $inZone}/>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    transition: all 0.3s ease-in-out;
  }

  .glass {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(200%) blur(10px);
  }

  .bg {
    background-color: white;
  }

  :global(.dark .bg) {
    background-color: #222;
  }

  :global(.dark .glass) {
    background-color: rgba(10, 10, 10, 0.9);
    backdrop-filter: saturate(200%) blur(10px);
  }

  .nav-link {
    transition: border 0.2s ease-in-out, color 0s ease-in-out;
    margin-bottom: -2px;
    border-bottom: 2px solid transparent;
  }

  .selected-nav {
    margin-bottom: -2px;
    border-bottom: 2px solid #0273E3;
  }

  .transparent.selected-nav {
    border-bottom: 2px solid white;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }

  .transparent.nav-link:hover {
    @extend .transparent.selected-nav;
  }

  /*
  .logo-0 {
    opacity: 0;
  }
  */
</style>
