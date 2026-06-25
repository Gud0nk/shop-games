<script setup>
import { ref, computed } from 'vue'
import GameCatalogCard from '../components/GameCatalogCard.vue'
import catalogData from '../data/catalog.json'
import { useRouter } from 'vue-router'


const games = ref(catalogData.catalogGames)

const filters = ref({
  account: true,
  key: false,
  activation: false,
  discount: false,
  new: false,
  bestseller: false
})

const selectedGenres = ref([])
const selectedPlatforms = ref([])

const genres = ['Экшен', 'Приключения', 'Инди', 'Стратегии', 'RPG', 'Шутеры']
const platforms = ['Steam', 'Xbox', 'PlayStation', 'Origin', 'EpicGames']
</script>

<template>
  <div class="catalog-page">
    <div class="catalog-container">
      <aside class="sidebar">
        <div class="filter-block">
          <h3>Цена</h3>
          <div class="price-inputs">
            <input type="number" placeholder="От" class="input">
            <input type="number" placeholder="До" class="input">
          </div>
        </div>

        <div class="filter-block">
          <h3>Тип аккаунта</h3>
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.account">
            <span>Аккаунт</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.key">
            <span>Лицензионный ключ</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.activation">
            <span>Активация</span>
          </label>
        </div>

        <div class="filter-block">
          <h3>Жанры</h3>
          <label v-for="genre in genres" :key="genre" class="checkbox-label">
            <input type="checkbox" :value="genre" v-model="selectedGenres">
            <span>{{ genre }}</span>
          </label>
        </div>

        <div class="filter-block">
          <h3>Платформы</h3>
          <label v-for="platform in platforms" :key="platform" class="checkbox-label">
            <input type="checkbox" :value="platform" v-model="selectedPlatforms">
            <span>{{ platform }}</span>
          </label>
        </div>

        <div class="filter-block">
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.discount">
            <span>Только скидки</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.new">
            <span>Новинки</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" v-model="filters.bestseller">
            <span>Хит продаж</span>
          </label>
        </div>

        <button class="btn-reset">Сбросить фильтры</button>
      </aside>

      <main class="catalog-main">
        <h1 class="page-title">Каталог игр</h1>

        <div class="games-grid">
          <GameCatalogCard
              v-for="game in games"
              :key="game.id"
              :game="game"
          />
        </div>
      </main>

    </div>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif}
.catalog-page {
  background: #06030F;
  min-height: 100vh;
  color: #fff;
  padding: 40px 0;
  margin: -10px;
}

.catalog-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 200px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.filter-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filter-block h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.price-inputs {
  display: flex;
  gap: 8px;
}

.input {
  flex: 1;
  background: #12122a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fff;
  padding: 8px 12px;
  font-size: 14px;
  width: 100px;
}

.input::placeholder {
  color: #666;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #aaa;
  transition: color 0.2s;
}

.checkbox-label:hover {
  color: #fff;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #77BE1D;
  cursor: pointer;
}

.btn-reset {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  margin-top: 12px;
}

.btn-reset:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

.catalog-main {
  min-height: 500px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 32px 0;
  color: #fff;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1200px) {
  .catalog-container {
    padding: 0 60px;
  }
}

@media (max-width: 900px) {
  .catalog-container {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  .sidebar {
    display: none;
  }

  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .games-grid {
    grid-template-columns: 1fr;
  }
}
</style>