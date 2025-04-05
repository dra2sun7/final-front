<!-- src/components/LoadingOverlay.vue -->
<template>
  <div class="loading-overlay" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: ['isLoading']
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px); /* 흐림 효과 */
  background-color: rgba(0, 0, 0, 0.4); /* 어두운 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid MidnightBlue;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
