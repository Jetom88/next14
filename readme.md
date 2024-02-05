## 노마드코더 next 14 강의

노마드코더 next 14 강의를 보고 내용을 정리하는 레파지토리 📜

### Library vs Framework

<hr/>

- 라이브러리 <br/>
  - 원하는 아키텍처를 사용해 원하는 방식으로 원하는 언어로 코드를 작성
  - 구조에 관한 모든 결정을 내가 내림
  - ex) 파일을 어디에 저장할지? 이름은 무엇일지? 등등
  - react는 ui 인터페이스를 build하는데 사용하는 라이브러리
    <br/>
- 프레임워크 <br/>
  - 여러가지 결정을 대신 해 주고 자동화 할 수 있음
  - next가 제시하는 규칙을 우리가 지켜야함
    <br/>

### Old vs New Version

<hr/>

1. Pages Router -> App Router
   - 원한다면 혼용 가능
2. routing / data fetching 방법이 바뀜
3. getStaticProps, getServerSideProps, getStaticPaths가 사라짐
   <br/>

### SSR vs CSR

<hr/>

- rendering: next가 나의 react components를 가져와서 브라우저가 이해할 수 있는 html로 변환하는 작업

1. <b>CSR(client side rendering)</b>

   - react가 render되는 방식
   - 브라우저가 rendering 작업을 하는것
   - client가 사용자 브라우저에 ui를 구축함

- 단점(cra로 설치 한다는 가정)

  1. 페이지의 실제 소스코드는 브라우저가 js 파일을 다운로드하고 실행하기 전까진 비어있음
     <br/>
     (유저가 페이지에 도착한 시점에는 아무것도 없음)
  2. 화면 깜빡임이 발생 <br/>
     (html에 ui가 없기때문)
  3. js를 비활성화 시키면 ui를 볼 수 없음<br/>
     ![js를 비활성화 시켰을 때](image.png)
  4. 데이터 연결 상태가 안좋은 핸드폰으로 봤을 때, js 파일을 받은 후 모든 파일을 받아야 함<br/>(빈 화면에 오래 노출 됨)
  5. SEO에 취약함<br/>
     검색 엔진은 html을 보고 판단하는데, 이때 웹 사이트가 비어있다면 빈 페이지라고 판단함

2. <b>SSR(server side rendering)</b>

   - 웹 사이트를 빌드할 때 default로 ssr가 됨
   - js를 기다릴 필요 없이 화면에 표시할 html을 갖고 있음
   - 사용자에게 html을 주기 전에 next는 server(back-end)에서 application을 render
   - 최초 application의 ui 빌드는 js에 의존하지 않음

- 단점

  1. 모든 컴포넌트는 ssr이 됨<br/>
     "use client"는 client에서 render가 아닌 server에서 render임 (csr이라면 보이지 않았을 ui가 html 상에서 보이고, console.log가 터미널에서 출력 되는것을 볼 수 있음)
