import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HelloWorld.vue"),
    },
    {
      path: "/antd",
      name: "antd",
      component: () => import("../components/AppChildrenAntd.vue"),
    },
    {
      path: "/surely",
      name: "surely",
      component: () => import("../components/AppChildrenSurely.vue"),
    },
  ],
});

export default router;
