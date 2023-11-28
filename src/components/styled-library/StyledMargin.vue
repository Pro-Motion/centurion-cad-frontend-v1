<script setup>
import { computed } from 'vue'
import { BASE_CONTENT_MARGINS } from '../../constants'
const props = defineProps({
  margin: {
    type: String,
    default: BASE_CONTENT_MARGINS.NONE
  },
  marginX: {
    type: String,
    default: BASE_CONTENT_MARGINS.NONE
  },
  marginY: {
    type: String,
    default: BASE_CONTENT_MARGINS.NONE
  }
})

const currentMargin = computed(() => {
  const x = props.marginX
  const y = props.marginY

  return props.margin !== '0px' ? `margin: ${props.margin}` : `margin: ${x} ${y}`
})
</script>

<template>
  <div :style="[currentMargin]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
