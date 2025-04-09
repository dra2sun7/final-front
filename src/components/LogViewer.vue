<!-- src/components/LogViewer.vue -->
<template>
  <div class="log-overlay" v-if="flag">
    <div class="log-container">
      <div class="text-box">
        <p v-if="logMessage.length === 0">아무것도 가져오지 못했습니다.</p>
        <p v-else v-for="(message, idx) in logMessage" :key="idx" v-html="formatLogMessage(message)"></p>
      </div>
      <button type="button" class="btn btn-primary" @click="$emit('close-log')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean,
      required: true
    },
    logMessage: {
      type: Array,
      default: () => []  // 기본값: 빈 배열
    }
  },
  methods: {
    formatLogMessage(rawLog) {
      return rawLog.replace(/\n/g, '<br>');
    }
  }
}
</script>

<style scoped>
.log-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.log-container {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
}

.text-box {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.btn {
  background-color: MidnightBlue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
