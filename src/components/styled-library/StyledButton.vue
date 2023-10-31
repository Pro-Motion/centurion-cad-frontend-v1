<script setup lang="ts">
import BaseSvg from '../base/BaseSvg.vue'
import IconSupervisor from '@/assets/lib/icons/24px/IconSupervisor.vue'
defineProps({
  disabled: { type: Boolean, default: false },
  text: { type: String, default: 'Start' },
  type: { type: String as () => 'button' | 'submit' | 'reset', default: 'button' }
})
</script>
<template>
  <button :type="type" class="button button-main border-olive" :disabled="disabled">
    {{ text }}
    <BaseSvg iconName="cioc" width="24" height="24" iconColor="red"><IconSupervisor /></BaseSvg>
  </button>
</template>
