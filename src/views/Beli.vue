<template>
  <div class="beli-page">
    <!-- Sidebar kiri -->
    <aside class="sidebar">
      <h2>MarketKu</h2>
      <h3>Beli</h3>
      <ul class="menu">
        <li>🕒 Aktivitas terbaru</li>
        <li>🔔 Pemberitahuan Anda</li>
        <li>👤 Profil Saya</li>
      </ul>
      <button class="btn-jual" @click="goToJual">+ Jual barang</button>
    </aside>

    <!-- Konten utama -->
    <main class="content">
      <div class="produk-grid">
        <div class="produk-card" v-for="produk in produkList" :key="produk.id">
          <img :src="produk.gambar" class="produk-img" />
          <div class="produk-info">
            <h4>{{ produk.nama }}</h4>
            <p>{{ produk.harga }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import Ps5 from "../assets/Ps5.jpg";
import PocoF6 from "../assets/PocoF6.jpg";
import Ps4 from "../assets/Ps4.jpg";
import StickPs5 from "../assets/StickPs5.jpg";

const produkList = [
  {
    id: 1,
    nama: "PS 5",
    harga: "Rp4.650.000",
    gambar: Ps5,
  },
  {
    id: 2,
    nama: "Poco f6 5g 12/512 GB",
    harga: "Rp4.150.000",
    gambar: PocoF6,
  },
  {
    id: 3,
    nama: "Ps 4 Pro 1 TB",
    harga: "Rp4.299.000",
    gambar: Ps4,
  },
  {
    id: 4,
    nama: "stick PS 5",
    harga: "Rp2.300.000",
    gambar: StickPs5,
  },
];

function goToJual() {
  router.push("/jual");
}
</script>

<style scoped>
.beli-page {
  display: flex;
  background: #f0f2f5;
  min-height: 100vh;
}

/* Sidebar kiri */
.sidebar {
  width: 220px;
  padding: 20px;
  background: white;
  border-right: 1px solid #ddd;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.menu li {
  padding: 8px 0;
  cursor: pointer;
}

.btn-jual {
  background: #e7f3ff;
  border: none;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  color: #1877f2;
  font-weight: bold;
  margin-top: 10px;
}

/* Konten utama */
.content {
  flex: 1;
  padding: 20px;
}

.produk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.produk-card {
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.produk-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 12px;
  border-radius: 8px;
}

.produk-info h4 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #1f2937;
}

.produk-info p {
  margin: 6px 0 0;
  color: #4b5563;
  font-size: 14px;
}
</style>
