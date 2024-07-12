<template>
  <div :class="[{ hidden: !cashlessDat }]">
    <div class="flex items-center mt-5 font-oldstand gap-3">
      <img class="w-[90px]" src="../../public/assets/bni.png" alt="" />
      <div>
        <div class="flex items-center gap-2">
          <p>12345678</p>
          <button class="bg-[#87CEEB] py-0.5 px-1 rounded-md">salin</button>
        </div>
        <p>BRI : Kim Jong In</p>
      </div>
    </div>
    <div class="flex items-center mt-5 font-oldstand gap-3">
      <img class="w-[90px]" src="../../public/assets/ovo.png" alt="" />
      <div>
        <div class="flex items-center gap-2">
          <p>12345678</p>
          <button class="bg-[#87CEEB] py-0.5 px-1 rounded-md">salin</button>
        </div>
        <p>OVO : Jenny Kimn</p>
      </div>
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
