<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import GameCard from '../components/GameCard.vue'
import GameCatalogCard from '../components/GameCatalogCard.vue'
import SaleCard from '../components/SaleCard.vue'
import BlogCard from '../components/BlogCard.vue'
import ReviewCard from '../components/ReviewCard.vue'
import Slides2 from '../components/Slides2.vue'
import gamesData from '../data/games.json'
import catalogData from '../data/catalog.json'
import sectionsData from '../data/sections.json'

const router = useRouter()

let intervalId = null
const slides = ref(gamesData.heroSlides)
const currentSlide = ref(0)
const topGames = ref(gamesData.topGames)
const catalogGames = ref(catalogData.catalogGames)
const saleGames = ref(sectionsData.saleGames)
const promoBanner = ref(sectionsData.promoBanner)
const blogPosts = ref(sectionsData.blogPosts)
const reviews = ref(sectionsData.reviews)
const goToGame = () => {router.push('/game')}
const goToCatalog = () => {router.push('/catalog')}

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
                    <button class="btn-cart" @click="goToGame(1)">Купить</button>
                    <button class="btn-favorite">В избранное</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="slider-arrow slider-arrow-left" @click="prevSlide">❮</button>
        <button class="slider-arrow slider-arrow-right" @click="nextSlide">❯</button>
      </div>
    </section>

    <section class="top-section">
      <img style="padding-left: 300px;" class="section-title" src="../../public/main/top4.png" alt="">
      <img style="padding-left: 10px;" class="section-title" src="../../public/main/zeus.png" alt="">
      <div class="cards-grid">
        <GameCard
            v-for="game in topGames"
            :key="game"
            :game="game"
            @click="goToGame"
        />
      </div>
    </section>

    <section class="promo-section">
      <Slides2 />
    </section>

    <section class="catalog-section">
      <div class="catalog-section-two">
        <p style="color: white;" class="catalog-setting">Новинки</p>
        <p class="catalog-setting">Аккаунты</p>
        <p class="catalog-setting">Ключи</p>
        <p class="catalog-setting">Активация</p>
        <p class="catalog-setting">Прокачка</p>
      </div>
      <div class="catalog-grid">
        <GameCatalogCard
            v-for="game in catalogGames"
            :key="game.id"
            :game="game"
            @click="goToGame"
        />
      </div>

      <button @click="goToCatalog(1)" class="btn-catalog">Перейти в каталог</button>
    </section>

    <section class="sales-section">
      <h2 class="section-heading">Акции и скидки <span class="percent">%</span></h2>

      <div class="sales-grid">
        <SaleCard
            v-for="game in saleGames"
            :key="game.id"
            :game="game"
            @click="goToGame(game.id)"
        />
      </div>

      <div class="promo-banner">
        <img :src="`${baseUrl}${promoBanner.image}`" alt="Promo">
      </div>
    </section>

    <section class="blog-section">
      <h2 class="section-heading">Свежее в блоге</h2>

      <div class="blog-grid">
        <BlogCard
            v-for="post in blogPosts"
            :key="post.id"
            :post="post"
        />
      </div>

      <button class="btn-blog">Все публикации</button>
    </section>

    <section class="reviews-section">
      <div class="reviews-header">
        <h2 class="section-heading">Отзывы</h2>
        <button class="btn-leave-review">Оставить отзыв →</button>
      </div>

      <div class="reviews-grid">
        <ReviewCard
            v-for="review in reviews"
            :key="review.id"
            :review="review"
        />
      </div>

      <div class="trustpilot-badge">
        <div class="trustpilot-logo">
          <span class="trustpilot-star">★</span>Trustpilot
        </div>
        <div class="trustpilot-info">
          <div class="trustpilot-rating">
            <img src="../../public/main/star.png" alt="">
            <span class="rating-text">Excellent</span>
          </div>
          <p class="trustpilot-count">Based on 22,836 reviews</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif }
.home { padding: 0; background-color: #06030F; margin: -10px; }
.hero-banner {margin: 0 auto;padding-bottom: 50px;padding-left: 200px;padding-top: 20px;border-radius: 16px;overflow: hidden;position: relative;}
.promo-section {padding: 40px 0;}
.slider-container {position: relative;width: 1500px;height: 700px;overflow: hidden;border-radius: 16px;}
.slides-wrapper {display: flex;width: 100%;height: 100%;transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);}
.slide {min-width: 100%;height: 100%;flex-shrink: 0;}
.banner-bg {height: 100%;width: 100%;background-size: cover;background-position: center;position: relative;display: flex;align-items: center;padding: 48px 60px;}
.banner-overlay {position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);}
.banner-content {position: relative;z-index: 2;max-width: 550px;}
.banner-title {font-size: 48px;font-weight: 900;line-height: 1;margin-bottom: 16px;font-style: italic;}
.banner-desc {font-family: 'Manrope', sans-serif;color: #ffffff;font-size: 24px;line-height: 1.6;margin-bottom: 24px;}
.banner-price-row {display: flex;align-items: baseline;gap: 12px;margin-bottom: 24px;}
.price-current {font-size: 28px;font-weight: 700;color: #fff;}
.price-discount {color: #77BE1D;font-size: 14px;font-weight: 600;}
.price-old {color: #666;font-size: 14px;text-decoration: line-through;}
.banner-buttons {display: flex;gap: 12px;}
.btn-cart {background: #fff;color: #0a0a1a;border: none;padding: 12px 32px;border-radius: 8px;font-size: 14px;font-weight: 600;cursor: pointer;transition: all 0.2s;}
.btn-cart:hover {background: #e0e0e0;transform: translateY(-1px);}
.btn-favorite {background: rgba(255, 255, 255, 0.1);color: #fff;border: 1px solid rgba(255, 255, 255, 0.2);padding: 12px 32px;border-radius: 8px;font-size: 14px;font-weight: 600;cursor: pointer;transition: all 0.2s;}
.btn-favorite:hover {background: rgba(255, 255, 255, 0.15);}
.slider-arrow {position: absolute;top: 50%;transform: translateY(-50%);background: rgba(0, 0, 0, 0.5);color: #fff;border: none;width: 56px;height: 56px;border-radius: 50%;font-size: 24px;cursor: pointer;transition: all 0.3s;z-index: 10;display: flex;align-items: center;justify-content: center;backdrop-filter: blur(10px);}
.slider-arrow:hover {background: rgba(0, 0, 0, 0.8);transform: translateY(-50%) scale(1.1);}
.slider-arrow-left {left: 24px;}
.slider-arrow-right {right: 24px;}
.top-section {margin-top: 20px;}
.section-title {font-size: 24px;font-weight: 700;margin-bottom: 24px;color: #fff;}
.cards-grid {display: grid;grid-template-columns: repeat(4, 1fr);gap: 20px;padding-left: 300px;padding-right: 300px;}
.catalog-section {padding: 60px 200px;}
.catalog-grid {display: grid;grid-template-columns: repeat(4, 1fr);gap: 20px;margin-bottom: 40px;}
.btn-catalog {display: block;width: 100%;padding: 16px;background: transparent;color: #fff;border: 1px solid rgba(255, 255, 255, 0.2);border-radius: 12px;font-size: 16px;font-weight: 600;cursor: pointer;transition: all 0.2s;}
.btn-catalog:hover {background: rgba(255, 255, 255, 0.05);border-color: rgba(255, 255, 255, 0.4);}
.sales-section {padding: 60px 200px;}
.section-heading {font-size: 32px;font-weight: 700;color: #fff;margin-bottom: 32px;}
.percent {color: #4caf50;}
.sales-grid {display: grid;grid-template-columns: repeat(2, 1fr);gap: 20px;margin-bottom: 20px;}
.promo-banner {border-radius: 12px;overflow: hidden;height: 200px;}
.promo-banner img {width: 100%;height: 100%;object-fit: cover;}
.blog-section {padding: 60px 200px;}
.blog-grid {display: grid;grid-template-columns: repeat(3, 1fr);gap: 20px;margin-bottom: 32px;}
.btn-blog {display: block;width: 100%;padding: 16px;background: transparent;color: #fff;border: 1px solid rgba(255, 255, 255, 0.2);border-radius: 12px;font-size: 16px;font-weight: 600;cursor: pointer;transition: all 0.2s;}
.btn-blog:hover {background: rgba(255, 255, 255, 0.05);border-color: rgba(255, 255, 255, 0.4);}
.reviews-section {padding: 60px 200px;}
.reviews-header {display: flex;justify-content: space-between;align-items: center;margin-bottom: 32px;}
.btn-leave-review {background: transparent;color: #fff;border: 1px solid rgba(255, 255, 255, 0.2);padding: 12px 24px;border-radius: 8px;font-size: 14px;font-weight: 600;cursor: pointer;transition: all 0.2s;}
.btn-leave-review:hover {background: rgba(255, 255, 255, 0.05);border-color: rgba(255, 255, 255, 0.4);}
.reviews-grid {display: grid;grid-template-columns: repeat(3, 1fr);gap: 20px;margin-bottom: 40px;}
.trustpilot-badge {display: flex;align-items: center;gap: 20px;padding: 24px;background: #1a1a2e;border-radius: 12px;}
.trustpilot-logo {display: flex;align-items: center;gap: 8px;font-size: 20px;font-weight: 700;color: #fff;}
.trustpilot-star {color: #4caf50;font-size: 24px;}
.trustpilot-info {flex: 1;}
.trustpilot-rating {display: flex;align-items: center;gap: 12px;margin-bottom: 4px;}
.trustpilot-rating .stars {color: #4caf50;font-size: 18px;}
.rating-text {font-size: 18px;font-weight: 700;color: #fff;}
.trustpilot-count {font-size: 13px;color: #888;margin: 0;}
.catalog-section-two {color: #868686;display: flex;flex-direction: row;}
.catalog-setting {padding-right: 30px;padding-bottom: 40px;font-size: 20px;}
@media (max-width: 1200px) {
  .slider-container {
    height: 50vh;
    min-height: 350px;
  }

  .cards-grid,
  .catalog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-banner {
    padding: 15px 15px 40px;
  }

  .banner-bg {
    padding: 30px;
  }

  .banner-desc {
    font-size: 16px;
  }

  .cards-grid,
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sales-grid {
    grid-template-columns: 1fr;
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .slider-container {
    height: 45vh;
    min-height: 300px;
  }

  .banner-bg {
    padding: 20px;
  }

  .banner-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-cart,
  .btn-favorite {
    width: 100%;
    text-align: center;
  }

  .slider-arrow {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .section-header {
    flex-direction: column;
    gap: 10px;
  }

  .cards-grid,
  .catalog-grid,
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .catalog-section-two {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 10px;
  }

  .catalog-setting {
    flex-shrink: 0;
  }

  .reviews-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .reviews-header .section-heading {
    text-align: left;
  }

  .trustpilot-badge {
    flex-direction: column;
    text-align: center;
  }

  .trustpilot-info {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .home {
    margin: 0;
  }

  .hero-banner {
    padding: 10px 10px 30px;
    border-radius: 0;
  }

  .slider-container {
    border-radius: 0;
    height: 40vh;
    min-height: 250px;
  }

  .banner-title {
    font-size: 24px;
  }

  .banner-desc {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .banner-price-row {
    margin-bottom: 16px;
  }

  .price-current {
    font-size: 20px;
  }

  .section-heading {
    font-size: 20px;
  }

  .cards-grid,
  .catalog-grid,
  .sales-grid,
  .blog-grid,
  .reviews-grid {
    gap: 15px;
  }

  .btn-cart,
  .btn-favorite,
  .btn-catalog,
  .btn-blog,
  .btn-leave-review {
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (max-width: 375px) {
  .banner-title {
    font-size: 20px;
  }

  .banner-desc {
    font-size: 13px;
  }

  .section-heading {
    font-size: 18px;
  }
}
</style>