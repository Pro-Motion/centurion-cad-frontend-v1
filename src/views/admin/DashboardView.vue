<script setup>
import StyledSelect from '@/components/styled-library/StyledSelect.vue'
import { useHead } from '@unhead/vue'
useHead({
  // Can be static or computed
  title: 'Dashboard | Centurion CAD',
  meta: [
    {
      name: `description`,
      content: ''
    }
  ]
})

StyledSelect
</script>

<template>
  <div>
    <StyledSelect search-by="name" />
  </div>
</template>
