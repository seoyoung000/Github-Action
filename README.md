# 할 일 관리 시스템 (Todo App)

**20263624 장서영**

React로 개발한 할 일 관리 웹 애플리케이션입니다. GitHub Actions를 활용하여 AWS S3에 자동으로 배포됩니다.

---

## 시스템 소개

생성형 AI의 도움을 받아 구현한 할 일 관리 앱입니다.

- 할 일 추가 / 완료 체크 / 삭제 기능
- 전체 / 진행 중 / 완료 필터링
- 파스텔 핑크 테마의 반응형 UI

---

## 기능 소개

| 기능 | 설명 |
|------|------|
| 할 일 추가 | 입력창에 텍스트 입력 후 추가 버튼 또는 Enter |
| 완료 처리 | 체크박스 클릭으로 완료 상태 토글 |
| 삭제 | 삭제 버튼으로 항목 제거 |
| 필터링 | 전체 / 진행 중 / 완료 탭으로 목록 필터링 |
| 카운트 | 하단에 남은 할 일 개수 표시 |

---

## GitHub Actions 환경 소개

`main` 브랜치에 코드를 push하면 자동으로 아래 파이프라인이 실행됩니다.

```
코드 push → 소스 체크아웃 → Node.js 설치 → npm install → npm run build → AWS S3 배포
```

### 워크플로 파일 위치

`.github/workflows/deploy.yml`

### 필요한 GitHub Secrets

| Secret 이름 | 설명 |
|-------------|------|
| `AWS_ACCESS_KEY_ID` | AWS 액세스 키 ID |
| `AWS_SECRET_ACCESS_KEY` | AWS 시크릿 액세스 키 |
| `AWS_SESSION_TOKEN` | AWS Academy 세션 토큰 |

> GitHub 저장소 → Settings → Secrets and variables → Actions 에서 등록

### 배포 대상 S3 버킷

```
mybucket-20263624  (리전: us-east-1)
```

---

## AWS URL

> ⚠️ AWS Academy 세션은 4시간만 유효합니다. 세션 만료 시 Secrets를 새로 갱신 후 재배포해야 합니다.

```
http://mybucket-20263624.s3-website-us-east-1.amazonaws.com
```

---

## CI/CD 구축 시연 영상

> YouTube 링크: (영상 업로드 후 여기에 추가)
