<script setup>
import BaseHeaderElement from '@/components/base/BaseHeaderElement.vue'
import TooltipProvider from '@/components/providers/TooltipProvider.vue'
import StyledIndents from '@/components/styled-library/StyledIndents.vue'
import BaseSvg from '../base/BaseSvg.vue'
import IconLogo from '@/assets/lib/icons/logo/IconLogo.vue'
import { BASE_CONTENT_INDENTS } from '../../constants'
import { reactive } from 'vue'
const components = reactive([
  { text: 'Dispatch', tooltipMessage: 'Dispatch availability', needIndicator: true },
  { text: 'Priority', tooltipMessage: 'Priority status', needIndicator: true },
  { text: 'Officers', tooltipMessage: 'Officers availability ', needIndicator: true }
])
</script>

<template>
  <header class="bg-block-background">
    <StyledIndents
      class="flex flex-row justify-between"
      padding-x="9px"
      :padding-y="BASE_CONTENT_INDENTS.MD"
    >
      <div class="flex items-center gap-2">
        <BaseSvg iconName="logo" width="54" height="54"><IconLogo /></BaseSvg>
        <h1 class="logo-text">Centurion CAD</h1>
      </div>
      <ul class="flex gap-[24px]">
        <li class="flex" v-for="component in components" :key="component.text">
          <TooltipProvider class="flex" :content="component.tooltipMessage">
            <BaseHeaderElement :text="component.text" :need-indicator="component.needIndicator" />
          </TooltipProvider>
        </li>
      </ul>
    </StyledIndents>
  </header>
</template>
