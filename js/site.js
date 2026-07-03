/* =============================================================
   갈릴리교회 — 공용 레이아웃 & 동작 (모든 페이지 공통)
   · 헤더/모바일메뉴/푸터를 한 곳에서 주입 (메뉴 수정은 아래 NAV 만)
   · 헤더 스크롤 상태, 모바일 메뉴, 스크롤 등장, 사진 자동표시, 히어로 슬라이드쇼
   ─────────────────────────────────────────────────────────────
   각 페이지 <body data-page="about"> 처럼 현재 페이지를 표시하면
   해당 메뉴가 강조됩니다. 홈은 data-page="home".
   ============================================================= */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var page = document.body.getAttribute('data-page') || '';

  /* ---- 메뉴 정의 (여기만 고치면 전체 반영) ---- */
  var NAV = [
    { href: 'index.html',    ko: '홈',        key: 'home' },
    { href: 'about.html',    ko: '교회 소개',  key: 'about' },
    { href: 'worship.html',  ko: '예배 안내',  key: 'worship' },
    { href: 'sermons.html',  ko: '설교 영상',  key: 'sermons' },
    { href: 'news.html',     ko: '교회 소식',  key: 'news' },
    { href: 'album.html',    ko: '앨범',      key: 'album' },
    { href: 'location.html', ko: '오시는 길',  key: 'location' }
  ];

  function navLinks(mobile) {
    return NAV.map(function (n) {
      var on = n.key === page ? ' class="on"' : '';
      if (mobile) return '<a href="' + n.href + '"' + on + '>' + n.ko + '</a>';
      return '<li><a href="' + n.href + '"' + on + '>' + n.ko + '</a></li>';
    }).join('');
  }

  /* ---- 헤더 주입 ---- */
  var headerHost = document.getElementById('site-header');
  if (headerHost) {
    headerHost.outerHTML =
      '<header class="site-header' + (page !== 'home' ? ' solid' : '') + '" id="header">' +
        '<a class="brand" href="index.html" aria-label="갈릴리교회 홈">' +
          '<span class="brand__logo">G</span>' +
          '<span><span class="brand__name">갈릴리교회</span><span class="brand__sub">Galilee Church</span></span>' +
        '</a>' +
        '<nav class="nav" aria-label="주요 메뉴">' +
          '<ul class="nav__links">' + navLinks(false) + '</ul>' +
          '<a href="location.html" class="btn">처음 오세요?</a>' +
          '<button class="nav-toggle" id="navToggle" aria-label="메뉴 열기" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</nav>' +
      '</header>' +
      '<div class="mobile-menu" id="mobileMenu">' + navLinks(true) + '</div>';
  }

  /* ---- 푸터 주입 ---- */
  var footerHost = document.getElementById('site-footer');
  if (footerHost) {
    footerHost.outerHTML =
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="footer__top">' +
          '<div class="footer__brand">' +
            '<a class="brand" href="index.html"><span class="brand__logo">G</span><span><span class="brand__name">갈릴리교회</span><span class="brand__sub">Galilee Church</span></span></a>' +
            '<p>누구에게나 문이 열려 있는 밝고 따뜻한 환대의 공동체.</p>' +
          '</div>' +
          '<div class="footer__cols">' +
            '<div class="footer__col"><h4>둘러보기</h4><ul><li><a href="about.html">교회 소개</a></li><li><a href="worship.html">예배 안내</a></li><li><a href="sermons.html">설교 영상</a></li></ul></div>' +
            '<div class="footer__col"><h4>함께하기</h4><ul><li><a href="news.html">교회 소식</a></li><li><a href="album.html">교회 앨범</a></li><li><a href="location.html">오시는 길</a></li><li><a href="https://www.youtube.com/@TV-ew5ic" target="_blank" rel="noopener">유튜브 채널 ↗</a></li></ul></div>' +
            '<div class="footer__col"><h4>문의</h4><ul><li>033-000-0000</li><li>galilee@church.kr</li><li>춘천시 우두동 309-3</li></ul></div>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom"><span>© 2026 갈릴리교회 GALILEE CHURCH.</span><span>강원특별자치도 춘천시 우두동 309-3</span></div>' +
      '</div></footer>';
  }

  /* ---- 헤더 스크롤 상태 ---- */
  var header = document.getElementById('header');
  if (header) {
    if (page === 'home') {
      var onScroll = function () { header.classList.toggle('solid', window.scrollY > 30); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    /* 모바일 메뉴 */
    var toggle = document.getElementById('navToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    function closeMenu() {
      header.classList.remove('menu-open'); mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
    }
    toggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu(); });
  }

  /* ---- 사진 자동 표시 (없으면 플레이스홀더) ---- */
  document.querySelectorAll('img.shot').forEach(function (img) {
    function fail() { img.style.display = 'none'; }
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail);
  });

  /* ---- 스크롤 등장 ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
          e.target.style.transitionDelay = Math.min(idx * 60, 320) + 'ms';
          e.target.classList.add('in'); io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- 히어로 슬라이드쇼 (홈에만 존재) ---- */
  (function () {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.hero__slide'));
    var dotsWrap = document.getElementById('heroDots');
    if (slides.length < 2 || !dotsWrap) return;
    var i = 0, timer = null;
    slides.forEach(function (s, n) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('aria-label', (n + 1) + '번째 슬라이드');
      if (n === 0) b.className = 'on';
      b.addEventListener('click', function () { go(n); restart(); });
      dotsWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);
    function go(n) {
      slides[i].classList.remove('active'); dots[i].classList.remove('on');
      i = n; slides[i].classList.add('active'); dots[i].classList.add('on');
    }
    function next() { go((i + 1) % slides.length); }
    function restart() { if (timer) clearInterval(timer); if (!reduceMotion) timer = setInterval(next, 5000); }
    restart();
  })();
})();
