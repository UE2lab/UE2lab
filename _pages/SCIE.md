---
title: "UE2 Lab - SCIE"
layout: textlay
excerpt: "UE2 Lab -- SCIE."
sitemap: false
permalink: /SCIE/
---

<p class="title-center">SCIE Articles</p>

<style>
  hr {
    margin: 0;
    border-color: black;
  }
</style>

<div class="table-wrap">
<hr class="rule-top">
<table class="responsive-table">
  <thead>
  <tr style="font-size: 20px; font-family: Arial">
    <th style="width: 70px;">No.<hr></th><th>Paper Title<hr></th><th style="width: 80px;">Year<hr></th><th style="width: 250px;">Authors<hr></th><th style="width: 200px;">Journal<hr></th>
  </tr>
  </thead>
  <tbody>
{% for paper in site.data.SCIE %}
  <tr>
    <td class="project-cell cell-no" data-label="No." style="width: 70px;"><a href="{{ paper.link.url }}" target="_blank" rel="noopener">{{ paper.number }}</a>.</td><td class="project-cell cell-title" data-label="Paper Title"><a href="{{ paper.link.url }}" target="_blank" rel="noopener" class="title-link">{{ paper.title }}</a></td><td class="project-cell" data-label="Year" style="width: 80px;">{{ paper.description }}</td><td class="project-cell" data-label="Authors" style="width: 250px;">{{ paper.authors }}</td><td class="project-cell" data-label="Journal" style="width: 200px;">{{ paper.link.display }}</td>
  </tr>
{% endfor %}
  </tbody>
</table>
<hr class="rule-bottom">
</div>

<style>
  /* PC에서는 제목 링크를 본문처럼 보이게 유지 (기존과 동일한 모양) */
  .title-link { color: inherit; text-decoration: none; }
  .title-link:hover, .title-link:focus { color: inherit; text-decoration: underline; }
  @media (max-width: 767px) {
    /* 모바일에서는 제목 전체가 논문 링크가 되어 탭하기 쉬움 */
    .title-link { color: #841D1E; }
  }
</style>
