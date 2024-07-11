<template>
  <div class="h-full w-full flex justify-evenly items-center" style="">
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/" class="w-[82.8px] h-[85%] flex-shrink-0 rounded-xl flex flex-col text-slate-500 text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/') || this.$route.path === '/'" src="../../public/assets/home_active.svg" alt="" />
      <img v-else src="../../public/assets/home.svg" alt="" />
      <p>Opening</p>
    </RouterLink>

    <RouterLink exact-active-class="bg-[#87CEEB]" to="/mempelai" class="w-[82.8px] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] text-slate-500 gap-1.5 justify-center items-center">
      <img v-if="isActive('/mempelai')" src="../../public/assets/mempelai_active.svg" alt="" />
      <img v-else src="../../public/assets/mempelai.svg" alt="" />
      <p>Mempelai</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/tanggal" class="w-[82.8px] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] text-slate-500 gap-1.5 justify-center items-center">
      <img v-if="isActive('/tanggal')" src="../../public/assets/tanggal_active.svg" alt="" />
      <img v-else src="../../public/assets/tanggal.svg" alt="" />
      <p>Tanggal</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/galeri" class="w-[82.8px] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/galeri')" src="../../public/assets/alamat_active.svg" alt="" />
      <img v-else src="../../public/assets/alamat.svg" alt="" />
      <p>Alamat</p>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>
