<template>
  <Header />
  <main>
    <div class="container">
      <router-view />
    </div>
  </main>
  <Footer />
</template>
<script>
import { defineComponent } from "vue";
import Header from "../components/Base/Header.vue";
import Footer from "../components/Base/Footer.vue";
export default defineComponent({
  name: "InternalLayout",
  components: { Header, Footer },
});
</script>
<style scoped lang="css">
.container {
  margin: 0 auto;
  padding: 16px 20px 11px 20px;
}
</style>
