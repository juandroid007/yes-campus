<script context="module">
  import { spring } from 'svelte/motion'

  export const coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.12,
    damping: 1
  })

  export const origSize = 30
  export const size = spring(origSize)

  export const hoverable = node => {
      node.addEventListener('mouseenter', () => { size.set(origSize * 4) })
      node.addEventListener('mouseleave', () => { size.set(origSize) })
  }
</script>

<script>
  import { styles } from '../lib/styles'
  let coordsAbs = {
    x: 50,
    y: 50,
  }
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
  on:mousemove|pasive={e => {
    coords.set({ x: e.clientX, y: e.clientY })
    coordsAbs.x = e.clientX
    coordsAbs.y = e.clientY
  }}
/>

<div
  class="hidden cursor-blend md:block"
  use:styles={{
    x: $coords.x+'px', y: $coords.y+'px',
    offset: `-${Math.floor($size / 2)}px`,
    size: Math.floor($size)+'px'
  }}
>
</div>
<div
  class="hidden cursor-blend md:block"
  use:styles={{
    x: coordsAbs.x+'px', y: coordsAbs.y+'px',
    offset: `-${Math.floor($size / 8)}px`,
    size: Math.floor($size / 4)+'px'
  }}
>
</div>
