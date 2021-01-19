<script>
  import Modal from '../../Modal.svelte'
  import Tabs from '../../formularios/Tabs.svelte'
  import Select from '../../formularios/Select.svelte'
  export let open
  let page

  let form = [
    {},
    {
      experiencia: ''
    },
  ]
</script>

<Modal bind:open>
  <div slot="header">
    <Tabs pages={2} bind:page={page} />
  </div>
  <div slot="content">
    <div class="flex flex-col w-full font-title">
      {#if page == 1}
        <div class="input-label">Nombre y apellido</div>
        <input type="text" class="mb-6 input" placeholder="Ej. Maria Rondón">

        <div class="input-label">Cédula</div>
        <input type="text" class="mb-6 input" placeholder="Ej. V-123456">

        <div class="input-label">Instagram</div>
        <input type="text" class="mb-6 input" placeholder="Ej. @mariarondon">

        <div class="input-label">Teléfono</div>
        <input type="text" class="mb-6 input" placeholder="Ej. +584123456789">

        <div class="input-label">Correo</div>
        <input type="text" class="mb-6 input" placeholder="Ej. mariarondon@gmail.com">

        <div class="input-label">Estado de residencia</div>
        <input type="text" class="input">
      {:else if page == 2}
        <div class="input-label">Soy un...</div>
          <Select
            options={[
            'Estudiante',
            'Líder socio-político',
            'Emprendedor social',
            ]}/>


        <div class="mt-6 input-label">Organización donde activa o participa</div>
        <input type="text" class="input">

        <div class="mt-6 input-label">Experiencia en proyectos sociales</div>
        <input type="text" class="input">

        <div class="mt-6 input-label">Organización donde activa o participa</div>
        <input type="text" class="input">

        <div class="mt-6 input-label">¿Has participado como voluntario en algún proyecto?</div>
          <Select
            options={[
            'Sí',
            'No',
            ]}
            bind:value={form[1].experiencia}
          />

        {#if form[1].experiencia === 'Sí'}
          <div class="mt-6 input-label">Descríbenos en cuál y lo que hiciste</div>
          <input type="textarea" class="input" rows="3">
        {/if}
      {/if}
    </div>
  </div>
  <div slot="footer" let:close>
    <div class="flex justify-end -mx-2">
      {#if page < 2}
        <button class="mx-2 btn-primary" on:click={() => page++}>Siguiente</button>
      {:else}
        <button class="mx-2 btn-primary" on:click={() => page--}>Anterior</button>
        <button class="mx-2 btn-primary" on:click={close}>Enviar</button>
      {/if}
      <button class="mx-2 btn-primary" on:click={close}>Cerrar</button>
    </div>
  </div>
</Modal>
