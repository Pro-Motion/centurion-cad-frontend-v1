<script setup>
import { RouterView } from 'vue-router'
import BaseHeader from '../components/base/BaseHeader.vue'
import BaseFooter from '../components/base/BaseFooter.vue'
</script>

<template>
  <div>
    <BaseHeader />
    <div><RouterView /></div>
    <BaseFooter />
  </div>
</template>
