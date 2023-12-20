<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import { useHead } from '@vueuse/head'
import { authApi } from '@/api/auth.api.js'
async function getData() {
  const res = authApi.current()
}
getData()
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
      <template #body> <LoginForm /></template
    ></StyledBox>
  </div>
</template>
