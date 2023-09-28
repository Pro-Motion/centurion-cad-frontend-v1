<template>
  <Header />
  <aside>Aside</aside>
  <main>
    <router-view />
  </main>
</template>
<script>
import { defineComponent } from "vue";
import Header from "../components/Base/Header.vue";
export default defineComponent({
  name: "AdminLayout",
  components: { Header },
});
</script>
<style lang=""></style>
