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
</style>

<hr style="width: 1200px; border-width: 2px;">
<table style="width: 1200px; font-size: 15px;">
  <tr style="font-size: 20px; font-family: Arial">
    <th>No.<hr></th><th>Paper Title<hr></th><th>Year<hr></th><th>Authors<hr></th><th>Journal<hr></th>
  </tr>
{% for paper in site.data.conference %}
  <tr>
    <td class="project-cell" style="width: 70px;"><a href="{{ paper.link.url }}" target="_blank">{{ paper.number }}</a>.</td><td class="project-cell">{{ paper.title }}</td><td class="project-cell" style="width: 80px;">{{ paper.description }}</td><td class="project-cell" style="width: 250px;">{{ paper.authors }}</td><td class="project-cell" style="width: 200px;">{{ paper.link.display }}</td>
  </tr>
{% endfor %}
</table>
<hr style="width: 1200px; border-width: 2px; margin-bottom: 140px;">
