import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth.router'
import departmentsRouter from './departments.router'
import adminRouter from './admin.router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //
    // BASE PUBLIC (RESTRICTED) ROUTES
    {
      path: '/auth',
      name: 'Auth',

      redirect: 'auth/login',
      ...authRouter
    },
    //
    // BASE PRIVATE ROUTES
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      ...departmentsRouter()
    },
    //
    // ADMIN ROUTES
    {
      path: '/admin',
      name: 'Admin',
      redirect: 'admin/dashboard',
      component: () => import('@/layouts/AdminLayout.vue'),
      ...adminRouter()
    }
  ]
})

export default router
