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
              class="spinner-border spinner-border-sm"
              role="status"
              v-if="deleteLoading"
            ></div>
            <i
              class="bi bi-x-lg application_pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove task"
              @click="deleteCompleted"
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
import {DeleteCompleted , AllCompleted} from '@/api/completedApiModule'

const deleteLoading = ref(false);

const deleteCompleted = () => {
  deleteLoading.value = true;
  setTimeout(() => {
    DeleteCompleted(props.id);
    deleteLoading.value = false;
  }, 1500);
  setTimeout(() => {
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
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>
