import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name: "base",
    redirect:"/home",
    component: () => import("@/layout/base/index.vue"),
    children: [
      {
        path:"/home",
        name: "home page",
        component: () => import("@/pages/homePage.vue"),
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
