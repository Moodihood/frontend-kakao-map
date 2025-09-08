const fs = require('fs');
const path = require('path');

// 환경변수에서 카카오 키 읽기
const KAKAO_JS_KEY = process.env.KAKAO_NATIVE_JAVASCRIPT_KEY;

if (!KAKAO_JS_KEY) {
  console.error('❌ KAKAO_NATIVE_JAVASCRIPT_KEY 환경변수가 설정되지 않았습니다.');
  console.log('💡 사용법: KAKAO_NATIVE_JAVASCRIPT_KEY=your_key_here npm run build');
  process.exit(1);
}

// 템플릿과 빌드 파일 경로 설정
const templatePath = path.join(__dirname, 'index.template.html');
const buildPath = path.join(__dirname, 'index.html');

if (fs.existsSync(templatePath)) {
  // 템플릿에서 읽어서 빌드 파일 생성
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const buildContent = templateContent.replace(/{{KAKAO_JAVASCRIPT_KEY}}/g, KAKAO_JS_KEY);
  fs.writeFileSync(buildPath, buildContent);
  console.log('✅ index.template.html → index.html 빌드 완료 (API 키 주입됨)');
} else {
  console.error('❌ index.template.html 템플릿 파일을 찾을 수 없습니다');
  process.exit(1);
}

console.log('🎉 배포 준비 완료!');