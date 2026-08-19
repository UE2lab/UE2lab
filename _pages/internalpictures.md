---
title: "UE2 Lab - Internal Pictures"
layout: gridlay
excerpt: "UE2 Lab -- Internal Pictures"
permalink: /internalpictures/
---

<p class="title-center">Lab Gatherings</p>

<!-- Modal -->
<div class="modal" style="display: none; align-items: center; justify-content: center; flex-direction: column;">
  <span class="close" aria-label="Close">&times;</span>
  <img class="modal-content" alt="">
  <p class="modal-caption"></p>
</div>

<!-- 여기가 핵심: markdown="0" 로 내부 HTML 이스케이프 방지 -->
<div class="custom-container-activities" markdown="0">
{% assign pictures = site.data.Internalphotos %}
{% assign counter = 0 %}
{% for picture in pictures %}
  {% if counter == 0 %}
  <div class="student-row">
  {% endif %}

  <div class="student-col">
    <div class="activity-image" style="position: relative; margin: 0; padding: 0;">
      <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ picture.image }}" class="activity-image-size" alt="{{ picture.title }}">
      <div class="photos-info">
        <p style="text-align: center;">{{ picture.title }} {{ picture.date }}</p>
      </div>
    </div>
  </div>

  {% assign counter = counter | plus: 1 %}
  {% if counter == 3 %}
  </div>
  {% assign counter = 0 %}
  {% endif %}
{% endfor %}
{% if counter != 0 %}
</div>
{% endif %}
</div>

<style>
  /* ---------- 갤러리 그리드 ---------- */
  .custom-container-activities {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 20px;
  }
  .student-row {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .student-col {
    max-width: 300px;
    flex: 1;
    margin: 0 10px;
    cursor: pointer;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .student-col:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  .activity-image-size {
    width: 100%;
    height: 200px;          /* 썸네일 높이 고정 */
    object-fit: cover;      /* 중앙 자르기 */
    display: block;
  }

  /* ---------- 썸네일 캡션 (이미지 아래 고정) ---------- */
  .photos-info {
    text-align: center;
    padding: 10px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    position: static;
    margin-top: 6px;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: none;
  }
  .photos-info p {
    color: #fff;            /* 어두운 배경 위 흰 글씨로 대비 확보 */
    text-shadow: none;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    width: auto;
    word-break: break-word;
  }

  /* ---------- 모달 (사진 확대) ---------- */
  .modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    overflow: auto;
    display: none;              /* JS가 'flex'로 변경 */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    display: block;
    max-width: 90vw;
    max-height: 80vh;
    width: auto;
    height: auto;
    object-fit: contain;
    margin: 0 5px 10px;
    position: static;
  }
  .modal-caption {
    position: static;
    margin: 0 5px 0;
    max-width: 90vw;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    background: rgba(0,0,0,0.6);
    padding: 10px;
    border-radius: 8px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;          /* Bootstrap 3의 .close 기본 opacity:.2 무력화 */
    text-shadow: none;
    z-index: 1;
  }
  .close:hover, .close:focus { color: #ddd; opacity: 1; }

  /* ---------- 태블릿 (768 ~ 991px) ---------- */
  @media (min-width: 768px) and (max-width: 991px) {
    .custom-container-activities { padding: 10px 0; gap: 14px; }
    .student-col { max-width: none; flex: 0 0 calc(33.3333% - 10px); margin: 0; }
    .student-row { display: contents; }
    .activity-image-size { height: 170px; }
    .photos-info p { font-size: 13px; }
  }

  /* ---------- 모바일 (<= 767px) ---------- */
  @media (max-width: 767px) {
    .custom-container-activities { padding: 4px 0 12px; gap: 10px; }
    /* Liquid가 3개마다 만든 행 래퍼를 해제해 2열로 연속 배치 */
    .student-row { display: contents; }
    .student-col {
      max-width: calc(50% - 5px);
      flex: 0 0 calc(50% - 5px);
      margin: 0;
      border-width: 1px;
      border-radius: 8px;
    }
    .student-col:hover { transform: none; box-shadow: none; }
    .activity-image-size { height: 130px; }
    .photos-info { padding: 7px 6px; margin-top: 0; }
    .photos-info p { font-size: 11.5px; line-height: 1.35; }

    .modal-content { max-width: 94vw; max-height: 66vh; margin: 0 0 10px; }
    .modal-caption { font-size: 14px; max-width: 94vw; padding: 8px 10px; }
    .close { top: 8px; right: 12px; font-size: 34px; padding: 2px 10px; }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const modalCaption = document.querySelector('.modal-caption');
  const closeBtn = document.querySelector('.close');

  modal.style.display = 'none';

  document.querySelectorAll('.activity-image').forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.querySelector('.activity-image-size').src;
      modalCaption.textContent = this.querySelector('.photos-info p:first-of-type').textContent;
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(event) {
    if (event.target === modal) closeModal();
  });
});
</script>
