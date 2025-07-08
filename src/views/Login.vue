<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Nama</label>
          <input v-model="form.nama" type="text" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="form.password" type="password" required />
        </div>

        <button type="submit" class="btn-masuk">Masuk</button>
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const router = useRouter();
const userStore = useUserStore();

const form = ref({
  nama: "",
  email: "",
  password: "",
});

const errorMessage = ref("");

const handleLogin = async () => {
  try {
    await userStore.login({
      email: form.value.email,
      password: form.value.password,
    });

    router.push("/profil");
  } catch (err) {
    if (err.message === "Email belum terdaftar.") {
      // Auto register jika email belum terdaftar
      await userStore.register(form.value);
      router.push("/profil");
    } else {
      errorMessage.value = err.message;
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eff6ff;
}
.login-card {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  width: 350px;
}
h2 {
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 6px;
  font-weight: 600;
}
input {
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}
input:focus {
  border-color: #3b82f6;
}
.btn-masuk {
  width: 100%;
  padding: 12px;
  background-color: #1e40af;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}
.btn-masuk:hover {
  background-color: #1e3a8a;
}
.error-msg {
  margin-top: 10px;
  color: red;
  font-size: 14px;
}
</style>
