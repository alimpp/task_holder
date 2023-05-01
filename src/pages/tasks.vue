<template>
  <div class="row application_animation">
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
            <span class="application_badge" v-if="tasksDataSource.length > 0">
              {{ tasksBadge }}
            </span>
          </div>
        </div>
      </div>
      <baseEmpty v-if="tasksDataSource.length === 0" />
      <tasksCard
        v-else
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
            <span class="application_badge" v-if="inProgressDataSource.length > 0">
              {{ inProgressBadge }}
            </span>
          </div>
        </div>
      </div>
      <baseEmpty v-if="inProgressDataSource.length === 0" />
      <inProgressCard
        v-for="inProgress in inProgressDataSource"
        :key="inProgress.id"
        :id="inProgress.id"
        :name="inProgress.name"
        :description="inProgress.description"
        class="mt-4"
      />
    </div>
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
              >All Completed Level...</span
            >
          </div>
          <div class="w-50 d-flex justify-content-end">
            <span class="application_badge" v-if="completedDataSource.length > 0">
              {{ completedBadge }}
            </span>
          </div>
        </div>
      </div>
      <baseEmpty v-if="completedDataSource.length === 0" />
      <completedCard
        v-for="completed in completedDataSource"
        :key="completed.id"
        :id="completed.id"
        :name="completed.name"
        :description="completed.description"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script setup>
import baseEmpty from "@/components/base/baseEmpty";
import tasksCard from "@/components/cards/tasksCard";
import inProgressCard from "@/components/cards/inProgressCard";
import completedCard from "@/components/cards/completedCard";
import { computed, onBeforeMount } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import { tasksDataStoreModule } from "@/stores/tasksDataStoreModule";
import { inprogressDataStoreModule } from "@/stores/inprogressDataStoreModule";
import { completedDataStoreModule } from "@/stores/completedDataStoreModule";
import { AllTasks } from "@/api/tasksApiModule";
import { AllInProgress } from "@/api/inprogressApiModule";
import { AllCompleted } from "@/api/completedApiModule";

const theme = applicationTheme();

const tasksDataStore = tasksDataStoreModule();
const inprogressDataStore = inprogressDataStoreModule();
const completedDataStore = completedDataStoreModule();

const tasksDataSource = computed(() => {
  return tasksDataStore.tasks;
});

const inProgressDataSource = computed(() => {
  return inprogressDataStore.inProgress;
});

const completedDataSource = computed(() => {
  return completedDataStore.completed;
});

const inProgressBadge = computed(() => {
  return inprogressDataStore.inProgress.length;
});

const tasksBadge = computed(() => {
  return tasksDataStore.tasks.length;
});

const completedBadge = computed(() => {
  return completedDataStore.completed.length;
});

const watchTheme = computed(() => {
  return theme.themeStatus;
});

onBeforeMount(() => {
  AllTasks();
  AllInProgress();
  AllCompleted();
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
