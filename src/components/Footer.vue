<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Payment logos -->
      <div class="payment-logos">
        <span class="pay-logo">PayPal</span>
        <span class="pay-logo">MasterCard</span>
        <span class="pay-logo">VISA</span>
        <span class="pay-logo">МИР</span>
        <span class="pay-logo">WebMoney</span>
        <span class="pay-logo">PayPal</span>
        <span class="pay-logo">PayPal</span>
      </div>

      <!-- Main columns -->
      <div class="footer-columns">
        <div class="footer-column">
          <h3 class="column-title">О компании</h3>
          <ul class="column-list">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Вакансии</a></li>
            <li><a href="#">Реквизиты</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">Договор оферты</h3>
          <ul class="column-list">
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">Договор оферты</h3>
          <ul class="column-list">
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </div>

        <div class="footer-badges">
          <div class="badge">
            <div class="badge-icon wm"></div>
            <div class="badge-text">
              <img src="../../public/" alt="">
            </div>
          </div>
          <div class="badge">
            <div class="badge-icon google"></div>
            <div class="badge-text">
              <span class="badge-label">Safe Browsing</span>
              <span class="badge-name">Google</span>
            </div>
          </div>
        </div>
      </div>
      <p class="disclaimer">
        Все продаваемые ключи закупаются у официальных дистрибьюторов издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
      </p>
      <div class="footer-bottom">
        <a href="#" class="legal-link">Правовая информация</a>
        <span class="copyright">Интернет-магазин игр «Playnchill» © 2022</span>
        <div class="footer-right">
          <span class="lang-currency">RU $</span>
          <div class="social-icons">
            <img src="../../public/icon/Vector-1.png" alt="">
            <img src="../../public/icon/Vector-2.png" alt="">
            <img src="../../public/icon/Vector-3.png" alt="">
            <img src="../../public/icon/Vector.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0a0815;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #fff;
  padding: 40px 0 20px;
  margin-top: 80px;
}

.footer-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 200px;
}

/* Payment logos */
.payment-logos {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.pay-logo {
  font-size: 28px;
  font-weight: 900;
  font-style: italic;
  color: rgba(255, 255, 255, 0.25);
  letter-spacing: 1px;
}

/* Columns */
.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 40px;
  margin-bottom: 40px;
  align-items: start;
}

.column-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px 0;
}

.column-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.column-list a {
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.column-list a:hover {
  color: #fff;
}

/* Badges */
.footer-badges {
  display: flex;
  gap: 20px;
  padding-top: 40px;
}

.badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 12px;
  border-radius: 8px;
}

.badge-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
}

.badge-icon.wm {
  background: #0070ba;
}

.badge-icon.google {
  background: #4caf50;
}

.badge-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.badge-label {
  font-size: 11px;
  color: #888;
}

.badge-name {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
}

/* Disclaimer */
.disclaimer {
  font-size: 12px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 30px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Bottom row */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.legal-link {
  color: #4caf50;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s;
}

.legal-link:hover {
  opacity: 0.8;
}

.copyright {
  font-size: 13px;
  color: #888;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-currency {
  font-size: 13px;
  color: #fff;
  cursor: pointer;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  transition: all 0.2s;
}

.social-icon:hover {
  background: #4caf50;
  color: #fff;
}

@media (max-width: 1200px) {
  .footer-container {
    padding: 0 60px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 20px;
  }

  .footer-columns {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .payment-logos {
    gap: 20px;
  }

  .pay-logo {
    font-size: 20px;
  }
}
</style>