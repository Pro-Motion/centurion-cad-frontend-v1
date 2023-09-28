export default () => ({
  children: [
    {
      path: "",
      name: "Home",
      component: () => import("@/views/pages/Home.vue"),
    },

    {
      path: "civilian",
      name: "Civ",

      component: () => import("@/views/pages/departments/civilian/Civilian.vue"),
      children: [
        {
          path: ":civId",
          name: "Character",
          component: () => import("@/views/pages/departments/civilian/Character.vue"),
        },
      ],
    },

    {
      path: "police",
      name: "Police",
      component: () => import("@/views/pages/departments/Police.vue"),
    },
    {
      path: "dispatch",
      name: "Dispatch",
      component: () => import("@/views/pages/departments/Dispatch.vue"),
    },
    {
      path: "fire",
      name: "Fire",
      component: () => import("@/views/pages/departments/Fire.vue"),
    },
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/pages/user/Profile.vue"),
    },
  ],
});
