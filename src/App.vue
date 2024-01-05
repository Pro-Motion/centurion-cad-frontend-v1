<script setup>
import { RouterView } from 'vue-router'
import { useQuery } from 'vue-query'
import { authApi } from '@/api/auth.api.js'
import { useAuthStore } from '@/store/auth.store.js'
const authStore = useAuthStore()

const userId = JSON.parse(localStorage.getItem('userId'))

const { data } = useQuery(
  'user',
  () => {
    return authApi.current(userId)
  },
  {
    refetchOnWindowFocus: false,
    onSuccess: () => {
      authStore.setAuthUser(data)
      console.log(data)
    }
  }
)
</script>

<template>
  <RouterView />
</template>

<!-- <style scoped></style> -->
