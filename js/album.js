/* =============================================================
   갈릴리교회 — 앨범 페이지 렌더러
   albums.js 의 ALBUMS 목록을 읽어 화면을 그립니다.
   (앨범 내용을 바꾸려면 albums.js 만 편집하세요.)
   ============================================================= */
(function () {
  'use strict';

  /* 이미지 로드 실패 시 '사진 자리' 플레이스홀더가 보이도록 */
  function makeSlot(src, label, alt) {
    var fig = document.createElement('figure');
    fig.className = 'slot';
    fig.setAttribute('data-label', label || '사진 자리');
    var img = document.createElement('img');
    img.src = src; img.alt = alt || ''; img.loading = 'lazy';
    img.addEventListener('error', function () { img.style.display = 'none'; });
    fig.appendChild(img);
    return fig;
  }

  /* (헤더/모바일 메뉴/사진 플레이스홀더는 site.js가 담당) */

  /* ---------- 앨범 카드 그리기 ---------- */
  var grid = document.getElementById('albumsGrid');
  var empty = document.getElementById('albumsEmpty');
  var list = (typeof ALBUMS !== 'undefined' && Array.isArray(ALBUMS)) ? ALBUMS : [];

  if (!list.length) { empty.hidden = false; }

  list.forEach(function (album) {
    var card = document.createElement('button');
    card.className = 'album-card';
    card.type = 'button';

    var cover = makeSlot(album.cover, '표지 사진', album.title);
    cover.classList.add('album-card__cover');

    var body = document.createElement('div');
    body.className = 'album-card__body';
    body.innerHTML =
      '<div class="album-card__date">' + (album.date || '') + '</div>' +
      '<div class="album-card__title">' + album.title + '</div>' +
      '<div class="album-card__count">' + (album.photos ? album.photos.length : 0) + '장</div>';

    card.appendChild(cover);
    card.appendChild(body);
    card.addEventListener('click', function () { openViewer(album); });
    grid.appendChild(card);
  });

  /* ---------- 앨범 열기 (사진 모아보기) ---------- */
  var viewer = document.getElementById('viewer');
  var viewerGrid = document.getElementById('viewerGrid');
  var viewerTitle = document.getElementById('viewerTitle');
  var viewerDate = document.getElementById('viewerDate');

  function openViewer(album) {
    viewerTitle.textContent = album.title;
    viewerDate.textContent = album.date || '';
    viewerGrid.innerHTML = '';
    (album.photos || []).forEach(function (src, i) {
      var fig = makeSlot(src, '사진 ' + (i + 1), album.title + ' 사진 ' + (i + 1));
      fig.addEventListener('click', function () {
        var img = fig.querySelector('img');
        if (img && img.style.display !== 'none') openLightbox(src, img.alt);
      });
      viewerGrid.appendChild(fig);
    });
    viewer.classList.add('open');
    viewer.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
  function closeViewer() { viewer.classList.remove('open'); document.body.style.overflow = ''; }
  document.getElementById('viewerClose').addEventListener('click', closeViewer);

  /* ---------- 사진 크게 보기 ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  function openLightbox(src, alt) { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); }
  function closeLightbox() { lb.classList.remove('open'); }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lb.classList.contains('open')) closeLightbox();
    else if (viewer.classList.contains('open')) closeViewer();
  });
})();
