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
          <div class="d-flex">
            <addAssetsModal
              class="mt-4"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add New Assets"
            />
            <addDecrementListsModal
              class="mt-4 mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add New Decremnt list"
            />
          </div>
        </div>
      </div>
      <span class="font_size_s font_w_800 primary_color">Total All Tasks Ready on Chart</span>
      <p class="font_size_s font_w_100 gray_color">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
      </p>
      
      <div class="mb-5" style="height: 400px">
        <AssetsDoughnutChart />
      </div>
    </div>
    <div
      class="col-lg-6 mx-5 mt-4 px-4 pt-3 card-container"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
    >
      <baseEmpty v-if="decrementListsDataSource.length === 0" />
      <costsCard
        v-else
        v-for="data in decrementListsDataSource"
        :key="data.id"
        :title="data.title"
        :price="data.price"
        :id="data.id"
        class="mt-3"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import costsCard from "@/components/cards/costsCard";
import { TotalAssets } from "@/api/totalAssetsApiModule";
import { DecrementAssets, DecrementLists } from "@/api/decrementAssetsApiModule";
import { totalAssetsDataStoreModule } from "@/stores/totalAssetsDataStoreModule";
import addAssetsModal from "@/components/modals/addAssetsModal";
import addDecrementListsModal from "@/components/modals/addDecrementListsModal";
import baseEmpty from "@/components/base/baseEmpty";
import AssetsDoughnutChart from "@/components/charts/assetsChart/AssetsDoughnutChart.vue";

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

const decrementListsDataSource = computed(() => {
  return totalAssetsDataStore.decrementLists;
});

onBeforeMount(() => {
  TotalAssets();
  DecrementAssets();
  DecrementLists();
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
