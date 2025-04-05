// src/App.vue
<template>
  <div class="app-container">
    <AppHeader :menuMarginTop="menuMarginTop" @to-home="toTheHome" @show-about="showAbout" @show-system="showSystem" />
    <SystemInfo :v-if="showSystem" />
    <LoadingOverlay :isLoading="isLoading" />
    <LogViewer :flag="flag" :logMessage="logMessage" @close-log="flag = false" />
    <SystemSolution @start-loading="isLoading = true" @stop-loading="isLoading = false; flag = true" @update-log="logMessage = $event" />
  </div>
</template>

<style scoped>
.app-container {
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}
</style>  

<script>
import AppHeader from './components/AppHeader.vue';
import SystemInfo from './components/SystemInfo.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import LogViewer from './components/LogViewer.vue';
import SystemSolution from './components/SystemSolution.vue';

export default {
  components: { AppHeader, SystemInfo, LoadingOverlay, LogViewer, SystemSolution },
  data() {
    return {
      isLoading: false,
      flag: false,
      logMessage: [],
      menuMarginTop: 40
    };
  },
  methods: {
    toTheHome() { this.flag = false; this.isLoading = false; this.logMessage = []; },
    showAbout() { console.log("Show about section"); },
    showSystem() { console.log("Show system section"); }
  }
}
</script>