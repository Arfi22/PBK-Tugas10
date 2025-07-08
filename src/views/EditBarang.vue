<template>
  <div class="edit-page">
    <h2>Edit Barang</h2>

    <div class="form-edit">
      <label>Foto Produk</label>
      <label class="label-upload">
        <div class="upload-box">
          <span v-if="!preview">➕ Ganti foto</span>
          <img v-if="preview" :src="preview" alt="Preview" />
        </div>
        <input type="file" accept="image/*" @change="handleFoto" hidden />
      </label>

      <input type="text" v-model="form.nama" placeholder="Judul" />
      <input type="text" v-model="form.harga" placeholder="Harga" />
      <select v-model="form.kategori">
        <option disabled value="">Pilih kategori</option>
        <option>Elektronik</option>
        <option>Alat Musik</option>
        <option>Jual Rumah</option>
        <option>Keluarga</option>
        <option>Hobi</option>
        <option>Kebutuhan Hewan Peliharaan</option>
      </select>

      <button @click="updateProduk">💾 Simpan Perubahan</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
  nama: "",
  harga: "",
  kategori: "",
  gambar: "",
  lokasi: "Pekanbaru",
});
const preview = ref(null);

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:3000/produk/${id}`);
    form.value = res.data;
    preview.value = res.data.gambar;
  } catch (err) {
    alert("Produk tidak ditemukan!");
    router.push("/jual");
  }
});

function handleFoto(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    preview.value = reader.result;
    form.value.gambar = reader.result;
  };
  reader.readAsDataURL(file);
}

async function updateProduk() {
  if (!form.value.nama || !form.value.harga || !form.value.kategori) {
    alert("Harap lengkapi semua data!");
    return;
  }

  try {
    await axios.put(`http://localhost:3000/produk/${id}`, form.value);
    alert("Produk berhasil diperbarui!");
    router.push("/jual");
  } catch (err) {
    alert("Gagal memperbarui produk.");
  }
}
</script>

<style scoped>
.edit-page {
  max-width: 500px;
  margin: 40px auto;
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-edit {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label-upload {
  cursor: pointer;
}

.upload-box {
  width: 100%;
  height: 150px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
}

.upload-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

input,
select {
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}

button {
  padding: 12px;
  background: #1e40af;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #1e3a8a;
}
</style>
