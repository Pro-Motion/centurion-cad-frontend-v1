<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Placeholder' },
  name: { type: String, required: true },
  value: { type: String, default: null }
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <input
    class="input-base-item"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    v-model="value"
  />
  <span>{{ errorMessage }}</span>
</template>
