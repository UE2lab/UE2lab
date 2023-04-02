---
title: "UE2 Lab - Pictures"
layout: piclay
excerpt: "UE2 Lab -- Pictures"
permalink: /pictures/
---

<p class="title-center"><b>A</b>CTIVITIES</p>

<div class="custom-container-student">
{% assign pictures = site.data.Photos %}
{% assign counter = 0 %}
{% for picture in pictures %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
  <div class="student-image" style="position: relative; margin: 0px; padding: 0px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ picture.image }}" class="img" style="width: 250px; height: 300px; object-fit: cover; object-position: center; margin: 0px; padding: 0px;">
  <div class="photos-info">
  <p style="text-align: center;">{{ picture.title }}</p>
  <p style="text-align: center;">{{ picture.date }}</p>
  </div>
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
        this.style.opacity = '0.8';
        this.getElementsByClassName('photos-info')[0].style.display = 'block';
        this.style.transition = 'transform 0.3s ease-in-out';
      });
      studentImages[i].addEventListener('mouseout', function() {
        this.style.opacity = '1.0';
        this.getElementsByClassName('photos-info')[0].style.display = 'none';
        this.style.transition = 'transform 0.3s ease-in-out';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var publicationImages = document.getElementsByClassName('student-image');
    for (var i = 0; i < publicationImages.length; i++) {
      publicationImages[i].addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.02)';
      this.style.zIndex = '1000';
      });
      publicationImages[i].addEventListener('mouseout', function() {
        this.style.transform = 'scale(1.0)';
        this.style.zIndex = '1';
      });
    }
  });
</script>
