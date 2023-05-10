import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name: "base",
    redirect:"/tasks",
    component: () => import("@/layout/base/index.vue"),
    children: [
      {
        path:"/dashboard",
        name: "dashboard page",
        component: () => import("@/pages/dashboard.vue"),
      },
      {
        path:"/tasks",
        name: "tasks page",
        component: () => import("@/pages/tasks.vue"),
      },
      {
        path:"/assets",
        name: "assets page",
        component: () => import("@/pages/assets.vue"),
      },
    ]
  },

  {
    path: "/:pathMatch(.*)*",
    name : "error",
    component: () => import("@/layout/error/index.vue"),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
