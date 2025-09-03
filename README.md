# 📦 React Components Library

React 기반의 재사용 가능한 컴포넌트 라이브러리입니다.  
본 저장소는 **Micro Frontends (Module Federation)** 및 **Storybook**을 지원합니다.  

---

## 📂 프로젝트 구조
react-components-library/
├── dist/
│ ├── micro/ # Micro Frontends remoteEntry.js
│ └── storybook/ # Storybook 정적 빌드 결과
│
├── src/ # 컴포넌트 소스 코드
│ ├── components/ # 예: Button, Card 등
│ └── index.ts
│
├── .storybook/ # Storybook 설정
└── package.json

---

## 🚀 설치 및 사용

### 1. 설치
```bash
npm install react-components-library
# 또는
yarn add react-components-library
```

### 2. 기본 사용 예시
```typesccrip
import React from "react";
import { FeButton } from "react-components-library";

export default function App() {
  return <FeButton label="Click me" />;
}

```

# 🧩 Micro Frontends (Module Federation)
## dist/micro/remoteEntry.js를 통해 원격 컴포넌트를 제공할 수 있습니다.
## 호스트 프로젝트에서는 ModuleFederationPlugin을 이용해 remote를 선언합니다.

## 1. Webpack 설정 예시
```javascript
// webpack.config.js
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        designSystem: "designSystem@https://68b77ff880b29f1fd42e6302--kennethkang-design-system.netlify.app/micro/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};

```

## 2. Host 앱에서 사용 (@loadable/component)
```typescript
import React from "react";
import loadable from "@loadable/component";

const RemoteButton = loadable(() => import("designSystem/FeButton"), {
  fallback: <div>Loading...</div>,
});

export default function App() {
  return (
    <div>
      <h1>Micro Frontend Example</h1>
      <RemoteButton label="Click Remote Button" />
    </div>
  );
}
```

# 📖 Storybook

## dist/storybook에는 Storybook 정적 빌드가 포함되어 있어, UI 문서와 컴포넌트 동작을 확인할 수 있습니다.
```bash
# 로컬 실행
npm run storybook

# 정적 빌드
npm run build-storybook

```
