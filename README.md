# 📚 React-JS 기초잡기
[📌 ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby)
<br/>
<br/>

### ✔ React 프로젝트 초기화
1. [node.js 설치](https://nodejs.org/)
2. npx create-react-app [프로젝트명]
3. run start (개발서버 실행, src 생성)
<br/>

### ✔ React 프로젝트 GitHub Pages 배포
1. npm install gh-pages
2. package.json -> script에 "deploy": "gh-pages -d build" 추가  : (배포할 build 디렉토리 지정)
3. package.json -> script에 "predeploy": "npm run build" 추가   : (React 프로젝트 빌드 (build가 되어있지 않을 때)
4. package.json 의 마지막줄에 "homepage": "https://[github계정이름].github.io/[저장소이름]" 추가  : (베포할 URL)
5. 터미널에서 npm run deploy
6. https://[github계정이름].github.io/[저장소이름] 로 접속 후 배포 확인
<br/>

### ✔ 프로젝트 결과물
<br/>

![movieAppHome](https://user-images.githubusercontent.com/87235273/153454967-549ed0a5-4aa0-4515-8f7f-a791ee0332b0.png)

![movieAppDetail](https://user-images.githubusercontent.com/87235273/153455295-0a82f49e-47b6-4af9-a085-0668f02a1f88.png)
