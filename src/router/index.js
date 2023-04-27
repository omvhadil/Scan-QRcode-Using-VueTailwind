import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/scan',
      name: 'Scan',
      component: () => import('../views/Scanner.vue')
    },
    {
      path: '/hasil',
      name: 'hasil',
      component: () => import('../views/Hasil.vue')
    },
  ]
})

export default router
