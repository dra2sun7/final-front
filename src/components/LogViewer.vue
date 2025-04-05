// src/components/LogViewer.vue
<template>
  <div class="black-bg" v-if="flag">
    <div class="container">
      <div class="text-box">
        <p v-for="message in logMessage" :key="message" v-html="formatLogMessage(message)"></p>
      </div>
      <button type="button" class="btn btn-primary" style="margin-top: 10px;" @click="$emit('close-log')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flag', 'logMessage'],
  methods: {
    formatLogMessage(rawLog) {
      return rawLog.replace(/\n/g, '<br>');
    }
  }
}
</script>
