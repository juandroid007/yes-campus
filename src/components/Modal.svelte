<script>
  import { scale, fade } from 'svelte/transition'
	import { elasticOut } from 'svelte/easing'

  import Portal from './Portal.svelte'

  export let fullscreen = false
  let isOpen = false
  let node

  $: document.documentElement.classList.toggle('overflow-hidden', isOpen)

  export function open() {
    isOpen = true
    node.focus()
  }

  export let onClose

  export const close = () => {
    isOpen = false
    node.blur()
    if (onClose) {
      onClose()
    }
  }

  function keydown(e) {
    e.stopPropagation()
    if (e.key === 'Escape') {
      close()
    }
  }
</script>

<slot name="trigger" {open} />

<Portal target="#modals">
  <div on:keydown={keydown} bind:this={node}>
    {#if isOpen}
      <div class="flex flex-col modal" tabindex={0} autofocus>
        <div class="backdrop" on:click={close} transition:fade={{duration: 200}} />

        <div class="m-auto bg-white content-wrapper dark:bg-yes-gray-800" class:fullscreen in:scale={{duration: 1000, opacity: 1, easing: elasticOut}} out:scale={{duration: 200}}>
          <div class="mb-6">
            <slot name="header" />
          </div>

          <div class="z-10 overflow-x-hidden overflow-y-auto" class:flex-grow={fullscreen}>
            <slot name="content" />
          </div>

          <div class="mt-6">
            <slot name="footer" {close}>
              <div class="flex justify-end">
                <button class="btn-primary" on:click={close}>Cerrar</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    {/if}
  </div>
</Portal>

<style>
  div.modal {
    z-index: 500;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.modal:focus {
    outline: none;
  }

  div.backdrop {
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  div.content-wrapper {
    z-index: 9999;
    max-width: 95vw;
    min-width: 95vw;
    max-height: 95vh;
    overflow: hidden;
    transition: all 500ms ease-in-out;
    display: flex;
    flex-direction: column;
    @apply rounded-xl;
    @apply p-6;
    @apply shadow-xl;
  }

  @screen md {
    div.content-wrapper {
      min-height: 0;
      min-width: 30vw;
      max-width: 45vw;
    }
  }

  div.fullscreen {
    min-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    width: 100vw !important;
    height: 100%;
    border-radius: 0;
  }

  div.content {
    max-height: 50vh;
    overflow: auto;
  }
</style>
