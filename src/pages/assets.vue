<template>
  <div class="row d-flex justify-content-center align-items-center application_animation">
    <div
      class="col-lg-5 mt-4 px-4 pt-3 card-container"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
    >
     
    </div>
    <div
      class="col-lg-6 mx-5 mt-4 px-4 pt-3 card-container"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
    >
     
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style scoped lang="scss">
.card-container {
  height: 82vh;
  border-radius: 10px;
  overflow-x: none;
  overflow-y: scroll;
}
</style>
