import { authApi } from "@/api/auth.api";
import { LocalStorage } from "@/helpers/localStorage.helper";
import { useUserStore } from "@/store/user.store";
import { RouterOptions } from "vue-router";
class Authenticate {
  async restrictedRoute(to: RouterOptions) {
    // const store = useUserStore();
    // if (!store.session.IS_AUTHORIZE) {
    //   return true;
    // }
    // return { name: "Home" };
  }

  async privateRoute(to: RouterOptions) {
    const store = useUserStore();
    if (!store.session.IS_AUTHORIZE) {
      return { name: "Login" };
    }
    if (store.userInfo.roles.mainRole === "ADMIN") {
      return true;
    }
    // if (store.userInfo.roles.subRoles.includes()) {
    //   return true;
    // }

    return true;
  }
  async auth() {
    try {
      // const userId = store.userInfo.id;
      // return user;
    } catch (err: any) {
      // return { name: "Login" };
    }
  }
  //   checkPermission() {}
}
export default new Authenticate();
