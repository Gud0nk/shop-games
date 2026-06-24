<script setup>
const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})
const stars = Array.from({ length: 1 }, (_, i) => i < props.review.rating)
</script>

<template>
  <div class="review-card">
    <div class="review-header">
      <div class="stars">
        <span v-for="(star, idx) in stars" :key="idx" class="star"><img src="../../public/main/star.png" alt=""></span>
      </div>
      <span class="review-date">{{ review.date }}</span>
    </div>

    <div class="review-author">
      <strong>{{ review.author }}</strong>
    </div>

    <p class="review-text">{{ review.text }}</p>

    <div class="review-footer">
      <span class="review-platform">{{ review.platform }}</span>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  background: #06030f;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.2s;
}

.review-card:hover {
  transform: translateY(-2px);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #4caf50;
  font-size: 18px;
}

.review-date {
  font-size: 12px;
  color: #666;
}

.review-author {
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
}

.review-author strong {
  font-weight: 600;
}

.review-text {
  font-size: 13px;
  color: #aaa;
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.review-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 12px;
}

.review-platform {
  font-size: 11px;
  color: #888;
}
</style>