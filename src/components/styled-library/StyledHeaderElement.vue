<script setup>
defineProps({
  text: { type: String, default: 'Text' },
  needIndicator: { type: Boolean, default: true },
  currentStatus: { type: String, default: 'DISABLED' }
})
</script>
<template>
  <div
    class="min-w-[180px] flex gap-[13px] justify-center items-center title-text rounded bg-card-background"
  >
    <div class="flex gap-[8px]">
      <slot name="icon"></slot>
      <span>{{ text }}</span>
    </div>
    <div v-if="needIndicator" :class="currentStatus">s</div>
  </div>
</template>
<style></style>
