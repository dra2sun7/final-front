<template>
  <div class="app-container">
    <AppHeader
      :menuMarginTop="menuMarginTop"
      @to-home="toTheHome"
      @show-about="showAbout"
      @show-system="showSystem"
      @show-websocket="showWebSocket"
    />
    <SystemInfo v-if="currentView === 'about'" />
    <SystemSolution
      v-if="currentView === 'solution'"
      @start-loading="isLoading = true"
      @stop-loading="isLoading = false; flag = true"
      @update-log="logMessage = $event"
    />
    <WebSocketView v-if="currentView === 'WebSocket'" />
    <LoadingOverlay :isLoading="isLoading" />
    <LogViewer :flag="flag" :logMessage="logMessage" @close-log="flag = false" />
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import SystemInfo from './components/SystemInfo.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import LogViewer from './components/LogViewer.vue';
import SystemSolution from './components/SystemSolution.vue';
import WebSocketView from './components/WebsocketView.vue';

export default {
  components: { AppHeader, SystemInfo, WebSocketView, LoadingOverlay, LogViewer, SystemSolution },
  data() {
    return {
      isLoading: false,
      flag: false,
      logMessage: [],
      menuMarginTop: 40,
      currentView: 'Introduce'  // 'about' 또는 'solution'
    };
  },
  methods: {
    toTheHome() {
      this.flag = false;
      this.isLoading = false;
      this.logMessage = [];
      this.currentView = null;
      this.scrollToTop();
    },
    showAbout() {
      this.currentView = 'about';
      this.$nextTick(this.scrollToTop); // 컴포넌트 렌더 후 스크롤
    },
    showSystem() {
      this.currentView = 'solution';
      this.$nextTick(this.scrollToTop); // 컴포넌트 렌더 후 스크롤
    },
    showWebSocket() {
      this.currentView = 'WebSocket';     // WebSocketView가 표시되도록 변경
      this.$nextTick(this.scrollToTop);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.app-container {
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}
</style>
