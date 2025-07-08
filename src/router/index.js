import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";
import Beranda from "../views/Beranda.vue";
import Kategori from "../views/Kategori.vue";
import Pesanan from "../views/Pesanan.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Beranda },
  { path: "/kategori", component: Kategori },
  { path: "/pesanan", component: Pesanan },
  { path: "/profil", component: Profil, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
  { path: "/bantuan", component: () => import("../views/Bantuan.vue") },
  { path: "/beli", component: () => import("../views/Beli.vue") },

  // 💡 Halaman jual (tampilan awal, bukan edit produk)
  { path: "/jual", component: () => import("../views/Jual.vue") },

  // 💡 Form tambah produk
  {
    path: "/jual/tambah",
    component: () => import("../views/TambahBarang.vue"),
  },

  // 💡 Form edit produk berdasarkan ID
  {
    path: "/jual/edit/:id",
    component: () => import("../views/EditBarang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ⬇️ Global navigation guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
