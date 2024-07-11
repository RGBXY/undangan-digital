<template>
  <Frame>
    <div class="flex flex-col absolute z-50 justify-center text-center items-center h-full w-full px-8">
      <h1 class="font-script text-[40px]">Save The Date</h1>
      <p class="text-[12px] mb-[13px] font-oldenburg">“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”</p>
      <p class="text-[12px] font-oldenburg mb-[12px]">(QS. Az Zariyat: 49)</p>
      <h1 class="animate__animated animate__flipInY animate__slow text-[30px] font-quin mb-[12px]">Akad Nikah</h1>
      <div id="halo" class="cssanimation zoomIna text-center font-volk text-[14px] mb-5">
        <p>Minggu, 25 Mei 2025</p>
        <p>09.00 - Selesai</p>
        <p>Kediaman mempelai wanita</p>
        <p>Jl Nangka Barat, Rt 02, Rw 01, Semarang</p>
      </div>
      <div class="animate__animated animate__zoomIn flex justify-center gap-3 mb-[14px]">
        <div class="bg-[#A3D8FF] text-[14px] font-quin rounded-xl flex flex-col items-center py-1 px-3 gap-1">
          <p>{{ timerStore.days }}</p>
          <p>Hari</p>
        </div>
        <div class="bg-[#A3D8FF] text-[14px] font-quin rounded-xl flex flex-col items-center py-1 px-3 gap-1">
          <p>{{ timerStore.hours }}</p>
          <p>Jam</p>
        </div>
        <div class="bg-[#A3D8FF] text-[14px] font-quin rounded-xl flex flex-col items-center py-1 px-3 gap-1">
          <p>{{ timerStore.minutes }}</p>
          <p>Menit</p>
        </div>
        <div class="bg-[#A3D8FF] text-[14px] font-quin rounded-xl flex flex-col items-center py-1 px-3 gap-1">
          <p>{{ timerStore.seconds }}</p>
          <p>Detik</p>
        </div>
      </div>
      <h1 class="animate__animated animate__flipInY animate__slow text-[30px] font-script mb-[10px]">Resepsi Pernikahan</h1>
      <div class="cssanimation zoomIna text-center font-volk text-[14px]">
        <p>Minggu, 25 Mei 2025</p>
        <p>09.00 - Selesai</p>
        <p>Kediaman mempelai wanita</p>
        <p>Jl Nangka Barat, Rt 02, Rw 01, Semarang</p>
      </div>
    </div>
  </Frame>
</template>

<script>
import Frame from "../components/Frame.vue";
import { useTimerStore } from "@/stores/timer";
import { onMounted, onUnmounted } from "vue";

export default {
  components: {
    Frame,
  },
  setup() {
    const timerStore = useTimerStore();

    onMounted(() => {
      timerStore.startTimer();
    });

    onUnmounted(() => {
      timerStore.stopTimer();
    });

    return {
      timerStore,
    };
  },
};
</script>

<style>
.zoomIna {
  animation-name: zoomIna;
}
@keyframes zoomIna {
  from {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
