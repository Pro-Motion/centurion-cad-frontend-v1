<script setup lang="ts">
import BaseContainer from '../base/BaseContainer.vue'
import BaseSvg from '../base/BaseSvg.vue'
import IconLogo from '@/assets/lib/icons/logo/IconLogo.vue'
</script>

<template>
  <header class="py-2px flex justify-start bg-block-background">
    <BaseContainer>
      <div class="flex items-center gap-2">
        <BaseSvg iconName="logo" width="54" height="54"><IconLogo /></BaseSvg>
        <h1 class="logo-text">Centurion CAD</h1>
      </div>
    </BaseContainer>
  </header>
</template>
