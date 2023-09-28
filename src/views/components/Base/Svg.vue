<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :view-box="(0, 0, width, height)"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <g :fill="iconColor"><slot /></g>
  </svg>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StyledSVG",
  props: {
    iconName: { type: String, default: "box" },
    width: { type: [String, Number], default: 20 },
    height: { type: [String, Number], default: 20 },
    iconColor: { type: String, default: "currentColor" },
  },
  data() {
    return {};
  },
});
</script>
