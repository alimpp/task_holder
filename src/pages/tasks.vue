<template>
  <div class="row">
    <div
      class="col-lg-4 card-container mt-3"
      :class="{
        card_container_dark_mode_theme: watchTheme === 'dark',
        card_container_light_mode_theme: watchTheme === 'light',
      }"
    >
      <tasksCard
        v-for="task in tasksDataSource"
        :key="task.id"
        :name="task.name"
        :description="task.description"
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
      <inProgressCard />
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
import { computed , onBeforeMount } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import { tasksDataStoreModule } from "@/stores/tasksDataStoreModule";
import {AllTasks} from '@/api/tasksApiModule'

const theme = applicationTheme();
const tasksDataStore = tasksDataStoreModule();

const tasksDataSource = computed(() => {
  return tasksDataStore.tasks;
});

const watchTheme = computed(() => {
  return theme.themeStatus;
});

onBeforeMount(() => {
  AllTasks()
})
</script>

<style scoped lang="scss">
.card-container {
  height: 82vh;
  border-radius: 10px;
  overflow-x: none;
  overflow-y: scroll;
}
</style>
