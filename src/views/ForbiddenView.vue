<script setup>
import router from '@/router'
import { onMounted, onUnmounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import {} from ''

useHead({
  // Can be static or computed
  title: 'Forbidden | Centurion CAD',
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
    <h2>Forbidden!</h2>
    <p>
      You have no access! Redirecting in <span> {{ count }}</span
      >...
    </p>
  </div>
</template>
