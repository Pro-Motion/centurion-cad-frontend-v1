<script setup>
defineProps({
  blockHeading: {
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
    <article class="bg-block-background inline-block rounded">
      <header
        v-if="needHeader"
        class="p-16px flex gap-[10px] styled-textblock-heading bg-card-background rounded mb-2"
      >
        <h1>
          {{ blockHeading }}
        </h1>
        <slot name="header"></slot>
      </header>
      <div class="p-16px bg-card-background rounded">
        <slot name="body"></slot>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
