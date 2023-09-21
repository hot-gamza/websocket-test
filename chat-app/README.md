## 내용

-   리액트에서 스프링서버에 http로 먼저 접속 요청을 함. 스프링 서버가 수락을 하면서 커넥션이 형성(핸드세이킹)
-   stomp (simple text-oriented messaging protocol)이라는 프로토콜을 이용한다. 클라이언트와 서버가 소통을 할 때는 스톰으로 데이터를 주고 받는다. 양방향 통신을 지원한다.

## 설치

-   npm install sockjs-client
-   npm install stompjs
-   npm install net
-   npm install uuid
