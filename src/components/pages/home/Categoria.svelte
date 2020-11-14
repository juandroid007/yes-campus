<script>
  export let c
</script>

<div class="m-auto transform hover:-translate-y-4 duration-200 hover:-rotate-2">
  <div class="w-64 h-64 overflow-hidden shadow-md rounded-2xl hover:shadow-lg duration-200" style="background: gray">
    <img src="https://source.unsplash.com/random/236x236" alt="" class="object-cover w-full h-full">
  </div>
  <p class="w-64 mt-2 mr-2 text-2xl font-bold leading-tight lg:h-24 font-title">{c.title}</p>
</div>
