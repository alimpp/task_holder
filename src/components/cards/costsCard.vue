<template>
  <baseCard>
    <template #cardContent>
      <div d-flex flex-column>
        <div class="d-flex">
          <div class="w-100 d-flex justify-content-start">
            <span class="font_size_s font_w_800">{{ title }}</span>
          </div>
        </div>
        <p class="font_size_s font_w_100 gray_color pt-2">{{ price }} $</p>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { ref } from "vue";
import baseCard from "@/components/base/baseCard";

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
  title: {
    type: String,
    default: "",
    required: false,
  },
  price: {
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
