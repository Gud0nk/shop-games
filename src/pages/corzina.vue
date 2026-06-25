<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cartItems = ref([
  {
    id: 1,
    title: 'Minecraft',
    price: 349,
    discount: 25,
    oldPrice: 599,
    image: '/corzina/minecraft.png',
    region: 'Россия и страны СНГ',
    service: 'Steam',
    quantity: 1
  },
  {
    id: 2,
    title: 'Minecraft',
    price: 349,
    discount: 25,
    oldPrice: 599,
    image: '/corzina/minecraft.png',
    region: 'Россия и страны СНГ',
    service: 'Steam',
    quantity: 1
  },
  {
    id: 3,
    title: 'Minecraft',
    price: 349,
    discount: 25,
    oldPrice: 599,
    image: '/corzina/minecraft.png',
    region: 'Россия и страны СНГ',
    service: 'Steam',
    quantity: 1
  }
])
const agreed = ref(false)
const totalItems = computed(() => cartItems.value.length)
const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const removeItem = (id) => {cartItems.value = cartItems.value.filter(item => item.id !== id)}
const increaseQuantity = (item) => {item.quantity++}
const decreaseQuantity = (item) => {if (item.quantity > 1) item.quantity--}
const checkout = () => {
  if (!agreed.value) return
  console.log('Checkout')
}

</script>

<template>
  <div class="cart-page">
    <div class="cart-container">
      <div class="cart-header">
        <h1 class="cart-title">Корзина <span class="cart-count">{{ totalItems }}</span></h1>
      </div>

      <div class="cart-layout">
        <div class="cart-main">
          <div class="login-banner">
            <div class="banner-bg"></div>
            <div class="banner-overlay"></div>
            <div class="banner-content">
              <h2 class="banner-title">Войдите или зарегистрируйтесь</h2>
              <p class="banner-desc">
                Вы сможете накапливать бонусные рубли<br>
                и использовать их при оплате до <strong>50% стоимости</strong> товаров.
              </p>
              <button class="btn-login">Войти</button>
            </div>
          </div>

          <div class="cart-items">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="item-image-wrapper">
                <img :src="item.image" :alt="item.title" class="item-image">
              </div>

              <div class="item-info">
                <div class="item-header">
                  <h3 class="item-title">{{ item.title }}</h3>
                  <button class="btn-remove" @click="removeItem(item.id)">✕</button>
                </div>

                <div class="item-price-row">
                  <span class="item-price">{{ formatPrice(item.price) }} ₽</span>
                  <span class="item-discount">-{{ item.discount }}%</span>
                  <span class="item-old-price">{{ formatPrice(item.oldPrice) }} ₽</span>
                </div>

                <div class="item-specs">
                  <div class="spec">
                    <span class="spec-label">Регион активации:</span>
                    <span class="spec-value">{{ item.region }}</span>
                  </div>
                  <div class="spec">
                    <span class="spec-label">Сервис активации:</span>
                    <span class="spec-value">{{ item.service }}</span>
                  </div>
                </div>
              </div>

              <div class="item-actions">
                <div class="quantity-control">
                  <button class="qty-btn" @click="decreaseQuantity(item)">−</button>
                  <span class="qty-value">{{ item.quantity }}</span>
                  <button class="qty-btn" @click="increaseQuantity(item)">+</button>
                </div>
              </div>

              <button class="btn-favorite">♡</button>
            </div>
          </div>
        </div>
        <div class="cart-sidebar">
          <div class="summary-card">
            <div class="summary-count">{{ totalItems }} товаров</div>
            <div class="summary-total">{{ formatPrice(totalPrice) }} ₽</div>

            <button class="btn-checkout" :disabled="!agreed" @click="checkout">
              Оформить заказ
            </button>

            <label class="agreement">
              <input type="checkbox" v-model="agreed" class="agreement-checkbox">
              <span class="agreement-text">
                Покупая данный товар, я подтверждаю, что ознакомился и согласен с
                <a href="#" class="agreement-link">условиями</a> и
                <a href="#" class="agreement-link">условия магазина</a>
              </span>
            </label>

            <div class="coupon-block">
              <div class="coupon-icon">%</div>
              <p class="coupon-text">
                Если у вас есть купон на скидку. Вы сможете ввести его на следующем этапе
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif ;}
.cart-page {
  background: #06030F;
  min-height: 100vh;
  color: #fff;
  padding: 40px 0 80px;
  margin: -10px;
}

.cart-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 200px;
}

.cart-header {
  margin-bottom: 32px;
}

.cart-title {
  font-size: 42px;
  font-weight: 900;
  margin: 0;
  color: #fff;
}

.cart-count {
  color: #4caf50;
  font-weight: 900;
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;
}

.login-banner {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  padding: 40px;
  margin-bottom: 32px;
  min-height: 180px;
  display: flex;
  align-items: center;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../public/corzina/back.png");
  z-index: 1;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.banner-content {
  position: relative;
  z-index: 3;
  max-width: 500px;
}

.banner-title {
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 12px 0;
  color: #fff;
}

.banner-desc {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 24px 0;
}

.banner-desc strong {
  color: #4caf50;
}

.btn-login {
  background: #fff;
  color: #06030f;
  border: none;
  padding: 12px 32px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-login:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: #06030f;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.item-image-wrapper {
  width: 120px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.item-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #fff;
}

.btn-remove {
  background: none;
  border: none;
  color: #666;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s;
}

.btn-remove:hover {
  color: #fff;
}

.item-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.item-price {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
}

.item-discount {
  color: #4caf50;
  font-size: 14px;
  font-weight: 600;
}

.item-old-price {
  color: #666;
  font-size: 14px;
  text-decoration: line-through;
}

.item-specs {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.spec {
  font-size: 13px;
}

.spec-label {
  color: #888;
  margin-right: 6px;
}

.spec-value {
  color: #ccc;
  font-weight: 600;
}

.item-actions {
  display: flex;
  align-items: center;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 6px 12px;
}

.qty-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s;
}

.qty-btn:hover {
  color: #4caf50;
}

.qty-value {
  font-size: 16px;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
}

.btn-favorite {
  background: none;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s;
}

.btn-favorite:hover {
  color: #4caf50;
}

.cart-sidebar {
  position: sticky;
  top: 20px;
}

.summary-card {
  background: #06030f;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summary-count {
  text-align: center;
  font-size: 16px;
  color: #aaa;
}

.summary-total {
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  color: #fff;
}

.btn-checkout {
  width: 100%;
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-checkout:hover:not(:disabled) {
  background: #43a047;
  transform: translateY(-1px);
}

.btn-checkout:disabled {
  background: #333;
  color: #666;
  cursor: not-allowed;
}

.agreement {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  cursor: pointer;
}

.agreement-checkbox {
  margin-top: 3px;
  accent-color: #4caf50;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.agreement-text {
  font-size: 13px;
  color: #aaa;
  line-height: 1.5;
}

.agreement-link {
  color: #4caf50;
  text-decoration: none;
}

.agreement-link:hover {
  text-decoration: underline;
}

.coupon-block {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #06030f;
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-radius: 12px;
  align-items: flex-start;
}

.coupon-icon {
  width: 32px;
  height: 32px;

  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4caf50;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
}

.coupon-text {
  font-size: 13px;
  color: #aaa;
  line-height: 1.5;
  margin: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .cart-container {
    padding: 0 60px;
  }

  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-container {
    padding: 0 20px;
  }

  .cart-title {
    font-size: 28px;
  }

  .cart-item {
    grid-template-columns: 80px 1fr;
    gap: 12px;
  }

  .item-image-wrapper {
    width: 80px;
    height: 110px;
  }

  .item-actions {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }

  .btn-favorite {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .banner-title {
    font-size: 22px;
  }

  .summary-total {
    font-size: 28px;
  }
}
</style>