---
title: "UE2 Lab - Team"
layout: gridlay
excerpt: "UE2 Lab: Team members"
sitemap: false
permalink: /team/
---

<p class="title-center">RESEARCHERS</p>

{% assign postdocs = site.data.Students | where: "role", "Postdoc" %}

{% if postdocs.size > 0 %}
<p class="section-heading">Postdoctoral Fellows</p>

<div class="custom-container-student">
{% assign counter = 0 %}
{% for member in postdocs %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
 <div class="student-image" style="position: relative; margin: 0px; padding: 0px;">
 <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="student-image-size" alt="{{ member.name }}">
 <div class="overlay"></div>
 <div class="student-info">
 <p>{{ member.name }}</p>
 <p>{{ member.info }}</p>
 <p>{{ member.email }}</p>
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
{% endif %}

<p class="section-heading">Graduate Students</p>

<div class="custom-container-student">
{% assign counter = 0 %}
{% for member in site.data.Students %}
{% unless member.role == "Postdoc" %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
 <div class="student-image" style="position: relative; margin: 0px; padding: 0px;">
 <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="student-image-size" alt="{{ member.name }}">
 <div class="overlay"></div>
 <div class="student-info">
 <p>{{ member.name }}</p>
 <p>{{ member.info }}</p>
 <p>{{ member.email }}</p>
 </div>
 </div>
</div>
{% assign counter = counter | plus: 1 %}
{% if counter == 3 %}
</div>
{% assign counter = 0 %}
{% endif %}
{% endunless %}
{% endfor %}
{% if counter != 0 %}
</div>
{% endif %}
</div>

<style>
  /* 섹션 제목 (Postdoctoral Fellows / Graduate Students) */
  .section-heading {
    max-width: 800px;
    margin: 46px auto 22px;
    padding-bottom: 9px;
    border-bottom: 2px solid #841D1E;
    font-family: Arial, sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #1a1a1a;
    text-align: left;
    letter-spacing: -0.01em;
  }
  /* RESEARCHERS 제목 바로 아래에 오는 첫 섹션은 여백을 줄임 */
  .title-center + .section-heading { margin-top: 6px; }

  /* 인원이 3명 미만인 줄도 왼쪽부터 채워지도록 */
  .custom-container-student .student-row { justify-content: flex-start; }

  @media (min-width: 768px) and (max-width: 991px) {
    .section-heading { max-width: 100%; font-size: 22px; margin: 34px 8px 18px; }
  }

  @media (max-width: 767px) {
    .section-heading {
      max-width: 100%;
      margin: 28px 0 14px;
      padding-bottom: 7px;
      font-size: 19px;
      border-bottom-width: 2px;
    }
  }
</style>

<script src="{{ site.url }}{{ site.baseurl }}/js/team.js"></script>
