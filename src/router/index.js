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
      beforeEnter: async () => console.log('hello'),
      ...authRouter()
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
    },
    //
    // SYSTEM ROUTES
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: () => import('@/views/ForbiddenView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

// router.beforeEach()
export default router
