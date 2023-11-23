<script setup>
import IconClose from '@/assets/lib/icons/24px/IconClose.vue'
import BaseSvg from '../base/BaseSvg.vue'
import { computed, useSlots } from 'vue'
import { BASE_BUTTON_VARIANTS } from '../../constants'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  text: { type: String, default: 'Start' },
  type: { type: String },
  variant: {
    //main close secondary icon
    type: String,
    required: true,
    default: BASE_BUTTON_VARIANTS.MAIN
  },
  needIcon: { type: Boolean, default: false }
})

const showIcon = !!useSlots().default
const emit = defineEmits(['click', 'submit', 'reset'])
const clickOnButton = () => {
  emit('click')
}

const onlyIcon = computed(() => {
  return props.variant === BASE_BUTTON_VARIANTS.CLOSE || props.variant === BASE_BUTTON_VARIANTS.ICON
})
</script>

<template>
  <button
    :type="type"
    :class="[`button-${variant.toLowerCase()}`]"
    class="button border-olive"
    :disabled="disabled"
    @click="clickOnButton"
  >

    <BaseSvg
      v-if="variant === BASE_BUTTON_VARIANTS.CLOSE"
      iconName="close"
      width="24"
      height="24"
      iconColor="white"
    >
      <IconClose />
    </BaseSvg>
    <!-- TODO: ask for sizes -->
    <BaseSvg
      v-if="showIcon && variant !== BASE_BUTTON_VARIANTS.CLOSE"
      iconName="addImage"
      width="24"
      height="24"
      iconColor="white"
    >
      <slot></slot>
    </BaseSvg>
    <div v-if="!onlyIcon">{{ text }}</div>
  </button>
</template>
