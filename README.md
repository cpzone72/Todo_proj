# Gemini Todo App

React 19, TypeScript, 그리고 Bootstrap 5를 사용한 할 일 관리 애플리케이션입니다.

## 주요 기능

- **할 일 추가/삭제:** 새로운 할 일을 추가하고 삭제할 수 있습니다.
- **상태 관리:** 할 일의 완료 여부를 체크박스로 관리합니다.
- **필터링:** 전체, 미완료, 완료된 할 일을 구분해서 볼 수 있습니다.
- **데이터 보존:** `localStorage`를 사용하여 브라우저를 새로고침해도 데이터가 유지됩니다.
- **반응형 디자인:** Bootstrap 5를 사용하여 다양한 화면 크기에 대응합니다.

## 기술 스택

- **Frontend:** React 19, TypeScript
- **Styling:** Bootstrap 5, Bootstrap Icons
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** LocalStorage

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

애플리케이션은 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 테스트 실행

```bash
npm test
```

### 프로덕션 빌드

```bash
npm run build
```