---
title: "UE2 Lab - Research"
layout: textlay
excerpt: "UE2 Lab -- Research"
sitemap: false
permalink: /research/
---

<style>
  hr {
    margin: 0;
    border-color: black;
  }
  .project-detail { background-color: transparent; padding: 10px 20px; }
  @media (max-width: 767px) {
    .project-detail { padding: 4px 0 0; }
    .project-detail p { text-align: left !important; }
  }
</style>

<p class="title-center">PROJECT LIST</p>

<div class="table-wrap">
<hr class="rule-top">
<table class="responsive-table">
  <thead>
  <tr style="font-size: 20px; font-family: Arial">
    <th style="width: 70px;">No.<hr></th><th>Project Title<hr></th><th style="width: 120px;">Period<hr></th><th style="width: 460px;">Funding<hr></th>
  </tr>
  </thead>
  <tbody>
{% for project in site.data.Projects %}
    <tr>
      <td class="project-cell cell-no" data-label="No." style="width: 70px;"><a href="#project-{{ project.number }}">{{ project.number }}</a>.</td>
      <td class="project-cell cell-title" data-label="Project Title">{{ project.title }}</td>
      <td class="project-cell" data-label="Period" style="width: 120px;">{{ project.year }}</td>
      <td class="project-cell" data-label="Funding" style="width: 460px;">{{ project.funding }}</td>
    </tr>
{% endfor %}
  </tbody>
</table>
<hr class="rule-bottom">
</div>


<p class="title-center">PROJECT DETAIL</p>
{% for project in site.data.Projects %}
  <h4 id="project-{{ project.number }}"><strong>{{ project.number }}. {{ project.title }}</strong></h4>
  <div class="project-detail">
  <p>{{ project.introduction }}</p>
  <p align="center">
    <img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" alt="{{ project.title }}" class="research-image">
  </p>
  <p style="text-align: justify;">{{ project.description }}</p>
  </div>
  <hr style="border-color: black;">
  <br><br>
{% endfor %}
