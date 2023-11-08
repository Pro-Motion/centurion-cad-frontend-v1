<script setup lang="ts">
import BaseSvg from '../base/BaseSvg.vue'
import IconArrowDown from '@/assets/lib/icons/20px/IconArrowDown.vue'
defineProps({
  disabled: { type: Boolean, default: false },
  text: { type: String, default: 'Start' },
  type: { type: String as () => 'button' | 'submit' | 'reset', default: 'button' }
})
</script>
<template>
  <button :type="type" class="button button-main border-olive" :disabled="disabled">
    {{ text }}
    <BaseSvg iconName="cioc" width="32" height="32" iconColor="red"><IconArrowDown /></BaseSvg>
  </button>
</template>
