<template>
  <main-button v-if="variant === 'MAIN'" :type="type" :disabled="disabled"
    ><slot></slot>{{ title }}</main-button
  >
  <navigation-button v-if="variant === 'NAVIGATION'" :type="type" :disabled="disabled"
    ><slot></slot>{{ title }}</navigation-button
  >
  <red-button v-if="variant === 'RED'" :type="type" :disabled="disabled"
    ><slot></slot>{{ title }}</red-button
  >
  <grey-button v-if="variant === 'GREY'" :type="type" :disabled="disabled"
    ><slot></slot>{{ title }}</grey-button
  >
</template>
<script>
import { defineComponent } from "vue";
import {
  MainStyledButton,
  RedStyledButton,
  NavigationStyledButton,
  GreyStyledButton,
} from "./main.style";
export default defineComponent({
  name: "styled-button",
  components: {
    "main-button": MainStyledButton,
    "red-button": RedStyledButton,
    "navigation-button": NavigationStyledButton,
    "grey-button": GreyStyledButton,
  },
  props: {
    type: { type: String, default: "button" },
    title: { type: String, default: "" },
    variant: { type: String, default: "MAIN" },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    // getVariant(variant){
    // }
  },
});
</script>
