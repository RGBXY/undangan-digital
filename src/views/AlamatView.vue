<script setup>
import Frame from "@/components/Frame.vue";
</script>

<template>
  <Frame>
    <div class="flex flex-col absolute z-50 justify-center text-center items-center h-full w-full px-8">
      <h1 class="animate__animated animate__fadeInDown font-script text-[50px]">Alamat Lokasi</h1>
      <div class="overflow-hidden w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.996376036836!2d110.37286527400799!3d-7.790207092229701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59fe401197e3%3A0xda03e751075eee35!2zU3Rhc2l1biBMZW1wdXlhbmdhbiAo6qax6qeA6qag6qax6qa26qaq6qa46qak6qeA6qaK6qap6qeA6qal6qa46qaq6qaU6qak6qeAKQ!5e0!3m2!1sid!2sid!4v1720680742099!5m2!1sid!2sid"
          class="animate__animated animate__fadeInDown w-full h-[340px] mb-3"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1 class="animate__animated animate__fadeInUp mb-4 text-[25px] font-bold font-quin">Kediaman Mempelai Wanita</h1>
      <p class="animate__animated animate__fadeInUp mb-3 text-[16px] font-volk">Jl Nangka Barat, Rt 02, Rw 01, Tandang, Tembalang, Kota Semarang</p>
      <a href="https://maps.app.goo.gl/wH82BVGYkLwhuRZ5A" class="animate__animated animate__fadeInUp bg-gradient-to-b text-[16px] font-oldenburg font-bold from-[#87CEEB] via-[#C2EAFB] to-[#87CEEB] p-3 px-4 rounded-xl">Petunjuk Lokasi</a>
    </div>
  </Frame>
</template>
