import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MempelaiView from "../views/MempelaiView.vue";
import TanggalView from "../views/TanggalView.vue";
import AlamatView from "../views/AlamatView.vue";
import GaleriView from "../views/GaleriView.vue";

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
  ],
});

export default router;
