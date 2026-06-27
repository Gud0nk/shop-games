import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import gamepage from '../pages/gamepage.vue'
import corzina from '../pages/corzina.vue'
import catalog from '../pages/catalog.vue'
import freegame from '../pages/freegame.vue'

const routes = [
  {path: '/home', name: 'Home', component: Home},
  {path: '/game', name: 'GamePage', component: gamepage},
  {path: '/corzina', name: 'corzina', component: corzina},
  {path: '/catalog', name: 'catalog', component: catalog},
  {path: '/freegame', name: 'freegame', component: freegame}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router