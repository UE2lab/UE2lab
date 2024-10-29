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
<table style="width: 1200px; font-size: 16px;">
  <tr style="font-size: 18px; font-family: Arial">
    <th style="width: 50px;">No.<hr></th>
    <th style="width: 350px;">Patent Title<hr></th>
    <th style="width: 200px;">Inventor<hr></th>
    <th style="width: 200px;">Application Date<hr></th>
    <th style="width: 200px;">Application No.<hr></th> 
    <th style="width: 200px;">Registration Date<hr></th>    
    <th style="width: 200px;">Registration No.<hr></th>
  </tr>
  {% for patent in site.data.Patents %}
  <tr>
    <td class="project-cell">{{ patent.number }}.</td>
    <td class="project-cell">{{ patent.title }}</td>
    <td class="project-cell">{{ patent.authors }}</td>
    <td class="project-cell">{{ patent.applicationdate }}</td>
    <td class="project-cell">{{ patent.applicationnumber }}</td>
    <td class="project-cell">{{ patent.registdate }}</td>
    <td class="project-cell">{{ patent.registnumber }}</td>
  </tr>
  {% endfor %}
</table>
