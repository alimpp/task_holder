<template>
  <div class="row d-flex justify-content-center align-items-center application_animation">
    <div
      class="col-lg-5 mt-4 px-4 pt-3 card-container d-flex flex-column"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
    >
      <div class="d-flex w-100">
        <div class="w-50 d-flex justify-content-center">
          <i class="bi bi-coin" style="font-size: 170px"></i>
        </div>
        <div class="w-50 d-flex flex-column pt-4 px-3">
          <span class="font_size_s font_w_800 primary_color">Total Assets</span>
          <span class="font_size_m font_w_100">{{ totalAssetsDataSource.assets }} $</span>
          <span class="font_size_s font_w_800 pt-4 primary_color"
            >Total Decrement Assets</span
          >
          <span class="font_size_m font_w_100"
            >{{ decrementAssetsDataSource.decrementAssets }} $</span
          >
          <addAssetsModal
            class="mt-4"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add New Assets"
          />
        </div>
      </div>

      <costsCard class="mt-4" />
      <costsCard class="mt-4" />
    </div>
    <div
      class="col-lg-6 mx-5 mt-4 px-4 pt-3 card-container"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
    ></div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import costsCard from "@/components/cards/costsCard";
import { TotalAssets } from "@/api/totalAssetsApiModule";
import { DecrementAssets } from "@/api/decrementAssetsApiModule";
import { totalAssetsDataStoreModule } from "@/stores/totalAssetsDataStoreModule";
import addAssetsModal from "@/components/modals/addAssetsModal";

const theme = applicationTheme();
const totalAssetsDataStore = totalAssetsDataStoreModule();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const totalAssetsDataSource = computed(() => {
  return totalAssetsDataStore.totalAssets;
});

const decrementAssetsDataSource = computed(() => {
  return totalAssetsDataStore.decrementAssets;
});

onBeforeMount(() => {
  TotalAssets();
  DecrementAssets();
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
