import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    isVisible: false,
    message: '',
    type: 'failed'
  }),
  actions: {
    call(msg, type) {
      this.isVisible = true
      this.message = msg
      this.type = type

      setTimeout(() => {
        this.isVisible = false
      }, 4000)
    }
  }
})
