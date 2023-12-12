<script setup>
defineProps({
  cardHeading: {
    type: String
  },
  needHeader: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="block">
    <article
      class="bg-block-background border border-[var(--color-border-main)] inline-block rounded"
    >
      <header
        v-if="needHeader"
        class="p-[24px] flex gap-5 main-title-text border-b border-[var(--color-border-main)] bg-block-headline-background rounded-t"
      >
        <h1>
          {{ cardHeading?.toUpperCase() }}
        </h1>
        <slot name="header"></slot>
      </header>
      <div class="p-20px flex justify-center">
        <slot name="body"></slot>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
