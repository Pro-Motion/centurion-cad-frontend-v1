<template>
  <label>
    <input
      :name="name"
      :value="modelValue"
      @input="updateInput"
      :type="type"
      :placeholder="placeholder"
    />
  </label>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "styled-input",
  components: {},
  props: {
    name: { type: String, required: true },
    modelValue: [String, Number],
    placeholder: { type: String, required: true },
    type: { type: String, default: "text" },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
});
</script>
<style lang=""></style>
