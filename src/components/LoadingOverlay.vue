// src/components/LoadingOverlay.vue
<template>
  <div class="black-bg" v-if="isLoading">
    <div class="container">
      <div class="spinner" style="margin-top: 20px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isLoading']
}
</script>