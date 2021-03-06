import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Index },
  { path: '/Type', name: 'Type', component: () => import('@/views/Type.vue') },
  { path: '/Interface', name: 'Interface', component: () => import('@/views/Interface.vue') },
  { path: '/Class', name: 'Class', component: () => import('@/views/Class.vue') },
  { path: '/Function', name: 'Function', component: () => import('@/views/Function.vue') },
  { path: '/Generic', name: 'Generic', component: () => import('@/views/Generic.vue') },
  { path: '/Enum', name: 'Enum', component: () => import('@/views/Enum.vue') },
  { path: '/Namespace', name: 'Namespace', component: () => import('@/views/Namespace.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
