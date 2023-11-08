export default () => ({
  children: [
    {
      path: 'verification/:token',
      name: 'Verification',
      component: () => import('@/views/auth/VerificationView.vue')
    },
    {
      path: 'activation',
      name: 'Activation',
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
