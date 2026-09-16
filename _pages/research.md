---
title: "UE2 Lab - Research"
layout: textlay
excerpt: "UE2 Lab -- Research"
sitemap: false
permalink: /research/
---

<p class="title-center">PROJECT LIST</p>

<div class="project-toolbar" markdown="0">
<button type="button" class="project-toggle-all" data-state="collapsed">Expand all</button>
</div>

<div class="project-accordion" markdown="0">
<div class="project-thead" aria-hidden="true">
<span class="pcol pcol-no">No.</span>
<span class="pcol pcol-title">Project Title</span>
<span class="pcol pcol-period">Period</span>
<span class="pcol pcol-funding">Funding</span>
<span class="pcol pcol-caret"></span>
</div>
{% for project in site.data.Projects %}
<div class="project-item" id="project-{{ project.number }}">
<button type="button" class="project-head" id="head-{{ project.number }}" aria-expanded="false" aria-controls="panel-{{ project.number }}">
<span class="pcol pcol-no">{{ project.number }}</span>
<span class="pcol pcol-title">{{ project.title }}</span>
<span class="pcol pcol-period" data-label="Period">{{ project.year }}</span>
<span class="pcol pcol-funding" data-label="Funding">{{ project.funding }}</span>
<span class="pcol pcol-caret" aria-hidden="true"></span>
</button>
<div class="project-panel" id="panel-{{ project.number }}" role="region" aria-labelledby="head-{{ project.number }}">
<div class="project-panel-inner">
<div class="project-body">
{% if project.collaboration %}<p class="project-collab"><span class="collab-label">International Collaboration</span>{{ project.collaboration }}</p>{% endif %}
<p class="project-intro">{{ project.introduction }}</p>
<p class="project-figure"><img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" alt="{{ project.title }}" loading="lazy"></p>
<p class="project-desc">{{ project.description }}</p>
</div>
</div>
</div>
</div>
{% endfor %}
</div>

<style>
  /* ===== 프로젝트 아코디언 ===== */

  .project-toolbar {
    max-width: 100%;
    margin: 0 auto 10px;
    text-align: right;
  }

  .project-toggle-all {
    background: transparent;
    border: 1px solid #d5d5d5;
    border-radius: 999px;
    padding: 6px 15px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }
  .project-toggle-all:hover { border-color: #841D1E; color: #841D1E; }
  .project-toggle-all:focus-visible { outline: 2px solid #841D1E; outline-offset: 2px; }

  .project-accordion {
    max-width: 100%;
    margin: 0 auto 90px;
  }

  /* 헤더 행과 각 항목이 같은 그리드를 공유해 열이 정렬됩니다 */
  .project-thead,
  .project-head {
    display: grid;
    grid-template-columns: 76px minmax(0, 1fr) 116px 330px 28px;
    gap: 16px;
    align-items: center;
    text-align: left;
  }

  .project-thead {
    padding: 0 6px 10px;
    border-bottom: 2px solid #000;
    font-family: Arial, sans-serif;
    font-size: 19px;
    font-weight: bold;
    color: #000;
  }

  .project-head {
    width: 100%;
    margin: 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #e3e3e3;
    padding: 18px 6px;
    font-family: inherit;
    font-size: 17px;
    color: #222;
    cursor: pointer;
    transition: background-color 0.15s;
  }
  .project-head:hover { background-color: #fafafa; }
  .project-head:focus-visible { outline: 2px solid #841D1E; outline-offset: -2px; }

  .pcol-no {
    font-weight: 700;
    color: #841D1E;
    letter-spacing: 0.02em;
  }
  .pcol-title {
    font-weight: 600;
    line-height: 1.4;
  }
  .pcol-period,
  .pcol-funding {
    color: #555;
    font-size: 15px;
    line-height: 1.4;
  }
  .project-thead .pcol-no,
  .project-thead .pcol-period,
  .project-thead .pcol-funding {
    color: #000;
    font-size: 19px;
    font-weight: bold;
  }

  /* 펼침 화살표 */
  .pcol-caret {
    justify-self: end;
    width: 9px;
    height: 9px;
    border-right: 2px solid #999;
    border-bottom: 2px solid #999;
    transform: rotate(45deg);
    transition: transform 0.25s ease, border-color 0.25s ease;
  }
  .project-item.open .pcol-caret {
    transform: rotate(-135deg);
    border-color: #841D1E;
  }
  .project-item.open .project-head {
    background-color: #fbf7f7;
    border-bottom-color: transparent;
  }
  .project-item.open .pcol-title { color: #841D1E; }

  /* 펼쳐지는 영역 (0fr -> 1fr 로 높이 계산 없이 부드럽게 열림) */
  .project-panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
    border-bottom: 1px solid #e3e3e3;
  }
  .project-item.open .project-panel { grid-template-rows: 1fr; }

  .project-panel-inner {
    overflow: hidden;
    min-height: 0;
  }

  .project-body { padding: 4px 10px 36px; }

  /* 국제협력 표기 (해당 과제에만 나타남) */
  .project-collab {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0 14px;
    font-size: 16px;
    color: #841D1E;
    font-weight: 600;
  }
  .collab-label {
    display: inline-block;
    padding: 3px 11px;
    border: 1px solid #d9bcbc;
    border-radius: 999px;
    background: #f9f2f2;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #841D1E;
    white-space: nowrap;
  }

  .project-intro {
    font-size: 17px;
    line-height: 1.65;
    margin: 0 0 4px;
  }

  .project-figure {
    text-align: center;
    margin: 24px 0;
  }
  .project-figure img {
    width: 100%;
    max-width: 1100px;   /* 연구 그림 원본 중 가장 작은 것이 961px 폭입니다 */
    height: auto;
  }

  .project-desc {
    text-align: justify;
    font-size: 17px;
    line-height: 1.7;
    margin: 0;
  }

  /* ===== 태블릿 ===== */
  @media (min-width: 768px) and (max-width: 991px) {
    .project-thead,
    .project-head {
      grid-template-columns: 62px minmax(0, 1fr) 100px 200px 24px;
      gap: 12px;
    }
    .project-thead { font-size: 16px; }
    .project-thead .pcol-no,
    .project-thead .pcol-period,
    .project-thead .pcol-funding { font-size: 16px; }
    .project-head { font-size: 15px; padding: 15px 4px; }
    .pcol-period, .pcol-funding { font-size: 13px; }
    .project-intro, .project-desc { font-size: 16px; }
  }

  /* ===== 모바일 ===== */
  @media (max-width: 767px) {
    .project-toolbar { margin-bottom: 8px; }
    .project-toggle-all { font-size: 13px; padding: 5px 13px; }

    .project-accordion { margin-bottom: 40px; }
    .project-thead { display: none; }

    .project-head {
      grid-template-columns: 1fr;
      gap: 5px;
      padding: 15px 30px 15px 0;
      position: relative;
      font-size: 15px;
    }

    .pcol-no {
      justify-self: start;
      font-size: 12px;
      padding: 2px 10px;
      margin-bottom: 2px;
      background: #f6eeee;
      border-radius: 999px;
    }
    .pcol-title { font-size: 16px; line-height: 1.38; }
    .pcol-period, .pcol-funding { font-size: 13px; }
    .pcol-period::before,
    .pcol-funding::before {
      content: attr(data-label) ": ";
      color: #999;
      font-weight: 700;
    }

    .pcol-caret {
      position: absolute;
      right: 6px;
      top: 26px;
    }

    .project-body { padding: 2px 0 26px; }
    .project-intro, .project-desc { font-size: 15px; line-height: 1.6; }
    .project-collab { font-size: 14px; gap: 8px; margin: 6px 0 12px; }
    .collab-label { font-size: 11px; padding: 2px 9px; }
    .project-figure { margin: 18px 0; }
  }

  /* ===== 대형 화면 ===== */
  @media (min-width: 1400px) {
    .project-thead,
    .project-head { grid-template-columns: 88px minmax(0, 1fr) 130px 380px 30px; gap: 20px; }
    .project-thead { font-size: 21px; }
    .project-thead .pcol-no,
    .project-thead .pcol-period,
    .project-thead .pcol-funding { font-size: 21px; }
    .project-head { font-size: 19px; padding: 21px 6px; }
    .pcol-period, .pcol-funding { font-size: 16px; }
    .project-intro, .project-desc { font-size: 19px; }
    .project-collab { font-size: 17px; }
  }

  @media (min-width: 1900px) {
    .project-thead,
    .project-head { grid-template-columns: 96px minmax(0, 1fr) 145px 430px 32px; gap: 24px; }
    .project-thead { font-size: 23px; }
    .project-thead .pcol-no,
    .project-thead .pcol-period,
    .project-thead .pcol-funding { font-size: 23px; }
    .project-head { font-size: 21px; padding: 24px 6px; }
    .pcol-period, .pcol-funding { font-size: 17px; }
    .project-intro, .project-desc { font-size: 20px; }
    .project-collab { font-size: 18px; }
    .project-figure img { max-width: 1200px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .project-panel, .pcol-caret { transition: none; }
  }
</style>

<script src="{{ site.url }}{{ site.baseurl }}/js/projects.js"></script>
