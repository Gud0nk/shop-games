<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
</script>

<template>
  <div class="game-card">
    <div class="card-image">
      <img :src="game.image" :alt="game.title" class="card-img">
      <img :src="game.tag" alt="">
      <div class="card-tag">{{ game.tag }}</div>
      <button class="card-fav">♡</button>
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
          {{ platform }}
        </span>
      </div>
    </div>


  </div>
</template>

<style scoped>
.game-card {
  background: #06030f;
  border-radius: 12px;
  height: 620px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.card-image {
  width: 300px;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
  z-index: 1;
}

.card-fav {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  z-index: 1;
}

.card-fav:hover {
  background: rgba(255, 255, 255, 0.25);
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
  margin-bottom: 8px;
  line-height: 1.3;
}

.card-platforms {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.platform {
  font-size: 11px;
  color: #888;
  background: rgba(255, 255, 255, 0.05);
  padding: 2px 8px;
  border-radius: 4px;
}

.card-btn-cart {
  width: calc(100% - 32px);
  margin: 0 16px 16px;
  padding: 10px;
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.card-btn-cart:hover {
  background: #43a047;
}
</style>