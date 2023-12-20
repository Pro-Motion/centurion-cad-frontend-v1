<script setup>
import { reactive } from 'vue'
const time = reactive({ hours: '00', minutes: '00' })
</script>

<template>
  <span>{{ time.hours }}{{ time.minutes }}</span>
</template>
