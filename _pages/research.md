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
</style>

<p class="title-center">PROJECT LIST</p>

<hr style="width: 1200px; border-width: 2px;">
<table style="width: 1200px; font-size: 18px;">
  <tr style="font-size: 20px; font-family: Arial">
    <th>No.</th><th>Project Title</th><th>Period</th><th>Funding</th>
  </tr>
  <tr style="font-size: 20px; font-family: Arial">
    <td><hr></td><td><hr></td><td><hr></td><td><hr></td>
  </tr>
  <!-- Add one or more empty rows with non-breaking spaces to create vertical spacing -->
  <tr>
    <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
  </tr>
{% for project in site.data.Projects %}
  <tr>
    <td class="project-cell" style="width: 70px;"><a href="#project-{{ project.number }}">{{ project.number }}</a>.</td><td class="project-cell">{{ project.title }}</td><td class="project-cell" style="width: 120px;">{{ project.year }}</td><td class="project-cell" style="width: 460px;">{{ project.funding }}</td>
  </tr>
{% endfor %}
</table>
<hr style="width: 1200px; border-width: 2px; margin-bottom: 140px;">


<p class="title-center">PROJECT DETAIL</p> 
{% for project in site.data.Projects %}
<h4 id="project-{{ project.number }}">**{{ project.number }}. {{ project.title }}**</h4>
<div style="background-color:transparent; padding-top: 10px; padding-right: 20px; padding-bottom: 0.1px; padding-left: 20px;">{{ project.introduction }}
</div>
<p align="center"><img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" class='research-image'></p>

<div style="background-color:transparent; padding-top: 10px; padding-right: 20px; padding-bottom: 0.1px; padding-left: 20px;">{{ project.description }}
</div><br>
<hr style="border-color: black;">
<br><br>
{% endfor %}

