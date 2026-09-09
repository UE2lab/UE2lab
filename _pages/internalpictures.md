---
title: "UE2 Lab - Internal Pictures"
layout: gridlay
excerpt: "UE2 Lab -- Internal Pictures"
permalink: /internalpictures/
---

<p class="title-center">Lab Gatherings</p>

<!-- 앨범 모달 -->
<div class="modal" style="display: none;" data-single="true">
  <span class="close" aria-label="닫기">&times;</span>
  <div class="modal-stage">
    <button type="button" class="modal-nav modal-prev" aria-label="이전 사진">&#10094;</button>
    <img class="modal-content" alt="">
    <button type="button" class="modal-nav modal-next" aria-label="다음 사진">&#10095;</button>
  </div>
  <p class="modal-caption"></p>
  <p class="modal-counter"></p>
</div>

<!-- markdown="0" 로 내부 HTML 이스케이프 방지 -->
<div class="custom-container-activities" markdown="0">
{% assign pictures = site.data.Internalphotos %}
{% assign counter = 0 %}
{% for picture in pictures %}
  {% if counter == 0 %}
  <div class="student-row">
  {% endif %}

  {% comment %} images: 목록이 있으면 앨범, 없으면 기존과 동일한 단일 사진 {% endcomment %}
  {% if picture.images %}
    {% assign shots = picture.images %}
  {% else %}
    {% assign shots = picture.image | split: "@@never@@" %}
  {% endif %}
  {% if picture.image %}{% assign thumb = picture.image %}{% else %}{% assign thumb = shots | first %}{% endif %}
  {% capture album %}{% for im in shots %}{{ site.url }}{{ site.baseurl }}/images/activities/{{ im }}{% unless forloop.last %}|{% endunless %}{% endfor %}{% endcapture %}

  <div class="student-col">
    <div class="activity-image" role="button" tabindex="0" data-title="{{ picture.title | escape }}" data-date="{{ picture.date | escape }}" data-images="{{ album }}" style="position: relative; margin: 0; padding: 0;">
      <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ thumb }}" class="activity-image-size" alt="{{ picture.title }}" loading="lazy">
      {% if shots.size > 1 %}
      <span class="album-badge"><i class="album-badge-icon"></i>{{ shots.size }}</span>
      {% endif %}
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
  /* iOS Safari는 cursor:pointer 가 걸린 요소에만 탭을 click 으로 변환합니다 */
  .activity-image {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0.08);
  }
  .activity-image-size,
  .photos-info { cursor: pointer; }
  .activity-image:focus-visible { outline: 3px solid #841D1E; outline-offset: -3px; }
  .activity-image-size {
    width: 100%;
    height: 200px;          /* 썸네일 높이 고정 */
    object-fit: cover;      /* 중앙 자르기 */
    display: block;
  }

  /* ---------- 앨범 배지 (사진 여러 장일 때만 표시) ---------- */
  .album-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    display: inline-flex;
    align-items: center;
    background: rgba(0,0,0,0.72);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    padding: 5px 10px 5px 8px;
    border-radius: 999px;
    pointer-events: none;
  }
  .album-badge-icon {
    position: relative;
    display: inline-block;
    width: 9px;
    height: 9px;
    margin: 0 7px 0 2px;
    border: 1.5px solid currentColor;
    border-radius: 2px;
  }
  .album-badge-icon::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 9px;
    height: 9px;
    border: 1.5px solid currentColor;
    border-radius: 2px;
    background: rgba(0,0,0,0.72);
  }

  /* ---------- 썸네일 캡션 (이미지 아래 고정) ---------- */
  .photos-info {
    display: block;         /* main.scss 의 .photos-info{display:none} 무력화 */
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

  /* ---------- 모달 (사진 확대 / 앨범) ---------- */
  .modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.85);
    overflow: auto;
    display: none;              /* JS가 'flex'로 변경 */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .modal-stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 70px;
  }
  .modal-content {
    display: block;
    max-width: 100%;
    max-height: 76vh;
    width: auto;
    height: auto;
    object-fit: contain;
    margin: 0 0 10px;
    position: static;
    border-radius: 4px;
  }
  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    color: #fff;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .modal-nav:hover, .modal-nav:focus { background: rgba(255,255,255,0.35); outline: none; }
  .modal-prev { left: 8px; }
  .modal-next { right: 8px; }
  .modal[data-single="true"] .modal-nav { display: none; }
  .modal[data-single="true"] .modal-stage { padding: 0 10px; }

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
  .modal-counter {
    color: #fff;
    opacity: 0.8;
    font-size: 14px;
    letter-spacing: 0.06em;
    margin: 10px 0 0;
  }
  .modal[data-single="true"] .modal-counter { display: none; }

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
    z-index: 3;
  }
  .close:hover, .close:focus { color: #ddd; opacity: 1; }

  /* ---------- 태블릿 (768 ~ 991px) ---------- */
  @media (min-width: 768px) and (max-width: 991px) {
    .custom-container-activities { padding: 10px 0; gap: 14px; }
    .student-col { max-width: none; flex: 0 0 calc(33.3333% - 10px); margin: 0; }
    .student-row { display: contents; }
    .activity-image-size { height: 170px; }
    .photos-info p { font-size: 13px; }
    .modal-stage { padding: 0 60px; }
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
    .album-badge { top: 5px; right: 5px; font-size: 11px; padding: 4px 8px 4px 6px; }
    .photos-info { padding: 7px 6px; margin-top: 0; }
    .photos-info p { font-size: 11.5px; line-height: 1.35; }

    .modal-stage { padding: 0 4px; }
    .modal-content { max-height: 66vh; margin: 0 0 10px; }
    .modal-nav { width: 44px; height: 44px; font-size: 20px; background: rgba(0,0,0,0.45); }
    .modal-prev { left: 2px; }
    .modal-next { right: 2px; }
    .modal-caption { font-size: 14px; max-width: 94vw; padding: 8px 10px; }
    .modal-counter { font-size: 13px; margin-top: 8px; }
    .close { top: 8px; right: 12px; font-size: 34px; padding: 2px 10px; }
  }
</style>

<script src="{{ site.url }}{{ site.baseurl }}/js/album.js"></script>
