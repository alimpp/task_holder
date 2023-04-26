<template>
  <div class="index-layout">
    <sidebar />
    <div class="router-container">
      <topBar class="mx-5" />
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import sidebar from "@/layout/base/sidebar";
import topBar from "@/layout/base/topBar";
</script>

<style lang="scss" scoped>
.index-layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  .router-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
