# 🏷️ Seonwoo.dev

내가 가진 꾸준함이라는 무기를 내 방식대로 가꾸어 ㅁㄴㅇㅁㅇㄴ 개인적이지만 개인적이지 않은 웹 저장소

---

### 📖 1. 프로젝트 소개

#### ✔ 개요

- 프로젝트명: Seonwoo.dev
- 개발 기간:
- 개발 인원: 1명(개인)

#### ✔ 기획 배경

- 기존 문제
  - ㅁㄴㅇ
- 해결 목표
  - ㅁㄴㅇ

### ✔ 핵심 기능

- 템플릿 선택 및 랜딩페이지 생성
- 브랜드 정보 커스터마이징
- 가맹 신청 폼 및 데이터 수집
- 관리자 페이지 (선택)

---

### 👤 2. 사용자 정의

#### ✔ 타겟 사용자

- 프랜차이즈 본사
- 창업 희망자

#### ✔ 사용자 시나리오

1. 본사가 템플릿 선택
2. 브랜드 정보 입력
3. 랜딩페이지 자동 생성
4. 사용자가 페이지 접속 후 신청
5. 관리자 페이지에서 신청자 확인

---

### 🛠️ 3. 기술 스택

#### ✔ Frontend

- React 19.2.5
- TypeScript 5.9.3
- React Router 7.14.0
- React Query

#### ✔ Backend / BaaS

- Supabase (Auth, DB, Storage)

#### ✔ Styling

- Tailwind CSS 4.2.4
- Shadcn 4.4.0

#### ✔ Deployment

- Vercel

#### ✔ Tools

- Git & GitHub
- Figma
- Postman / Thunder Client

---

### 📂 4. 프로젝트 구조

```
src/
├── components/
├── pages/
├── hooks/
├── api/
├── types/
└── utils/
```

👉 구조 설계 의도:

- 컴포넌트 재사용성 고려
- API 로직 분리
- 타입 안정성 확보

---

### 🗂️ 5. 주요 기능 상세

#### ✔ 1. 템플릿 기반 랜딩페이지 생성

- JSON 데이터 기반 동적 렌더링
- 브랜드별 URL 생성 (/brand/:id)

#### ✔ 2. 가맹 신청 폼

- 유효성 검사 (validation)
- DB 저장 처리

#### ✔ 3. 관리자 기능

- 신청자 목록 조회
- 상태 관리 (대기 / 승인 등)

---

### 🧱 6. 데이터베이스 설계

#### ✔ ERD

(이미지 첨부)

#### ✔ 주요 테이블

- brands
- templates
- applications
- users

---

### 🚀 7. 실행 방법

```bash
# 설치
npm install

# 실행
npm run dev

# 빌드
npm run build
```

---

### 🌐 8. 배포 링크

- 서비스 URL:
- GitHub Repository:

---

### ⚙️ 9. 환경 변수

---

### 🧪 10. 테스트 및 개선

- 주요 테스트 시나리오:
- 개선 사항:

---

### 🐛 11. 트러블슈팅

#### ✔ 문제 1

- Issue Number :
- 문제 상황:
- 원인:
- 해결 방법:

#### ✔ 문제 2

- Issue Number :
- 문제 상황:
- 원인:
- 해결 방법:

---

### 💡 12. 회고 (Retrospective)

- 잘한 점:
- 아쉬운 점:
- 개선 방향:
