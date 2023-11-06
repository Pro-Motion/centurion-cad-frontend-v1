<script setup lang="ts">
import IconAddImage from '@/assets/lib/icons/32px/IconAddImage.vue'
import BaseSvg from '../base/BaseSvg.vue'
import { computed, useSlots } from 'vue'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  text: { type: String, default: 'Start' },
  type: { type: String as () => 'button' | 'submit' | 'reset', default: 'button' },
  variant: {
    type: String as () => 'main' | 'secondary' | 'close' | 'icon',
    required: true,
    default: 'main'
  },
  needIcon: { type: Boolean, default: false }
})

const showIcon = !!useSlots().default

const emit = defineEmits(['click', 'submit', 'reset'])
const clickOnButton = () => {
  emit('click')
}

const onlyIcon = computed(() => {
  return props.variant === 'close' || props.variant === 'icon'
})
//TODO: change w-full to native styles when last will ready
</script>
<!-- TODO: optimize onlyIcons with componentIS -->
<template>
  <button
    :type="type"
    :class="[`button-${variant}`, { 'w-full': variant != 'close' }]"
    class="button border-olive"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <BaseSvg v-if="variant == 'close'" iconName="close" width="20" height="20" iconColor="white">
      <!--TODO: add closeIcon -->
    </BaseSvg>
    <!-- TODO: ask for sizes -->
    <BaseSvg v-if="showIcon" iconName="addImage" width="32" height="32" iconColor="white">
      <slot></slot>
    </BaseSvg>
    <div v-if="!onlyIcon">{{ text }}</div>
  </button>
</template>
