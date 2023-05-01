import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/tasks",
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
        path:"/profile",
        name: "profile page",
        component: () => import("@/pages/profile.vue"),
      },
      {
        path:"/assets",
        name: "assets page",
        component: () => import("@/pages/assets.vue"),
      },
    ]
  },

  {
    path:"/",
    name: "login",
    redirect:"/login",
    component: () => import("@/layout/login/login.vue"),
    children: [
      {
        path:"/login",
        name: "login page",
        component: () => import("@/pages/login.vue"),
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
