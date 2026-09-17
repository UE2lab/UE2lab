---
title: "UE2 Lab - Patents"
layout: textlay
excerpt: "UE2 Lab -- Patents."
sitemap: false
permalink: /Patents/
---

<p class="title-center">Patents</p>

<style>
  hr {
    margin: 0;
    border-color: black;
  }
  /* 글자 크기는 .responsive-table(=SCIE/Conference)와 동일하게 상속받습니다 */
</style>

<div class="table-wrap">
<hr class="rule-top">
<table class="responsive-table patent-table">
  <thead>
  <tr style="font-size: 20px; font-family: Arial">
    <th style="width: 50px;">No.<hr></th>
    <th style="width: 350px;">Patent Title<hr></th>
    <th style="width: 200px;">Inventor<hr></th>
    <th style="width: 200px;">Application Date<hr></th>
    <th style="width: 200px;">Application No.<hr></th>
    <th style="width: 200px;">Registration Date<hr></th>
    <th style="width: 200px;">Registration No.<hr></th>
  </tr>
  </thead>
  <tbody>
  {% for patent in site.data.Patents %}
  <tr>
    <td class="project-cell cell-no" data-label="No.">{{ patent.number }}.</td>
    <td class="project-cell cell-title" data-label="Patent Title">{{ patent.title }}</td>
    <td class="project-cell" data-label="Inventor">{{ patent.authors }}</td>
    <td class="project-cell" data-label="Application Date">{{ patent.applicationdate }}</td>
    <td class="project-cell" data-label="Application No.">{{ patent.applicationnumber }}</td>
    <td class="project-cell" data-label="Registration Date">{{ patent.registdate }}</td>
    <td class="project-cell" data-label="Registration No.">{{ patent.registnumber }}</td>
  </tr>
  {% endfor %}
  </tbody>
</table>
<hr class="rule-bottom">
</div>
