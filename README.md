## next.js 프로젝트 시작하기
React 기반의 웹 애플리케이션을 개발하기 위한 프레임워크로, 서버 사이드 렌더링 (SSR) 및 정적 사이트 생성 (SSG)과 같은 고급 기능을 제공
서버 사이드 렌더링 (SSR): Next.js는 페이지를 서버에서 사전에 렌더링하여 클라이언트에 전달함으로써 초기 로딩 속도를 향상시킵니다. 이는 검색 엔진 최적화(SEO)와 초기 렌더링 성능 향상에 도움이 됩니다.

1. 정적 사이트 생성 (SSG): Next.js는 빌드 시점에 페이지를 렌더링하여 페이지 로딩 속도를 향상시키고 배포할 때 성능을 최적화하는 데 도움

2. 라우팅 및 코드 분할: 파일 시스템 기반의 라우팅을 제공하며, 페이지 간의 코드 분할을 자동으로 처리.애플리케이션의 효율성을 높이고 사용자에게 필요한 코드만 전송하여 초기 로딩 시간을 최소화

3. 데이터 페칭: 데이터를 가져오는 데 사용되는 getServerSideProps 및 getStaticProps와 같은 메서드를 통해 서버 렌더링 및 정적 생성 시 데이터를 효과적으로 관리할 수 있습니다.

4. CSS 지원: CSS를 지원하며, 필요한 경우 CSS-in-JS 라이브러리 사용

5. API 라우팅: API 엔드포인트를 쉽게 만들어 사용할 수 있도록 지원합니다.

6. 환경 변수 및 구성: 환경 변수 및 다양한 구성 옵션을 통해 프로젝트를 세밀하게 조정할 수 있습니다.

## next.js 설치


## server 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## server 보기
http://localhost:3000


## git setting commend
echo "# next-project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SeoEugene/next-project.git
git push -u origin main

## git push commend
git remote add origin https://github.com/SeoEugene/next-project.git
git branch -M main
git push -u origin main


## 트러블 슈팅
<details>
<summary>Whitespace error</summary>

`git config --global core.autocrlf true // 시스템 전체에 적용`
`git config core.autocrlf true // 해당 프로젝트에만 적용`
</details>

## install
1. `npm i gsap`
2. `npm i sass`
3. `npm i @studio-freight/lenis`
4. 

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Next.js 초기 화면 명령어
rafc

## 배포
`npm run build`