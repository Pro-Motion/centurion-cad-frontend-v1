<script setup>
import ActivationForm from '@/components/auth/ActivationForm.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'

import { useHead } from '@unhead/vue'

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
  <div>
    <StyledBox card-heading="Activation" needHeader="true">
      <template #body><ActivationForm /> </template>
    </StyledBox>
  </div>
</template>
