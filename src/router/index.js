import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutVue from '../views/About.vue'
import Listing from '../views/Listing.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductPreview from '../views/ProductPreview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutVue
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/preview',
      name: 'preview',
      component: ProductPreview
    }
  ]
})

export default router
