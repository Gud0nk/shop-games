<script setup>
import { ref } from 'vue'
import GameCard from '../components/GameCard.vue'

const topGames = ref([
  {
    id: 1,
    title: 'Shape of the World',
    price: 16400,
    discount: 15,
    oldPrice: 16400,
    platforms: ['Xbox', 'Origin'],
    image: 'main/Rectangle3313.png',
    tag: 'Топ '
  },
  {
    id: 2,
    title: 'Journey',
    price: 16400,
    discount: 15,
    oldPrice: 16400,
    platforms: ['Xbox', 'Analog Steam'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop',
    tag: 'Топ '
  },
  {
    id: 3,
    title: 'Minecraft',
    price: 16400,
    discount: 15,
    oldPrice: 16400,
    platforms: ['Analog', 'Analog Steam'],
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=400&h=560&fit=crop',
    tag: 'Топ '
  },
  {
    id: 4,
    title: 'Short Hike',
    price: 16400,
    discount: 15,
    oldPrice: 16400,
    platforms: ['Xbox', 'EpicGames'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=560&fit=crop',
    tag: 'Топ '
  }
])
</script>

<template>
  <div class="home">
    <section class="hero-banner">
      <div class="banner-bg">
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <div class="banner-game-info">
            <h1 class="banner-title">
              <img src="../../public/main/b10d8aa265c089eb54d1e1666fef2c17%201.png" alt="">
            </h1>
            <p class="banner-desc">
              Тотальная война нового поколения началась!<br> Сыграйте в Battlefield™ 2042 уже сегодня.<br> Адаптируйтесь и процветайте!
            </p>
            <div class="banner-price-row">
              <span class="price-current">4 999 ₽</span>
              <span class="price-discount">-25%</span>
              <span class="price-old">6 599 ₽</span>
            </div>

            <div class="banner-buttons">
              <button class="btn-cart">В корзину</button>
              <button class="btn-favorite">В избранное</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="top-section">
      <img style="padding-left: 300px;" class="section-title" src="../../public/main/top4.png" alt="">
      <img style="padding-left: 10px;" class="section-title" src="../../public/main/zeus.png" alt="">
      <div class="cards-grid">
        <GameCard
            v-for="game in topGames"
            :key="game.id"
            :game="game"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
  background-color: #06030F;
}

.hero-banner {
  margin: 0 auto ;
  padding: 48px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.banner-bg {
  background-image: url('../../public/main/need-for-speed.png');
  min-height: 420px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 48px 60px;

}

.banner-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-content {
  position: relative;
  z-index: 2;
  max-width: 550px;
}

.banner-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 16px;
  font-style: italic;
}

.title-need {
  color: #00d4ff;
  display: block;
  font-size: 36px;
}

.title-speed {
  color: #fff;
  display: block;
  font-size: 52px;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.banner-desc {
  color: #b0b0c0;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.banner-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 24px;
}

.price-current {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
}

.price-discount {
  color: #4caf50;
  font-size: 14px;
  font-weight: 600;
}

.price-old {
  color: #666;
  font-size: 14px;
  text-decoration: line-through;
}

.banner-buttons {
  display: flex;
  gap: 12px;
}

.btn-cart {
  background: #fff;
  color: #0a0a1a;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cart:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
}

.btn-favorite {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-favorite:hover {
  background: rgba(255, 255, 255, 0.15);
}
.top-section {
  margin-top: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 300px;
  padding-right: 300px;
}
</style>