/*!
 * UE2 Lab — Activities 앨범 뷰어
 *
 * 이 파일은 별도의 .js 로 분리되어 있습니다.
 * 마크다운 페이지 안에 <script> 로 직접 넣으면 kramdown 이 && 같은 문자를
 * HTML 엔티티로 바꿔 스크립트 전체가 문법 오류로 죽는 경우가 있습니다.
 *
 * 사용법: 활동 페이지에서 아래처럼 불러옵니다.
 *   <script src="{{ site.url }}{{ site.baseurl }}/js/album.js"></script>
 *
 * 필요한 마크업:
 *   .student-col > .activity-image[data-images="url1|url2|..."][data-title][data-date]
 *   .modal > .modal-stage > (.modal-prev, .modal-content, .modal-next)
 *          > .modal-caption, .modal-counter, .close
 */
(function () {
  'use strict';

  function init() {
    var modal = document.querySelector('.modal');
    if (!modal) return;

    var img      = modal.querySelector('.modal-content');
    var caption  = modal.querySelector('.modal-caption');
    var counter  = modal.querySelector('.modal-counter');
    var closeBtn = modal.querySelector('.close');
    var prevBtn  = modal.querySelector('.modal-prev');
    var nextBtn  = modal.querySelector('.modal-next');

    if (!img) return;

    var album = [];
    var index = 0;
    var title = '';

    modal.style.display = 'none';

    function isOpen() {
      return modal.style.display === 'flex';
    }

    function preload(i) {
      if (album[i]) {
        var p = new Image();
        p.src = album[i];
      }
    }

    function show(i) {
      if (album.length === 0) return;
      index = (i % album.length + album.length) % album.length;  // 끝에서 처음으로 순환
      img.src = album[index];
      img.alt = title + ' (' + (index + 1) + '/' + album.length + ')';
      if (counter) {
        counter.textContent = album.length > 1 ? (index + 1) + ' / ' + album.length : '';
      }
      preload(index + 1 < album.length ? index + 1 : 0);
      preload(index - 1 >= 0 ? index - 1 : album.length - 1);
    }

    function openAlbum(card) {
      var raw = card.getAttribute('data-images') || '';
      album = raw.split('|').filter(function (s) { return s.length > 0; });
      if (album.length === 0) {
        // data-images 가 비어 있으면 썸네일 이미지 한 장이라도 보여준다
        var fallback = card.querySelector('.activity-image-size');
        if (!fallback) return;
        album = [fallback.src];
      }
      title = card.getAttribute('data-title') || '';
      var date = card.getAttribute('data-date') || '';
      caption.textContent = (title + ' ' + date).replace(/^\s+|\s+$/g, '');
      modal.setAttribute('data-single', album.length > 1 ? 'false' : 'true');
      show(0);
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    // 카드 어느 지점을 눌러도 열리도록 document 에 위임합니다.
    // (개별 요소 리스너는 iOS Safari 에서 누락되는 경우가 있습니다)
    document.addEventListener('click', function (e) {
      if (isOpen()) return;
      var t = e.target;
      if (!t) return;

      var col = null;
      if (t.closest) {
        col = t.closest('.student-col');
      } else {
        var n = t;
        while (n) {
          if (n.className && String(n.className).indexOf('student-col') !== -1) { col = n; break; }
          n = n.parentNode;
        }
      }
      if (!col) return;

      var card = col.querySelector('.activity-image');
      if (card) openAlbum(card);
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        show(index - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        show(index + 1);
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeModal();
      });
    }

    modal.addEventListener('click', function (e) {
      var cls = e.target.className ? String(e.target.className) : '';
      if (e.target === modal || cls.indexOf('modal-stage') !== -1) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (isOpen()) {
        if (e.key === 'Escape')          closeModal();
        else if (e.key === 'ArrowLeft')  show(index - 1);
        else if (e.key === 'ArrowRight') show(index + 1);
        return;
      }
      // 키보드 사용자: 카드에 포커스한 상태에서 Enter/Space
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var focused = document.activeElement;
      if (focused && focused.className &&
          String(focused.className).indexOf('activity-image') !== -1) {
        e.preventDefault();
        openAlbum(focused);
      }
    });

    // 모바일 스와이프
    var x0 = null, y0 = null;
    modal.addEventListener('touchstart', function (e) {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    }, { passive: true });

    modal.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      var far = Math.abs(dx) > 45;
      var horizontal = Math.abs(dx) > Math.abs(dy);
      if (far) {
        if (horizontal) show(index + (dx < 0 ? 1 : -1));
      }
      x0 = null;
      y0 = null;
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
