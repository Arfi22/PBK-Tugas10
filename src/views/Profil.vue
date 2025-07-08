<template>
  <div class="profil">
    <h2>Profil Saya</h2>

    <div class="foto-container">
      <img :src="preview || user.foto || defaultFoto" />
      <input type="file" accept="image/*" @change="uploadFoto" />
    </div>

    <div class="form">
      <label>Nama</label>
      <input v-model="edit.nama" />

      <label>Email</label>
      <input v-model="edit.email" disabled />

      <label>Alamat</label>
      <textarea v-model="edit.alamat" rows="3" />

      <label>Jenis Kelamin</label>
      <select v-model="edit.jenisKelamin">
        <option>Laki-laki</option>
        <option>Perempuan</option>
      </select>

      <button @click="simpan">💾 Simpan</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useUserStore } from "../stores/user";
const store = useUserStore();
const user = store.user;

const defaultFoto = "https://via.placeholder.com/140";

const preview = ref(null);

const edit = reactive({
  nama: user.nama,
  email: user.email,
  alamat: user.alamat,
  jenisKelamin: user.jenisKelamin || "Laki-laki",
  foto: user.foto,
});

// jika store berubah, update form
watch(
  () => store.user,
  (newUser) => {
    Object.assign(edit, newUser);
  }
);

function uploadFoto(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    preview.value = reader.result;
    edit.foto = reader.result;
  };
  reader.readAsDataURL(file);
}

async function simpan() {
  await store.updateProfile({ ...edit });
  preview.value = null;
  alert("Profil berhasil diperbarui!");
}
</script>

<style scoped>
.profil {
  max-width: 500px;
  margin: auto;
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
}
.foto-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.foto-container img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1e40af;
}
input,
textarea,
select {
  width: 100%;
  margin: 8px 0 16px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 12px;
  background: #1e40af;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
