<script lang="ts">
  import { spring } from 'svelte/motion'
  import { styles } from '../../lib/styles'

  let _class = ''
  let _style = ''
  export { _class as class, _style as style }

  let y: number
  let translate: number

  export let offset: number

  export let scaleFactor: number = 6
  export let screen: string = 'all'
  export let negative: boolean = false

  const yoffset = spring(0, { stiffness: 0.07 })

  $: if (offset) {
    //translate = -y * 10 / (offset / 10)
    translate = (y - offset) / scaleFactor
  } else if (offset == 0) {
    translate = y / scaleFactor
  }

  $: yoffset.set(translate ? translate : 0)
  $: final = negative ? $yoffset - ($yoffset * 2) : $yoffset
  $: css = { y:  final.toFixed(2) + 'px' }
</script>

<svelte:window bind:scrollY={y} />

<div
  class="{_class} {screen}:parallax"
  use:styles={css}
  style="{_style}"
>
  <slot translate={translate}></slot>
</div>

<style>
  .parallax {
    will-change: transform;
    transform: translate(0, var(--y));
  }

  .all\:parallax{
    @extend .parallax;
  }

  @screen sm {
    .sm\:parallax {
      @extend .parallax;
    }
  }

  @screen md {
    .md\:parallax {
      @extend .parallax;
    }
  }

  @screen lg {
    .lg\:parallax {
      @extend .parallax;
    }
  }

  @screen xl {
    .xl\:parallax {
      @extend .parallax;
    }
  }
</style>
