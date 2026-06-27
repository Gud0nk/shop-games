<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gamesData from '../data/games.json'

const slides = ref(gamesData.promoSlides)
const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {currentSlide.value = (currentSlide.value + 1) % slides.value.length}
const prevSlide = () => {currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length}
const startAutoPlay = () => {intervalId = setInterval(nextSlide, 5000)}
const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
onMounted(() => {startAutoPlay()})
onUnmounted(() => {stopAutoPlay()})
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="promo-slider-2">
    <div class="slider-container" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
      <div class="slides-wrapper" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
        <div v-for="slide in slides" :key="slide.id" class="slide">
          <div class="promo-card" :style="{ background: slide.gradient }">
            <div class="card-content">
              <div class="card-text">
                <h2 class="card-title">{{ slide.title }}</h2>
                <div class="card-price-row">
                  <span class="price-current">{{ slide.price }}</span>
                  <span class="price-discount">{{ slide.discount }}</span>
                  <span class="price-old">{{ slide.oldPrice }}</span>
                </div>
                <div class="card-buttons">
                  <button class="btn-buy">Купить</button>
                  <button class="btn-favorite">В избранное</button>
                </div>
              </div>
              <div class="card-image">
                {{ baseUrl }}
                <img :src="`${baseUrl}${slide.image}`" :alt="slide.title">
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="slider-arrow slider-arrow-left" @click="prevSlide">❮</button>
      <button class="slider-arrow slider-arrow-right" @click="nextSlide">❯</button>

    </div>
  </div>
</template>

<style scoped>
.promo-slider-2 {
  padding: 40px 200px;
  background-color: #06030F;
}

.slider-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.slides-wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  width: 50%;
  flex-shrink: 0;
  padding: 0 10px;
}

.promo-card {
  border-radius: 16px;
  padding: 40px;
  height: 320px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.card-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.card-text {
  flex: 1;
  max-width: 50%;
}

.card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.3;
}

.card-price-row {
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
  color: #FFE817;
  font-size: 16px;
  font-weight: 600;
}

.price-old {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  text-decoration: line-through;
}

.card-buttons {
  display: flex;
  gap: 12px;
}

.btn-buy {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-buy:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-1px);
}

.btn-favorite {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-favorite:hover {
  background: rgba(255, 255, 255, 0.1);
}

.card-image {
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  max-height: 280px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.slider-arrow:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.slider-arrow-left {
  left: 20px;
}

.slider-arrow-right {
  right: 20px;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.slider-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.slider-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.slider-dot.active {
  background: #fff;
  border-color: #fff;
  transform: scale(1.2);
}

@media (max-width: 1200px) {
  .promo-slider-2 {
    padding: 40px 100px;
  }
}

@media (max-width: 768px) {
  .promo-slider-2 {
    padding: 20px 40px;
  }

  .slide {
    width: 100%;
    padding: 0;
  }

  .slides-wrapper {
    flex-direction: column;
  }

  .card-content {
    flex-direction: column;
  }

  .card-text {
    max-width: 100%;
  }

  .card-image {
    max-width: 100%;
  }

  .card-title {
    font-size: 24px;
  }
}
</style>