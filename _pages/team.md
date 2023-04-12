---
title: "UE2 Lab - Team"
layout: gridlay
excerpt: "UE2 Lab: Team members"
sitemap: false
permalink: /team/
---

<p class="title-center">RESEARCHERS</p>

<div class="custom-container-student">
{% assign students = site.data.Students %}
{% assign counter = 0 %}
{% for member in students %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
  <div class="student-image" style="position: relative; margin: 0px; padding: 0px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="student-image-size">
  <div class="overlay"></div>
  <div class="student-info">
  <p>{{ member.name }}</p>
  <p>{{ member.info }}</p>
  <p>{{ member.email }}</p>
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
        this.style.opacity = '0.9';
        this.getElementsByClassName('student-info')[0].style.display = 'block';
        this.style.transition = 'transform 0.3s ease-in-out';
      });
      studentImages[i].addEventListener('mouseout', function() {
        this.style.opacity = '1.0';
        this.getElementsByClassName('student-info')[0].style.display = 'none';
        this.style.transition = 'transform 0.3s ease-in-out';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var publicationImages = document.getElementsByClassName('student-image');
    for (var i = 0; i < publicationImages.length; i++) {
      publicationImages[i].addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.02)';
      });
      publicationImages[i].addEventListener('mouseout', function() {
        this.style.transform = 'scale(1.0)';
      });
    }
  });


</script>