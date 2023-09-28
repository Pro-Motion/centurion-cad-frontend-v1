// @ts-nocheck

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Authenticate from "./middlewares/authenticate";
import { useUserStore } from "@/store";
import { authApi } from "@/api/auth.api";
import { LocalStorage } from "@/helpers/localStorage.helper";
import departmentsRouter from "./departments.router";
// import HomeView from "@views/pages/HomeView.vue";
// import LoginView from "@views/pages/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  //
  // BASE PUBLIC ROUTES

  {
    path: "/auth",
    name: "Auth",

    // beforeEnter: [() => console.log("asf")],
    redirect: "auth/login",
    // component: () => import("@/views/layout/main.layout.vue"),
    children: [
      {
        path: "verify/:token",
        name: "Verify",
        component: () => import("@/views/pages/auth/Verify.vue"),
      },
      {
        path: "activate",
        name: "Activate",
        component: () => import("@/views/pages/auth/Activate.vue"),
      },
      { path: "login", name: "Login", component: () => import("@/views/pages/auth/Login.vue") },
      {
        path: "recovery/:token",
        name: "Recovery",
        component: () => import("@/views/pages/auth/Recovery.vue"),
      },
    ],
  },
  //
  // BASE PLAYER ROUTES
  {
    path: "/",
    component: () => import("@/views/layout/main.layout.vue"),
    // beforeEnter: [],
    ...departmentsRouter(),
  },

  //
  // ADMIN ROUTES
  {
    path: "/admin",
    name: "Admin",
    redirect: "admin/dashboard",
    component: () => import("@/views/layout/admin.layout.vue"),
    children: [
      // { path: "", redirect: "dashboard" },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/pages/admin/Dashboard.vue"),
      },
      {
        path: "departments",
        name: "Departments",
        component: () => import("@/views/pages/admin/Departments.vue"),
        children: [
          { path: "civilian", component: () => import("@/views/pages/admin/Departments.vue") },
        ],
      },
    ],
  },

  //
  //  ERROR ROUTES
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/pages/NotFound.vue"),
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    component: () => import("@/views/pages/Forbidden.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to: any, from: any) => {
  const store = useUserStore();
  const token = LocalStorage.getItem("accessToken");
  const IS_AUTHORIZE = store.session.IS_AUTHORIZE;
  const USER_MAIN_ROLE = store.userInfo.roles.mainRole;
  const USER_SUB_ROLES = store.userInfo.roles.subRoles;
  const restrictedRoutes = ["Login", "Activate", "Recovery", "Verify"];
  const publicRoutes = ["Home", "Profile"];
  const pathName = to.name;
  const ROLES = ["CIV", "POLICE", "DISPATCH", "FIRE"];
  const CurrentPageRole = pathName.toUpperCase();

  const REQUIRED_ROLE = ROLES.includes(CurrentPageRole) ? CurrentPageRole : null;

  console.log(pathName);

  //  USER IS NOT AUTHORIZED

  if (!IS_AUTHORIZE && !token && !restrictedRoutes.includes(pathName)) {
    return { name: "Login" };
  }
  // UPDATE OUR USER
  if (IS_AUTHORIZE) {
    try {
      const user = await authApi.current();
      console.log("user", user);

      store.UPDATE(user);
    } catch (e) {
      if (e.response.status !== 403 && !e.response.data.message.includes("expired")) {
        store.LOGOUT();
        return { name: "Login" };
      }
      console.log(e);
    }
  }
  // USER IS NOT AUTHORIZED BUT HAVE ACCESS TOKEN
  if (!IS_AUTHORIZE && token) {
    try {
      const user = await authApi.current();
      store.UPDATE(user);

      // IF USER AUTHORIZED BUT LOCATED AT RESTRICTED ROUTE
      if (restrictedRoutes.includes(pathName)) {
        return { name: "Home" };
      }
      return true;
    } catch (e) {
      // CHECK IF RESTRICTED ROUTE

      if (restrictedRoutes.includes(pathName)) {
        return true;
      }
      return { name: "Login" };
    }
  }

  //  AUTHORIZED USER LOCATED AT RESTRICTED ROUTE
  if (IS_AUTHORIZE && restrictedRoutes.includes(pathName)) {
    return { name: "Home" };
  }

  // AUTHORIZED USER LOCATED AT FORBIDDEN ROUTE
  console.log(USER_MAIN_ROLE);
  console.log(IS_AUTHORIZE);
  console.log(USER_MAIN_ROLE === "ADMIN");
  console.log(REQUIRED_ROLE);
  console.log(!USER_SUB_ROLES.includes(REQUIRED_ROLE));

  if (
    IS_AUTHORIZE &&
    USER_MAIN_ROLE !== "ADMIN" &&
    REQUIRED_ROLE &&
    !USER_SUB_ROLES.includes(REQUIRED_ROLE) &&
    pathName !== "Forbidden"
  ) {
    return { name: "Forbidden" };
  }

  return true;
  // ALLOW THE ROUTE FOR THE USER IF HE IS AUTHORIZED
  // if (IS_AUTHORIZE && to.name !== "Home") {
  //   store.LOGIN(user);
  //   return true;
  // }
});
export default router;
