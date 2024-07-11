<template>
  <Frame>
    <div class="flex flex-col z-50 text-center absolute justify-center items-center h-full w-full px-8">
      <h1 class="animate__animated animate__fadeInDown font-script text-[50px] mb-3">Galeri</h1>
      <p class="text-[12px] mb-[24px] font-oldenburg animate__animated animate__fadeInDown">Tidak ada yang spesial dalam cerita kami. Namun, kami merasa beruntung memiliki satu sama lain. </p>
      <div class="grid grid-cols-2 rounded-xl gap-2">
        <div class="animate__animated animate__fadeInLeft row-span-2 h-full w-32 rounded-tl-xl overflow-hidden"><img class="h-full object-cover" src="../../public/assets/galery-1.jpeg" alt="" /></div>
        <div class="animate__animated animate__fadeInDown h-[100px] w-32 rounded-tr-xl overflow-hidden"><img class="h-full w-full object-cover" src="../../public/assets/galery-2.jpeg" alt="" /></div>
        <div class="animate__animated animate__fadeInUp h-[100px] w-32"><img class="h-full w-full object-cover" src="../../public/assets/galery-3.jpeg" alt="" /></div>
        <div class="animate__animated animate__fadeInDown animate__delay-1s h-[100px] w-32"><img class="h-full w-full object-cover" src="../../public/assets/galery-4.jpeg" alt="" /></div>
        <div class="animate__animated animate__fadeInUp animate__delay-2s h-[100px] w-32 rounded-bl-xl overflow-hidden"><img class="h-full w-full object-cover" src="../../public/assets/galery-5.jpeg" alt="" /></div>
        <div class="animate__animated animate__fadeInRight animate__delay-2s h-full w-32 row-span-2 col-start-2 row-start-3 rounded-br-xl overflow-hidden">
          <img class="h-full w-full object-cover" src="../../public/assets/galery-6.jpeg" alt="" />
        </div>
      </div>
    </div>
  </Frame>
</template>
<script setup>
import Frame from "@/components/Frame.vue";
</script>
