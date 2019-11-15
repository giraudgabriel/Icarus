<template>
  <b-container fluid>
    <Menu />
    <div id="main">
      <h3>Autenticação</h3>
      <b-container class="my-2">
        <b-col center sm="12">
          <b-form-input  v-model="login.user" :state="validateUser"  :placeholder="'Usuário'" :id="user" :type="'text'" autofocus></b-form-input>
          <b-form-invalid-feedback id="user">
            <strong>Usuário deve conter entre 6 e 20 caracteres</strong>
          </b-form-invalid-feedback>
        </b-col>
      </b-container>
      <b-container class="my-2">
        <b-col center sm="12">
          <b-form-input v-model="login.password" :state="validatePassword" :placeholder="'Senha'" :id="pass" :type="'password'"></b-form-input>
          <b-form-invalid-feedback id="pass">
            <strong> deve conter entre 6 e 20 caracteres</strong>
          </b-form-invalid-feedback>
        </b-col>
      </b-container>
      <b-container class="my-2" >
        <b-col center sm="12">
          <b-button variant="success" block>Entrar <i class="fa fa-sign-in"></i></b-button>
          <b-button variant="info" block>Primeiro acesso? <i class="fa fa-edit"></i></b-button>
        </b-col>
      </b-container>
    </div>
  </b-container>
</template>

<script>
  import Menu from "./Menu";
  export default {
    components: {
      Menu
    },
    data() {
      return {
        login:{
          user:'',
          password:''
        }
      }
    },
    computed:{
      validateUser(){
        return this.login.user.length > 6 && this.login.user.length < 20 ? true : this.login.user.length == 0 ? null : false
      },
      validatePassword(){
        return this.login.password.length > 6 && this.login.password.length < 20 ? true : this.login.password.length == 0 ? null : false
      }
    }
  }
</script>

<style>

</style>