<template>
  <div>

    <b-button id="show-btn" @click="$bvModal.show('newProjectModal')"><span class="fa fa-plus"></span> Novo Projeto
    </b-button>

    <b-modal id="newProjectModal" hide-footer>
      <template v-slot:modal-title>
        Novo Projeto <i class="fa fa-building"></i>
      </template>
      <div class="d-block text-center">
        <div class="form-group">
         
        </div>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('newProjectModal')">
        <i class="fa fa-times"></i>
      </b-button>
    </b-modal>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>