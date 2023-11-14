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
    <article class="bg-block-background inline-block overflow-hidden rounded">
      <header v-if="needHeader" class="p-[24px] bg-block-headline-backgroud main-title-text">
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
