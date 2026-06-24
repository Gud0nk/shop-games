<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const getTagColor = (tag) => {
  if (tag === 'Новинка') return '#FF4C00'
  if (tag === 'Хид продаж') return '#FF3030'
  return '#666'
}
</script>

<template>
  <div class="catalog-card">
    <div class="card-image-wrapper">
      <img :src="game.image" :alt="game.title" class="card-image">

      <div v-if="game.tags && game.tags.length" class="card-tags">
        <span
            v-for="(tag, idx) in game.tags"
            :key="idx"
            class="tag"
            :style="{ background: getTagColor(tag) }"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="card-info">
      <div class="card-price-row">
        <span class="card-price">{{ formatPrice(game.price) }} ₽</span>
        <span class="card-discount">-{{ game.discount }}%</span>
        <span class="card-old-price">{{ formatPrice(game.oldPrice) }} ₽</span>
      </div>

      <p class="card-title">{{ game.title }}</p>

      <div class="card-platforms">
        <span v-for="(platform, idx) in game.platforms" :key="idx" class="platform">
          <span class="platform-icon">●</span>
          {{ platform }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-card {
  background: #06030f;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.catalog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.card-image-wrapper {
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-tags {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.card-info {
  padding: 16px;
}

.card-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.card-price {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.card-discount {
  color: #4caf50;
  font-size: 12px;
  font-weight: 600;
}

.card-old-price {
  color: #666;
  font-size: 12px;
  text-decoration: line-through;
}

.card-title {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 10px 0;
  line-height: 1.3;
  font-weight: 500;
}

.card-platforms {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 14px;
}

.platform {
  font-size: 11px;
  color: #888;
  display: flex;
  align-items: center;
  gap: 4px;
}

.platform-icon {
  font-size: 8px;
  color: #666;
}
</style>