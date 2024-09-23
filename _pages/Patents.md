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
</style>

<hr style="width: 1200px; border-width: 2px;">
<table style="width: 1200px; font-size: 18px;">
  <tr style="font-size: 20px; font-family: Arial">
    <th>No.<hr></th>
    <th>Patent Title<hr></th>
    <th>Inventor<hr></th>
    <th>Year<hr></th>
    <th>Application Date<hr></th>
    <th>Patent Number<hr></th>
  </tr>
  {% for patent in site.data.Patents %}
  <tr>
    <td class="project-cell" style="width: 60px;">
      {{ patent.number }}.
    </td>
    <td class="project-cell">{{ patent.title }}</td>
    <td class="project-cell" style="width: 200px;">{{ patent.authors }}</td>
    <td class="project-cell" style="width: 80px;">{{ patent.description }}</td>
    <td class="project-cell" style="width: 250px;">{{ patent.date }}</td>
    <td class="project-cell" style="width: 250px;">{{ patent.ID }}</td>
  </tr>
  {% endfor %}
</table>
<hr style="width: 1200px; border-width: 2px; margin-bottom: 140px;">
