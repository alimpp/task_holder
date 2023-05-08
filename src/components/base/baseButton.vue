<template>
  <button
    class="button"
    :class="{
      primary_background: primaryBackground,
      danger_background: dangerBackground,
      disbaled_button: disabledButton,
    }"
    :style="{'border-radius': borderRadius}"
  >
    <div class="d-flex justify-content-center align-items-center" style="width:60px; height:20px;" v-if="loading">
      <div class="step_one"></div>
      <div class="step_two"></div>
      <div class="step_three"></div>
    </div>

    <div v-else>
      <i
        class="bi"
        :class="{
          'bi-person-fill': userIcon,
          'bi-envelope-at': emailIcon,
          'bi-send-check': sendIcon,
          'bi-chat-dots': chatIcon,
        }"
      ></i>
      {{ name }}
    </div>
  </button>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";

// Props for background button
const primaryBackground = computed(() => {
  if (props.color === "primary") {
    return true;
  }
});
const secondaryBackground = computed(() => {
  if (props.color === "secondary") {
    return true;
  }
});
const successBackground = computed(() => {
  if (props.color === "success") {
    return true;
  }
});
const dangerBackground = computed(() => {
  if (props.color === "danger") {
    return true;
  }
});
const warningBackground = computed(() => {
  if (props.color === "warning") {
    return true;
  }
});
const infoBackground = computed(() => {
  if (props.color === "info") {
    return true;
  }
});
const lightBackground = computed(() => {
  if (props.color === "light") {
    return true;
  }
});
const darkBackground = computed(() => {
  if (props.color === "dark") {
    return true;
  }
});

// Props for button icons
const userIcon = computed(() => {
  if (props.icon === "user") {
    return true;
  }
});
const emailIcon = computed(() => {
  if (props.icon === "email") {
    return true;
  }
});
const sendIcon = computed(() => {
  if (props.icon === "send") {
    return true;
  }
});
const chatIcon = computed(() => {
  if (props.icon === "chat") {
    return true;
  }
});
const disabledButton = computed(() => {
  if (props.disable == true) {
    return true;
  }
});


const props = defineProps({
  color: {
    type: String,
    default: "",
    required: false,
  },
  name: {
    type: String,
    default: "",
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
  disable: {
    type: Boolean,
    default: false,
    required: false,
  },
  borderRadius : {
    type: String,
    default: "",
    required: false,
  }
});

</script>

<style lang="scss" scoped>
.button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 900;
}
.disbaled_button {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  cursor: not-allowed;
  pointer-events: none;
}

.step_one{
  position: static;
  width: 3px;
  height: 1px;
  border-radius: 5px;
  background: #fff;
  margin: 0 2px; 
  animation: 0.9s animation_loading infinite;
}
.step_two{
  position: static;
  width: 3px;
  height: 1px;
  border-radius: 5px;
  background: #fff;
  animation: 0.8s animation_loading infinite;
}
.step_three{
  position: static;
  width: 3px;
  height: 1px;
  border-radius: 5px;
  background: #fff;
  margin: 0 2px; 
  animation: 0.6s animation_loading infinite;
}

@keyframes animation_loading {
  0%{height: 1px;}
  100%{height: 18px;}
}
</style>    
