BEANPOLE 웹사이트 (Next.js)

🔗 Deployment URL
https://beanpole-website.vercel.app/


포트폴리오 용도로 제작한 웹사이트입니다.

지금까지 React 위주의 프로젝트만 개발했어서 더 다양한 경험을 위해 Next.js를 새로 학습하며 제작해 보았습니다.

처음에는 Next.js의 구조와 설정이 React와 달라서 적응하는 데 어려움을 겪었지만, 점차 클라이언트 사이드와 서버 사이드 렌더링(SSR)을 동시에 지원하는 Next.js의 장점을 이해하게 되었습니다. Next.js를 공부하면서 Vercel라는 것도 처음 접했는데 이 또한 Next.js에 특화된 정말 간편한 배포 플랫폼임을 느꼈습니다. 사실 Next.js로 개발한 웹사이트는 서버가 필요한 동적인 웹사이트이기 때문에, 처음에는 AWS와 같은 플랫폼을 사용해서 불편하게 배포를 진행해야 하는 줄 알았습니다. 하지만 Vercel라는 Next.js에 특화된 배포 플랫폼이 존재한다는 것을 알게 되었고, 배포를 위한 모든 설정을 자동으로 해주는 것에 굉장한 간편함을 느꼈습니다. 이로 인해 Next.js의 인기가 왜 높은지 다시 한 번 이해할 수 있었습니다.

🔨 Technology Stacks

- Frontend: 
  - Next.js: 서버 사이드 렌더링 및 정적 사이트 생성 지원
  - TypeScript: 타입 안전성을 위한 정적 타입 언어
  - JavaScript: 동적 웹 애플리케이션의 기본 언어
  - React Icons: 다양한 아이콘 제공
  - CSS Modules: 컴포넌트 기반의 모듈화된 스타일링

- Deployment: 
  - Vercel: 정적 사이트 및 서버리스 함수 배포


⚙️ Environment Setup
Node.js (v14 이상)
# Install JavaScript Packages
npm install

# Run Frontend Server
npm run dev
