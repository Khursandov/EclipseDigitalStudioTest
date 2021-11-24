import Vue from 'vue'
import VueRouter from 'vue-router'
import Currency from '../views/Currency.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Currency',
    component: Currency
  }
]

const router = new VueRouter({
  routes
})

export default router
