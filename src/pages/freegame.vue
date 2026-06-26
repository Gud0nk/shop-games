<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('giveaway')

// Комментарии
const comments = ref([
  {
    id: 1,
    author: 'Юлия В.',
    text: 'Первый мой увлажнитель. Хотела ещё приобрести когда родился ребёнок. Наткнулась на акцию и сразу же заказала прочитав про негохорошие отзывы. Стильно выглядит. Лужи под ним не остаётся. За 1,5 часа увлажнил с 33% до 40. Большой объём. Все хорошо было упаковано.'
  },
  {
    id: 2,
    author: 'Юлия В.',
    text: 'Первый мой увлажнитель. Хотела ещё приобрести когда родился ребёнок. Наткнулась на акцию и сразу же заказала прочитав про негохорошие отзывы. Стильно выглядит. Лужи под ним не остаётся. За 1,5 часа увлажнил с 33% до 40. Большой объём. Все хорошо было упаковано.'
  },
  {
    id: 3,
    author: 'Юлия В.',
    text: 'Первый мой увлажнитель. Хотела ещё приобрести когда родился ребёнок. Наткнулась на акцию и сразу же заказала прочитав про негохорошие отзывы. Стильно выглядит. Лужи под ним не остаётся. За 1,5 часа увлажнил с 33% до 40. Большой объём. Все хорошо было упаковано.'
  }
])

// История розыгрышей
const giveawayHistory = ref([
  {
    id: 1,
    game: 'Cities in Motion 2',
    image: '/main/squad-1.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar1.jpg'
  },
  {
    id: 2,
    game: 'Unravel Two',
    image: '/main/squad-2.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar2.jpg'
  },
  {
    id: 3,
    game: 'Ori',
    image: '/main/squad-3.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar3.jpg'
  },
  {
    id: 4,
    game: 'Cities in Motion 2',
    image: '/main/squad-4.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar4.jpg'
  },
  {
    id: 5,
    game: 'Cities in Motion 2',
    image: '/main/journey.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar5.jpg'
  },
  {
    id: 6,
    game: 'Short Hike',
    image: '/main/shorthike.jpg',
    date: '29 апреля 2022',
    participants: 23,
    winner: 'Hanzad Whalen',
    winnerAvatar: '/main/avatar6.jpg'
  }
])

// Таймер
let timerInterval = null
const timer = ref({
  days: 3,
  hours: 12,
  minutes: 45,
  seconds: 4
})

const startTimer = () => {
  timerInterval = setInterval(() => {
    timer.value.seconds--
    if (timer.value.seconds < 0) {
      timer.value.seconds = 59
      timer.value.minutes--
      if (timer.value.minutes < 0) {
        timer.value.minutes = 59
        timer.value.hours--
        if (timer.value.hours < 0) {
          timer.value.hours = 23
          timer.value.days--
          if (timer.value.days < 0) {
            timer.value.days = 0
            timer.value.hours = 0
            timer.value.minutes = 0
            timer.value.seconds = 0
            clearInterval(timerInterval)
          }
        }
      }
    }
  }, 1000)
}

onMounted(() => {startTimer()})
onUnmounted(() => {if (timerInterval) clearInterval(timerInterval)})

</script>

<template>
  <div class="freegame-page">
    <section class="hero-banner">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="giveaway-card">
          <div class="card-header">
            <span class="giveaway-id">#5966</span>
            <span class="game-name">Cities in Motion 2</span>
          </div>

          <h1 class="card-title">Бесплатные<br>розыгрыши игр</h1>

          <p class="card-subtitle">До конца раздачи осталось</p>

          <div class="timer">
            <div class="timer-item">
              <span class="timer-label">Дни</span>
              <span class="timer-value">{{ String(timer.days).padStart(2, '0') }}</span>
            </div>
            <div class="timer-item">
              <span class="timer-label">Часы</span>
              <span class="timer-value">{{ String(timer.hours).padStart(2, '0') }}</span>
            </div>
            <div class="timer-item">
              <span class="timer-label">Минуты</span>
              <span class="timer-value">{{ String(timer.minutes).padStart(2, '0') }}</span>
            </div>
            <div class="timer-item">
              <span class="timer-label">Секунды</span>
              <span class="timer-value">{{ String(timer.seconds).padStart(2, '0') }}</span>
            </div>
          </div>

          <button class="btn-participate">Участвовать</button>
          <button class="btn-share">Поделиться в Facebook</button>
        </div>

        <div class="participants-counter">
          <img src="../../public/person-icon.png" alt="">
          <span class="participants-count">199</span>
        </div>
      </div>
    </section>

    <section class="tabs-section">
      <div class="tabs-container">
        <div class="tabs">
          <button
              :class="['tab', { active: activeTab === 'giveaway' }]"
              @click="activeTab = 'giveaway'"
          >
            Розыгрыш
          </button>
          <button
              :class="['tab', { active: activeTab === 'history' }]"
              @click="activeTab = 'history'"
          >
            История розыгрышей
          </button>
        </div>

        <div v-if="activeTab === 'giveaway'" class="tab-content">
          <div class="info-block">
            <h2 class="info-title">Сегодня у каждого есть шанс получить бесплатно ключ<br>от игры Cities in Motion 2</h2>
            <p class="info-text">
              Ежедневные <strong>бесплатные раздачи</strong> лицензионных ключей для игр Steam, Origin, Uplay, GOG на Playnchill в 19:00 по МСК
            </p>
          </div>

          <div class="rules-block">
            <h3 class="rules-title">Как участвовать в конкурсе</h3>
            <p class="rules-text">
              На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться.
            </p>
          </div>

          <div class="comments-section">
            <div class="comments-container">
              <h2 class="comments-title">Комментарии <span class="comments-count">24</span></h2>

              <div class="comments-list">
                <div v-for="comment in comments" :key="comment.id" class="comment-item">
                  <div class="comment-header">
                    <div class="comment-avatar"></div>
                    <span class="comment-author">{{ comment.author }}</span>
                  </div>
                  <p class="comment-text">{{ comment.text }}</p>
                </div>
              </div>

              <button class="btn-show-all">Смотреть все</button>
            </div>
          </div>
        </div>
        
        <div v-if="activeTab === 'history'" class="tab-content history-content">
          <div class="history-list">
            <div v-for="item in giveawayHistory" :key="item.id" class="history-item">
              <div class="history-image">
                <img :src="item.image" :alt="item.game">
              </div>
              <div class="history-info">
                <h3 class="history-game">{{ item.game }}</h3>
                <div class="history-details">
                  <span class="history-date">Раздан: {{ item.date }}</span>
                  <span class="history-participants">Участников: {{ item.participants }}</span>
                </div>
              </div>
              <div class="history-winner">
                <div class="winner-avatar"></div>
                <span class="winner-name">{{ item.winner }}</span>
              </div>
            </div>
          </div>

          <button class="btn-show-all">Смотреть все</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* { font-family: "Manrope", sans-serif}
.freegame-page {
  background: #06030F;
  min-height: 100vh;
  color: #fff;
  margin: -10px;
}

.hero-banner {
  position: relative;
  height: 680px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/main/need-for-speed.png') center/cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(6, 3, 15, 0.95) 0%, rgba(6, 3, 15, 0.7) 50%, rgba(6, 3, 15, 0.3) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 1500px;
  margin: 0 auto;
  padding: 80px 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.giveaway-card {
  background: rgba(18, 18, 42, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  max-width: 500px;
  backdrop-filter: blur(10px);
}

.card-header {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  font-size: 16px;
}

.giveaway-id {
  color: #888;
}

.game-name {
  color: #77BE1D;
  font-weight: 700;
}

.card-title {
  font-size: 42px;
  font-weight: 900;
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.card-subtitle {
  font-size: 14px;
  color: #aaa;
  margin: 0 0 24px 0;
}

.timer {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.timer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.timer-label {
  font-size: 12px;
  color: #888;
}

.timer-value {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  min-width: 70px;
  text-align: center;
}

.btn-participate {
  width: 100%;
  background: #77BE1D;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 16px;
  font-family: inherit;
}

.btn-participate:hover {
  transform: translateY(-2px);
}

.btn-share {
  width: 100%;
  background: transparent;
  color: dodgerblue;
  border: none;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;
}

.btn-share:hover {
  opacity: 0.8;
}

.participants-counter {
  background: rgba(18, 18, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(10px);
}

.participants-icon {
  font-size: 20px;
}

.participants-count {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.tabs-section {
  padding: 60px 200px;
}

.tabs-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.tabs {
  display: flex;
  gap: 16px;
}

.tab {
  flex: 1;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #77BE1D;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.tab:hover {
  background: rgba(18, 18, 42, 0.8);
  color: #fff;
}

.tab.active {
  background: rgba(76, 175, 80, 0.1);
  border-color: #77BE1D;
  color: #77BE1D;
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-block {
  background: linear-gradient(135deg, #DCAD52 0%, #C19C55 100%);
  border-radius: 16px;
  padding: 60px 40px;
  text-align: center;
}

.info-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #fff;
  line-height: 1.4;
}

.info-text {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
}

.info-text strong {
  color: #fff;
  font-weight: 700;
}

.rules-block {
  background: rgba(18, 18, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
}

.rules-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #fff;
}

.rules-text {
  font-size: 16px;
  line-height: 1.8;
  color: #aaa;
  margin: 0;
}

.history-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: rgba(18, 18, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.2s;
}

.history-item:hover {
  background: rgba(18, 18, 42, 0.8);
  border-color: rgba(119, 190, 29, 0.3);
}

.history-image {
  width: 120px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
}

.history-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.history-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.history-game {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #fff;
}

.history-details {
  display: flex;
  gap: 24px;
  font-size: 14px;
  color: #888;
}

.history-date,
.history-participants {
  display: flex;
  align-items: center;
  gap: 6px;
}

.history-winner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.winner-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  border-radius: 50%;
}

.winner-name {
  font-size: 15px;
  font-weight: 600;
  color: #77BE1D;
}

.comments-section {
  padding: 0;
}

.comments-container {
  max-width: 1500px;
  margin: 0 auto;
}

.comments-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 32px 0;
  color: #fff;
}

.comments-count {
  font-size: 20px;
  color: #666;
  font-weight: 400;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
}

.comment-item {
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.comment-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  border-radius: 50%;
}

.comment-author {
  font-size: 18px;
  font-weight: 700;
  color: #4caf50;
}

.comment-text {
  font-size: 15px;
  line-height: 1.7;
  color: #aaa;
  margin: 0;
  padding-left: 64px;
}

.btn-show-all {
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #4caf50;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-show-all:hover {
  background: rgba(76, 175, 80, 0.1);
  border-color: #4caf50;
}

@media (max-width: 1200px) {
  .hero-content,
  .tabs-section,
  .comments-section {
    padding-left: 60px;
    padding-right: 60px;
  }

  .card-title {
    font-size: 32px;
  }

  .timer-value {
    font-size: 24px;
    padding: 12px 16px;
    min-width: 60px;
  }

  .history-item {
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }

  .history-winner {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .hero-content,
  .tabs-section,
  .comments-section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-banner {
    height: auto;
    min-height: 500px;
  }

  .hero-content {
    flex-direction: column;
    gap: 24px;
  }

  .giveaway-card {
    max-width: 100%;
  }

  .card-title {
    font-size: 28px;
  }

  .timer {
    gap: 8px;
  }

  .timer-value {
    font-size: 20px;
    padding: 10px 12px;
    min-width: 50px;
  }

  .info-title {
    font-size: 22px;
  }

  .comment-text {
    padding-left: 0;
  }

  .tabs {
    flex-direction: column;
  }

  .history-item {
    grid-template-columns: 80px 1fr;
  }

  .history-image {
    width: 80px;
    height: 110px;
  }

  .history-game {
    font-size: 16px;
  }

  .history-details {
    flex-direction: column;
    gap: 6px;
  }
}
</style>