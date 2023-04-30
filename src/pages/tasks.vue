<template>
  <div class="row">
    <div
      class="col-lg-4 card-container mt-3"
      :class="{
        card_container_dark_mode_theme: watchTheme === 'dark',
        card_container_light_mode_theme: watchTheme === 'light',
      }"
    >
      <div class="mt-2">
        <div class="d-flex">
          <div class="w-50 d-flex justify-content-start">
            <span class="font_size_s font_w_800 px-2 pt-2 primary_color"
              >All Tasks...</span
            >
          </div>
          <div class="w-50 d-flex justify-content-end">
            <span class="application_badge">
              {{ tasksBadge }}
            </span>
          </div>
        </div>
      </div>
      <tasksCard
        v-for="task in tasksDataSource"
        :key="task.id"
        :name="task.name"
        :description="task.description"
        :id="task.id"
        class="mt-4"
      />
    </div>
    <div
      class="col-lg-3 card-container mt-3 mx-5"
      :class="{
        card_container_dark_mode_theme: watchTheme === 'dark',
        card_container_light_mode_theme: watchTheme === 'light',
      }"
    >
      <div class="mt-2">
        <div class="d-flex">
          <div class="w-50 d-flex justify-content-start">
            <span class="font_size_s font_w_800 px-2 pt-2 primary_color"
              >All In Progress Level...</span
            >
          </div>
          <div class="w-50 d-flex justify-content-end">
            <span class="application_badge">
              {{ inProgressBadge }}
            </span>
          </div>
        </div>
      </div>
      <inProgressCard />
      {{ inProgressDataSource }}
    </div>
    <div
      class="col-lg-4 card-container mt-3"
      :class="{
        card_container_dark_mode_theme: watchTheme === 'dark',
        card_container_light_mode_theme: watchTheme === 'light',
      }"
    >
      <completedCard />
    </div>
  </div>
</template>

<script setup>
import tasksCard from "@/components/cards/tasksCard";
import inProgressCard from "@/components/cards/inProgressCard";
import completedCard from "@/components/cards/completedCard";
import { computed, onBeforeMount } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import { tasksDataStoreModule } from "@/stores/tasksDataStoreModule";
import { inprogressDataStoreModule } from "@/stores/inprogressDataStoreModule";
import { AllTasks } from "@/api/tasksApiModule";
import { AllInProgress } from "@/api/inprogressApiModule";

const theme = applicationTheme();
const tasksDataStore = tasksDataStoreModule();
const inprogressDataStore = inprogressDataStoreModule();

const tasksDataSource = computed(() => {
  return tasksDataStore.tasks;
});

const inProgressDataSource = computed(() => {
  return inprogressDataStore.inProgress;
});

const inProgressBadge = computed(() => {
  return inprogressDataStore.inProgress.length;
});

const tasksBadge = computed(() => {
  return tasksDataStore.tasks.length;
});

const watchTheme = computed(() => {
  return theme.themeStatus;
});

onBeforeMount(() => {
  AllTasks();
  AllInProgress();
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
