<!-- WebSocketView.vue -->
<template>
    <div class="websocket-container">
      <h2>WebSocket 테스트</h2>
      <div class="form-group">
        <label>메시지 입력</label>
        <input type="text" v-model="message" placeholder="서버로 보낼 메시지">
        <button @click="sendMessage">전송</button>
      </div>
      <div class="log-box">
        <h3>서버 응답</h3>
        <p v-for="(msg, index) in logs" :key="index">{{ msg }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      socket: null,
      message: '',
      logs: []
    };
  },
  mounted() {
    this.socket = new WebSocket('ws://localhost:8080/ws');
    this.socket.onmessage = (event) => {
      this.logs.push(event.data);
    };
  },
  methods: {
    sendMessage() {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(this.message);
        this.message = '';
      } else {
        alert('WebSocket 연결이 되어있지 않습니다.');
      }
    }
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close();
    }
  }
};
</script>

  
  <style scoped>
  .websocket-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f5f5f5;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    margin-right: 10px;
    font-size: 1em;
    width: 60%;
  }
  
  button {
    padding: 10px 20px;
    background-color: MidnightBlue;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .log-box {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  