<script setup>
defineProps({ color: { type: String, default: 'DARK' } })
</script>
<template><div class="styled-header-element-indicator red-flash"></div></template>
<style scoped>
.red-flash {
  animation: flashingRed 2500ms cubic-bezier(0.31, 0.99, 0.74, 0.34) 10ms infinite alternate none;
  /* transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 300ms; */
}
@keyframes flashingRed {
  0% {
    background: #be2c2c;
    box-shadow: 0px 0px 10px 5px rgba(197, 57, 57, 0.25);
  }
  30% {
    background: #bb1010;
    box-shadow: 0px 0px 10px 5px rgba(180, 18, 18, 0.18);
  }
  50% {
    background-color: #bb1010;
    box-shadow: 0px 0px 10px 5px rgba(180, 18, 18, 0.74);
  }
  80% {
    background: #a51b1b;
    box-shadow: 0px 0px 10px 5px rgba(184, 0, 0, 0.4);
  }
  100% {
    background: #e92222;
    box-shadow: 0px 0px 10px 5px rgba(184, 0, 0, 0.69);
  }
}
</style>
