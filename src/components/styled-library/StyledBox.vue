<script setup>
defineProps({
  cardHeading: {
    type: String
  },
  needHeader: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div>
    <article
      class="bg-block-background border border-[var(--color-border-main)] inline-block overflow-hidden rounded"
    >
      <header
        v-if="needHeader"
        class="p-[24px] border-b border-[var(--color-border-main)] bg-block-headline-backgroud"
      >
        <h1>
          <slot name="header">{{ cardHeading?.toUpperCase() }}</slot>
        </h1>
      </header>
      <div class="p-20px">
        <slot name="body"></slot>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
