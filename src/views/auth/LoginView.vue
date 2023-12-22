<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import { useHead } from '@vueuse/head'
import { authApi } from '@/api/auth.api.js'
import { useMutation } from 'vue-query'
import { useAuthStore } from '@/store/auth.store.js'
const authStore = useAuthStore()

async function getData() {
  const res = authApi.login(values)
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
    <p>Login</p>
    <StyledBox card-heading="AUTHORIZATION" needHeader="true">
      <template #body> <LoginForm @values="getData" /></template
    ></StyledBox>
  </div>
</template>
