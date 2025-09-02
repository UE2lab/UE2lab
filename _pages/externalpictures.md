---
title: "UE2 Lab - Events & Workshop"
layout: gridlay
excerpt: "UE2 Lab -- Events & Workshop"
permalink: /externalpictures/
---


<p class="title-center">Academic Events</p>

<div class="modal" style="display: none; flex; align-items: center; justify-content: center; flex-direction: column;">
  <span class="close">&times;</span>
  <img class="modal-content" style="max-width: 80%; max-height: 80%; display: block; margin: auto;">
  <p class="modal-caption" style="color: white; text-align: center; margin-top: 10px; font-size: 24px; font-weight: bold; background-color: rgba(0, 0, 0, 0.6); padding: 10px; border-radius: 8px; width: 80%;"*</p>
</div>



<div class="custom-container-activities">
{% assign pictures = site.data.Externalphotos %}
{% assign counter = 0 %}
{% for picture in pictures %}
{% if counter == 0 %}
<div class="student-row">
{% endif %}
<div class="student-col">
  <div class="activity-image" style="position: relative; margin: 0px; padding: 0px;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ picture.image }}" class="activity-image-size" alt="{{ picture.title }}">
  <div class="photos-info">
  <p style="text-align: center;">{{ picture.title }} {{ picture.date }}</p>
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
  .custom-container-activities {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 20px;
  }

  .student-row {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .student-col {
    max-width: 300px;
    flex: 1;
    margin: 0 10px;
    cursor: pointer;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .student-col:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .activity-image-size {
    width: 100%; /* Set thumbnail width to 100% of the container */
    height: 200px; /* Explicitly set thumbnail height */
    object-fit: cover; /* Maintain aspect ratio and crop excess */
    display: block;
  }

  .photos-info {
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    position: static;
    margin-top: 5px; 
    /*bottom: 0;*/
    width: 100%;
    /*opacity: 0;*/
    opacity: 1;
    /*transition: opacity 0.3s;*/
    transition: none;
  }
  
  /*
  .activity-image:hover .photos-info {
    opacity: 1;
  }
  */

  .modal {
    display: none; /* Ensure modal is hidden initially */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    disply: flex;
    flex-direction:column;
    /*background-color: rgba(0, 0, 0, 0.8);*/
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*padding: 0;*/
  }

  .modal-content {
    max-width: 80%;
    max-height: 80%;
    margin: 0 5px 10px;
    display: block;
    position:static;
    /*
    position: relative;
    top: 50%;
    transform: translateY(-50%);*/
  }


   /* 모달 캡션: 이미지 바로 아래 */
  .modal-caption {
    position: static;
    margin: 0 5px 0;             /* 이미지와 간격은 위에서 10px로 충분 */
    max-width: 80%;
    width: auto;
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    background: rgba(0,0,0,.6);
    padding: 10px;
    border-radius: 8px;
  }
  /*
  .modal-caption {
    color: white;
    text-align: center;
    margin-top: 5px; /* Reduce margin to bring it closer to the image */
    font-size: 24px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 8px;
    width: 80%;
    position: static; /* relative; */
    /* Ensure it stays directly below the image */
  }
  */

  /*
  .modal-content {
    margin-bottom: 10px; /* Add a small gap between the image and caption */
  }
  */



  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover {
    color: #ddd;
  }
</style>

  
<script>
 document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const modalCaption = document.querySelector('.modal-caption');
  const closeBtn = document.querySelector('.close');

  // Ensure modal is hidden on page load
  modal.style.display = 'none';

  document.querySelectorAll('.activity-image').forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.querySelector('.activity-image-size').src;
 modalCaption.textContent = this.querySelector('.photos-info p:first-of-type').textContent;


      document.body.style.overflow = 'hidden'; // Disable scrolling
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling again
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});


</script>
