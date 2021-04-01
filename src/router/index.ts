import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Index },
  { path: '/Type', name: 'Type', component: () => import('@/views/Type.vue') },
  { path: '/Function', name: 'Function', component: () => import('@/views/Function.vue') },
  { path: '/Interface', name: 'Interface', component: () => import('@/views/Interface.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
