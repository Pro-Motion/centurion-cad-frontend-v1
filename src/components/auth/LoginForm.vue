<script setup lang="ts">
import StyledInput from '../styled-library/StyledInput.vue'
import { useForm } from 'vee-validate'

const { values, defineComponentBinds } = useForm()
const email = defineComponentBinds('email')
</script>
<template>
  <div>
    <StyledInput v-bind="email" />
    value: {{ values }}
  </div>
</template>
