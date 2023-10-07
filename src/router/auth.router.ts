export default () => ({
  children: [
    {
      path: 'verify/:token',
      name: 'Verify',
      component: () => import('@/views/auth/VerificationView.vue')
    },
    {
      path: 'activate',
      name: 'Activate',
      component: () => import('@/views/auth/ActivationView.vue')
    },
    { path: 'login', name: 'Login', component: () => import('@/views/auth/LoginView.vue') },
    {
      path: 'recovery/:token',
      name: 'Recovery',
      component: () => import('@/views/auth/RecoveryView.vue')
    }
  ]
})
