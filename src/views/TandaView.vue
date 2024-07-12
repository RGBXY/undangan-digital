<template>
  <Frame>
    <div class="flex flex-col z-50 text-center absolute justify-center items-center h-full w-full px-8">
      <h1 class="animate__animated animate__fadeInDown font-script text-[40px] mb-5">Tanda Kasih</h1>
      <p class="animate__animated animate__fadeInDown text-[16px] font-oldstand">
        Kehadiran anda merupakan hadiah terbaik yang bisa kami harapkan. Namun jika anda bermaksud untuk mengirimkan hadiah pernikahan lain. silahkan ketuk tombol dibawah ini.
      </p>
      <div class="mt-7 flex gap-5">
        <button @click="cashlessBtn" class="animate__animated animate__fadeInUp bg-[#87CEEB] flex justify-center items-center py-1.5 px-5 text-[14px] rounded-full gap-2 font-oldstand">
          <img class="w-5" src="../../public/assets/kado.svg" alt="" />
          <span class="mt-1">Cashless</span>
        </button>
        <button @click="kadoBtn" class="animate__animated animate__fadeInUp bg-[#87CEEB] flex justify-center items-center py-1.5 px-5 text-[14px] rounded-full gap-2 font-oldstand">
          <img class="w-5" src="../../public/assets/kado.svg" alt="" />
          <span class="mt-1">Kirim Kado</span>
        </button>
      </div>
      <button @click="" class="animate__animated animate__fadeInUp bg-[#87CEEB] mt-4 py-1.5 px-5 rounded-full font-oldstand text-[14px]">Konfirmasi Bukti Tf</button>
      <Cashless />
      <Kado />
    </div>
  </Frame>
</template>

<script>
import Frame from "@/components/Frame.vue";
import Cashless from "@/components/Cashless.vue";
import { useKadoStore } from "@/stores/kado";
import Kado from "@/components/Kado.vue";
export default {
  components: {
    Frame,
    Cashless,
    Kado,
  },
  setup() {
    const kado = useKadoStore();

    const cashlessBtn = () => {
      kado.cashlessBtn();
    };

    const kadoBtn = () => {
      kado.kadoBtn();
    };

    return {
      cashlessBtn,
      kadoBtn,
    };
  },
};
</script>
