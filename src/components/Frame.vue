<template>
  <div class="w-full h-[100svh] flex justify-center items-center bg-[#87CEEB]">
    <div class="w-[60vh] h-full relative">
      <div class="relative h-[90%] overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: linear-gradient(rgba(253, 253, 253, 0.9), rgba(255, 255, 255, 0.5)), url(../../public/assets/bg.jpeg)">
        <slot></slot>

        <img class="w-[30%] cssanimation zoomIn absolute top-0 left-0" src="../../public/assets/tl.svg" alt="" />
        <img class="w-[30%] cssanimation zoomIn absolute top-0 right-0" src="../../public/assets/tr.svg" alt="" />
        <img class="w-[30%] cssanimation zoomIn absolute bottom-0" src="../../public/assets/bl.svg" alt="" />
        <img class="w-[30%] cssanimation zoomIn absolute bottom-0 right-0" src="../../public/assets/br.svg" alt="" />
      </div>
      <div class="h-[10%] overflow-auto w-full bg-blue-50">
        <Navigation />
      </div>
    </div>
  </div>
</template>
<script setup>
import Navigation from "../components/Navigation.vue";
</script>

<style scoped>
.zoomIn {
  animation-name: zoomIn;
}
@keyframes zoomIn {
  from {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
