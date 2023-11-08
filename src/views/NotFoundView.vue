<script setup lang="ts">
import router from '@/router'
import { onMounted, onUnmounted, ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  // Can be static or computed
  title: 'Not Found | Centurion CAD',
  meta: [
    {
      name: `description`,
      content: ''
    }
  ]
})
const count = ref(6)
const intervalId = ref()

function countdown() {
  intervalId.value = setInterval(() => {
    count.value -= 1
    if (count.value === 0) {
      clearInterval(intervalId.value)
      router.push('/')
    }
  }, 1000)
}

onMounted(() => {
  countdown()
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})
</script>

<template>
  <div>
    <h2>Page Not Found!</h2>
    <p>
      Sorry, but this page does not exist! Redirecting in <span> {{ count }}</span
      >...
    </p>
  </div>
</template>
