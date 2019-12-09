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
          <b-container class="my-2">
            <b-col center sm="12">
              <b-form-input v-model="project.name" :state="validateName" :placeholder="'Nome'" id="project-name"
                :type="'text'" autofocus></b-form-input>
              <b-form-invalid-feedback id="project-name">
                <strong>deve conter entre 10 e 100 caracteres</strong>
              </b-form-invalid-feedback>
            </b-col>
          </b-container>
          <b-container class="my-2">
            <b-col center sm="12">
              <b-form-textarea v-model="project.description" :state="validateDescription" id="project-description" placeholder="Descrição" rows="3" no-resize>
              </b-form-textarea>
              <b-form-invalid-feedback id="project-description">
                <strong> deve conter entre 10 e 1000 caracteres</strong>
              </b-form-invalid-feedback>
            </b-col>
          </b-container>
          <b-container class="my-2">
            <b-col center sm="12">
              <b-button variant="success" block>Cadastrar <i class="fa fa-plus"></i></b-button>
            </b-col>
          </b-container>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        project: {
          name: '',
          description: ''
        }
      }
    },
    computed: {
      validateName() {
        return this.project.name.length >= 10 && this.project.name.length < 100 ? true : this.project.name.length == 0 ?
          null :
          false
      },
      validateDescription() {
        return this.project.description.length >= 10 && this.project.description.length < 1000 ? true : this.project
          .description.length == 0 ? null :
          false
      }
    }
  }
</script>

<style>

</style>