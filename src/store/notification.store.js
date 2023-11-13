import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    isVisible: false,
    message: '',
    type: ''
  }),
  actions: {
    setMessage(msg) {
      this.message = msg
    },
    setVisibility(isVisible) {
      this.isVisible = isVisible
    },
    setType(type) {
      this.type = type
    }
  }
})
