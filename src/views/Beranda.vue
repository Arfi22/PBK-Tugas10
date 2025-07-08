<template>
  <div class="beranda">
    <h2 class="judul">Pilihan hari ini</h2>
    <div class="produk-grid">
      <div class="produk-card" v-for="item in allProduk" :key="item.id">
        <img :src="item.gambar" alt="Produk" class="produk-img" />
        <div class="produk-info">
          <p class="harga">{{ item.harga }}</p>
          <p class="nama">{{ item.nama }}</p>
          <p class="lokasi">{{ item.lokasi }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Powerbank from "../assets/Powerbank.jpg";
import PocoF6 from "../assets/PocoF6.jpg";
import ShockAerox from "../assets/ShockAerox.jpg";
import Fortuner from "../assets/Fortuner.jpg";
import Drone from "../assets/Drone.jpg";
import Gitar from "../assets/Gitar.jpg";
import Ps5 from "../assets/Ps5.jpg";
import Sepeda from "../assets/Sepeda.jpg";
import Ip16 from "../assets/Iphone16.jpg";
import Rumah from "../assets/Rumah.jpg";

const router = useRouter();

const produkList = [
  {
    id: 101,
    nama: "powerbank",
    harga: "Rp100.000",
    lokasi: "Pekanbaru",
    gambar: Powerbank,
  },
  {
    id: 102,
    nama: "Poco F6 5G 8/256GB",
    harga: "Rp3.700.000",
    lokasi: "Pekanbaru",
    gambar: PocoF6,
  },
  {
    id: 103,
    nama: "shock depan ktc aerox",
    harga: "Rp500.000",
    lokasi: "Pekanbaru",
    gambar: ShockAerox,
  },
  {
    id: 104,
    nama: "Mobil Fortuner 2015",
    harga: "Rp70.000.000",
    lokasi: "Pekanbaru",
    gambar: Fortuner,
  },
  {
    id: 105,
    nama: "Drone dji spark",
    harga: "Rp1.300.000",
    lokasi: "Pekanbaru",
    gambar: Drone,
  },
  {
    id: 106,
    nama: "Gitar akustik TGM",
    harga: "Rp100.000",
    lokasi: "Kubang, Riau",
    gambar: Gitar,
  },
  {
    id: 107,
    nama: "PS 5",
    harga: "Rp7.500.000",
    lokasi: "Pekanbaru",
    gambar: Ps5,
  },
  {
    id: 108,
    nama: "Sepeda Polygon",
    harga: "Rp2.250.000",
    lokasi: "Pekanbaru",
    gambar: Sepeda,
  },
  {
    id: 109,
    nama: "iPhone 16 128GB iBox",
    harga: "Rp13.500.000",
    lokasi: "Pekanbaru",
    gambar: Ip16,
  },
  {
    id: 110,
    nama: "Rumah",
    harga: "Rp400.000.000",
    lokasi: "Pekanbaru",
    gambar: Rumah,
  },
];

const produkAPI = ref([]);
const allProduk = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/produk");
    produkAPI.value = res.data;
    allProduk.value = [...produkList, ...produkAPI.value];
  } catch (err) {
    console.error("Gagal memuat produk dari API:", err);
    allProduk.value = [...produkList];
  }
});

const editProduk = (id) => {
  router.push(`/edit/${id}`);
};

const hapusProduk = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/produk/${id}`);
    allProduk.value = allProduk.value.filter((p) => p.id !== id);
  } catch (err) {
    console.error("Gagal menghapus produk:", err);
  }
};
</script>

<style scoped>
.beranda {
  padding: 20px;
  min-height: 100vh;
}

.judul {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.produk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 20px;
}

.produk-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
}

.produk-card:hover {
  transform: scale(1.02);
}

.produk-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #f3f4f6;
}

.produk-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.harga {
  font-weight: bold;
  font-size: 15px;
  color: #10b981;
  margin: 0;
}

.nama {
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  margin: 0;
}

.lokasi {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.action-btns {
  display: flex;
  gap: 8px;
  margin-top: 6px;
}

.btn-edit,
.btn-hapus {
  padding: 4px 8px;
  font-size: 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-edit {
  background-color: #e0f2fe;
  color: #0284c7;
}

.btn-hapus {
  background-color: #fee2e2;
  color: #dc2626;
}
</style>
