<!-- File: src/App.vue -->
<template>
  <div>
    <Navbar :imageUrl="fotoProfil" />
    <router-view :fotoProfil="fotoProfil" @update-foto="updateFotoProfil" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";

// Gunakan fallback foto default
const defaultFoto = new URL("./assets/profile-default.png", import.meta.url)
  .href;
const fotoProfil = ref(defaultFoto);

// Cek localStorage
onMounted(() => {
  const simpanan = localStorage.getItem("fotoProfil");
  if (simpanan) {
    fotoProfil.value = simpanan;
  }
});

// Update jika user upload foto baru
function updateFotoProfil(fotoBaru) {
  fotoProfil.value = fotoBaru;
  localStorage.setItem("fotoProfil", fotoBaru);
}
</script>
