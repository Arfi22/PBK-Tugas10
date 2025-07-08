// src/stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    nama: "",
    foto: new URL("../assets/profile-default.png", import.meta.url).href,
  }),
  actions: {
    login(nama, foto) {
      this.isLoggedIn = true;
      this.nama = nama;
      this.foto =
        foto || new URL("../assets/profile-default.png", import.meta.url).href;
      localStorage.setItem("auth", JSON.stringify(this.$state));
    },
    logout() {
      this.isLoggedIn = false;
      this.nama = "";
      this.foto = new URL(
        "../assets/profile-default.png",
        import.meta.url
      ).href;
      localStorage.removeItem("auth");
    },
    restore() {
      const saved = localStorage.getItem("auth");
      if (saved) Object.assign(this, JSON.parse(saved));
    },
  },
});
