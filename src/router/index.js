import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/game', name: 'GamePage', component: () => import('../pages/gamepage.vue')},
  {path: '/corzina', name: 'corzina', component: () => import('../pages/corzina.vue')},
  {path: '/catalog', name: 'catalog', component: () => import('../pages/catalog.vue')},
  {path: '/freegame', name: 'freegame', component: () => import('../pages/freegame.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router