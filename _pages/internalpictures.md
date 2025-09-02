---
title: "UE2 Lab - Internal Pictures"
layout: gridlay
excerpt: "UE2 Lab -- Internal Pictures"
permalink: /internalpictures/
---

<p class="title-center">Lab Gatherings</p>

<!-- 모달 (인라인 스타일 최소화) -->
<div class="modal" style="display: none; align-items: center; justify-content: center; flex-direction: column;">
  <span class="close" aria-label="Close">&times;</span>
  <img class="modal-content" alt="">
  <p class="modal-caption"></p>
</div>

<div class="custom-container-activities">
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
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .activity-image-size {
    width: 100%;
    height: 200px;          /* 썸네일 높이 고정 */
    object-fit: cover;      /* 중앙 자르기 */
    display: block;
  }

  /* 썸네일 캡션: 이미지 아래 고정 표시 */
  .photos-info {
    text-align: center;
    padding: 10px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    position: static;
    margin-top: 6px;
    width: 100%;
    opacity: 1;
    transition: none;
  }
  /* 기존 hover 오버레이는 비활성화 */
  .activity-image:hover .photos-info { opacity: 1; }
  

  /* 모달 컨테이너: 가운데 정렬 */
  .modal {
    display: none;              /* JS에서 'flex'로 변경 */
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* 모달 이미지: 다양한 비율 대응 + 아래 캡션 붙이기 */
  .modal-content {
    display: block;
    max-width: 90vw;            /* 화면 기준 */
    max-height: 80vh;
    width: auto;
    height: auto;
    object-fit: contain;        /* 전체 보이기(잘리지 않음) */
    margin: 0 5px 10px;         /* 캡션과 간격 */
    position: static;
  }

  /* 검정 캡션 박스(이미지 바로 아래) */
  .modal-caption {
    position: static;
    margin: 0 5px 0;
    max-width: 90vw;
    color: #fff;
    text-align: center;
    font-size: 20px;            /* 필요 시 24px */
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
  }
  .close:hover { color: #ddd; }
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
