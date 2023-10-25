<script setup lang="ts">
defineProps({
  iconName: { type: String, default: 'box' },
  width: { type: String, default: '20' },
  height: { type: String, default: '20' },
  iconColor: { type: String, default: 'currentColor' }
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :view-box="(width, height)"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <g :fill="iconColor"><slot /></g>
  </svg>
</template>
