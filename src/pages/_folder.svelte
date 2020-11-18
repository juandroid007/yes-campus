<script>
  import Navbar, { height, transparent } from '../components/navigation/Navbar.svelte'
  import Cursor from '../components/Cursor.svelte'
  import Footer from '../components/Footer.svelte'
  import { isActive } from '@roxi/routify/runtime'
</script>

<div style="z-index: 1000000">
  <Cursor/>
</div>

<div class="flex flex-col w-full min-h-screen blend duration-200">
  <div class="z-40">
    <Navbar/>
  </div>
  <main class="flex justify-center flex-grow h-full duration-100" style="margin-top: {!$transparent ? $height : 0}px">
    <slot/>
  </main>
  <Footer/>
</div>
