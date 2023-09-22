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
  table {
    width: 1200px;
    font-size: 18px;
  }
  th {
    font-size: 20px;
    font-family: Arial;
    border-top: 2px solid black; /* Add a solid black line at the top of the header row */
  }
</style>

<p class="title-center">PROJECT LIST</p>

<hr style="width: 1200px; border-width: 2px;">
<table>
  <tr>
    <th>No.</th>
    <th>Project Title</th>
    <th>Period</th>
    <th>Funding</th>
  </tr>
{% for project in site.data.Projects %}
    <tr>
      <td class="project-cell" style="width: 70px;"><a href="#project-{{ project.number }}">{{ project.number }}</a>.</td>
      <td class="
