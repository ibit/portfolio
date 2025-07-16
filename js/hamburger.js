// ハンバーガーメニュー（バツ印アニメ変形）の開閉制御
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('nav-icon3');
  const overlay = document.getElementById('menuOverlay');
  const menu = document.getElementById('fullscreenMenu');

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ハンバーガー（≡→×）クリックで開閉
  hamburger.addEventListener('click', function() {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // オーバーレイクリックで閉じる
  overlay.addEventListener('click', closeMenu);

  // メニュー内リンククリックで閉じる
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', function(event) {
    if(event.key === "Escape" && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  // ウィンドウリサイズ時、PCに戻ったらメニューを強制的に閉じる
  window.addEventListener('resize', function() {
    if(window.innerWidth > 768) closeMenu();
  });
});