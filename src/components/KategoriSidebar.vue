<template>
  <div class="sidebar">
    <h3>Kategori</h3>
    <ul>
      <li v-for="item in kategori" :key="item.nama">
        <span class="icon">{{ item.icon }}</span>
        <span>{{ item.nama }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const kategori = [
  { icon: "🚗", nama: "Kendaraan" },
  { icon: "🏠", nama: "Sewa Properti" },
  { icon: "🖇️", nama: "Alat Kantor" },
  { icon: "🎸", nama: "Alat Musik" },
  { icon: "🎁", nama: "Barang Gratis" },
  { icon: "🏡", nama: "Barang Rumah Tangga" },
  { icon: "💻", nama: "Elektronik" },
  { icon: "🎮", nama: "Hiburan" },
  { icon: "🏓", nama: "Hobi" },
  { icon: "📢", nama: "Iklan Baris" },
  { icon: "🏘️", nama: "Jual Rumah" },
  { icon: "🐶", nama: "Kebutuhan Hewan Peliharaan" },
  { icon: "👨‍👩‍👧‍👦", nama: "Keluarga" },
];
</script>

<style scoped>
.sidebar {
  width: 230px;
  padding: 20px;
  border-right: 1px solid #ccc;
  background-color: #f5f5f5;
  height: 100vh;
  position: sticky;
  top: 0;
}
ul {
  padding: 0;
  list-style: none;
}
li {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
}
.icon {
  width: 25px;
  text-align: center;
  font-size: 18px;
}
</style>
