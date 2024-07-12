<template>
  <Frame>
    <div class="flex flex-col absolute z-50 justify-center text-center items-center h-full overflow-y-scroll w-full px-8">
      <div class="h-[80%]">
        <h1 class="animate__animated animate__fadeInDown font-script text-[40px]">Love Story</h1>
        <p class="text-[12px] mb-[24px] font-oldenburg animate__animated animate__fadeInDown">Langkah demi langkah kami hingga akhirnya akan berlabuh di pelaminan.  </p>
        <div class="flex justify-center relative mb-10">
          <div class="animate__animated animate__fadeIn bg-black w-[1px] h-full absolute left-5"></div>
          <div class="animate__animated animate__fadeIn bg-[#C1E5FF] absolute border-[3px] border-slate-400 rounded-full py-[4px] px-[4px] left-2 -top-0.5">
            <img class="w-3 h-3" src="../../public/assets/heart.svg" alt="" />
          </div>
          <div class="animate__animated animate__fadeIn bg-[#C1E5FF] absolute border-[3px] border-slate-400 rounded-full py-[4px] px-[4px] left-2 bottom-[35.5rem]">
            <img class="w-3 h-3" src="../../public/assets/heart.svg" alt="" />
          </div>
          <div class="animate__animated animate__fadeIn bg-[#C1E5FF] absolute border-[3px] border-slate-400 rounded-full py-[4px] px-[4px] left-2 bottom-64">
            <img class="w-3 h-3" src="../../public/assets/heart.svg" alt="" />
          </div>
          <div class="w-full flex flex-col gap-7 items-end">
            <div class="animate__animated animate__fadeInLeft w-[80%] text-start">
              <h1 class="font-oldenburg mb-3">18 Oktober 2023</h1>
              <div class="bg-[#C1E5FF] rounded-lg py-2 px-3">
                <h1 class="font-oldenburg text-[14px] mb-3">Awal Bertemu</h1>
                <img class="rounded-lg mb-2 h-[120px] w-full object-cover" src="../../public/assets/story-1.png" alt="" />
                <p class="text-[11px] font-oldenburg">Berawal dari teman kuliah di Oxford University, kami pernah bertemu dalam kelas yang sama. Berjalannya waktu kami saling mengenal dan mulai tertarik satu sama lain.</p>
              </div>
            </div>

            <div class="animate__animated animate__fadeInLeft animate__delay-1s w-[80%] text-start">
              <h1 class="font-oldenburg mb-3">02 Februari 2025</h1>
              <div class="bg-[#C1E5FF] rounded-lg py-2 px-3">
                <h1 class="font-oldenburg text-[14px] mb-3">Lamaran</h1>
                <img class="rounded-lg mb-2 h-[120px] w-full object-cover" src="../../public/assets/story-2.png" alt="" />
                <p class="text-[11px] font-oldenburg">Kami mengikat hubungan kami ke jenjang lebih serius, melalui lamaran. Alhamdulillah perjalanan ini sampai pada tujuan yang sebenarnya.</p>
              </div>
            </div>

            <div class="animate__animated animate__fadeInLeft animate__delay-2s w-[80%] text-start mb-">
              <h1 class="font-oldenburg mb-3">25 Mei 2025</h1>
              <div class="bg-[#C1E5FF] rounded-lg py-2 px-3">
                <h1 class="font-oldenburg text-[14px] mb-3">Resepsi Pernikahan</h1>
                <img class="rounded-lg mb-2 h-[120px] w-full object-cover" src="../../public/assets/galery-2.jpeg" alt="" />
                <p class="text-[11px] font-oldenburg">Kami sudah mempersiapkan segala keperluan untuk pernikahan kami yang nantinya akan dilaksanakan pada 25 Mei 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Frame>
</template>
<script setup>
import Frame from "@/components/Frame.vue";
</script>
