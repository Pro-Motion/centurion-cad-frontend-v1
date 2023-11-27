<script setup>
import { RouterView } from 'vue-router'
import BaseHeader from '../components/base/BaseHeader.vue'
import BaseFooter from '../components/base/BaseFooter.vue'
import BaseNotification from '../components/base/BaseNotification.vue'
import { useNotificationStore } from '@/store/notification.store.js'
</script>

<template>
  <div>
    <BaseHeader />
    <Transition>
      <BaseNotification v-if="useNotificationStore().isVisible" />
    </Transition>

    <div><RouterView /></div>
    <BaseFooter />
  </div>
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
