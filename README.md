# 루비락 플로팅 배너 시안

스크롤 220px 이후 우측 하단의 원형 캐릭터 배너가 가로형 pill 형태로 펼쳐지는 HTML/CSS/JS 데모입니다.

## 파일
- `index.html`
- `styles.css`
- `script.js`
- `assets/golden-gram.png`
- `assets/neo-grang.png`

## 수정 포인트
- 실제 상품 URL: `index.html`의 각 `<a href="...">` 값 교체
- 펼쳐지는 시점: `script.js`의 `openAfter = 220`
- 펼쳐진 너비: `styles.css`의 `--banner-width`
- 우측/하단 위치: `.floating-banner-group`

## GitHub Pages
이 폴더를 저장소 루트에 올린 뒤 GitHub 저장소 `Settings > Pages`에서 배포 브랜치를 지정하면 정적 시안으로 확인할 수 있습니다.
