<script setup>
import { ref } from "vue";
const isOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="header-left">
        <div class="lang-currency" @click="isOpen = !isOpen">
          <span class="lang-currency-label">RU / $</span>
          <span class="arrow" :class="{ open: isOpen }">⌄</span>
        </div>

        <div v-if="isOpen" class="dropdown">
          <div class="dropdown-section">
            <div class="dropdown-item active">Русский (RU)</div>
            <div class="dropdown-item">English (EN)</div>
          </div>
          <div class="dropdown-section currencies">
            <div class="currency-btn active">$</div>
            <div class="currency-btn">₽</div>
          </div>
        </div>
      </div>

      <nav class="header-nav">
        <a href="#" class="nav-link">Наполнительный счет</a>
        <a href="#" class="nav-link">Отзывы</a>
        <a href="#" class="nav-link">Гарантии</a>
        <a href="#" class="nav-link">Как купить</a>
        <a href="#" class="nav-link">Накопительная</a>
        <a href="#" class="nav-link">Заработай</a>
      </nav>

      <div class="header-right">
        <div class="user-profile">
          <span>Hazard Rules</span>
          <img src="../../public/header/ava.png" alt="avatar" class="avatar" />
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="logo">
        <img src="../../public/header/logo.png" alt="">
        <img src="../../public/header/Playnchill.png" alt="">
        <img style="padding-left: 100px" src="../../public/header/palki.png" alt="">
      </div>

      <div class="search-bar">
        <input type="text" placeholder="Поиск" class="search-input" />
        <button class="search-btn"><img src="../../public/header/lupa.png" alt=""></button>
      </div>

      <div class="header-actions">
        <span class="free-label">Бесплатно</span>
        <img src="../../public/header/like.png" alt="">
        <img src="../../public/header/corzina.png" alt="">
      </div>
    </div>
  </header>
</template>

<style scoped>

.header {
  height: 157px;
  background-color: #06030F;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-size: 13px;
  color: #888;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-nav {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: #888;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #fff;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 13px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.header-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}

.search-bar {
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  background: #1a1a2e;
  border-radius: 12px;
  padding: 0 16px;
  border: 1px solid #2d2d44;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  padding: 10px 0;
  font-size: 14px;
  outline: none;
}

.search-input::placeholder {
  color: #666;
}

.search-btn {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 16px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.free-label {
  color: #4caf50;
  font-size: 13px;
  font-weight: 600;
}
.lang-currency-label {
  color: white;
}
</style>