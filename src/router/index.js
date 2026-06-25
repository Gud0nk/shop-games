import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import gamepage from '../pages/gamepage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gamepage',
      name: 'gamepage',
      component: gamepage
    }
  ],
})



export default router
