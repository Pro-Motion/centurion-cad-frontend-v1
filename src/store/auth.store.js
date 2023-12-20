import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  //ask how to place userInfo schema
  const userInfo = ref({
    accessToken: '',
    refreshToken: '',
    name: '',
    id
  })

  return {}
})
