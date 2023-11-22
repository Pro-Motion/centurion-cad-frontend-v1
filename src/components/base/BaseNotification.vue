<script setup>
import IconStatusOk from '@/assets/lib/icons/24px/IconStatusOk.vue'
import IconStatusIssue from '@/assets/lib/icons/24px/IconStatusIssue.vue'
import BaseSvg from '../base/BaseSvg.vue'
import { useNotificationStore } from '@/store/notification.store.js'
import { computed } from 'vue'

const type = computed(() => {
  if (useNotificationStore().type == 'success') {
    return {
      icon: IconStatusOk,
      border: 'border-status-green',
      color: 'green'
    }
  } else if (useNotificationStore().type == 'failed') {
    return {
      icon: IconStatusIssue,
      border: 'border-status-red',
      color: 'red'
    }
  }
})
</script>

<template>
  <div
    :class="[type.border]"
    class="global-notification fixed ml-auto right-0 flex items-center gap-2 opacity-90 rounded border-2 m-4 p-16px"
  >
    <BaseSvg :iconName="type.icon" width="24" height="24" :iconColor="type.color">
      <component :is="type.icon"></component>
    </BaseSvg>
    <h3>{{ useNotificationStore().message }}</h3>
  </div>
</template>

<style scoped></style>
