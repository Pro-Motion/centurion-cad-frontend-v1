<script setup lang="ts">
// import  from ""

import IconAddImage from '@/assets/lib/icons/32px/IconAddImage.vue'
import StyledBox from '@/components/styled-library/StyledBox.vue'
import StyledButton from '@/components/styled-library/StyledButton.vue'

function sub() {
  alert('sub')
}
</script>

<template>
  <div>
    <IconAddImage />
    <StyledBox needHeader cardHeading="Emergency Call ddddddddddd">
      <template #header></template>
      <form @submit="sub">
        <StyledButton variant="icon" type="submit" text="hi">
          <IconAddImage />
        </StyledButton>
      </form>
    </StyledBox>
  </div>
</template>
