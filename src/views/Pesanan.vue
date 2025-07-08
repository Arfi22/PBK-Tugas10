<template>
  <div class="orders-container">
    <div class="tabs">
      <button
        :class="{ active: activeTab === 'penjualan' }"
        @click="activeTab = 'penjualan'"
      >
        Penjualan
      </button>
      <button
        :class="{ active: activeTab === 'pembelian' }"
        @click="activeTab = 'pembelian'"
      >
        Pembelian
      </button>
    </div>

    <div class="filters">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="{ selected: selectedFilter === filter }"
        @click="selectedFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="empty-order">
      <div class="icon">
        <img src="../assets/PapperPlane.jpg" alt="paperplane" class="" />
      </div>
      <h3>Tidak ada obrolan</h3>
      <p>Obrolan lebih dari 60 hari tidak ditampilkan</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("penjualan");
const selectedFilter = ref("Semua");

const filters = [
  "Semua",
  "Menunggu Pembayaran",
  "Sudah Dibayar",
  "Untuk Dikirimkan",
  "Terkirim",
  "Bayar di Tempat (COD)",
  "Selesai",
];
</script>

<style scoped>
.orders-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
}

.tabs button {
  padding: 8px 16px;
  border: none;
  background: none;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

.tabs button.active {
  color: #1e40af;
  border-color: #1e40af;
}

.filters {
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filters button {
  padding: 8px 14px;
  background-color: #f0f4f8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.filters button.selected {
  background-color: #dbeafe;
  color: #1e40af;
}

.empty-order {
  text-align: center;
  margin-top: 60px;
}

.plane-img {
  width: 60px;
  height: auto;
  margin-bottom: 12px;
}
</style>
