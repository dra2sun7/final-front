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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiServer: '',
      token: ''
    };
  },
  methods: {
  //   sendDataToBackend() {
  //     this.$emit('start-loading');
  //     axios.post('http://localhost:8080/api/runCurl', {
  //       apiServer: this.apiServer,
  //       token: this.token
  //     })
  //     .then(response => {
  //       this.$emit('update-log', response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       this.$emit('stop-loading');
  //     });
  //   }
      sendDataToBackend() {
      this.$emit('start-loading');
      axios.post('http://localhost:8080/api/runCurl', {
        apiServer: this.apiServer,
        token: this.token
      })
      .then(response => {
        // 결과가 없는 경우에도 대응
        const result = response.data;
        if (!result || result.length === 0) {
          this.$emit('update-log', []);
        } else {
          this.$emit('update-log', Array.isArray(result) ? result : [result]);
        }
      })
      .catch(error => {
        console.error(error);
        this.$emit('update-log', ['오류가 발생했습니다: ' + error.message]);
      })
      .finally(() => {
        this.$emit('stop-loading');  // 여기서 flag = true 처리됨
      });
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
