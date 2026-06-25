<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import GameCard from '../components/GameCard.vue'
import gamesData from "@/data/games.json";

const router = useRouter()
const topGames = ref(gamesData.topGames)
const activeTab = ref('description')
const game = ref({
  id: 1,
  title: 'Купить Squad',
  price: 4999,
  oldPrice: 6999,
  discount: 45,
  platform: 'Steam',
  genre: 'Гонки',
  region: 'Страны СНГ',
  type: 'Учетная запись',
  image: '/gamepage/imgsquad.png',
  features: ['Моментальная доставка', 'Гарантия качества']
})
const screenshots = ref([
  { id: 1, src: '/gamepage/game4.png', alt: 'Screenshot 1' },
  { id: 2, src: '/gamepage/game2.png', alt: 'Screenshot 2' },
  { id: 3, src: '/gamepage/game3.png', alt: 'Screenshot 3' },
  { id: 4, src: '/gamepage/game1.png', alt: 'Screenshot 4', isVideo: true }
])
const description = ref(`
Погрузитесь в мир уличных гонок нового поколения с Squad! Испытайте адреналин от скоростных заездов по ночному городу, тюнингуйте свои автомобили и станьте легендой улиц.

Особенности игры:
• Реалистичная физика вождения
• Огромный выбор автомобилей от мировых производителей
• Продвинутая система тюнинга и кастомизации
• Динамическая смена погоды и времени суток
• Многопользовательский режим с друзьями
• Увлекательная сюжетная кампания

Создайте свой уникальный стиль, участвуйте в нелегальных гонках и зарабатывайте репутацию на улицах города!
`)
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
const goToGame = (gameId) => {
  router.push(`/game/${gameId}`)
}
</script>

<template>
  <div class="game-page">
    <section class="product-header">
      <div class="product-container">
        <div class="product-main">
          <div class="product-image-wrapper">
            <img :src="game.image" :alt="game.title" class="product-image">
            <div class="product-badge">В наличии</div>
          </div>

          <div class="product-info">
            <h1 class="product-title">{{ game.title }}</h1>

            <div class="product-price-block">
              <div class="price-row">
                <span class="current-price">{{ formatPrice(game.price) }} ₽</span>
                <span class="discount">-{{ game.discount }}%</span>
                <span class="old-price">{{ formatPrice(game.oldPrice) }} ₽</span>
              </div>

              <div class="action-buttons">
                <button class="btn-buy">Купить</button>
                <button class="btn-cart" >В корзину</button>
              </div>
            </div>

            <div class="product-specs">
              <div class="spec-item">
                <span class="spec-label">Жанр</span>
                <span class="spec-value">{{ game.genre }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Платформа</span>
                <span class="spec-value">{{ game.platform }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Регион активации</span>
                <span class="spec-value">{{ game.region }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Тип товара</span>
                <span class="spec-value">{{ game.type }}</span>
              </div>
            </div>

            <div class="product-features">
              <div v-for="feature in game.features" :key="feature" class="feature">
                <span class="feature-icon">✓</span>
                {{ feature }}
              </div>
            </div>
          </div>
        </div>

        <div class="screenshots">
          <div v-for="screenshot in screenshots" :key="screenshot.id" class="screenshot-item">
            <img :src="screenshot.src" :alt="screenshot.alt" class="screenshot-img">
            <div v-if="screenshot.isVideo" class="play-button">▶</div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-tabs-section">
      <div class="tabs-container">
        <div class="tabs">
          <button
              :class="['tab', { active: activeTab === 'description' }]"
              @click="activeTab = 'description'"
          >
            Описание товара
          </button>
          <button
              :class="['tab', { active: activeTab === 'requirements' }]"
              @click="activeTab = 'requirements'"
          >
            Системные требования
          </button>
          <button
              :class="['tab', { active: activeTab === 'activation' }]"
              @click="activeTab = 'activation'"
          >
            Активация
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'description'" class="description">
            <h2>Полное погружение в гонки</h2>
            <p>{{ description }}</p>
          </div>

          <div v-if="activeTab === 'requirements'" class="requirements">
            <h3>Минимальные системные требования:</h3>
            <ul>
              <li><strong>OS:</strong> Windows 10 64-bit</li>
              <li><strong>Processor:</strong> Intel Core i5-4590 / AMD FX 8350</li>
              <li><strong>Memory:</strong> 8 GB RAM</li>
              <li><strong>Graphics:</strong> NVIDIA GeForce GTX 970 / AMD Radeon R9 290</li>
              <li><strong>Storage:</strong> 50 GB available space</li>
            </ul>
          </div>

          <div v-if="activeTab === 'activation'" class="activation">
            <h3>Как активировать ключ:</h3>
            <ol>
              <li>Запустите клиент Steam</li>
              <li>Войдите в свой аккаунт</li>
              <li>В меню выберите "Игры" → "Активировать в Steam"</li>
              <li>Введите полученный ключ активации</li>
              <li>После активации игра появится в вашей библиотеке</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="top-section">
      <h2 style="padding-left: 300px; font-size: 32px;">Вам будет интересно</h2>
      <div class="cards-grid">
        <GameCard
            v-for="game in topGames"
            :key="game"
            :game="game"
            @click="goToGame"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif;}
.game-page {
  background: #06030f;
  min-height: 100vh;
  color: #fff;
}

.product-header {
  padding: 40px 300px;
  background: url("public/background/nedspedback.png");
}

.product-container {
  max-width: 1500px;
  margin: 0 auto;
}

.product-main {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 40px;
}

.product-image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;

}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-title {
  font-size: 42px;
  font-weight: 900;
  margin: 0;
  line-height: 1.2;
}

.product-price-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.current-price {
  font-size: 36px;
  font-weight: 900;
  color: #fff;
}

.discount {
  background: #77BE1D;
  color: #fff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
}

.old-price {
  font-size: 20px;
  color: #666;
  text-decoration: line-through;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn-buy {
  flex: 1;
  background: #77BE1D;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-buy:hover {
  background: #77BE1D;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
}

.btn-cart {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
}

.btn-cart:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.cart-icon {
  font-size: 18px;
}

.product-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spec-label {
  font-size: 13px;
  color: #888;
}

.spec-value {
  font-size: 15px;
  color: #fff;
  font-weight: 600;
}

.product-features {
  display: flex;
  gap: 20px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4caf50;
  font-weight: 600;
}

.feature-icon {
  width: 20px;
  height: 20px;
  background: rgba(76, 175, 80, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.screenshots {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.screenshot-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
  cursor: pointer;
  transition: transform 0.2s;
}

.screenshot-item:hover {
  transform: translateY(-4px);
}

.screenshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(76, 175, 80, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  transition: transform 0.2s;
}

.screenshot-item:hover .play-button {
  transform: translate(-50%, -50%) scale(1.1);
}

.product-tabs-section {
  padding: 60px 200px;
}

.tabs-container {
  max-width: 1500px;
  margin-right: 100px;
}

.tabs {
  display: flex;
  gap: 40px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
  margin-left: 100px;
}

.tab {
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 0;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
  font-family: inherit;

}

.tab:hover {
  color: #fff;
}

.tab.active {
  color: #4caf50;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #4caf50;
}

.tab-content {
  font-size: 16px;
  line-height: 1.8;
  color: #aaa;
  padding-left: 100px;
}

.tab-content h2,
.tab-content h3 {
  color: #fff;
  margin-bottom: 20px;
}

.tab-content ul,
.tab-content ol {
  padding-left: 24px;
}

.tab-content li {
  margin-bottom: 12px;
}

.related-products {
  padding: 60px 200px 80px;
}

.related-container {
  max-width: 1500px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 32px 0;
  color: #fff;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.related-card {
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.related-image-wrapper {
  height: 280px;
  overflow: hidden;
}

.related-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover .related-image {
  transform: scale(1.05);
}

.related-info {
  padding: 16px;
}

.related-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px 0;
}

.related-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.related-price {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.related-discount {
  color: #4caf50;
  font-size: 13px;
  font-weight: 600;
}

.related-old-price {
  color: #666;
  font-size: 13px;
  text-decoration: line-through;
}
.cards-grid {display: grid;grid-template-columns: repeat(4, 1fr);gap: 20px;padding-left: 300px;padding-right: 300px;}


@media (max-width: 1200px) {
  .product-header,
  .product-tabs-section,
  .related-products {
    padding-left: 60px;
    padding-right: 60px;
  }

  .product-main {
    grid-template-columns: 1fr;
  }

  .screenshots {
    grid-template-columns: repeat(2, 1fr);
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-header,
  .product-tabs-section,
  .related-products {
    padding-left: 20px;
    padding-right: 20px;
  }

  .product-title {
    font-size: 28px;
  }

  .current-price {
    font-size: 28px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .product-specs {
    grid-template-columns: 1fr;
  }

  .screenshots {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }

  .tabs {
    gap: 20px;
    overflow-x: auto;
  }
}
</style>