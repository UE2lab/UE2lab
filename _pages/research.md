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

  .project-container {
    max-width: 800px; /* Adjust the maximum width as needed */
    margin: auto; /* Center the container */
  }

  .project-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>

<p class="title-center">PROJECT LIST</p>

<hr style="width: 1200px; border-width: 2px;">
<table style="width: 1200px; font-size: 18px;">
  <tr style="font-size: 20px; font-family: Arial">
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

<div class="project-container">
  <p class="title-center">PROJECT DETAIL</p> 
  {% for project in site.data.Projects %}
    <div class="project-card" id="project-{{ project.number }}">
      <h4><strong>{{ project.number }}. {{ project.title }}</strong></h4>
      <p>{{ project.introduction }}</p>
      <p align="center"><img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" class="research-image"></p>
      <p>{{ project.description }}</p>
      <hr style="border-color: black;">
      <br><br>
    </div>
  {% endfor %}
</div>
