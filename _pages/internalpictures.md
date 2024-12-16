---
title: "UE2 Lab - Internal Pictures"
layout: gridlay
excerpt: "UE2 Lab -- Internal Pictures"
permalink: /internalpictures/
---

<p class="title-center">Lab Gatherings</p>

<div class="modal">
  <span class="close">&times;</span>
  <img class="modal-content">
</div>

<div class="custom-container-activities">
{% assign pictures = site.data.Internalphotos %}
{% assign counter = 0 %}
{% for picture in pictures %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
  <div class="activity-image" style="position: relative; margin: 0px; padding: 0px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ picture.image }}" class="activity-image-size">
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
<style>
  .student-image {
    cursor: pointer;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var studentImages = document.getElementsByClassName('activity-image');
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
  // Get the modal
  var modal = document.querySelector(".modal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var images = document.querySelectorAll(".activity-image-size");
  var modalImg = document.querySelector(".modal-content");
  var imageContainers = document.querySelectorAll(".activity-image");

  for (var i = 0; i < imageContainers.length; i++) {
    imageContainers[i].addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.querySelector(".activity-image-size").src;

      // Disable scrolling while the modal is open
      document.body.style.overflow = "hidden";
    });
  }

  // Get the <span> element that closes the modal
  var closeBtn = document.querySelector(".close");

  // When the user clicks on <span> (x) or the modal, close the modal
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal);

  function closeModal() {
    modal.style.display = "none";

    // Enable scrolling again after the modal is closed
    document.body.style.overflow = "auto";
  }

</script>

