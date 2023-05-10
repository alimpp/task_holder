<template>
  <div
    class="sidebar-layout"
    :class="{
      sidebar_dark_mode_theme: watchTheme === 'dark',
      sidebar_light_mode_theme: watchTheme === 'light',
      isOpen: isOpen,
    }"
  >
    <div class="d-flex justify-content-end px-2 pt-3">
      <i
        class="bi bi-list px-3 application_pointer"
        v-if="!isOpen"
        @click="changeStatusSidebar"
      ></i>
      <i
        class="bi bi-x-lg application_pointer"
        v-if="isOpen"
        @click="changeStatusSidebar"
      ></i>
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 items">
      <div class="d-flex pt-3" v-for="item in items" :key="item.id">
        <router-link class="application_link px-2 pt-1" :to="item.route">
          <i :class="`bi ${item.icon}`"></i>
          <span v-if="isOpen" class="px-2">{{item.name}}</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();
const isOpen = ref(false);

const items = ref([
  {
    name: "Tasks",
    route: "/tasks",
    icon: "bi-journal-check",
  },
  {
    name: "Assets",
    route: "/assets",
    icon: "bi-coin",
  },
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: "bi-clipboard-data",
  },
]);

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const changeStatusSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.sidebar-layout {
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  border-radius: 0 10px 10px 0;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .items{
    height: 400px;
  }
  // .router-link-active {
  //   background: #fff;
  //   color: rgb(102, 111, 241);
  //   border-radius: 10px;
  //   padding: 0px 20px;
  //   margin: 0px 5px;
  // }
}
.isOpen {
  width: 170px;
}
</style>
