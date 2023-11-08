<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  // Can be static or computed
  title: 'Home | Centurion CAD',
  meta: [
    {
      name: `description`,
      content: ''
    }
  ]
})

const departments = ref([
  { name: 'Civilian', to: '/civilian' },
  { name: 'Police', to: '/police' },
  { name: 'Dispatch', to: '/dispatch' },
  { name: 'Fire', to: '/fire' },
  { name: 'Dashboard', to: '/admin/dashboard' },
  { name: 'Login', to: '/auth/login' },
  { name: 'Activation', to: '/auth/activation' },
  { name: 'Verification', to: '/auth/verification/someId' }
])
</script>

<template>
  <div>
    Home

    <ul>
      <li v-for="link in departments" :key="link.name">
        <RouterLink :to="link.to">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
