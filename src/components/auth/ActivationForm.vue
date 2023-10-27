<script setup lang="ts">
import StyledInput from '../styled-library/StyledInput.vue'
import StyledButton from '../styled-library/StyledButton.vue'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
const { values, handleSubmit } = useForm({
  validationSchema: yup.object({
    fistName: yup.string().required(),
    lastName: yup.string().required(),
    dateOfBirth: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Password is')
  })
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
<template>
  ()
  <div>
    <form @submit.prevent="onSubmit">
      <StyledInput name="fistName" type="text" placeholder="Fist name" />
      <StyledInput name="lastName" type="text" placeholder="Last name" />
      <StyledInput name="dateOfBirth" type="date" placeholder="Date of birth" />
      <StyledInput name="email" type="email" placeholder="Email" />
      <StyledInput name="password" type="password" placeholder="Password" />
      <StyledInput name="confirmPassword" type="password" placeholder="Confirm password" />
      <StyledButton type="submit" />
    </form>
    value: {{ values }}
  </div>
</template>
