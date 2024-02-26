import { createRouter, createWebHistory } from 'vue-router'
import { APP_NAME } from '@/common/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: `/${APP_NAME}/index`,
      component: () => import('@/views/index')
    },
    {
      path: '/jump',
      name: `/${APP_NAME}/jump`,
      component: () => import('@/views/jump')
    },
    {
      path: '/dialog',
      name: `/${APP_NAME}/dialog`,
      component: () => import('@/views/dialog')
    }
  ]
})

export default router
