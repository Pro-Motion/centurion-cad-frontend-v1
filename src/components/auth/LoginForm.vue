<script setup lang="ts">
import StyledInput from '../styled-library/StyledInput.vue'
import StyledButton from '../styled-library/StyledButton.vue'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
const { values, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
  })
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
<template>
  <div>
    <form @submit.prevent="onSubmit">
      <StyledInput name="email" type="email" placeholder="Email" />
      <StyledInput name="password" type="password" placeholder="Password" />
      <StyledButton type="submit" />
    </form>
    value: {{ values }}
  </div>
</template>
