import { defineStore } from 'pinia'
import { BASE_NOTIFICATION_TYPES } from '../constants'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    isVisible: false,
    message: '',
    type: BASE_NOTIFICATION_TYPES.FAILED
  }),
  actions: {
    callNotification({
      message = 'Something went wrong..',
      type = BASE_NOTIFICATION_TYPES.FAILED
    }) {
      this.isVisible = true
      this.message = message
      this.type = type
    },
    _off() {
      this.$reset()
    }
  }
})
