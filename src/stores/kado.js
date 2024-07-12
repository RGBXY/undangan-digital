import { defineStore } from "pinia";

export const useKadoStore = defineStore("kado", {
  state: () => ({
    kado: false,
    cashless: false,
  }),
  actions: {
    cashlessBtn() {
      this.cashless = !this.cashless;

      if (this.kado === true) {
        this.kado = false;
      }
    },
    kadoBtn() {
      this.kado = !this.kado;

      if (this.cashless === true) {
        this.cashless = false;
      }
    },
  },
});
