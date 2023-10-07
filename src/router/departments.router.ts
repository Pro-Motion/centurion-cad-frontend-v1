export default () => ({
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },

    {
      path: 'civilian',
      name: 'Civ',

      component: () => import('@/views/departments/CivilianView.vue'),
      children: [
        {
          path: ':civId',
          name: 'Character',
          component: () => import('@/views/departments/CharacterView.vue')
        }
      ]
    },

    {
      path: 'police',
      name: 'Police',
      component: () => import('@/views/departments/PoliceView.vue')
    },
    {
      path: 'dispatch',
      name: 'Dispatch',
      component: () => import('@/views/departments/DispatchView.vue')
    },
    {
      path: 'fire',
      name: 'Fire',
      component: () => import('@/views/departments/FireView.vue')
    },
    {
      path: 'profile',
      name: 'Profile',
      component: () => import('@/views/user/ProfileView.vue')
    }
  ]
})
