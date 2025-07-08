<template>
  <div v-if="visible" class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <h2 class="title">⚙️ Pengaturan</h2>
      <ul class="setting-list">
        <li>
          <router-link to="/pengaturan-akun" class="setting-item"
            >👤 Pengaturan Akun</router-link
          >
        </li>
        <li>
          <router-link to="/pengaturan-bahasa" class="setting-item"
            >🌐 Bahasa</router-link
          >
        </li>
        <li>
          <router-link to="/log-aktivitas" class="setting-item"
            >📋 Log Aktivitas</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.popup {
  width: 280px;
  background: white;
  height: 100%;
  padding: 24px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1e40af;
}

.setting-list {
  list-style: none;
  padding: 0;
}

.setting-item {
  display: block;
  padding: 10px 0;
  color: #1f2937;
  text-decoration: none;
  font-size: 15px;
  transition: background 0.2s;
}

.setting-item:hover {
  background-color: #f1f5f9;
  padding-left: 5px;
  border-radius: 5px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
