<template>
  <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

    <div class="black-bg" v-if="isLoading==true" style="z-index: 1;">
      <div class="container">
        <div class="spinner" style="margin-top: 20px;"></div>
      </div>
    </div>

    <div class="black-bg" v-if="flag==true" style="z-index: 1;">
      <div class="container">
        <div class="text-box">
          <p v-for="message in logMessage" :key="message" v-html="formatLogMessage(message)"></p>
        </div>
      </div>
      <!-- <button type="button" class="btn btn-primary" style="margin-top: 10px;" @click="flag=false">닫기</button> -->
      <button type="button" class="btn btn-primary" style="margin-top: 10px;" @click="flag=false">닫기</button>
    </div>

    <div>
      <router-link to="/" class="header-link" @click="toTheHome">
        <h1 style="font-size: 4em;">KCS2</h1>
        <h4 style="font-size: 2em;">Kubernetes Cluster Security Scanner</h4>
      </router-link>
    </div>

    <div id='menu1' style="background-color: MidnightBlue;" :style="{ marginTop: menuMarginTop + 'px' }">
      <ul>
        <li><a href='#' @click="showAbout">Introduce</a></li>
        <li><a href='#' @click="showSystem">Solution</a></li>
      </ul>
    </div>

    <div style="background-color: LightSkyBlue; width: 100%; height: 1900px;" ref="stage1">
      <h3>
        <p style="margin-bottom: 100px">&nbsp;</p>
        <strong>
          <p style="margin-bottom: 20px; color: white; font-size: 1.3em;">KCS2 (Kubernetes Cluster Security Scanner)는</p>
          <p style="margin-bottom: 100px; color: white; font-size: 1.3em;">쿠버네티스 클러스터의 컴포넌트 및 리소스의 보안점검을 위한 도구입니다</p>
        </strong>
      </h3>      
      <img style="margin-bottom: 100px;" src="@/assets/image2.png" class="image2">
      <strong><p style="margin-bottom: 100px; font-size: 2em; color: white;">
        인터넷 보안 센터(CIS)의 CIS 벤치마크 기준에 따라 클러스터를 점검합니다
      </p></strong>

      <img src="@/assets/image1.png" class="image1">
      <p style="margin-bottom: 100px"></p>
      <strong><p style="margin-bottom: 200px; color: white; font-size: 2em;">
        저희 서비스를 통해서 Kubernetes Operator는<br>
        현재 Kubernetes Cluster의 보안 수준에 대해 빠르고 쉽게 점검할 수 있습니다
      </p></strong>
    </div>

    <div style="background-color: LightSkyBlue; height: 1000px">
      <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); width: 800px; height: 400px; margin: 0 auto;">
        <h1 style="font-size: 3em;" ref="stage3">Solution</h1>
        <h4 style="margin-right: 5px;">URL</h4>
        <div class="input-group">
          <p><input type="text" v-model="apiServer" autocomplete="off" placeholder="URL을 입력하세요"></p>
        </div>
        <h4 style="margin-right: 5px;">Token</h4>
        <div class="input-group">
          <p><input type="password" v-model="token" placeholder="Token을 입력하세요"></p>
        </div>
        <button type="button" class="btn btn-primary" @click="sendDataToBackend" style="margin-bottom: 50px">Primary</button>
      </div>
    </div>
  </div>
</template>

<script>
//import HomeButton from './components/HomeButton.vue'; // Import the HomeButton component
import axios from 'axios'

export default {
  name: 'App',
  created() {
    document.title = 'KCS2'
  },
  data(){
    return {
      inputText : "각각의 NODE에 대한 LOG",
      logMessage : [],
      usingSystem : false,
      usingAbout : false,
      flag : false,
      isLoading : false,
      apiServer : '',
      token : '',
      menuMarginTop: 40,
    }
  },
  methods: {
    toTheHome() {
      this.usingSystem = false;
      this.usingAbout = false;
      this.flag = false;
      this.isLoading = false;
      this.apiServer = '';
      this.token = '';
      this.menuMarginTop = 40;
      this.isMenuUp = false;
      this.currentComponent = null;
    },
    showAbout() {
      this.$refs.stage1.scrollIntoView({ behavior: "smooth"});
      this.usingSystem = false;
      this.usingAbout = true;
    },
    showSystem() {
      this.$refs.stage3.scrollIntoView({ behavior: "smooth"});
      this.usingAbout = false;
      this.usingSystem = true;
    },
    formatLogMessage(rawLog) {
      // Process the log message here, such as adding line breaks or other formatting
      const formattedLog = rawLog.replace(/\n/g, '<br>'); // Replace line breaks with <br> tags
      return formattedLog;
    },
    sendDataToBackend() {
        // Data to send to the backend
      this.isLoading = true;
      const data = { apiServer: this.apiServer, token: this.token };
      axios.post('http://www.kcs2.co.kr/api/runCurl', data)
           .then(response => {
          // Handle the response from the backend
              this.logMessage = response.data;
           })
           .catch(error => {
            // Handle any errors
              console.error(error);
            })
            .finally(() => {
              this.isLoading = false;
              this.flag = true;
            });
    },
  },  
  components: {
    //'home-button': HomeButton // Register the HomeButton 
  },
}
</script>

<style>
@charset "utf-8";

body{
  font: 17px 'Nanum Gothic', sans-serif;
}
div {
  box-sizing: border-box;
}

.top-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Adjust height as needed */
  background-color: LightSkyBlue;
  z-index: 1; /* Make sure it is below black-bg */
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0; /* Add this to ensure it stays at the top */
  left: 0; /* Add this to ensure it spans the full width */
  z-index: 999; /* Ensure it appears above other elements */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a2a2a;
  margin-top: 40px;
}
#menu1 {
  background: #000;
  transition: margin-top 0.5s;
}
#menu1 ul {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  list-style: none; /* Remove the default bullet points */
  display: flex; /* Use flexbox to create a horizontal layout */
  justify-content: center; /* Center the list items horizontally */

}
#menu1 li {
  margin: 0 60px; /* Add spacing between list items */
}
#menu ul li {
  display: inline-block;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #000;
}
#menu1 ul li a {
  display: block;
  font-size: 40px;
  transition: font-size 0.3s; /* Add a smooth transition effect for font size */
  color: rgb(255, 255, 255);
}
#menu1 ul li a:hover {
  font-size: 50px;
  background: rgb(77, 77, 77);
  color: #f0f0f0;
}
#menu1 a {
  text-decoration: none; /* Remove underline from links */
  font-weight: bold; /* Adjust font weight as needed */
  font-size: 16px; /* Adjust font size as needed */
}

.header-link h1,
.header-link h4 {
  text-decoration: none;
  display: inline;
  margin-right: 15px;
  color: rgb(83, 83, 83);
  display: inline;
  margin-right: 15px;

}

.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  /* height: 50vh;  Optional: Make the container full height of the viewport */
}

.image1 {
  margin-right: 300px;
  width: 50%; /* 원하는 너비에 맞게 조정 가능 */
  height: auto; /* 가로:세로 비율을 유지 */
}

.image2 {
  margin-top: 50px;
  margin-left: 300px;
  width: 50%; /* 원하는 너비에 맞게 조정 가능 */
  height: auto; /* 가로:세로 비율을 유지 */
}

.spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left: 8px solid #000000;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

.text-box { 
  border: 3px solid #333333; /* Add a border */
  padding: 10px; /* Add some padding */
  background-color: #f0f0f0; /* Set a background color */
  border-radius: 5px; /* Add rounded corners */
  margin-top: 10px; /* Adjust margin for spacing */

  width: 1300px;
  height: 600px;
  
  overflow-y: scroll;
  overflow-x: hidden;

  text-align: left;
  white-space: pre-line;
}

.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.input-group input {
  border: 3px solid #ccc;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  width: 600px;
}

.scroll-container {
  background-color: gray;
  width: 100%;
  height: 1700px;
  position: relative;
  overflow: hidden;
}

.image1, .image2 {
  height: auto; 
}

a {
  color: inherit; /* Use the default text color */
  text-decoration: none; /* Remove underline */
}
</style>
