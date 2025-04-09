// src/components/Header.vue
<template>
  <div class="header-wrapper">
    <div class="header-container">
      <router-link to="/" class="logo-link" @click="$emit('to-home')">
        <img src="@/assets/logo.png" alt="KCS2 Logo" class="logo-image" />
      </router-link>
      <router-link to="/" class="header-link" @click="$emit('to-home')">
        <div class="header-text">
          <h1>KCS2</h1>
          <h4>Kubernetes Cluster Security Scanner</h4>
        </div>
      </router-link>
    </div>
    <MenuBar 
      :menuMarginTop="menuMarginTop"
      @show-about="$emit('show-about')"
      @show-system="$emit('show-system')"
      
    />
    <!-- 웹소켓 테스트용 -->
    <!-- @show-websocket="$emit('show-websocket')" -->
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue';

export default {
  props: ['menuMarginTop'],
  components: {
    MenuBar
  }
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
}

.header-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.logo-link {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.logo-image {
  width: 60px;
  height: auto;
}

.header-link {
  text-decoration: none;
  color: inherit;
}

.header-text {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
}

.header-text h1 {
  font-size: 4em;
  margin: 0;
}

.header-text h4 {
  font-size: 2em;
  margin: 0;
}
</style>