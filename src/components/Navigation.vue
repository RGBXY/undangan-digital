<template>
  <div :class="['h-full w-full flex items-center gap-2', { 'justify-center': alamatDat, 'justify-end': kadoDat }]">
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/" class="ml-3 min-w-[22%] h-[85%] rounded-xl">
      <button class="flex w-full h-full flex-shrink-0 rounded-xl flex-col text-slate-500 text-[0.8rem] gap-1.5 justify-center items-center">
        <img v-if="isActive('/') || this.$route.path === '/'" src="../../public/assets/home_active.svg" alt="" />
        <img v-else src="../../public/assets/home.svg" alt="" />
        <p>Opening</p>
      </button>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB]" to="/mempelai" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] text-slate-500 gap-1.5 justify-center items-center">
      <img v-if="isActive('/mempelai')" src="../../public/assets/mempelai_active.svg" alt="" />
      <img v-else src="../../public/assets/mempelai.svg" alt="" />
      <p>Mempelai</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/tanggal" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] text-slate-500 gap-1.5 justify-center items-center">
      <img v-if="isActive('/tanggal')" src="../../public/assets/tanggal_active.svg" alt="" />
      <img v-else src="../../public/assets/tanggal.svg" alt="" />
      <p>Tanggal</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/alamat" class="min-w-[22%] h-[85%] rounded-xl">
      <button @click="alamatBtn" class="flex w-full h-full flex-shrink-0 rounded-xl flex-col text-slate-500 text-[0.8rem] gap-1.5 justify-center items-center">
        <img v-if="isActive('/alamat')" src="../../public/assets/alamat_active.svg" alt="" />
        <img v-else src="../../public/assets/alamat.svg" alt="" />
        <p>Alamat</p>
      </button>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/galeri" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/galeri')" src="../../public/assets/galeri_active.svg" alt="" />
      <img v-else src="../../public/assets/galeri.svg" alt="" />
      <p>Galeri</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/story" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/story')" src="../../public/assets/heart_nav_active.svg" alt="" />
      <img v-else src="../../public/assets/heart_nav.svg" alt="" />
      <p>Love Story</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/kado" class="min-w-[22%] h-[85%] rounded-xl">
      <button @click="kadoBtn" class="rounded-xl h-full w-full flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
        <img v-if="isActive('/kado')" src="../../public/assets/kado_nav_active.svg" alt="" />
        <img v-else src="../../public/assets/kado_nav.svg" alt="" />
        <p>Tanda Kasih</p>
      </button>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/ucapan" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/ucapan')" src="../../public/assets/ucapan_active.svg" alt="" />
      <img v-else src="../../public/assets/ucapan.svg" alt="" />
      <p>Ucapan</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/kutipan" class="min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/kutipan')" src="../../public/assets/kutipan_active.svg" alt="" />
      <img v-else src="../../public/assets/kutipan.svg" alt="" />
      <p>Kutipan</p>
    </RouterLink>
    <RouterLink exact-active-class="bg-[#87CEEB] text-black" to="/terimakasih" class="mr-3 min-w-[22%] h-[85%] rounded-xl flex flex-shrink-0 flex-col text-[0.8rem] gap-1.5 justify-center items-center">
      <img v-if="isActive('/terimakasih')" src="../../public/assets/terimakasih_active.svg" alt="" />
      <img v-else src="../../public/assets/terimakasih.svg" alt="" />
      <p>Terima Kasih</p>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useNavigationStore } from "@/stores/navigation";
import { computed } from "vue";

export default {
  components: {
    RouterLink,
  },
  setup() {
    const navFnc = useNavigationStore();

    const alamatDat = computed(() => navFnc.alamat);
    const kadoDat = computed(() => navFnc.kado);

    const alamatBtn = () => {
      navFnc.alamatBtn();
    };

    const kadoBtn = () => {
      navFnc.kadoBtn();
    };

    return {
      alamatDat,
      kadoDat,
      alamatBtn,
      kadoBtn,
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>
