import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Index },
  { path: '/Type', name: 'Type', component: () => import('@/views/Type.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
