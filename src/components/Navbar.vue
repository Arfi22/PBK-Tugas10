<template>
  <nav class="navbar">
    <div class="navbar-left">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9l1-5h16l1 5M4 9h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9zm5 4h6"
        />
      </svg>
      <span class="title">MarketKu</span>
    </div>

    <div class="navbar-right">
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">Beranda</router-link></li>
        <li>
          <router-link to="/kategori" class="nav-link">Kategori</router-link>
        </li>
        <li>
          <router-link to="/pesanan" class="nav-link">Pesanan</router-link>
        </li>
      </ul>

      <div
        v-if="userStore.isLoggedIn"
        class="profile-wrapper"
        @click="toggleDropdown"
      >
        <img
          :src="userStore.user?.foto || defaultFoto"
          class="profile-img"
          alt="Foto Profil"
        />
        <div class="dropdown" v-if="dropdownVisible">
          <p class="dropdown-name">{{ userStore.user?.nama || "Pengguna" }}</p>
          <router-link to="/profil" class="dropdown-link"
            >👤 Lihat Profil</router-link
          >
          <router-link to="/bantuan" class="dropdown-link"
            >❓ Bantuan</router-link
          >
          <router-link to="/jual" class="dropdown-link">🛒 Jual</router-link>
          <router-link to="/beli" class="dropdown-link">📦 Beli</router-link>
          <hr />
          <button class="dropdown-link" @click.stop="logout">🚪 Keluar</button>
        </div>
      </div>

      <router-link v-else to="/login" class="nav-link">Login</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const router = useRouter();
const dropdownVisible = ref(false);
const defaultFoto = "https://via.placeholder.com/40";

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

function logout() {
  userStore.logout();
  dropdownVisible.value = false;
  router.push("/login");
}
</script>
<style scoped>
.navbar {
  background-color: #1e40af;
  color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon {
  width: 28px;
  height: 28px;
  stroke: #93c5fd;
  margin-right: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #bfdbfe;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #93c5fd;
}

.profile-wrapper {
  position: relative;
  cursor: pointer;
}

.profile-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.profile-img:hover {
  transform: scale(1.05);
}

.dropdown {
  position: absolute;
  right: 0;
  top: 48px;
  background: white;
  color: black;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 999;
}

.dropdown-name {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 15px;
}

.dropdown-link {
  display: block;
  color: #1e40af;
  text-decoration: none;
  padding: 6px 0;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 14px;
}

.dropdown-link:hover {
  background-color: #f1f5f9;
}
</style>
