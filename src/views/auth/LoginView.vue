<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import { useHead } from '@unhead/vue'
import { authApi } from '@/api/auth.api.js'
import { useMutation, useQuery, useQueryClient } from 'vue-query'
import { useAuthStore } from '@/store/auth.store.js'
import { useNotificationStore } from '@/store/notification.store.js'
import { BASE_NOTIFICATION_TYPES } from '@/constants'
import BaseNotification from '@/components/base/BaseNotification.vue'
const notificationStore = useNotificationStore()
const authStore = useAuthStore()
const {
  isLoading,
  mutate,
  isSuccess,
  data: authData
} = useMutation((credentials) => authApi.login(credentials), {
  onError: (error) => {
    notificationStore.callNotification({
      message: error.response.data.message,
      type: BASE_NOTIFICATION_TYPES.FAILED
    })
  },
  onSuccess: (data) => {
    authStore.setAuthUser(JSON.stringify(data))
    localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken))

    notificationStore.callNotification({
      message: 'authorization was succesful',
      type: BASE_NOTIFICATION_TYPES.SUCCESS
    })
    // router.push({ name: 'profile' })
  }
})

function testRefresh() {
  authApi.current()
}

function getData(values) {
  mutate({
    email: values.email,
    password: values.password
  })
}

useHead({
  // Can be static or computed
  title: 'Login | Centurion CAD',
  meta: [
    {
      name: `description`,
      content: ''
    }
  ]
})
</script>

<template>
  <div>
    <BaseNotification v-if="notificationStore.isVisible" />
    <button @click="testRefresh()">click</button>
    <p>Login</p>
    <pre v-if="isLoading">loading</pre>
    <StyledBox card-heading="AUTHORIZATION" needHeader="true">
      <template #body> <LoginForm @values="getData" /></template
    ></StyledBox>
  </div>
</template>
<!-- test12@email.com
12345678aA -->
