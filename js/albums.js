/* =============================================================
   갈릴리교회 — 앨범 목록
   ─────────────────────────────────────────────────────────────
   ★ 새 앨범을 올리는 방법 (이 파일만 편집하면 됩니다) ★

   1) images/albums/ 폴더 안에 앨범 폴더를 하나 만듭니다.
      예: images/albums/2026-summer/
   2) 그 폴더에 사진들을 넣습니다. (cover.jpg = 표지, 나머지는 자유롭게)
   3) 아래 ALBUMS 목록 맨 위에 앨범 하나를 아래 형식대로 추가합니다.

   ※ 사진이 없어도 됩니다 — 사진이 없으면 "사진 자리" 표시가 나오고,
     나중에 같은 경로에 사진을 넣으면 자동으로 채워집니다.
   ※ 사진을 저(클로드)에게 주시면 폴더 정리 + 이 목록 추가까지 해드립니다.
   ============================================================= */

const ALBUMS = [
  {
    id: "2026-summer",                       // 폴더 이름 (영문/숫자)
    title: "여름 전교인 수련회",              // 앨범 제목
    date: "2026.08",                         // 날짜
    cover: "images/albums/2026-summer/cover.jpg",
    photos: [
      "images/albums/2026-summer/1.jpg",
      "images/albums/2026-summer/2.jpg",
      "images/albums/2026-summer/3.jpg",
      "images/albums/2026-summer/4.jpg",
      "images/albums/2026-summer/5.jpg",
      "images/albums/2026-summer/6.jpg"
    ]
  },
  {
    id: "2026-easter",
    title: "부활절 연합 예배",
    date: "2026.04",
    cover: "images/albums/2026-easter/cover.jpg",
    photos: [
      "images/albums/2026-easter/1.jpg",
      "images/albums/2026-easter/2.jpg",
      "images/albums/2026-easter/3.jpg",
      "images/albums/2026-easter/4.jpg"
    ]
  },
  {
    id: "2025-christmas",
    title: "성탄 축하 예배",
    date: "2025.12",
    cover: "images/albums/2025-christmas/cover.jpg",
    photos: [
      "images/albums/2025-christmas/1.jpg",
      "images/albums/2025-christmas/2.jpg",
      "images/albums/2025-christmas/3.jpg",
      "images/albums/2025-christmas/4.jpg",
      "images/albums/2025-christmas/5.jpg"
    ]
  }
];
