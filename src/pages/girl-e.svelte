<script>
  import Hero from '/$components/pages/girle/Hero.svelte'
  import Segundo from '/$components/pages/girle/Segundo.svelte'
  import Tercero from '/$components/pages/girle/Tercero.svelte'
  import Cuarto from '/$components/pages/girle/Cuarto.svelte'
  import Requisitos from '/$components/pages/girle/Requisitos.svelte'
  import Modulos from '/$components/pages/girle/Modulos.svelte'
  import Profesores from '/$components/pages/girle/Profesores.svelte'
  import Formulario from '/$components/pages/girle/Formulario.svelte'

  let openForm
</script>

<Formulario bind:open={openForm} />

<div class="w-full overflow-hidden bkg" id="girle" style="--bkg2: {'url("/images/girle/fondo modulos.webp")'}">
  <Hero {openForm} />
  <Segundo />
  <Tercero {openForm} />
  <Requisitos />
  <Cuarto />
  <Modulos {openForm} />
  <Profesores />
</div>
