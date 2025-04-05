<template>
    <div class="description-container">
      <h2>KCS2 서비스는</h2>
      <p>
        KCS2 (Kubernetes Cluster Security Scanner)는 쿠버네티스 클러스터의 보안 구성을 점검하고, 보안 취약점을 탐지하여
        보안성을 강화할 수 있도록 도와주는 도구입니다.
      </p>
      <ul>
        <li>kube-bench 도구를 기반으로 보안 점검 수행</li>
        <li>해당 로그를 실시간으로 불러와 사용자에게 제공</li>
        <li>사용자 친화적인 UI를 통한 결과 시각화</li>
        <li>보안 권고 사항 및 개선 방법 제공</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SystemInfo'
  }
  </script>
  
  <style scoped>
  .description-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f5f5f5;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-size: 1.1em;
    line-height: 1.6;
  }
  
  .description-container h2 {
    margin-bottom: 16px;
    color: #2c3e50;
  }
  
  .description-container ul {
    padding-left: 20px;
  }
  
  .description-container li {
    margin-bottom: 10px;
  }
  </style>
  