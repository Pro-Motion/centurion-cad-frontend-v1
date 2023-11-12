<script setup>
import ActivationForm from '@/components/auth/ActivationForm.vue'
import { useHead } from '@vueuse/head'

useHead({
  // Can be static or computed
  title: 'Activation | Centurion CAD',
  meta: [
    {
      name: `description`,
      content: ''
    }
  ]
})
</script>

<template>
  <div><ActivationForm /></div>
</template>
