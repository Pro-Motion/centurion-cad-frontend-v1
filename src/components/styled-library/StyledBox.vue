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
<!-- TODO header part // should have possibility to contain the other components -->
<template>
  <div class="block">
    <article
      class="bg-block-background border border-[var(--color-border-main)] inline-block rounded"
    >
      <header
        v-if="needHeader"
        class="p-[24px] flex gap-5 main-title-text border-b border-[var(--color-border-main)] bg-block-headline-backgroud rounded-t"
      >
        <h1>
          {{ cardHeading?.toUpperCase() }}
        </h1>
        <slot name="header"></slot>
      </header>
      <div class="p-20px">
        <slot name="body"></slot>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
