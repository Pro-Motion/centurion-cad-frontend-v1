<template>
  <div class="home">
    <styled-button variant="MAIN" title="asfs"
      ><Svg width="32" height="32"><IconAddImage /></Svg
    ></styled-button>
    <ul>
      <li v-for="dept in departments" :key="dept.path">
        <router-link :to="dept.path">{{ dept.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledButton from "../components/UI-kit/StyledButton.vue";
import Svg from "../components/Base/Svg.vue";
import IconAddImage from "@/views/components/lib/icons/32px/IconAddImage.vue";
export default defineComponent({
  name: "HomePage",
  head() {
    return {
      title: "Home - Centurion CAD",
    };
  },
  components: { "styled-button": StyledButton, Svg, IconAddImage },
  data() {
    return {
      departments: [
        {
          path: "/civilian",
          name: "Civilian",
        },
        {
          path: "/police",
          name: "Police",
        },
        {
          path: "/dispatch",
          name: "Dispatch",
        },
        {
          path: "/fire",
          name: "Fire",
        },
        {
          path: "/auth/login",
          name: "Login",
        },
        {
          path: "/admin/dashboard",
          name: "Admin",
        },
      ],
    };
  },
});
</script>
