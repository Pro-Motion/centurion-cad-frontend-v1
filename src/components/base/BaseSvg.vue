<script setup>
defineProps({
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
    <g :fill="iconColor"><slot /></g>
  </svg>
</template>
