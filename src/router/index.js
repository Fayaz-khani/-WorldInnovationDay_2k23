import Vue from 'vue'
import VueRouter from 'vue-router'

import MianComp from '../components/Navigation/MianComp.vue'
import FootPrint from '../components/Navigation/FootPrint.vue'

import PageNotFound from '../components/PageNotFound'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MianComp',
    component: MianComp
  },
  {
    path: '/FootPrint',
    name: 'FootPrint',
    component: FootPrint
  },
  {
    path: '/MianComp',
    name: 'MianComp',
    component: MianComp
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: "*/",
    name: 'redirectPageNotFound',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router