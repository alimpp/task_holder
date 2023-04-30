<template>
  <div class="base-modal-container">
    <i
      class="bi bi-pencil-square application_pointer"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Edit task"
      @click="changeStatusModal"
    ></i>

    <div class="base-modal" v-if="isOpen">
      <div
        class="base application_animation"
        :class="{
          create_task_modal_dark_mode_theme: watchTheme === 'dark',
          create_task_modal_light_mode_theme: watchTheme === 'light',
        }"
        :style="{ width: width }"
      >
        <div class="d-flex justify-content-end">
          <i class="bi bi-x application_pointer px-2" @click="changeStatusModal"></i>
        </div>

        <div class="d-flex flex-column px-4">
          <span class="font_size_s font_w_100">Task Name</span>
          <baseInput icon="taskName" v-model="newTask.name" />
          <p
            class="danger_color font_size_s font_w_100 pt-1"
            v-for="error in v$.name.$errors"
            :key="error.$uid"
          >
            .{{ error.$message }}
          </p>

          <span class="font_size_s font_w_100 pt-4">Description</span>
          <baseInput icon="description" v-model="newTask.description" />
          <p
            class="danger_color font_size_s font_w_100 pt-1"
            v-for="error in v$.description.$errors"
            :key="error.$uid"
          >
            .{{ error.$message }}
          </p>

          <div class="mt-3 d-flex justify-content-end">
            <baseButton
              name="Create Task"
              color="primary"
              @click="createTask"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import useVuelidate from "@vuelidate/core";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import { CreateTask, AllTasks } from "@/api/tasksApiModule";

import { required, minLength } from "@vuelidate/validators";

const theme = applicationTheme();
const isOpen = ref(false);
const loading = ref(false);

const newTask = ref({
  name: "",
  descritpion: "",
});

const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(8),
    },
    description: { required, minLength: minLength(12) },
  };
});

const v$ = useVuelidate(rules, newTask);

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const createTask = async () => {
  const result = await v$.value.$validate();
  if (result) {
    loading.value = true;
    setTimeout(() => {
      CreateTask(newTask.value);
      newTask.value.name = "";
      newTask.value.description = "";
      loading.value = false;
    }, 1500);
    setTimeout(() => {
      AllTasks();
      changeStatusModal();
    }, 2000);
  }
};

function changeStatusModal() {
  if (isOpen.value == false) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(8, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(0px);
  transition: 1s;
  .base {
    border-radius: 5px;
    padding: 10px 5px;
    width: 40%;
  }
}
</style>
