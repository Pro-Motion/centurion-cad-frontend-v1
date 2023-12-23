<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import { useHead } from '@vueuse/head'
import { authApi } from '@/api/auth.api.js'
// import { useMutation, useQuery } from 'vue-query'
import { useAuthStore } from '@/store/auth.store.js'

async function getData(values) {
  try {
    const res = authApi.login(values)
    user = res
    console.log(user)
    console.log('sd')
  } catch (error) {}
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
<!-- test12@email.com
12345678aA -->
