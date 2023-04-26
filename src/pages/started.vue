<template>
  <div class="started-container">
    <div class="text-container px-5">

        <span class="font_size_m font_w_800 primary_color typeing">
          Welcome To TASKHOLDER
        </span>

      <span class="font_size_s font_w_800 pt-1 primary_color wink">
        Taskholder is ready for you...
      </span>
      <span class="font_size_s font_w_100 pt-5 wink">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione
        aspernatur, cum, ipsam sequi sit voluptatem, eveniet obcaecati aliquid id impedit
        recusandae unde doloribus. Excepturi si...
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
    <div class="image-container">
      <img src="https://fellow.app/wp-content/uploads/2022/01/task-tools.jpg" alt="vector" />
    </div>
  </div>
</template>

<script setup>
import {onMonuted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

setTimeout(() => {
   router.push('/login')
} , 9000)
</script>

<style scoped lang="scss">
.started-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  animation: 10s started;
  .text-container {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .typeing {
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        animation: 6s typing;
        font-size: 1.6rem;
    }
    .wink{
        animation: 0.5s wink infinite;
    }
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

@keyframes started {
  0% {
    height: 0;
  }
  50%{
    height: 100vh;
  }
  100% {
    height: 0;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 315px;
  }
}

@keyframes wink {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
</style>
