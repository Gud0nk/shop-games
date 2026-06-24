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
</script>

<template>
  <div class="sale-card">
    <div class="card-image-wrapper">
      <img :src="game.image" :alt="game.title" class="card-image">
    </div>

    <div class="card-info">
      <div class="card-price-row">
        <span class="card-price">{{ formatPrice(game.price) }} ₽</span>
        <span class="card-discount">{{ game.discount }}%</span>
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
.sale-card {
  height: 440px;
  background: #06030f;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.sale-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.card-image-wrapper {
  height: 319px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  background: #4caf50;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
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