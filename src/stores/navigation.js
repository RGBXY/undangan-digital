import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navFnc", {
  state: () => ({
    alamat: false,
    kado: false,
  }),
  actions: {
    alamatBtn() {
      this.alamat = !this.alamat;

      if (this.kado === true) {
        this.kado = false;
      }
    },
    kadoBtn() {
      this.kado = !this.kado;

      if (this.alamat === true) {
        this.alamat = false;
      } else {
        this.alamat = true;
      }
    },
  },
});
