<template>
  <div>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="$i18n.locale"
    >
      <option value="en">
        <h6>(EN)</h6>
        English
      </option>
      <option value="fa">
        <h6>(FA)</h6>
        Persian
      </option>
    </select>
  </div>
</template>
