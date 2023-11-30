<script setup>
import StyledBox from '@/components/styled-library/StyledBox.vue'
import StyledTextBlock from '@/components/styled-library/StyledTextBlock.vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import IconEdit from '@/assets/lib/icons/24px/IconEdit.vue'
import StyledMargin from '@/components/styled-library/StyledMargin.vue'
import { BASE_CONTENT_INDENTS } from '@/constants'

// function sub() {
//   alert('sub')
// }
</script>

<template>
  <div>
    <StyledMargin :marginY="BASE_CONTENT_INDENTS.SM" :marginX="BASE_CONTENT_INDENTS.XL">
      <StyledBox needHeader cardHeading="Title">
        <template #body>
          <StyledTextBlock needHeader blockHeading="Some Title">
            <template #header>
              <BaseSvg width="24" height="24" iconColor="white"> <IconEdit /> </BaseSvg>
            </template>
            <template #body
              ><div>SOME FILLER HERE</div>

              <div>SOME FILLER HERE</div>

              <div>SOME FILLER HERE</div>

              <div>SOME FILLER HERE</div>

              <div>SOME FILLER HERE</div>

              <div>SOME FILLER HERE</div>
            </template>
          </StyledTextBlock>
        </template></StyledBox
      ></StyledMargin
    >
  </div>
</template>
