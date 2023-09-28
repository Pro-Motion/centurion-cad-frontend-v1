<template>
  <div>
    login
    <login-form />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import LoginForm from "./components/LoginForm.vue";
export default defineComponent({
  name: "LoginPage",
  components: { "login-form": LoginForm },
});
</script>
<style lang=""></style>
