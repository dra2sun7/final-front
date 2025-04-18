module.exports = {
  transpileDependencies: ['vue'],

  // npm run build 타겟 디렉토리 -> 해당 경로에 Vue 빌드 출력물 생성됨
  outputDir: './src/build',

  // npm run serve 개발 진행시에 포트가 다르기 때문에 프록시 설정
  devServer: {
    allowedHosts: "all",
    // proxy: 'http://www.kcs2.co.kr' // 서버 프로젝트 포트번호와 동일할 것
  },
};
