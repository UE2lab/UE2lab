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
  .project-table {
    width: 1200px;
    font-size: 18px;
  }
  .project-cell {
    font-size: 20px;
    font-family: Arial;
  }
  .project-detail {
    background-color: transparent;
    padding: 10px 20px;
  }
</style>

## PROJECT LIST

<hr style="width: 1200px; border-width: 2px;">

<table class="project-table">
  <tr class="project-cell">
    <th>No.<hr></th><th>Project Title<hr></th><th>Period<hr></th><th>Funding<hr></th>
  </tr>
  {% for project in site.data.Projects %}
    <tr>
      <td class="project-cell" style="width: 70px;"><a href="#project-{{ project.number }}">{{ project.number }}</a>.</td>
      <td class="project-cell">{{ project.title }}</td>
      <td class="project-cell" style="width: 120px;">{{ project.year }}</td>
      <td class="project-cell" style="width: 460px;">{{ project.funding }}</td>
    </tr>
  {% endfor %}
</table>

<hr style="width: 1200px; border-width: 2px; margin-bottom: 140px;">

## PROJECT DETAIL

{% for project in site.data.Projects %}
  ### {{ project.number }}. {{ project.title }}
  
  <div class="project-detail">
    {{ project.introduction }}
    
    {% if project.image %}
      <p align="center"><img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" class="research-image"></p>
    {% endif %}
    
    <div class="project-detail">
      {{ project.description }}
      <hr style="border-color: black;">
      <br><br>
    </div>
  </div>
{% endfor %}
