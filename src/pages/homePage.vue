<template>
  <div
    class="home-page d-flex flex-column justify-content-center align-items-center pt-5 px-5 application_animation"
  >
    <p class="primary_color font_size_s font_w_100">{{ $t("message") }}</p>
    <p class="primary_color font_size_m font_w_100">{{ $t("message") }}</p>
    <p class="primary_color font_size_l">{{ $t("message") }}</p>
    <p class="primary_color font_size_xl font_w_100">{{ $t("message") }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
</script>

<style lang="scss" scoped>
.home-page {
  height: 100vh;
}
</style>
