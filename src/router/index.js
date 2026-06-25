import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import gamepage from '../pages/gamepage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'GamePage',
    component: gamepage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router