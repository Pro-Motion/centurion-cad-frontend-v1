<script setup>
import { ref } from 'vue'
import StyledTooltip from '@/components/styled-library/StyledTooltip.vue'
defineProps({
  content: {
    type: String,
    required: true
  }
})
let show = ref(false)
let timeOut

function showTip() {
  timeOut = setTimeout(() => {
    show.value = true
  }, 800)
}
function hideTip() {
  clearTimeout(timeOut)
  show.value = false
}
</script>

<template>
  <div class="relative" @mouseenter="showTip()" @mouseleave="hideTip()">
    <slot></slot>

    <Transition @mouseenter="hideTip()">
      <StyledTooltip v-if="show" :content="content" />
    </Transition>
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
