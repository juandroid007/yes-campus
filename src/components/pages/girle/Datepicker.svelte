<script>
  import Datepicker from './datepicker/Datepicker.svelte'

  export let selectedDate
  export let formattedSelected

  let dateChosen = false
  let dateFormat = '#{d}/#{m}/#{Y}'
  const daysOfWeek = [
    [ 'Domingo', 'Dom' ],
    [ 'Lunes', 'Lun' ],
    [ 'Martes', 'Mar' ],
    [ 'Miércoles', 'Mié' ],
    [ 'Jueves', 'Jue' ],
    [ 'Viernes', 'Vie' ],
    [ 'Sábado', 'Sáb' ],
  ]
  const monthsOfYear = [
    [ 'Enero', 'Ene' ],
    [ 'Febrero', 'Feb' ],
    [ 'Marzo', 'Mar' ],
    [ 'Abril', 'Abr' ],
    [ 'Mayo', 'May' ],
    [ 'Junio', 'Jun' ],
    [ 'Julio', 'Jul' ],
    [ 'Agosto', 'Ago' ],
    [ 'Septiembre', 'Sep' ],
    [ 'Octubre', 'Oct' ],
    [ 'Noviembre', 'Nov' ],
    [ 'Diciembre', 'Dic' ],
  ]

  selectedDate = new Date()
</script>

<Datepicker
  highlightColor='#275585'
  dayHighlightedBackgroundColor='#275585'
  dayHighlightedTextColor='#fff'
  {monthsOfYear}
  {daysOfWeek}
  format={dateFormat}
  bind:formattedSelected
  bind:dateChosen
  bind:selected={selectedDate}
>
  <button
    class='w-full input'
  >
    {#if dateChosen} {formattedSelected} {:else} Selecciona una fecha {/if}
  </button>
</Datepicker>
