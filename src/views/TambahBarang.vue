<template>
  <div class="jual-page">
    <!-- Form Jual -->
    <div class="form-jual">
      <h2>Barang dijual</h2>
      <div class="penjual">
        <img :src="userStore.user?.foto || defaultFoto" class="foto-penjual" />
        <p>{{ userStore.user?.nama }}</p>
      </div>

      <label class="label-upload">
        <div class="upload-box">
          <span v-if="!preview">➕ Tambahkan foto</span>
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

      <button @click="kirimProduk">Kirim</button>
    </div>

    <!-- Pratinjau -->
    <div class="preview-jual">
      <h3>Pratinjau</h3>
      <div class="preview-box">
        <img v-if="preview" :src="preview" class="preview-img" />
        <h4>{{ form.nama || "Judul" }}</h4>
        <p>{{ form.harga ? "Rp " + form.harga : "Harga" }}</p>
        <p>{{ form.kategori || "Kategori" }}</p>
        <div class="info-penjual">
          <img :src="userStore.user?.foto || defaultFoto" class="foto-mini" />
          <span>{{ userStore.user?.nama || "Penjual" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();
const defaultFoto = "https://via.placeholder.com/40";

const form = ref({
  nama: "",
  harga: "",
  kategori: "",
  gambar: "",
});

const preview = ref(null);

function handleFoto(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    preview.value = reader.result;
    form.value.gambar = reader.result;
  };
  reader.readAsDataURL(file);
}

async function kirimProduk() {
  if (!form.value.nama || !form.value.harga || !form.value.kategori) {
    alert("Isi semua data terlebih dahulu");
    return;
  }

  await axios.post("http://localhost:3000/produk", {
    ...form.value,
    lokasi: "Pekanbaru",
  });

  router.push("/");
}
</script>

<style scoped>
.jual-page {
  display: flex;
  padding: 20px;
  gap: 24px;
}

.form-jual {
  flex: 1;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.penjual {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.foto-penjual {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.label-upload {
  cursor: pointer;
}

.upload-box {
  width: 100%;
  height: 150px;
  background: #f9fafb;
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
  width: 100%;
}

button {
  background: #1e40af;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.preview-jual {
  flex: 1;
  background: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  height: fit-content;
}

.preview-box {
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
}

.preview-img {
  width: 100%;
  max-width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}

.info-penjual {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

.foto-mini {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
