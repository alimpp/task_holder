import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/tasks",
    name: "base",
    redirect:"/tasks",
    component: () => import("@/layout/base/index.vue"),
    children: [
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
    name: "started page",
    component: () => import("@/pages/started.vue"),
  } ,
  {
    path:"/login",
    name: "login page",
    component: () => import("@/pages/login.vue"),
  } ,

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
