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

## PROJECT LIST

<hr style="width: 1200px; border-width: 2px;">

| No. | Project Title | Period | Funding |
| --- | ------------- | ------ | ------- |
{% for project in site.data.Projects %}
| [{{ project.number }}](#project-{{ project.number }}) | {{ project.title }} | {{ project.year }} | {{ project.funding }} |
{% endfor %}
</table>
<hr style="width: 1200px; border-width: 2px; margin-bottom: 140px;">

## PROJECT DETAIL

{% for project in site.data.Projects %}
  ### {{ project.number }}. {{ project.title }}
  
  {{ project.introduction }}
  
  {% if project.image %}
    ![{{ project.title }}]({{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }})
  {% endif %}
  
  {{ project.description | markdownify }}
  
  ---
{% endfor %}
