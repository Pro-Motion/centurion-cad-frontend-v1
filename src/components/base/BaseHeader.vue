<script setup>
import StyledHeaderElement from '@/components/styled-library/StyledHeaderElement.vue'

import StyledIndents from '@/components/styled-library/StyledIndents.vue'
import BaseSvg from '../base/BaseSvg.vue'
import IconLogo from '@/assets/lib/icons/logo/IconLogo.vue'
import { BASE_CONTENT_INDENTS } from '../../constants'
const components = [
  { text: 'Dispatch', needIndicator: true },
  { text: 'Priority', needIndicator: true },
  { text: 'Officers', needIndicator: true }
]
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
          <StyledHeaderElement :text="component.text" :need-indicator="component.needIndicator" />
        </li>
      </ul>
    </StyledIndents>
  </header>
</template>
