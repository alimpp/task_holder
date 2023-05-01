<template>
  <baseCard>
    <template #cardContent>
      <div d-flex flex-column>
        <div class="d-flex">
          <div class="w-50 d-flex justify-content-start">
            <span class="font_size_s font_w_800">{{ name }}</span>
          </div>
          <div class="w-50 d-flex justify-content-end">
            <editTaskModal :id="id" :name="name" :description="description" />

            <div
              class="spinner-border spinner-border-sm mx-3"
              role="status"
              v-if="inProgressLoading"
            ></div>
            <i
              class="bi bi-arrow-right application_pointer mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send task to inprogress status"
              @click="addToInprogress"
              v-else
            ></i>

            <div
              class="spinner-border spinner-border-sm"
              role="status"
              v-if="deleteLoading"
            ></div>
            <i
              class="bi bi-x-lg application_pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove task"
              @click="deleteTask"
              v-else
            ></i>
          </div>
        </div>
        <p class="font_size_s font_w_100 gray_color pt-2">{{ description }}</p>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { ref } from "vue";
import baseCard from "@/components/base/baseCard";
import editTaskModal from "@/components/modals/editTaskModal";
import { DeleteTask, AllTasks , RemoveTask } from "@/api/tasksApiModule";
import { AddToInProgress , AllInProgress } from "@/api/inprogressApiModule";
import { tasksDataStoreModule } from "@/stores/tasksDataStoreModule";

const deleteLoading = ref(false);
const inProgressLoading = ref(false);
const tasksDataStore = tasksDataStoreModule();

const deleteTask = () => {
  deleteLoading.value = true;
  setTimeout(() => {
    DeleteTask(props.id);
    deleteLoading.value = false;
  }, 1500);
  setTimeout(() => {
    AllTasks();
  }, 2000);
};

const addToInprogress = () => {
  const data = tasksDataStore.tasks.find(task => task.id === props.id);
  inProgressLoading.value = true;

  setTimeout(() => {
    AddToInProgress(data);
    RemoveTask(props.id);
    inProgressLoading.value = false;
  }, 1500);

  setTimeout(() => {
    AllInProgress();
    AllTasks();
  }, 2000);

};

const props = defineProps({
  name: {
    type: String,
    default: "",
    required: false,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>

