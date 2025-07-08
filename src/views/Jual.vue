<template>
  <div class="jual-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">📦 Jual</h2>
      <router-link to="/jual/tambah" class="btn-jual"
        >+ Jual barang</router-link
      >
      <ul class="menu">
        <li>📋 Dasbor penjual</li>
        <li>💬 Tawaran Anda</li>
        <li>📢 Pengumuman</li>
        <li>📈 Insight</li>
        <li @click="$router.push('/profil')">👤 Profil Saya</li>
      </ul>
    </aside>

    <!-- Konten utama -->
    <main class="main-content">
      <div v-if="produkList.length === 0" class="tawaran-kosong">
        <p>Jika mulai menjual, tawaran Anda akan ditampilkan di sini.</p>
        <router-link to="/jual/tambah" class="btn-jual"
          >+ Jual barang</router-link
        >
      </div>

      <div v-else>
        <h2 class="judul-produk">Produk Anda</h2>
        <div class="produk-list">
          <div v-for="item in produkList" :key="item.id" class="produk-item">
            <img :src="item.gambar" class="produk-img" />
            <div class="produk-info">
              <h4 class="produk-nama">{{ item.nama }}</h4>
              <p class="produk-harga">{{ item.harga }}</p>
              <p class="produk-kategori">{{ item.kategori }}</p>
              <div class="aksi">
                <router-link :to="`/jual/edit/${item.id}`">
                  <button class="btn-edit">Edit</button>
                </router-link>
                <button class="btn-hapus" @click="hapusProduk(item.id)">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const produkList = ref([]);

async function loadProduk() {
  const res = await axios.get("http://localhost:3000/produk");
  produkList.value = res.data;
}

async function hapusProduk(id) {
  if (confirm("Yakin ingin menghapus produk ini?")) {
    await axios.delete(`http://localhost:3000/produk/${id}`);
    await loadProduk();
  }
}

onMounted(() => {
  loadProduk();
});
</script>

<style scoped>
.jual-page {
  display: flex;
  background: #f9fafb;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
}

.sidebar {
  width: 240px;
  padding: 24px;
  background: white;
  border-right: 1px solid #e5e7eb;
}

.sidebar-title {
  font-size: 20px;
  color: #1e3a8a;
  margin-bottom: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.menu li {
  padding: 10px 0;
  cursor: pointer;
  color: #1e293b;
  font-size: 15px;
}

.menu li:hover {
  color: #3b82f6;
}

.btn-jual {
  background: #3b82f6;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  text-decoration: none;
}

.main-content {
  flex: 1;
  padding: 30px;
}

.judul-produk {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1e293b;
}

.tawaran-kosong {
  text-align: center;
  margin-top: 100px;
  font-size: 16px;
  color: #6b7280;
}

.produk-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.produk-item {
  background: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.produk-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.produk-info {
  text-align: center;
}

.produk-nama {
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 6px;
}

.produk-harga {
  color: #10b981;
  font-weight: 500;
  margin: 0;
}

.produk-kategori {
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}

.aksi {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}

.btn-edit {
  background: #3b82f6;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  border: none;
  cursor: pointer;
}

.btn-hapus {
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  border: none;
  cursor: pointer;
}
</style>
