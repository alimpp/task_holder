<template>
  <div class="row d-flex justify-content-center align-items-center application_animation">
    <div
      class="col-lg-5 mt-4 px-4 pt-3"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
      style="height: 80vh; border-radius: 15px"
    >
    <span class="font_size_s font_w_800 primary_color">Total Assets Ready on Chart</span>
      <p class="font_size_s font_w_100 gray_color">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
      </p>
      <div class="mt-5">
        <AssetsDoughnutChart />
      </div>
    </div>
    <div
      class="col-lg-5 mx-5 mt-4 px-4 pt-3"
      :class="{
        chart_bg_dark_mode_theme: watchTheme === 'dark',
        chart_bg_light_mode_theme: watchTheme === 'light',
      }"
      style="height: 80vh; border-radius: 15px"
    >
      <span class="font_size_s font_w_800 primary_color">Total All Tasks Ready on Chart</span>
      <p class="font_size_s font_w_100 gray_color">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, laudantium.
        Nemo aut iste commodi quae facere voluptates impedit minus, sit earum obcaecati,
        id, officiis veritatis natus suscipit dolor eum. Obcaecati!
      </p>
      <div class="mt-5">
        <TasksDoughnutChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import TasksDoughnutChart from "@/components/charts/tasksChart/TasksDoughnutChart";
import AssetsDoughnutChart from '@/components/charts/assetsChart/AssetsDoughnutChart'
import { AllTasks } from "@/api/tasksApiModule";
import { AllInProgress } from "@/api/inprogressApiModule";
import { AllCompleted } from "@/api/completedApiModule";
import { computed , onBeforeMount } from "vue";
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

onBeforeMount(() => {
  AllTasks();
  AllInProgress();
  AllCompleted();
});
</script>

<style></style>
