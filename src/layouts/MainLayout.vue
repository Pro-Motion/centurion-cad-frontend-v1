<script setup>
import { RouterView } from 'vue-router'
import BaseHeader from '@/components/base/BaseHeader.vue'
import StyledIndents from '@/components/styled-library/StyledIndents.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'
import BaseNotification from '@/components/base/BaseNotification.vue'
import { useNotificationStore } from '@/store/notification.store.js'
import { BASE_CONTENT_INDENTS } from '../constants'
const notificationStore = useNotificationStore()
</script>

<template>
  <BaseHeader />
  <Transition>
    <BaseNotification v-if="notificationStore.isVisible" />
  </Transition>

  <main>
    <StyledIndents :padding="BASE_CONTENT_INDENTS.MD"><RouterView /></StyledIndents>
  </main>
  <BaseFooter />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
