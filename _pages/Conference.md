---
title: "UE2 Lab - Conference"
layout: textlay
excerpt: "UE2 Lab -- Conference."
sitemap: false
permalink: /Conference/
---

<p class="title-center">Conference Proceedings</p>

<style>
  hr {
    margin: 0;
    border-color: black;
  }
  .title-link { color: inherit; text-decoration: none; }
  .title-link:hover, .title-link:focus { color: inherit; text-decoration: underline; }
  @media (max-width: 767px) {
    .title-link { color: #841D1E; }
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
{% for paper in site.data.conference %}
  <tr>
    <td class="project-cell cell-no" data-label="No." style="width: 70px;"><a href="{{ paper.link.url }}" target="_blank" rel="noopener">{{ paper.number }}</a>.</td><td class="project-cell cell-title" data-label="Paper Title"><a href="{{ paper.link.url }}" target="_blank" rel="noopener" class="title-link">{{ paper.title }}</a></td><td class="project-cell" data-label="Year" style="width: 80px;">{{ paper.description }}</td><td class="project-cell" data-label="Authors" style="width: 250px;">{{ paper.authors }}</td><td class="project-cell" data-label="Journal" style="width: 200px;">{{ paper.link.display }}</td>
  </tr>
{% endfor %}
  </tbody>
</table>
<hr class="rule-bottom">
</div>
