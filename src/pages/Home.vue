<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GameCard from '../components/GameCard.vue'
import Slides2 from '../components/Slides2.vue'
import gamesData from '../data/games.json'

let intervalId = null
const slides = ref(gamesData.heroSlides)
const currentSlide = ref(0)
const nextSlide = () => {currentSlide.value = (currentSlide.value + 1) % slides.value.length}
const prevSlide = () => {currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length}
const goToSlide = (index) => {currentSlide.value = index}
const startAutoPlay = () => {intervalId = setInterval(nextSlide, 5000)}
const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
const topGames = ref(gamesData.topGames)
onMounted(() => {startAutoPlay()})
onUnmounted(() => {stopAutoPlay()})
</script>

<template>
  <div class="home">
    <section class="hero-banner">
      <div class="slider-container" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="slides-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="slide in slides" :key="slide.id" class="slide">
            <div class="banner-bg" :style="{ backgroundImage: `url('${slide.image}')` }">
              <div class="banner-overlay"></div>
              <div class="banner-content">
                <div class="banner-game-info">
                  <h1 class="banner-title">
                    <img :src="slide.title" alt="">
                  </h1>
                  <p class="banner-desc" v-html="slide.desc"></p>
                  <div class="banner-price-row">
                    <span class="price-current">{{ slide.price }}</span>
                    <span class="price-discount">{{ slide.discount }}</span>
                    <span class="price-old">{{ slide.oldPrice }}</span>
                  </div>

                  <div class="banner-buttons">
                    <button class="btn-cart">В корзину</button>
                    <button class="btn-favorite">В избранное</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="slider-arrow slider-arrow-left" @click="prevSlide">❮</button>
        <button class="slider-arrow slider-arrow-right" @click="nextSlide">❯</button>

        <div class="slider-dots">
          <button
              v-for="(slide, index) in slides"
              :key="index"
              :class="['slider-dot', { active: currentSlide === index }]"
              @click="goToSlide(index)"
          ></button>
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

    <section class="promo-section">
      <Slides2 />
    </section>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif }
.home { padding: 0; background-color: #06030F; }

.hero-banner {
  margin: 0 auto;
  padding-bottom: 50px;
  padding-left: 200px;
  padding-top: 20px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.promo-section {
  padding: 40px 0;
}

.slider-container {
  position: relative;
  width: 1500px;
  height: 700px;
  overflow: hidden;
  border-radius: 16px;
}

.slides-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.banner-bg {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  padding: 48px 60px;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
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

.banner-desc {
  font-family: 'Manrope', sans-serif;
  color: #ffffff;
  font-size: 24px;
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

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 24px;
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
  left: 24px;
}

.slider-arrow-right {
  right: 24px;
}

.slider-dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.slider-dot {
  width: 12px;
  height: 12px;
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