<template>
  <div>NotFound Redirecting to Home page in: {{ timer }}..</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFoundPage",
  head() {
    return {
      title: "404 - Centurion CAD",
    };
  },
  components: {},
  mounted() {
    this.timerId = setInterval(() => {
      this.timer -= 1;
      if (this.timer === 0) {
        this.$router.push("/");
        return;
      }
    }, 1000);
  },
  unmounted() {
    clearInterval(this.timerId);
  },
  data() {
    return { timer: 5, timerId: 0 };
  },
  // methods() {},
});
// onMounted(() => {});
</script>
<style lang=""></style>
