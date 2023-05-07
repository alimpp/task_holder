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
  animation: 2s card_animation;
}

@keyframes card_animation {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>
