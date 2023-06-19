import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import OtherView from '../views/OtherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
        path: '/portfolio',
        name: 'portfolio',
        component: PortfolioView
    },{
        path: '/contact',
        name: 'contact',
        component: ContactView
    },{
        path: '/other',
        name: 'other',
        component: OtherView
    }
  ]
})

export default router
