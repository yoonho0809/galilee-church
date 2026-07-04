/* =============================================================
   갈릴리교회 — 음악 (배경음악 버튼 + 찬양 플레이어 조율)
   · 한 곡이 재생되면 다른 곡은 자동으로 멈춤
   · 우하단 버튼 = 배경음악(1번 곡) 켜기/끄기
   ============================================================= */
(function () {
  'use strict';
  var audios = Array.prototype.slice.call(document.querySelectorAll('audio'));
  var fab = document.getElementById('musicFab');
  var bg = document.getElementById('bgAudio');
  var label = fab ? fab.querySelector('.music-fab__label') : null;

  // 한 번에 하나만 재생
  audios.forEach(function (a) {
    a.addEventListener('play', function () {
      audios.forEach(function (b) { if (b !== a) b.pause(); });
      sync();
    });
    a.addEventListener('pause', sync);
    a.addEventListener('ended', sync);
  });

  if (fab && bg) {
    bg.volume = 0.55;
    fab.addEventListener('click', function () {
      if (bg.paused) {
        var p = bg.play();
        if (p && p.catch) p.catch(function () {/* 브라우저 자동재생 정책 등 */});
      } else {
        bg.pause();
      }
    });
  }

  function sync() {
    if (!fab || !bg || !label) return;
    var on = !bg.paused;
    fab.classList.toggle('playing', on);
    label.textContent = on ? '재생 중' : '배경음악';
  }
  sync();
})();
