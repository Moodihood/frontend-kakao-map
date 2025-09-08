# Moodihood Kakao Map

React Native WebView용 카카오맵 정적 호스팅 파일입니다.

## 배포 방법

### 1. Vercel 배포 (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
cd kakao-map
vercel

# 프로덕션 배포
vercel --prod
```

### 2. Netlify 배포
1. `kakao-map` 폴더를 드래그 앤 드롭으로 Netlify에 업로드
2. 또는 GitHub 연동 후 `kakao-map` 디렉토리 지정

### 3. GitHub Pages 배포
```bash
# 별도 브랜치 생성
git checkout -b kakao-map-hosting
git add kakao-map/
git commit -m "Add kakao map hosting files"
git push origin kakao-map-hosting

# GitHub Settings에서 Pages 활성화
# Source: Deploy from branch
# Branch: kakao-map-hosting
# Folder: /kakao-map
```

## 사용 방법

배포 후 얻은 URL을:
1. 카카오 디벨로퍼스에 웹 플랫폼으로 등록
2. React Native 컴포넌트에서 해당 URL 사용

## URL 파라미터
- `lat`: 초기 위도 (기본값: 37.5665)
- `lng`: 초기 경도 (기본값: 126.978)
- `showCenter`: 중심 마커 표시 여부 (기본값: true)

예시: `https://your-domain.vercel.app?lat=37.5665&lng=126.978&showCenter=true`

## 환경 변수
배포 시 `KAKAO_JAVASCRIPT_KEY_PLACEHOLDER`를 실제 카카오 JavaScript 키로 교체해야 합니다.

### Vercel 환경 변수 설정
1. Vercel 대시보드에서 프로젝트 Settings
2. Environment Variables에 `KAKAO_JAVASCRIPT_KEY` 추가
3. 또는 빌드 시 자동 교체 스크립트 사용

## 개발 서버 실행
```bash
npm run dev
# 또는
npx serve .
```

브라우저에서 `http://localhost:3000` 접속하여 테스트