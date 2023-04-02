---
title: "UE2 Lab - SCIE"
layout: textlay
excerpt: "UE2 Lab -- SCIE."
sitemap: false
permalink: /SCIE/
---

<p class="title-center">SCIE JOURNAL</p>

<div class="custom-container-paper">
{% assign papers = site.data.SCIE %}
{% assign counter = 0 %}
{% for paper in papers %}
{% if counter == 0 %}
<div class="publication-row">
{% endif %}
<div class="publication-col">
  <div class="student-image publication-image" style="position: relative; margin: 0px; padding: 0px;">
  <a href="{{ paper.link.url }}" target="_blank" style="text-decoration: none; color: inherit;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ paper.image }}" style="width: 370px; object-fit: cover; object-position: top left; margin: 0px; padding: 0px;">
  </a>
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

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var studentImages = document.getElementsByClassName('student-image');
    for (var i = 0; i < studentImages.length; i++) {
      studentImages[i].addEventListener('mouseover', function() {
        this.style.opacity = '0.7';
        this.getElementsByClassName('paper-info')[0].style.display = 'block';
      });
      studentImages[i].addEventListener('mouseout', function() {
        this.style.opacity = '1.0';
        this.getElementsByClassName('paper-info')[0].style.display = 'none';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var publicationImages = document.getElementsByClassName('publication-image');
    for (var i = 0; i < publicationImages.length; i++) {
      publicationImages[i].addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.03)';
      this.style.transition = 'transform 0.3s ease-in-out';
      });
      publicationImages[i].addEventListener('mouseout', function() {
      this.style.transform = 'scale(1.0)';
      this.style.transition = 'transform 0.3s ease-in-out';
      });
    }
  });
</script>
