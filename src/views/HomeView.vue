<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useNotificationStore } from '@/store/notification.store.js'
import StyledButton from '@/components/styled-library/StyledButton.vue'
import { BASE_NOTIFICATION_TYPES } from '@/constants'
import { BASE_BUTTON_VARIANTS } from '../constants'
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
    <StyledButton
      @click="
        () =>
          useNotificationStore().callNotification({
            message: 'Hello',
            type: BASE_NOTIFICATION_TYPES.SUCCESS
          })
      "
      :variant="BASE_BUTTON_VARIANTS.CLOSE"
    />
    <button>asf</button>
    <ul>
      <li v-for="link in departments" :key="link.name">
        <RouterLink :to="link.to">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
