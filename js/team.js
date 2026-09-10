/*!
 * UE2 Lab — Researchers / Alumni 카드 호버 효과
 *
 * 마크다운 페이지 대신 별도 .js 로 둡니다.
 * (_config.yml 의 kramdown 설정 때문에 인라인 스크립트는 변형될 위험이 있습니다)
 */
(function () {
  'use strict';

  function init() {
    var cards = document.getElementsByClassName('student-image');

    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('mouseover', function () {
        this.style.opacity = '0.9';
        this.style.transition = 'transform 0.3s ease-in-out';
        this.style.transform = 'scale(1.02)';
        var info = this.getElementsByClassName('student-info')[0];
        if (info) info.style.display = 'block';
      });

      cards[i].addEventListener('mouseout', function () {
        this.style.opacity = '1.0';
        this.style.transition = 'transform 0.3s ease-in-out';
        this.style.transform = 'scale(1.0)';
        var info = this.getElementsByClassName('student-info')[0];
        if (info) info.style.display = 'none';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
