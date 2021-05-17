# CORS TEST

<br/>

<img width="700" src="https://user-images.githubusercontent.com/59427983/118496725-5b82b180-b75f-11eb-94fc-79cb151bd114.png" />

개발자가 CORS 이슈를 겪을 때 로컬에서 CORS 에러를 체험하고 직접 해결해볼 수 있는 서버 및 클라이언트입니다.

클라이언트는 webpack-dev-server로 구동하며, 서버는 node.js의 express.js로 구동 됩니다.

따라서 클라이언트 서버와 백엔드 서버 모두 설치 및 구동된 상태로 테스트 해볼 수 있습니다.

<br/>

## 설치 및 시작

먼저 해당 repository를 local 환경에 clone 합니다. VSCode로 여셔서 터미널을 2개 여시면 서버를 구동하기 쉽습니다. 아래 사진과 같이 터미널 분할을 이용해 터미널 2개를 여실 수 있습니다.

<img width="387" alt="스크린샷 2021-05-17 오후 10 33 48" src="https://user-images.githubusercontent.com/59427983/118497428-072c0180-b760-11eb-95e4-579df2c31ff2.png">

### 1번 터미널 : webpack-dev-server

1. `npm install`
2. `npm run dev`

### 2번 터미널 : express.js

1. node.js가 설치되어 있어야 합니다.
2. `cd ExpressServer`
3. `npm install`
4. `node app.js`

<br/>

## 기본 세팅

### 기본 port 

- webpack-dev-server : `8080` 포트
- express : `3000` 포트

두 서버 모두 구동이 되면 http://localhost:8080 으로 접속하셔서 

**F12**로 크롬 개발자 도구의 Network 탭에서 **ALL**을 누르시고 페이지에 있는 테스트 버튼을 누를 때 어떤 요청이 가는지 확인하실 수 있습니다.

