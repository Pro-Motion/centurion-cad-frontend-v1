export default () => ({
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/admin/DashboardView.vue')
    },
    {
      path: 'departments',
      name: 'Departments',
      component: () => import('@/views/admin/DepartmentsView.vue'),
      children: [{ path: 'civilian', component: () => import('@/views/admin/DepartmentsView.vue') }]
    }
  ]
})
