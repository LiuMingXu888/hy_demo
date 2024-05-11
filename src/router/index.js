import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: "app",
      redirect: '/home'
    },
    {
      path: '/home', name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/about/:id/:name', name: 'about', meta: { flag: true },
      component: () => import('@/views/about.vue')
    },
    {
      path: '/favor', name: 'favor',
      component: () => import('@/views/favor.vue')
    }
  ]
})

export default router
