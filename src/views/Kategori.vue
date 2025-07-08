<template>
  <div class="kategori-page">
    <!-- Sidebar Kategori -->
    <aside class="sidebar">
      <h3>Kategori</h3>
      <ul>
        <li @click="filterKategori('Kendaraan')">🚗 Kendaraan</li>
        <li @click="filterKategori('Sewa Properti')">🏠 Sewa Properti</li>
        <li @click="filterKategori('Alat Kantor')">🖨️ Alat Kantor</li>
        <li @click="filterKategori('Alat Musik')">🎸 Alat Musik</li>
        <li @click="filterKategori('Barang Gratis')">🎁 Barang Gratis</li>
        <li @click="filterKategori('Barang Rumah Tangga')">
          🏡 Barang Rumah Tangga
        </li>
        <li @click="filterKategori('Elektronik')">💻 Elektronik</li>
        <li @click="filterKategori('Hiburan')">🎮 Hiburan</li>
        <li @click="filterKategori('Hobi')">⚽ Hobi</li>
        <li @click="filterKategori('Iklan Baris')">📢 Iklan Baris</li>
        <li @click="filterKategori('Jual Rumah')">🏘️ Jual Rumah</li>
        <li @click="filterKategori('Kebutuhan Hewan Peliharaan')">
          🐾 Kebutuhan Hewan Peliharaan
        </li>
        <li @click="filterKategori('Keluarga')">👨‍👩‍👧‍👦 Keluarga</li>
      </ul>
    </aside>

    <!-- Daftar Produk -->
    <section class="produk-list">
      <h2>Pilihan berdasarkan kategori: {{ selectedKategori || "Semua" }}</h2>
      <div class="produk-grid">
        <div class="produk" v-for="produk in filteredProduk" :key="produk.id">
          <img :src="produk.gambar" alt="gambar produk" class="produk-img" />
          <div class="produk-info">
            <h3 class="produk-nama">{{ produk.nama }}</h3>
            <p class="produk-harga">{{ produk.harga }}</p>
            <span class="produk-kategori">{{ produk.kategori }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Ps5 from "../assets/Ps5.jpg";
import Gitar from "../assets/Gitar.jpg";
import Rumah from "../assets/Rumah.jpg";
import Drone from "../assets/Drone.jpg";
import Printer from "../assets/Printer.jpg";
import KandangKucing from "../assets/KandangKucing.jpg";
import SepedaBMX from "../assets/SepedaBMX.jpg";
import Kulkas from "../assets/Kulkas.jpg";
import TV from "../assets/TvLED.jpg";
import Mainan from "../assets/Mainan.jpg";

const selectedKategori = ref("");

const produkStatic = [
  {
    id: 1,
    nama: "PS 5",
    harga: "Rp7.500.000",
    kategori: "Elektronik",
    gambar: Ps5,
  },
  {
    id: 2,
    nama: "Gitar Akustik",
    harga: "Rp100.000",
    kategori: "Alat Musik",
    gambar: Gitar,
  },
  {
    id: 3,
    nama: "Rumah Kontrakan",
    harga: "Rp400 rb",
    kategori: "Jual Rumah",
    gambar: Rumah,
  },
  {
    id: 4,
    nama: "Drone DJI Spark",
    harga: "Rp1.300.000",
    kategori: "Elektronik",
    gambar: Drone,
  },
  {
    id: 5,
    nama: "Printer Epson",
    harga: "Rp850.000",
    kategori: "Alat Kantor",
    gambar: Printer,
  },
  {
    id: 6,
    nama: "Kandang Kucing",
    harga: "Rp250.000",
    kategori: "Kebutuhan Hewan Peliharaan",
    gambar: KandangKucing,
  },
  {
    id: 7,
    nama: "Sepeda BMX",
    harga: "Rp600.000",
    kategori: "Hobi",
    gambar: SepedaBMX,
  },
  {
    id: 8,
    nama: "Kulkas 2 Pintu",
    harga: "Rp600.000",
    kategori: "Elektronik",
    gambar: Kulkas,
  },
  {
    id: 9,
    nama: "TV LED 32 inch",
    harga: "Rp1.200.000",
    kategori: "Elektronik",
    gambar: TV,
  },
  {
    id: 10,
    nama: "Mainan Anak Edukasi",
    harga: "Rp50.000",
    kategori: "Keluarga",
    gambar: Mainan,
  },
];

const produkAPI = ref([]);
const produkGabungan = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/produk");
    produkAPI.value = res.data;
    produkGabungan.value = [...produkStatic, ...produkAPI.value];
  } catch (err) {
    console.error("Gagal mengambil produk dari API:", err);
    produkGabungan.value = [...produkStatic];
  }
});

const filteredProduk = computed(() =>
  selectedKategori.value
    ? produkGabungan.value.filter((p) => p.kategori === selectedKategori.value)
    : produkGabungan.value
);

function filterKategori(kategori) {
  selectedKategori.value = kategori;
}
</script>

<style scoped>
.kategori-page {
  display: flex;
  gap: 24px;
  padding: 20px;
}

.sidebar {
  width: 240px;
  background: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
}

.sidebar h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
}

.sidebar li:hover {
  background-color: #dbeafe;
  border-radius: 6px;
}

.produk-list {
  flex: 1;
}

.produk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.produk {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.produk-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.produk-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.produk-nama {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #1e293b;
  text-align: center;
}

.produk-harga {
  font-size: 13px;
  font-weight: 500;
  color: #10b981;
  margin: 0;
}

.produk-kategori {
  font-size: 12px;
  color: #6b7280;
}
</style>
