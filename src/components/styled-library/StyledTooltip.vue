<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="styled-tooltip top-[100%] mt-2 right-0 z-50 inline-flex absolute items-center gap-2 border-2 border-base-grey-sub p-8px opacity-90 pr-[24px] rounded"
  >
    {{ content }}
  </div>
</template>

<style lang="scss" scoped></style>
