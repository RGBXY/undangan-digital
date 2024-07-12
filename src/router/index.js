import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MempelaiView from "../views/MempelaiView.vue";
import TanggalView from "../views/TanggalView.vue";
import AlamatView from "../views/AlamatView.vue";
import GaleriView from "../views/GaleriView.vue";
import StoryView from "../views/StoryView.vue";
import TandaView from "../views/TandaView.vue";
import UcapanView from "../views/UcapanView.vue";
import KutipanView from "../views/KutipanView.vue";
import TerimakasihView from "../views/TerimakasihView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mempelai",
      name: "mempelai",
      component: MempelaiView,
    },
    {
      path: "/tanggal",
      name: "tanggal",
      component: TanggalView,
    },
    {
      path: "/alamat",
      name: "alamat",
      component: AlamatView,
    },
    {
      path: "/galeri",
      name: "galeri",
      component: GaleriView,
    },
    {
      path: "/story",
      name: "story",
      component: StoryView,
    },
    {
      path: "/kado",
      name: "kado",
      component: TandaView,
    },
    {
      path: "/ucapan",
      name: "ucapan",
      component: UcapanView,
    },
    {
      path: "/kutipan",
      name: "kutipan",
      component: KutipanView,
    },
    {
      path: "/terimakasih",
      name: "terimakasih",
      component: TerimakasihView,
    },
  ],
});

export default router;
