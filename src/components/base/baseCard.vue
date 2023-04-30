<template>
  <div
    class="base-card"
  >
    <slot name="cardContent"></slot>
  </div>
</template>

<style scoped lang="scss">
.base-card {
  width: 100%;
  padding: 0px 10px;
  border-bottom: 1px solid #eaeaea;
}
</style>
