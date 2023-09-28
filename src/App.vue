<template>
  <theme-provider :theme="THEME"> <router-view /></theme-provider>
</template>
<script>
import { ThemeProvider } from "vue3-styled-components";
import THEME from "@/constants/app-theme/app-theme.constants";
export default {
  data() {
    return { THEME };
  },
  components: { "theme-provider": ThemeProvider },
};
</script>
<style lang="css">
#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 16);
}
body {
  height: 100vh;
  background: linear-gradient(316deg, #0e181e 0%, #222c32 100%);
  color: #ffffff;
}
body::-webkit-scrollbar {
  background-color: #222c32;
}
/* BASE TAGS RESET */
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
/* - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* SHARED CLASSES*/

/* - - - - - - - - - - - - - - - - - - - - - - - - -  */
</style>
