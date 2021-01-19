<script context="module">
  const initialForm = [
    {
      nombres: '',
      cedula: '',
      instagram: '',
      telefono: '',
      email: '',
      residencia: '',
    },
    {
      ocupacion: '',
      experiencia: '',
      organizacion: '',
      participacionProyecto: '',
    },
  ]
</script>

<script>
  import Modal from '../../Modal.svelte'
  import Tabs from '../../formularios/Tabs.svelte'
  import Select from '../../formularios/Select.svelte'
  import { writable } from 'svelte/store'
  export let open
  let page
  let closeModal

  const form = writable(initialForm)

  const reset = () => {
    $form = [
      {
        nombres: '',
        cedula: '',
        instagram: '',
        telefono: '',
        email: '',
        residencia: '',
      },
      {
        ocupacion: '',
        experiencia: '',
        organizacion: '',
        participacionProyecto: '',
      },
    ]
    page = 1
  }

  const isEmpty = str => !str.trim().length

  let changePage

  function validate() {
    let valid = true
    const i = page - 1
    Object.keys($form[i]).forEach(val => {
      const value = String($form[i][val])
      console.log(value, isEmpty(value))
      valid = !isEmpty(value)
      if (!valid) {
        return
      }
    })
    return valid
  }

  function send() {
    const data = {...$form[0], ...$form[1]}
    if (validate()) {
      if (data.participacionProyecto == 'Sí') {
        if (isEmpty(descripcionParticipacion)) {
          alert('No puede dejar campos vacíos')
          return
        }
      }
    } else {
      alert('No puede dejar campos vacíos')
      return
    }

    alert('Formulario enviado')
    closeModal()
  }

  let descripcionParticipacion = ''
</script>

<Modal bind:open bind:close={closeModal} onClose={reset}>
  <div slot="header">
    <Tabs pages={$form.length} bind:page={page} validate={validate} bind:changePage />
  </div>
  <div slot="content">
    <div class="flex flex-col w-full font-title">
      {#if page == 1}
        <div class="input-label">Nombre y apellido</div>
        <input type="text" class="mb-6 input" placeholder="Ej. Maria Rondón" bind:value={$form[0].nombres}>

        <div class="input-label">Cédula</div>
        <input type="text" class="mb-6 input" placeholder="Ej. V-123456" bind:value={$form[0].cedula}>

        <div class="input-label">Instagram</div>
        <input type="text" class="mb-6 input" placeholder="Ej. @mariarondon" bind:value={$form[0].instagram}>

        <div class="input-label">Teléfono</div>
        <input type="text" class="mb-6 input" placeholder="Ej. +584123456789" bind:value={$form[0].telefono}>

        <div class="input-label">Correo</div>
        <input type="text" class="mb-6 input" placeholder="Ej. mariarondon@gmail.com" bind:value={$form[0].email}>

        <div class="input-label">Estado de residencia</div>
        <input type="text" class="input" bind:value={$form[0].residencia}>
      {:else if page == 2}
        <div class="input-label">Soy un...</div>
          <Select
            bind:value={$form[1].ocupacion}
            options={[
              'Estudiante',
              'Líder socio-político',
              'Emprendedor social',
            ]}
          />


        <div class="mt-6 input-label">Organización donde activa o participa</div>
        <input type="text" class="input" bind:value={$form[1].organizacion}>

        <div class="mt-6 input-label">Experiencia en proyectos sociales</div>
        <input type="text" class="input" bind:value={$form[1].experiencia}>

        <div class="mt-6 input-label">¿Has participado como voluntario en algún proyecto?</div>
          <Select
            bind:value={$form[1].participacionProyecto}
            options={[
              'Sí',
              'No',
            ]}
          />

        {#if $form[1].participacionProyecto === 'Sí'}
          <div class="mt-6 input-label">Descríbenos en cuál y lo que hiciste</div>
          <input type="textarea" class="input" rows="3" bind:value={descripcionParticipacion}>
        {/if}
      {/if}
    </div>
  </div>
  <div slot="footer">
    <div class="flex justify-end -mx-2">
      {#if page < 2}
        <button class="mx-2 btn-primary" on:click={() => changePage(page + 1)}>Siguiente</button>
      {:else}
        <button class="mx-2 btn-primary" on:click={() => changePage(page - 1)}>Anterior</button>
        <button class="mx-2 btn-primary" on:click={send}>Enviar</button>
      {/if}
      <button class="mx-2 btn-primary" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
</Modal>
