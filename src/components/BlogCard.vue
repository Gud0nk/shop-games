<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="blog-card">
    <div class="card-image-wrapper">
      <img :src="`${baseUrl}${post.image}`" :alt="post.title" class="card-image">
    </div>

    <div class="card-info">
      <h3 class="card-title">{{ post.title }}</h3>
      <p class="card-subtitle">{{ post.subtitle }}</p>
      <span class="card-date">{{ post.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  background: #06030f;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.card-image-wrapper {
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
}

.card-info {
  padding: 16px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.card-subtitle {
  font-size: 13px;
  color: #888;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.card-date {
  font-size: 11px;
  color: #666;
}
</style>