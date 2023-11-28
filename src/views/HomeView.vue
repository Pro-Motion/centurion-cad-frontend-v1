<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useNotificationStore } from '@/store/notification.store.js'
import StyledButton from '@/components/styled-library/StyledButton.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import TooltipProvider from '@/components/providers/TooltipProvider.vue'
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
  <StyledBox card-heading="Home" need-header>
    <template #header>
      <TooltipProvider content="Close button">
        <StyledButton
          @click="
            () =>
              useNotificationStore().callNotification({
                message: 'Notification working correctly',
                type: BASE_NOTIFICATION_TYPES.SUCCESS
              })
          "
          :variant="BASE_BUTTON_VARIANTS.CLOSE"
        />
      </TooltipProvider>
    </template>
    <template #body>
      <ul>
        <li v-for="link in departments" :key="link.name">
          <RouterLink :to="link.to">{{ link.name }}</RouterLink>
        </li>
      </ul></template
    >уу
  </StyledBox>
</template>
