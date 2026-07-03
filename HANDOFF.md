# 갈릴리교회 GALILEE CHURCH — 프로젝트 핸드오프

> 밝고 따뜻한 환대의 공동체 컨셉 **교회 소개 웹사이트** (춘천).
> 이미지 없이 구조를 먼저 만든 초안이며, 사진·정보는 나중에 채우는 방식입니다.

---

## 🌐 배포 (인터넷 공개) — 완료
- **공개 주소**: https://yoonho0809.github.io/galilee-church/
- **호스팅**: GitHub Pages (무료) · **저장소**: https://github.com/yoonho0809/galilee-church (public, main 브랜치)
- **수정 내용을 실제 사이트에 반영하는 법** (매우 중요):
  ```
  cd E:/Cluade/galilee-church
  git add -A
  git commit -m "수정 내용"
  git push
  ```
  push 후 약 1분이면 공개 주소에 자동 반영됩니다. (사진 추가·정보 수정 모두 동일)
- 커스텀 도메인(예: galilee-church.kr)을 사면 GitHub Pages 설정에서 연결 가능.

---

## ▶ 재개 지점 (다음에 이어서 할 일)  ※ 2026-07-03 기준

**지금까지 완료**
- 홈페이지 전체 구조 + 밝고 따뜻한 디자인 (히어로 슬라이드쇼, 퀵메뉴 바)
- 교회 앨범 기능 (album.html + albums.js)
- 위치 = 춘천으로 반영

**완료됨**
- ✅ 인터넷 배포 (https://yoonho0809.github.io/galilee-church/)
- ✅ 실제 주소(춘천 우두동 309-3) + 구글지도 임베드 (location.html)
- ✅ 소개 영상 임베드 (유튜브 57kT0OPVa5w, 홈 + sermons.html)

**바로 이어서 할 일 (우선순위 순)**
1. **실제 정보 채우기** — 임시값 교체:
   - 담임목사 성함 `○○○ 목사` (about.html) · 인사말
   - 예배 시간 (worship.html — 현재 09:00/11:00/19:30 등은 예시값)
   - 전화 `033-000-0000` (js/site.js 푸터), 이메일
   - 교회 소식(공지) 내용/날짜 (news.html)
2. **사진 넣기** — `images/` 폴더에 `hero1~3.jpg`, `community.jpg`, `pastor.jpg` (아래 3-1 표 참고)
3. 채운 뒤 **재배포**: `git add -A && git commit -m "..." && git push` (약 1분 후 반영)

---

## 1. 한눈에 보기
| 항목 | 내용 |
|---|---|
| 위치 | `E:\Cluade\galilee-church\` |
| 타입 | 정적 사이트 (HTML+CSS+JS, 빌드 없음) |
| 실행 | `index.html` 더블클릭 |
| 수정 반영 | 저장 → 브라우저 F5 |
| 상태 | **구조 완성 · 사진/실제정보 대기** |

## 2. 파일 구조 (★ 멀티페이지 구조)
```
galilee-church/
├─ index.html        ← 홈 (히어로 슬라이드쇼 + 퀵메뉴 + 각 페이지 미리보기)
├─ about.html        ← 교회 소개 (소개 + 담임목사 인사 + 사역)
├─ worship.html      ← 예배 안내
├─ sermons.html      ← 설교 영상 (유튜브)
├─ news.html         ← 교회 소식 (공지)
├─ album.html        ← 교회 앨범
├─ location.html     ← 오시는 길
├─ css/style.css     ← 색·폰트·레이아웃 (:root 상단)
├─ js/
│   ├─ site.js       ← ★ 공용: 헤더·푸터·메뉴·애니메이션·슬라이드쇼 (모든 페이지 공통)
│   ├─ albums.js     ← 앨범 데이터 (앨범 추가/수정은 여기만)
│   └─ album.js      ← 앨범 페이지 렌더러
├─ images/           ← 여기에 사진을 넣습니다 (아래 3-1 참고)
└─ HANDOFF.md
```

> **메뉴(헤더/푸터)는 `js/site.js` 안의 `NAV` 배열 한 곳에서 관리**됩니다. 메뉴 이름·순서·추가는 거기만 고치면 모든 페이지에 반영됩니다. 각 페이지는 `<body data-page="...">` 로 현재 위치를 표시(메뉴 강조).

## 3. 페이지 구성
- **홈(index)**: 히어로 슬라이드쇼 + 퀵메뉴 바 + 각 페이지 미리보기(소개·예배·설교·앨범) + CTA
- **교회 소개(about)** · **예배 안내(worship)** · **설교 영상(sermons)** · **교회 소식(news)** · **교회 앨범(album)** · **오시는 길(location)**

위치: **춘천** (강원특별자치도 춘천시). 참고 사이트: 춘천중앙교회(chmchurch.org) 스타일.

### 앨범 기능
- `album.html` = 앨범 목록 페이지, `js/albums.js` = 앨범 데이터(여기만 편집하면 앨범 추가/수정).
- 새 앨범: `images/albums/<이름>/` 폴더에 사진 넣고 `albums.js` 목록에 항목 추가. 자세한 방법은 `albums.js` 상단 주석 참고.

### 새 페이지를 추가하려면
1. 기존 페이지(예: `worship.html`)를 복사해 새 파일 만들기 → `<body data-page="새키">` 와 `page-hero`·내용 수정
2. `js/site.js` 의 `NAV` 배열에 `{ href:'새파일.html', ko:'메뉴이름', key:'새키' }` 추가

---

## 3-1. ⭐ 사진 넣는 법 (가장 중요)
`images/` 폴더에 **아래 이름 그대로** 사진을 넣으면 자리표시(플레이스홀더)가 자동으로 진짜 사진으로 바뀝니다. (코드 수정 불필요)

| 파일명 | 위치 | 권장 비율 |
|---|---|---|
| `images/hero1.jpg` `hero2.jpg` `hero3.jpg` | 메인 상단 **슬라이드쇼**(3장 자동 전환) | 가로 16:9 (넓은 사진) |
| `images/community.jpg` | 교회 소개 옆 | 세로 4:5 |
| `images/pastor.jpg` | 담임목사 인사 | 세로 4:5 (인물) |
| `images/albums/<앨범>/cover.jpg` 등 | 교회 앨범 | 자유 (표지 4:3 권장) |

> 히어로는 이제 슬라이드쇼입니다. hero1~3 중 일부만 넣어도 됩니다(없는 슬라이드는 은은한 색면으로 표시).

- 형식은 `.jpg` 권장(`.png`도 되지만 그럴 땐 `index.html`의 `src` 확장자도 맞춰야 함).
- 사진을 저에게 주시면 크롭·최적화까지 해서 넣어드립니다.

## 3-2. 실제 정보로 바꿔야 할 곳 (`index.html`에서 검색해 수정)
- **담임목사 성함**: `○○○ 목사` → 실제 성함
- **예배 시간**: 09:00 / 11:00 / 19:30 등 → 실제 시간 (svc 카드)
- **주소·전화·교통**: `서울시 ○○구…`, `02-000-0000` → 실제 정보 (오시는 길 + 푸터)
- **교회 소식**: notice 카드 3개 내용/날짜
- **이메일**: `galilee@church.kr`

## 3-3. 유튜브 설교 영상 연결
- 현재 설교 섹션은 **갈릴리마을TV 채널**(`https://www.youtube.com/@TV-ew5ic`)로 링크됨.
- 특정 영상을 크게 삽입하려면, 그 영상 링크를 알려주시면 `index.html`의 설교 영상 자리(`sermon-feature`)에 iframe으로 넣어드립니다.
  예: `<iframe src="https://www.youtube.com/embed/영상ID"></iframe>`

---

## 4. 디자인 시스템
**색상** (`css/style.css` `:root`)
| 변수 | 값 | 용도 |
|---|---|---|
| `--cream` | `#f7f4ec` | 기본 배경 |
| `--gold` | `#c98a3f` | 포인트(새벽 햇살) |
| `--sea` | `#2c6b66` | 보조 포인트(갈릴리 호수빛) |
| `--ink` | `#242a2b` | 본문 |

**폰트**: 고운바탕(제목) · Noto Sans KR(본문) · Fraunces(라틴 강조) — Google Fonts CDN
**시그니처**: 새벽빛 히어로 + 섹션 사이 물결(호수) 디바이더

## 5. 다음 확장 아이디어
- [ ] 실제 지도(카카오맵/구글맵) 임베드로 교체
- [ ] 설교 영상 실제 iframe 연결 / 최신 영상 자동 표시
- [ ] 온라인 헌금·새가족 등록 폼
- [ ] favicon·로고 이미지 제작
- [ ] 실제 도메인 배포(Netlify/Vercel 무료 배포 가능)

*최종 정리: 2026-07-03*
