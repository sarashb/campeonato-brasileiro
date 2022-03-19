import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ClubesLista from '../views/ClubesLista.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },

]

const router = new VueRouter({
  routes
})

export default router
