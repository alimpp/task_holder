<template>
  <div class="started-container">
    <div class="text-container px-5">
        <router-view></router-view>
    </div>
    <div class="image-container">
      <img
        src="https://fellow.app/wp-content/uploads/2022/01/task-tools.jpg"
        alt="vector"
      />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.started-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  .text-container {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .image-container {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      border-radius: 200px 0 0 200px;
    }
  }
}
</style>