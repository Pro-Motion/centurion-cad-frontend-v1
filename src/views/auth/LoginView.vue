<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import { useHead } from '@vueuse/head'
import { authApi } from '@/api/auth.api.js'
import { useMutation, useQuery, useQueryClient } from 'vue-query'
import { useAuthStore } from '@/store/auth.store.js'
const authResult = useQuery('authUser', () => authApi.current(), {
  enabled: false,
  retry: 1
})
const queryClient = useQueryClient()
const authStore = useAuthStore()
const { isLoading, mutate } = useMutation((credentials) => authApi.login(credentials), {
  onError: (error) => {
    if (Array.isArray(error.response.data.error)) {
      error.response.data.error.forEach((el) => {
        console.log(el.message)
      })
    } else {
      console.log(error.response.data.message)
    }
  },
  onSuccess: (data) => {
    queryClient.refetchQueries('authUser')
    createToast('Successfully logged in', {
      position: 'top-right'
    })
    router.push({ name: 'profile' })
  }
})

function getData(values) {
  mutate({
    email: values.email,
    password: values.password
  })
}
onBeforeUpdate(() => {
  if (authResult.isSuccess.value) {
    const authUser = Object.assign({}, authResult.data.value?.data.user)
    authStore.setAuthUser(authUser)
  }
})
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
    <pre v-if="isLoading">loading</pre>
    <StyledBox card-heading="AUTHORIZATION" needHeader="true">
      <template #body> <LoginForm @values="getData" /></template
    ></StyledBox>
  </div>
</template>
<!-- test12@email.com
12345678aA -->
