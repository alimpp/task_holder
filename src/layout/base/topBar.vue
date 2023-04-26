<template>
  <div
    class="top-bar-container"
    :class="{
      topbar_dark_mode_theme: watchTheme === 'dark',
      topbar_light_mode_theme: watchTheme === 'light',
    }"
  >
    <div class="profile-container px-4">
      <img src="@/assets/images/profile-avatar.jpeg" alt="profile image">
      <div class="d-flex flex-column px-2">
        <span class="font_size_s font_w_800">jimmu@gmail.com</span>
        <span class="font_size_s font_w_100 pt-1">$ 200,000</span>
      </div>
    </div>
    <div class="logo-container px-4">
     <span class="font_size_m font_w_800">TASK HOLDER</span>
     <span class="font_size_s font_w_100 pt-1">Lorem ipsum dolor sit amet consectetur...</span>
    </div>
    <div class="items-container px-4">
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import themeSwitcher from "@/components/themeSwitcher";

const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.top-bar-container {
  width: 95%;
  height: 80px;
  border-radius: 0 0 10px 10px;
  display: flex;
  .profile-container {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .logo-container{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .items-container {
    width: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
