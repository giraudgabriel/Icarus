<template>
  <div>

    <b-button v-b-modal.projectModal>Novo Projeto <i class="fa fa-plus"></i></b-button>

    <b-modal id="projectModal" title="Novo Projeto">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>