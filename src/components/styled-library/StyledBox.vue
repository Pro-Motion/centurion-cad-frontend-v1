<script setup>
defineProps({
  cardHeading: {
    type: String,
    Number
  },
  needHeader: {
    type: Boolean
  }
})
</script>

<template>
  <div class="d bg-border-grey p-14px">
    <article class="bg-block-background inline-block overflow-hidden rounded box">
      <header v-if="needHeader" class="p-[24px] bg-block-headline-backgroud main-title-text">
        <h1>
          <slot name="header">{{ cardHeading?.toUpperCase() }}</slot>
        </h1>
      </header>
      <div class="p-20px">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<style scoped>
.header-f-z {
  font-size: 24px;
  line-height: 28px;
}
</style>
