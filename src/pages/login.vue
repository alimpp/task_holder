<template>
  <div class="login-container">
    <started v-if="startedComponent" />
    <div class="text-container px-5 application_animation" v-else>
      <span class="font_size_m font_w_800 primary_color typeing">
        Login To TASKHOLDER
      </span>

      <div class="d-flex mt-5">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-telegram px-1"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter px-1"></i>
        <i class="bi bi-linkedin"></i>
      </div>

      <span class="font_size_s font_w_800 pt-1"> TASKHOLDER...</span>
    </div>
  </div>
</template>

<script setup>
import started from "@/components/started";
import { onBeforeMount , ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const startedComponent = ref(false)

setTimeout(() => {
  startedComponent.value = false
}, 4000);

onBeforeMount(() => {
  startedComponent.value = true
})
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  .text-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .typeing {
      overflow: hidden;
      border-right: 0.15em solid orange;
      white-space: nowrap;
      animation: 6s typing;
      font-size: 1.6rem;
    }
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 270px;
  }
}
</style>
