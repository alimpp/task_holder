<template>
  <div class="base-input-container">
    <i
      class="dark_color bi"
      :class="{
        'bi-person': username,
        'bi-eye-slash': password,
        'bi-envelope-at': email,
        'bi-file-earmark-ruled': taskName,
        'bi-chat-left-text': description,
        'bi-coin' : coin
      }"
    ></i>
    <input
      ref="input"
      class="base-input font_size_s font_w_100"
      :class="{
        error: hasError,
        disbaled_input: disabledInput,
        base_input_dark_mode_theme: watchTheme === 'dark',
        base_input_light_mode_theme: watchTheme === 'light',
      }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :style="{ 'border-radius': borderRadius }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="pt-1 font_size_s font_w_100 danger_color" v-if="hasError">{{ textError }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";

const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

// Props for input icons
const username = computed(() => {
  if (props.icon === "username") {
    return true;
  }
});

const password = computed(() => {
  if (props.icon === "password") {
    return true;
  }
});

const taskName = computed(() => {
  if (props.icon === "taskName") {
    return true;
  }
});

const email = computed(() => {
  if (props.icon === "email") {
    return true;
  }
});

const coin = computed(() => {
  if (props.icon === "coin") {
    return true;
  }
});

const description = computed(() => {
  if(props.icon === "description") {
    return true 
  }
})

const disabledInput = computed(() => {
  if (props.disable == true) {
    return true;
  }
});

const props = defineProps({
  type: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: false,
  },
  textError: {
    type: String,
    default: '',
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
  borderRadius: {
    type: String,
    default: "",
    required: false,
  },
  disable: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  display: flex;
  flex-direction: column;
  .base-input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #cfcbcb;
    outline-color: none;
    outline: none;
    padding: 18px 27px;
    background: none;
  }
  i {
    position: absolute;
    z-index: 1;
    margin: 7px 6px;
    color: rgb(142, 142, 142);
  }
  .error {
    border: 1px solid #ff4d4f;
  }
  .disbaled_input {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
