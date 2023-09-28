<template lang="">
  Login Form
  <form @submit.prevent="handleSubmit">
    <styled-input
      name="email"
      v-model="credentials.email"
      placeholder="Enter the email"
      type="email"
    />
    <styled-input
      name="password"
      v-model="credentials.password"
      placeholder="Enter the password"
      type="password"
    />
    <custom-button type="submit" title="Login"></custom-button>
  </form>
</template>
<script>
import { defineComponent } from "vue";
import StyledInput from "@/views/components/UI-kit/StyledInput.vue";
import StyledButton from "@/views/components/UI-kit/StyledButton.vue";
import { authApi } from "@/api/auth.api";
import { useUserStore } from "@/store/index";

export default defineComponent({
  name: "LoginForm",
  components: { "styled-input": StyledInput, "custom-button": StyledButton },
  data() {
    return {
      credentials: {
        email: "pp@google.com",
        password: "test",
      },
    };
  },
  // computed: {},
  methods: {
    async handleSubmit() {
      const userStore = useUserStore();
      //
      const data = await this.fetchData();
      console.log(data);
      userStore.LOGIN({ ...data });

      this.$router.push("/");
    },

    async fetchData() {
      return authApi.login(this.credentials);
    },
  },
});
</script>
