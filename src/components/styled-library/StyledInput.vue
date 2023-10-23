<script setup lang="ts">
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Placeholder' },
  name: { type: String, required: true },
  modelValue: { type: String, default: null }
})
</script>

<template>
  <input :name="name" :type="type" :placeholder="placeholder" />
</template>
