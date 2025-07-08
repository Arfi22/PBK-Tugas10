<template>
  <div class="bantuan-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <ul>
        <li><span class="icon">🔑</span> Login, Pemulihan, dan Keamanan</li>
        <li><span class="icon">⚙️</span> Mengelola Akun Anda</li>
        <li><span class="icon">🔒</span> Privasi dan Keamanan</li>
        <li><span class="icon">📜</span> Kebijakan</li>
        <li><span class="icon">❗</span> Pelaporan</li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <h1>Apa yang bisa kami bantu?</h1>

      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Cari artikel bantuan..." />
      </div>

      <!-- Topik Populer -->
      <h2>Topik Populer</h2>
      <div class="topik-grid">
        <div
          v-for="(topik, index) in topikPopuler"
          :key="index"
          class="topik-card"
        >
          <div class="topik-icon">{{ topik.ikon }}</div>
          <div class="topik-judul">{{ topik.judul }}</div>
          <div class="topik-deskripsi">{{ topik.deskripsi }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const topikPopuler = [
  {
    ikon: "🖋️",
    judul: "Pengaturan Akun",
    deskripsi:
      "Sesuaikan pengaturan, kelola notifikasi, pelajari perubahan nama, dan lainnya.",
  },
  {
    ikon: "🔑",
    judul: "Login dan Kata Sandi",
    deskripsi:
      "Atasi masalah login dan pelajari cara mengubah atau mereset kata sandi Anda.",
  },
  {
    ikon: "🔒",
    judul: "Privasi dan Keamanan",
    deskripsi:
      "Kontrol orang yang bisa melihat konten yang Anda bagikan dan tambahkan perlindungan ekstra.",
  },
  {
    ikon: "🏪",
    judul: "Marketplace",
    deskripsi: "Pelajari cara melakukan transaksi jual beli di Facebook.",
  },
  {
    ikon: "👥",
    judul: "Grup",
    deskripsi: "Pelajari cara membuat, mengelola, dan menggunakan Grup.",
  },
  {
    ikon: "📄",
    judul: "Halaman",
    deskripsi:
      "Pelajari cara membuat, menggunakan, mengikuti, dan mengelola Halaman.",
  },
];
</script>

<style scoped>
.bantuan-container {
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f6f7;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 260px;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 12px 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sidebar li .icon {
  margin-right: 10px;
  font-size: 18px;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 40px;
}

.main-content h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  max-width: 600px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-size: 16px;
}

.main-content h2 {
  margin-top: 40px;
  font-size: 20px;
  margin-bottom: 20px;
}

.topik-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.topik-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s;
  cursor: pointer;
}

.topik-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.topik-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.topik-judul {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
}

.topik-deskripsi {
  font-size: 14px;
  color: #555;
}
</style>
