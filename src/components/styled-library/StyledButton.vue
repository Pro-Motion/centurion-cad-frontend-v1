<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  disabled: { type: Boolean, default: false },
  text: { type: String, default: 'Start' },
  type: { type: String as () => 'button' | 'submit' | 'reset', default: 'button' }
})
</script>
<template>
  <button class="button button-label-text border-olive" :disabled="disabled" :type="type">
    {{ text }}
  </button>
</template>
