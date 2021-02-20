<script>
  import { onMount } from 'svelte'

  let diff = () => ({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  let final = new Date('2020-07-07')

  $: count = diff()

  onMount(() => {
    const interval = setInterval(() => {
      diff = () => {
        const total = Date.parse(final) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );

        return {
          total,
          days,
          hours,
          minutes,
          seconds
        }
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<div class="flex flex-col items-center bkg-primary font-bold text-xl xl:text-4xl text-white uppercase text-center p-16">
  <p>La convocatoria ya ha finalizado</p>
  <span class="bg-white h-1 w-20 block mt-4" />
  <div class="hidden">
    <p>La convocatoria cierra en</p>
    <p class="text-secondary">{count.days} días con {count.hours} horas, {count.minutes} minutos y {count.seconds} segundos</p>
    <span class="bg-white h-1 w-20 block mt-4" />
  </div>
  <p class="mt-6">Inicio: <span class="text-secondary">30/06/2020</span></p>
  <p>Cierre: <span class="text-secondary">07/07/2020</span></p>
  <span class="bg-white h-1 w-20 block mt-4" />
</div>

