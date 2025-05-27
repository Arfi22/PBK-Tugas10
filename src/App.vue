<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <li>
          <router-link to="/" exact-active-class="active">Beranda</router-link>
        </li>
        <li>
          <router-link to="/produk" active-class="active">Produk</router-link>
        </li>
        <li>
          <router-link to="/pesanan" active-class="active">Pesanan</router-link>
        </li>
        <li>
          <router-link to="/pengaturan" active-class="active"
            >Pengaturan</router-link
          >
        </li>
        <li>
          <router-link to="/profil" active-class="active">Profil</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
