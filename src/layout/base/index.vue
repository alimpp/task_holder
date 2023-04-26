<template>
  <div class="index-layout">
    <desktopNav class="desktop-size" />
    <mobileNav class="mobile-size" />
    <router-view></router-view>
    <applicationFooter />
  </div>
</template>

<script setup>
import mobileNav from "@/layout/base/mobileNav";
import desktopNav from "@/layout/base/desktopNav";
import applicationFooter from '@/layout/base/applicationFooter'
</script>

<style lang="scss" scoped>
.index-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  .mobile-size {
    display: none;
  }
  @media (max-width: 900px) {
    .desktop-size {
      display: none;
    }
    .mobile-size {
      display: flex;
    }
  }
}
</style>
