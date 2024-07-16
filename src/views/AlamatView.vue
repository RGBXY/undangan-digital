<script setup>
import Frame from "@/components/Frame.vue";
</script>

<template>
  <Frame>
    <div class="flex flex-col absolute z-50 justify-center text-center items-center h-full w-full px-8">
      <h1 class="animate__animated animate__fadeInDown font-script text-[40px]">Alamat Lokasi</h1>
      <div class="overflow-hidden w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3316688783225!2d110.40063927399808!3d-6.970142093030485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b12b5694f0f%3A0x72210ee40fee75ce!2sCAN%20Creative%20%7C%20Jasa%20Pembuatan%20Web%20dan%20Aplikasi%20Mobile%20Android%20IOS!5e0!3m2!1sid!2sid!4v1720682801124!5m2!1sid!2sid"
          class="animate__animated animate__fadeInDown w-full h-[280px] mb-3"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1 class="animate__animated animate__fadeInUp mb-4 text-[25px] font-bold font-quin">Kediaman Mempelai Wanita</h1>
      <p class="animate__animated animate__fadeInUp mb-3 text-[16px] font-volk">Jl Nangka Barat, Rt 02, Rw 01, Tandang, Tembalang, Kota Semarang</p>
      <a href="https://maps.app.goo.gl/gehh5reb3cmUQjPW7" class="animate__animated animate__fadeInUp bg-gradient-to-b text-[16px] font-oldenburg font-bold text-sm from-[#87CEEB] via-[#C2EAFB] to-[#87CEEB] py-2.5 px-4 rounded-xl"
        >Petunjuk ke Lokasi</a
      >
    </div>
  </Frame>
</template>
