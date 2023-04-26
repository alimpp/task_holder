<template>
  <div class="sidebar-container">
    <i class="bi bi-list-nested size_large application_pointer" @click="openSideBar"></i>
    <div class="nav-sidebar" v-if="isOpen">
      <div
        class="sidebar"
        :class="{
          nav_dark_mode_theme: watchTheme === 'dark',
          nav_light_mode_theme: watchTheme === 'light',
        }"
      >
        <i class="bi bi-x-lg app_animation application_pointer" @click="openSideBar"></i>
        <div
          class="d-flex flex-column justify-content-center align-items-center application_animation"
        >
          <div class="d-flex flex-column mt-5">
            <img src="@/assets/icons/app-logo.png" alt="logo" />
            <profileModal class="mt-2" />
          </div>
          <registerModal class="mt-5" v-if="!checkAuth" />
          <createArticleModal class="mt-5" v-if="checkAuth" />
          <div class="d-flex mt-2">
            <i class="bi bi-instagram px-1"></i>
            <i class="bi bi-linkedin px-1"></i>
            <i class="bi bi-telegram px-1"></i>
            <i class="bi bi-facebook px-1"></i>
            <i class="bi bi-twitter px-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();
const isOpen = ref(false);

const openSideBar = () => {
  isOpen.value = !isOpen.value;
};

const watchTheme = computed(() => {
  return theme.themeStatus;
});

</script>

<style lang="scss" scoped>
.sidebar-container {
  .nav-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    background: rgba(6, 6, 6, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(6px);
    transition: 1s;
  }
  .sidebar {
    width: 280px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    animation: 0.2s opanSidebar;
    overflow-y: scroll;
    overflow-x: none;
    img{
      width: 70px;
      height: 70px;
    }
  }
}
@keyframes opanSidebar {
  0% {
    width: 0;
  }
  100% {
    width: 280px;
  }
}
</style>
