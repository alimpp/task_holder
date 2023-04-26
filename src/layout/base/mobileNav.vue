<template>
  <div
    class="mobile-size"
    :class="{
      nav_dark_mode_theme: watchTheme === 'dark',
      nav_light_mode_theme: watchTheme === 'light',
    }"
  >
    <div class="logo-container">
      <img src="@/assets/icons/app-logo.png" alt="logo" />
    </div>
    <div class="items-container">
      <languageSwitcher class="px-2" />
      <themeSwitcher class="mt-1" />
      <hamburgerMenu class="mx-2 mt-2" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import themeSwitcher from "@/components/themeSwitcher";
import languageSwitcher from "@/components/languageSwitcher";
import hamburgerMenu from "@/layout/base/hamburgerMenu";
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

</script>

<style lang="scss" scoped>
.mobile-size {
  width: 100%;
  height: 90px;
  direction: ltr;
  .logo-container {
    width: 100px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 70px;
    }
  }
  .items-container {
    width: 95%;
    height: 90px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
