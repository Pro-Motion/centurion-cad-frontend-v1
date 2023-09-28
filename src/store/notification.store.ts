import { defineStore } from "pinia";

// interface State {}
export const useNotificationStore = defineStore("notification", {
  state: () => ({
    needShow: false,
    error: false,
    message: "Something went wrong",
  }),
  getters: {},
  actions: {
    show(type: "error" | "success", needShow: boolean, message: string) {
      this.message = message;

      if (type === "error") {
        this.error = true;
        this.needShow = needShow;
        return;
      }
      this.error = false;
      this.needShow = needShow;
    },
  },
});
