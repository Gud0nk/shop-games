<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
@font-face {  font-family: 'Manrope';  src: url("/css/fonts/Manrope.ttf"); }
body {
  font-family: 'Manrope', sans-serif;
  background-color: black;
  color: white;
}
#app {
  min-height: 100vh;
}
</style>
