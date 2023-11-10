<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseContainer from './BaseContainer.vue'
</script>

<template>
  <footer class="fixed bottom-0 w-full bg-block-background">
    <BaseContainer>
      <p class="block mx-auto">
        By using this website, you agree to the
        <RouterLink to="/"> Terms of Service</RouterLink> and
        <RouterLink to="/">Privacy Policy</RouterLink> © 2023
      </p>
    </BaseContainer>
  </footer>
</template>
