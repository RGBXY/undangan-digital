<template>
  <div :class="[{ hidden: !kadoDat }]">
    <div class="flex flex-col items-center mt-5 font-oldstand gap-2">
      <h1 class="font-volk text-[28px]">Kirim Kado</h1>
      <p>Anda dapat mengirim kado ke: Jenny Kim - Jl Nangka Barat, Rt 02, Rw 01, Tandang, Tembalang, Kota Semarang</p>
      <button class="bg-gradient-to-b from-[#87CEEB] via-[#C2EAFB] to-[#87CEEB] py-2 text-sm px-4 rounded-xl font-bold">Salin Alamat</button>
    </div>
  </div>
</template>

<script>
import { useKadoStore } from "@/stores/kado";
import { computed } from "vue";
export default {
  setup() {
    const kado = useKadoStore();

    const kadoDat = computed(() => kado.kado);
    const cashlessDat = computed(() => kado.cashless);

    return {
      kadoDat,
      cashlessDat,
    };
  },
};
</script>
