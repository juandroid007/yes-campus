<script>
  import { onMount } from 'svelte'
   
  export let once = false
  export let top = 0
  export let bottom = 0
  export let left = 0
  export let right = 0
   
  let container
  let intersecting = false
   
  onMount(() => {
    function handler() {
      const bcr = container.getBoundingClientRect()
       
      intersecting = (
        (bcr.bottom + bottom) > 0 &&
        (bcr.right + right) > 0 &&
        (bcr.top - top) < window.innerHeight &&
        (bcr.left - left) < window.innerWidth
      )
         
      if (intersecting && once) {
        window.removeEventListener('scroll', handler)
      }
    }
   
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  })
</script>
 
<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
 
<div bind:this={container}>
  <slot {intersecting}></slot>
</div>
