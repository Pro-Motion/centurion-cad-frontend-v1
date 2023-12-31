<script setup>
import StyledBox from '@/components/styled-library/StyledBox.vue'
import StyledTextBlock from '@/components/styled-library/StyledTextBlock.vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import IconEdit from '@/assets/lib/icons/24px/IconEdit.vue'
import StyledIndents from '@/components/styled-library/StyledIndents.vue'
import { BASE_CONTENT_INDENTS } from '@/constants'

import { io } from 'socket.io-client'

// function sub() {
//   alert('sub')
// }

const socket = io('http://localhost:9090', { auth: { token: 'asfasf' }, transports: ['websocket'] })

socket.on('connect', () => {
  console.log('a user connected')
  // socket.on('disconnect', () => {
  //   console.log('user disconnected')
  // })
})

// setInterval(() => {
//   socket.emit('update_civilian', 'HELLO FROM FRONTEND')
// }, 1000)

socket.on('hello', (msg) => {
  console.log('message', msg)
})
</script>

<template>
  <div>
    <StyledIndents :marginY="BASE_CONTENT_INDENTS.SM" :marginX="BASE_CONTENT_INDENTS.XL">
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
      ></StyledIndents
    >
  </div>
</template>
