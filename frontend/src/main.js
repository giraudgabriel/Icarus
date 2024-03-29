import Vue from 'vue'
import App from './App.vue'
import ProjectList from './components/ProjectList.vue'
import ProjectView from './components/ProjectView.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import CreateTodo from './components/CreateTodo.vue'
import ListTodo from "./components/ListTodo.vue"
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: '/projetos',
      component: ProjectList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/projetos/:projeto',
      component: ProjectView,
      props: true
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: ListTodo
    },
    {
      path: '/todo',
      component: CreateTodo
    }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')