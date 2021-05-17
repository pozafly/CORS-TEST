# CORS TEST

<br/>

![스크린샷 2021-05-17 오후 10 24 05](https://user-images.githubusercontent.com/59427983/118495937-a5b76300-b75e-11eb-8952-92a702d429c4.png)

개발자가 CORS 이슈를 겪을 때 로컬에서 CORS 에러를 체험하고 직접 해결해볼 수 있는 서버 및 클라이언트입니다.

클라이언트는 webpack-dev-server로 구동하며, 서버는 node.js의 express.js로 구동됩니다.

따라서 클라이언트 서버와 백엔드 서버 모두 설치 및 구동된 상태로 테스트 해볼 수 있습니다.

<br/>

## 설치 및 시작

### webpack-dev-server

1. 해당 repository를 clone.
2. `npm install`
3. `npm run dev`

### express.js

1. node.js가 설치되어 있어야 합니다.
2. `cd ExpressServer`
3. `npm install`
4. `node app.js`

<br/>

## 기본 세팅

기본 값으로 webpack-dev-server는 8080 포트를 사용하며, express는 3000 포트를 사용합니다. 두 서버 모두 구동이 되면 http://localhost:8080으로 접속하셔서 **F12**로 크롬 개발자 도구의 Network 탭에서 **ALL**을 누르시고 각 버튼을 누를 때 어떤 요청이 가는지 확인하실 수 있습니다.

