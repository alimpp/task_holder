<template>
  <baseCard>
    <template #cardContent>
      <div d-flex flex-column>
        <div class="d-flex">
          <div class="w-50 d-flex justify-content-start">
            <span class="font_size_s font_w_800">{{ name }}</span>
          </div>
          <div class="w-50 d-flex justify-content-end">
            <div
              class="spinner-border spinner-border-sm mx-3"
              role="status"
              v-if="completedLoading"
            ></div>
            <i
              class="bi bi-arrow-right application_pointer mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send task to completed status"
              @click="addToCompleted"
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
              @click="deleteInProgress"
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
import { DeleteInProgress, AllInProgress , RemoveInProgress} from "@/api/inprogressApiModule";
import {AddToCompleted , AllCompleted} from '@/api/completedApiModule'
import {inprogressDataStoreModule} from '@/stores/inprogressDataStoreModule'

const deleteLoading = ref(false);
const completedLoading = ref(false);
const inprogressDataStore = inprogressDataStoreModule();

const deleteInProgress = () => {
  deleteLoading.value = true;
  setTimeout(() => {
    DeleteInProgress(props.id);
    deleteLoading.value = false;
  }, 1500);
  setTimeout(() => {
    AllInProgress();
  }, 2000);
};

const addToCompleted = () => {
  const data = inprogressDataStore.inProgress.find((task) => task.id === props.id);
  completedLoading.value = true;

  setTimeout(() => {
    AddToCompleted(data);
    RemoveInProgress(props.id);
    completedLoading.value = false;
  }, 1500);

  setTimeout(() => {
    AllInProgress();
    AllCompleted();
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
    required: false,
  },
  id: {
    type: Number,
    required: false,
  },
});
</script>

