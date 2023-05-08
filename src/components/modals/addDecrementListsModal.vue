<template>
  <div class="base-modal-container">
    <i class="bi bi-window-plus application_pointer" @click="changeStatusModal"></i>

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
            v-model="data.money"
            type="number"
            :hasError="error.money"
            textError="Price is required...!"
          />
          <span class="font_size_s font_w_100 pt-2">Enter Title</span>
          <baseInput
            icon="taskName"
            v-model="data.title"
            type="text"
            :hasError="error.title"
            textError="Price is required...!"
          />

          <div class="mt-3 d-flex justify-content-end">
            <baseButton
              name="Add To Decrement Lists"
              color="primary"
              @click="addToDecrementLists"
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
import { TotalAssets, UpdateAssets } from "@/api/totalAssetsApiModule";
import {
  AddToDecrement,
  DecrementAssets,
  DecrementLists,
  AddToDecrementList,
} from "@/api/decrementAssetsApiModule";
import { totalAssetsDataStoreModule } from "@/stores/totalAssetsDataStoreModule";

const theme = applicationTheme();
const isOpen = ref(false);
const loading = ref(false);

const error = ref({
  money: false,
  title: false,
});

const data = ref({
  money: null,
  title: "",
});
const totalAssetsDataStore = totalAssetsDataStoreModule();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const addToDecrementLists = async () => {
  let result = true;
  if(data.value.money === null){
    result = false 
    error.value.money = true
  }else{
    result = true 
    error.value.money = false
  }
  if(data.value.title === ''){
    result = false 
    error.value.title = true
  }else{
    result = true 
    error.value.title = false
  }
  if(result){
    loading.value = true 
    const changeToNumber = parseInt(data.value.money);
    const decrementFromTotalAssets = totalAssetsDataStore.totalAssets.assets - changeToNumber
    const incrementToTotalDecrementAssets = totalAssetsDataStore.decrementAssets.decrementAssets + changeToNumber
    UpdateAssets(decrementFromTotalAssets)
    AddToDecrement(incrementToTotalDecrementAssets)
    setTimeout(() => {
      AddToDecrementList(data.value)
      data.value.money = null 
      data.value.title = ''
      loading.value = false 
    } , 1500)
    setTimeout(() => {
      TotalAssets()
      DecrementAssets()
      DecrementLists()
      changeStatusModal()
    } , 2000)
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
