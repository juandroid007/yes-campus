<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Image from '../components/Image.svelte'
  import Title from '../components/Title.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  const slides = [
    {
      content: 'Don\'t eat less,\njust eat real.',
      bg: 'url(/images/bg.jpg)',
    },
    {
      content: 'Fresh and delicious.',
      bg: 'url(/images/bg2.jpg)',
    },
    {
      content: 'Box Lunches Seattle.',
      bg: 'url(/images/bg3.jpg)',
    },
  ]

  metatags.title = svitsConfig.name
</script>

<div class="w-full min-h-screen">
  <div class="py-12 content">
  </div>

  <!--button class="snipcart-add-item"
    data-item-id="starry-night"
    data-item-price="79.99"
    data-item-url="/paintings/starry-night"
    data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
    data-item-image="/assets/images/starry-night.jpg"
    data-item-name="The Starry Night"
    data-item-quantity=3>
    Add to cart
  </button-->
</div>
