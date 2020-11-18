<script context="module">
  import { writable } from 'svelte/store'
  import { spring } from 'svelte/motion'

  export const coords = spring({ x: 0, y: 0 }, {
    stiffness: 0.12,
    damping: 1
  })

  export const origSize = 30
  export const size = spring(origSize, {
    stiffness: 0.12,
    damping: 1
  })

  const hovering = writable(false)

  const expand = (mul = 4) => {
    size.set(origSize * mul)
  }

  export const hoverable = node => {
      node.addEventListener('mouseenter', () => {
        hovering.set(true)
        expand()
      })
      node.addEventListener('mouseleave', () => {
        hovering.set(false)
        expand(1)
      })
  }
</script>

<script>
  import { styles } from '../lib/styles'
  let coordsAbs = {
    x: 50,
    y: 50,
  }
  let hidden = true
</script>

<style>
  .cursor-blend {
    pointer-events: none;
    position: fixed;
    top: var(--y);
    left: var(--x);
    width: var(--size);
    height: var(--size);
    transform: translate(var(--offset), var(--offset));
    background-color: white;
    backface-visibility: hidden;
    border-radius: 50%;
    z-index: 1000000;
    mix-blend-mode: difference;
  }
</style>

<svelte:window
  on:touchmove|pasive={() => {
    hidden = true
  }}
  on:mousemove|pasive={e => {
    hidden = false
    coords.set({ x: e.clientX, y: e.clientY })
    coordsAbs.x = e.clientX
    coordsAbs.y = e.clientY
  }}
  on:mousedown={() => expand(2)}
  on:mouseup={() => {
    if ($hovering) {
      expand()
    } else {
      expand(1)
    }
  }}
/>

<div
  class:hidden
  class="cursor-blend"
  use:styles={{
    x: $coords.x+'px', y: $coords.y+'px',
    offset: `-${Math.floor($size / 2)}px`,
    size: Math.floor($size)+'px'
  }}
>
</div>
<div
  class:hidden
  class="cursor-blend"
  use:styles={{
    x: coordsAbs.x+'px', y: coordsAbs.y+'px',
    offset: `-${Math.floor($size / 8)}px`,
    size: Math.floor($size / 4)+'px'
  }}
>
</div>
