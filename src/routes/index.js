import { createWebHistory, createRouter } from 'vue-router'
import HomeApp from '../pages/HomeApp.vue'
import HistoricoLancamentos from '../pages/HistoricoLancamentos.vue'

const routes = [
  {
    path: '/',
    component: HomeApp
  },
  {
    path: '/historico',
    component: HistoricoLancamentos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
