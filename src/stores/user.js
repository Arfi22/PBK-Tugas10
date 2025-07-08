import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    async login({ email, password }) {
      try {
        const res = await axios.get(
          `http://localhost:3000/users?email=${email}`
        );
        const users = res.data;

        if (users.length === 0) {
          throw new Error("Email belum terdaftar.");
        }

        const user = users[0];

        if (user.password !== password) {
          throw new Error("Password salah.");
        }

        this.user = user;
        this.isLoggedIn = true;
      } catch (err) {
        console.error("Login error:", err.message);
        throw err;
      }
    },

    async register(newUser) {
      // Jika user tidak mengisi alamat, bisa diset default atau kosong
      const payload = {
        nama: newUser.nama,
        email: newUser.email,
        password: newUser.password,
        alamat: newUser.alamat || "",
        foto: newUser.foto || "",
      };

      const res = await axios.post("http://localhost:3000/users", payload);
      this.user = res.data;
      this.isLoggedIn = true;
    },

    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },

    async updateProfile(updatedData) {
      const res = await axios.put(
        `http://localhost:3000/users/${this.user.id}`,
        updatedData
      );
      this.user = res.data;
    },
  },
});
