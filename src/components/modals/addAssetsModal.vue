<template>
  <div class="base-modal-container">
    <i class="bi bi-cash-coin application_pointer" @click="changeStatusModal"></i>

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
          <span class="font_size_s font_w_100">Enter Price</span>
          <baseInput
            icon="coin"
            v-model="money"
            type="number"
            :hasError="error"
            textError="Price is required...!"
          />

          <div class="mt-3 d-flex justify-content-end">
            <baseButton
              name="Add To Assets"
              color="primary"
              @click="addAsets"
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
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import {TotalAssets , AddAssets} from '@/api/totalAssetsApiModule'
import {totalAssetsDataStoreModule} from '@/stores/totalAssetsDataStoreModule'

const theme = applicationTheme();
const isOpen = ref(false);
const loading = ref(false);
const error = ref(false);

const money = ref(0);
const totalAssetsDataStore = totalAssetsDataStoreModule()

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const addAsets = async () => {
  let result = true;
  if (money.value === 0) {
    result = false;
    error.value = true;
  } else {
    result = true;
    error.value = false;
  }
  if (result) {
    loading.value = true;
    const changeToNumber = parseInt(money.value)
    const data = totalAssetsDataStore.totalAssets.assets + changeToNumber
    setTimeout(() => {
      AddAssets(data);
      money.value = 0;
      loading.value = false
    } , 1500);
    setTimeout(() => {
      TotalAssets();
      changeStatusModal()
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
