/*!
 * UE2 Lab — Research 프로젝트 아코디언
 *
 * 마크다운 페이지 대신 별도 .js 로 둡니다.
 * (_config.yml 의 kramdown parse_block_html/smart_quotes 설정 때문에
 *  인라인 스크립트는 문자가 변형되어 깨질 수 있습니다)
 */
(function () {
  'use strict';

  function init() {
    var accordion = document.querySelector('.project-accordion');
    if (!accordion) return;

    var items = accordion.querySelectorAll('.project-item');
    var toggleAll = document.querySelector('.project-toggle-all');

    function setOpen(item, open) {
      if (!item) return;
      var head = item.querySelector('.project-head');
      if (open) {
        item.classList.add('open');
        if (head) head.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('open');
        if (head) head.setAttribute('aria-expanded', 'false');
      }
    }

    function openCount() {
      return accordion.querySelectorAll('.project-item.open').length;
    }

    function refreshToggleAll() {
      if (!toggleAll) return;
      var allOpen = openCount() === items.length;
      toggleAll.textContent = allOpen ? 'Collapse all' : 'Expand all';
      toggleAll.setAttribute('data-state', allOpen ? 'expanded' : 'collapsed');
    }

    // 항목 클릭 — 제목 줄 어디를 눌러도 열리고 닫힙니다
    accordion.addEventListener('click', function (e) {
      var t = e.target;
      if (!t) return;

      var head = null;
      if (t.closest) {
        head = t.closest('.project-head');
      } else {
        var n = t;
        while (n) {
          if (n.className && String(n.className).indexOf('project-head') !== -1) { head = n; break; }
          n = n.parentNode;
        }
      }
      if (!head) return;

      var item = head.parentNode;
      setOpen(item, item.className.indexOf('open') === -1);
      refreshToggleAll();
    });

    // 모두 펼치기 / 모두 접기
    if (toggleAll) {
      toggleAll.addEventListener('click', function () {
        var expand = toggleAll.getAttribute('data-state') !== 'expanded';
        for (var i = 0; i < items.length; i++) setOpen(items[i], expand);
        refreshToggleAll();
      });
    }

    // 기존 앵커 링크(#project-C2 등)로 들어오면 해당 항목을 펼쳐 줍니다
    function openFromHash() {
      var hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      var target;
      try {
        target = document.querySelector(hash);
      } catch (err) {
        return;
      }
      if (!target || target.className.indexOf('project-item') === -1) return;
      setOpen(target, true);
      refreshToggleAll();
      target.scrollIntoView({ block: 'start' });
    }

    window.addEventListener('hashchange', openFromHash);
    openFromHash();
    refreshToggleAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
