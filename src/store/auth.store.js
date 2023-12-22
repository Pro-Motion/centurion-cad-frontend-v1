import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    authUser: null
  }),
  getters: {},
  actions: {
    setAuthUser(user) {
      this.authUser = user
    }
  }
})
