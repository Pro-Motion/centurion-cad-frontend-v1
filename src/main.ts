import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "modern-normalize";
import { createHead, VueHeadMixin } from "@unhead/vue";
import components from "./views/components/UI-kit/index";
import Interceptors from "./api/utils/interceptor";
import { useUserStore } from "./store";

//
const head = createHead();
//
const pinia = createPinia();
//

const userStore = useUserStore;
Interceptors.SETUP(userStore);

const app = createApp(App);
components.forEach((comp) => {
  app.component(comp.name, comp);
});
app.use(router).use(pinia).use(head).mixin(VueHeadMixin).mount("#app");
