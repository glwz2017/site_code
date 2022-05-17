import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName:Login */ '@/page/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
