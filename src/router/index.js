import { createRouter, createWebHistory } from "vue-router";
import Beranda from "../views/Beranda.vue";
import Pengaturan from "../views/Pengaturan.vue";
import Pesanan from "../views/Pesanan.vue";
import Produk from "../views/Produk.vue";
import Profil from "../views/Profil.vue";

const routes = [
  { path: "/", name: "Beranda", component: Beranda },
  { path: "/pengaturan", name: "Pengaturan", component: Pengaturan },
  { path: "/pesanan", name: "Pesanan", component: Pesanan },
  { path: "/produk", name: "Produk", component: Produk },
  { path: "/profil", name: "Profil", component: Profil },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
