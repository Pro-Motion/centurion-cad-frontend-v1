<script setup lang="ts">
import { useField } from 'vee-validate'
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Placeholder' },
  name: { type: String, required: true },
  value: { type: String, default: null }
})

const { value: field } = useField(props.name, undefined, {
  initialValue: props.value,
  syncVModel: true
})
</script>

<template>
  <input :name="name" :type="type" :placeholder="placeholder" v-model="field" />
</template>
