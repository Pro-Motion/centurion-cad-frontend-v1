<script setup>
import { computed } from 'vue'
import { BASE_CONTENT_INDENTS } from '../../constants'
const props = defineProps({
  margin: {
    type: String,
    default: BASE_CONTENT_INDENTS.NONE
  },
  padding: { type: String, default: BASE_CONTENT_INDENTS.NONE },
  paddingX: { type: String, default: BASE_CONTENT_INDENTS.NONE },
  paddingY: { type: String, default: BASE_CONTENT_INDENTS.NONE },
  marginX: {
    type: String,
    default: BASE_CONTENT_INDENTS.NONE
  },
  marginY: {
    type: String,
    default: BASE_CONTENT_INDENTS.NONE
  }
})

const currentMargin = computed(() => {
  const x = props.marginX
  const y = props.marginY

  return props.margin !== '0px' ? `margin: ${props.margin}` : `margin: ${x} ${y}`
})
const currentPadding = computed(() => {
  const x = props.paddingX
  const y = props.paddingY
  return props.padding !== '0px' ? `padding: ${props.padding}` : `padding: ${x} ${y}`
})
</script>

<template>
  <div :style="[currentMargin, currentPadding]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
