import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import gamepage from '../pages/gamepage.vue'
import corzina from '../pages/corzina.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/game', name: 'GamePage', component: gamepage},
  {path: '/corzina', name: 'corzina', component: corzina}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router