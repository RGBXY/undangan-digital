<template>
  <Frame>
    <div class="flex flex-col absolute z-50 overflow-y-scroll justify-center text-center items-center h-full w-full px-8">
      <div class="h-[80%] w-full">
        <h1 class="animate__animated animate__fadeInDown font-script text-[40px] mb-2">Doa dan Ucapan</h1>
        <p class="animate__animated animate__fadeInDown text-[12px] mb-[24px] font-oldenburg animate__animated animate__fadeInDown">Berikan Ucapan & Doa Restu  </p>
        <div class="w-full font-oldenburg">
          <form class="animate__animated animate__fadeIn" @submit.prevent="tambah">
            <div class="flex flex-col text-start mb-4">
              <label class="mb-1.5" for="nama">Nama</label>
              <input v-model="newNama" class="p-2 text-[12px] rounded-lg border-[1px] border-slate-200" type="text" id="nama" placeholder="Masukan Nama Anda" />
            </div>
            <div class="flex flex-col text-start mb-4">
              <label class="mb-1.5" for="ucapan">Ucapan</label>
              <textarea v-model="newUcapan" class="rounded-lg text-[12px] p-2 border-[1px] border-slate-200" id="ucapan" cols="10" rows="7" placeholder="Beri ucapan manis dan doa untuk mempelai"></textarea>
            </div>
            <div class="flex flex-col text-start">
              <label class="mb-1.5" for="kehadiran">Konfirmasi Kehadiran</label>
              <select v-model="newAbsen" class="p-2 text-[12px] rounded-lg border-[1px] border-slate-200 text-black" type="text" id="kehadiran">
                <option class="p-2" value="hadir" selected>Hadir</option>
                <option class="p-2" value="berhalangan">Berhalangan</option>
              </select>
            </div>
            <button class="bg-gradient-to-b from-[#87CEEB] via-[#C2EAFB] to-[#87CEEB] py-2 text-sm px-4 w-full rounded-lg mt-4">Kirim</button>
          </form>

          <div class="animate__animated animate__zoomIn animate__delay-1s mt-4 text-sm" v-for="ucapan in ucapans">
            <div class="bg-[#C1E5FF] rounded-xl px-3 py-2 text-start" :key="ucapan.id">
              <div class="flex items-center gap-4 mb-2">
                <p>{{ ucapan.nama }}</p>
                <div v-if="ucapan.absen === 'hadir'" class="flex items-center gap-1 text-green-500">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p class="text-[12px]">{{ ucapan.absen }}</p>
                </div>
                <div v-else class="flex items-center gap-1 text-red-500">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p class="text-[12px]">{{ ucapan.absen }}</p>
                </div>
              </div>
              <p class="mb-2">{{ ucapan.ucapan }}</p>
              <p class="text-[12px]">3 hari yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Frame>
</template>

<script setup>
import Frame from "@/components/Frame.vue";
import { ref } from "vue";

let id = 0;
const newNama = ref("");
const newUcapan = ref("");
const newAbsen = ref("");
const ucapans = ref([
  {
    id: id++,
    nama: "budiono",
    ucapan: "Keren udah nikah, padahal utang 20rb belum dibayar",
    absen: "hadir",
  },
  {
    id: id++,
    nama: "Masa lalu",
    ucapan: "Walau kita pernah bersama, tapi udah paling bener kayak gini.",
    absen: "berhalangan",
  },
]);

function tambah() {
  ucapans.value.push({ id: id++, nama: newNama.value, ucapan: newUcapan.value, absen: newAbsen.value });
  newNama.value = "";
  newUcapan.value = "";
  newAbsen.value = "";
}
</script>
