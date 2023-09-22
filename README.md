## 구성

- demo -> spring server
- chat-app -> react client

## 참고

- 리액트에서 스프링서버로 http 요청, uuid를 만들어서 서버에 전송
- 스프링 서버가 수락을 하면서 커넥션이 형성(핸드세이킹)
- stomp (simple text-oriented messaging protocol)이라는 프로토콜을 이용
- 클라이언트와 서버가 소통을 할 때는 스톰으로 래핑해서 데이터를 주고 받음

## 리액트 설치 패키지

- npm install sockjs-client
- npm install stompjs
- npm install net
- npm install uuid
