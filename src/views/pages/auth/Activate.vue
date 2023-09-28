<template>
  <div>
    <div>Activate</div>
    <ActivateForm />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ActivateForm from "@/views/pages/auth/components/ActivateForm.vue";
export default defineComponent({
  name: "ActivatePage",
  components: { ActivateForm },
});
</script>
<style lang=""></style>
