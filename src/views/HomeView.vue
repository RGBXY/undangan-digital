<script setup>
import Frame from "../components/Frame.vue";
</script>

<template>
  <main>
    <Frame>
      <div class="h-full w-full z-50 flex flex-col justify-center items-center relative px-8">
        <img class="absolute top-14 w-[180px]" src="../../public/assets/initial.svg" alt="" />
        <div class="font-oldenburg text-sm flex flex-row gap-1 mb-5">
          <span class="animate__animated animate__fadeInDown">The</span>
          <span class="animate__animated animate__fadeInDown">Wedding</span>
          <span class="animate__animated animate__fadeInDown">Of</span>
        </div>
        <div class="flex flex-col animate__animated animate__zoomIn animate__delay-2s w-[60%] z-10 font-script text-7xl mb-6">
          <p>Kai</p>
          <p class="text-center text-3xl mb-4">&</p>
          <p class="text-end">Jennie</p>
        </div>
        <div class="animate__animated animate__fadeIn animate__delay-3s text-center">
          <p class="mb-12 font-oldenburg text-sm">25 . 05 . 25</p>
          <p class="text-sm font-oldenburg">Kepada Yth:</p>
          <p class="mb-4 text-sm font-oldenburg">Bapak/Ibu/Saudara/i</p>
          <p class="mb-8 text-xl font-oldenburg">Nama Tamu</p>
          <button class="bg-gradient-to-b from-[#87CEEB] via-[#C2EAFB] to-[#87CEEB] py-2 text-sm px-4 rounded-xl">Buka Undangan</button>
        </div>
      </div>
    </Frame>
  </main>
</template>

<style>
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}

.animate__animated.animate__fadeInDown {
  --animate-delay: 2s;
}
</style>
