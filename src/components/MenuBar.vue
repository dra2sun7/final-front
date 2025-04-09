// src/components/MenuBar.vue
<template>
  <div class="menu-bar-separator"></div>
  <div class="menu-container">
    <div class="menu-box">
      <a href="#" @click="$emit('show-about')">Introduce</a>
    </div>
    <div class="menu-box">
      <a href="#" @click="$emit('show-system')">Solution</a>
    </div>
    <!-- 웹소켓 테스트용 -->
    <!-- <div class="menu-box">
      <a href="#" @click="$emit('show-websocket')">WebSocket</a>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['menuMarginTop']
}
</script>

<style scoped>
.menu-bar-separator {
  width: 100%;
  height: 4px;
  background-color: MidnightBlue;
  margin-top: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.menu-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 40px auto;
}
  
.menu-box {
  background-color: #f5f5f5;
  padding: 16px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.menu-box a {
  color: #333;
  text-decoration: none;
  font-size: 1.6em;
  transition: text-decoration 0.3s;
}

.menu-box a:hover {
  text-decoration: underline;
}
</style>