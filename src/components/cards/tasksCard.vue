<template>
  <baseCard>
    <template #cardContent>
      <div d-flex flex-column>
        <div class="d-flex">
          <div class="w-50 d-flex justify-content-start">
            <span class="font_size_s font_w_800">{{ name }}</span>
          </div>
          <div class="w-50 d-flex justify-content-end">
            <i
              class="bi bi-arrow-right application_pointer px-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send task to inprogress status"
            ></i>
            <i
              class="bi bi-x-lg application_pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove task"
            ></i>
          </div>
        </div>
        <p class="font_size_s font_w_100 gray_color pt-2">{{ description }}</p>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";

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
});
</script>

<style></style>
