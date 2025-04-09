<!-- src/components/SystemSolution.vue -->
<template>
  <div class="solution-container">
    <h2>Solution</h2>
    <p>쿠버네티스 API Server 주소와 Token을 입력해 점검을 시작할 수 있습니다.</p>
    
    <div class="form-group">
      <label for="apiServer">URL</label>
      <input type="text" id="apiServer" v-model="apiServer" placeholder="URL을 입력하세요">
    </div>

    <div class="form-group">
      <label for="token">Token</label>
      <input type="password" id="token" v-model="token" placeholder="Token을 입력하세요">
    </div>

    <button class="submit-button" @click="sendDataToBackend">보안 점검 시작</button>

    <!-- 로그 뷰어 보여주기 -->
    <!-- <LogViewer
      :flag="showLogViewer"
      :logMessage="logMessages"
      @close-log="handleCloseLog"
    /> -->
  </div>
</template>

<script>
import axios from 'axios';
// import LogViewer from './LogViewer.vue'

export default {
  // components: { LogViewer },
  data() {
    return {
      showLogViewer: false,
      apiServer: '',
      token: '',
      logMessage: []
    };
  },
  methods: {
    sendDataToBackend() {
      this.$emit('start-loading'); // 로딩 시작

      axios.post('http://localhost:8080/api/runCurl', {
        apiServer: this.apiServer,
        token: this.token
      })
      .then(response => {
        const result = response.data;
        const logs = (!result || result.length === 0) ? [] : (Array.isArray(result) ? result : [result]);
        this.$emit('update-log', logs);  // 👉 부모에게 로그 전달
      })
      .catch(error => {
        this.$emit('update-log', ['오류가 발생했습니다: ' + error.message]);
      })
      .finally(() => {
        this.$emit('stop-loading'); // 로딩 끝
      });
    },
    handleCloseLog() {
      this.showLogViewer = false;
      this.$emit('stop-loading'); // 혹시 열려있던 로딩도 같이 종료
    }
  }
}
</script>

<style scoped>
.solution-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 1.1em;
  line-height: 1.6;
}

.solution-container h2 {
  margin-bottom: 16px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

.submit-button {
  margin-top: 10px;
  padding: 12px 24px;
  font-size: 1.1em;
  background-color: MidnightBlue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #001f66;
}
</style>
