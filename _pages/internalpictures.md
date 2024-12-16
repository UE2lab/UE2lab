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

<div class="custom-container-gallery">
{% assign pictures = site.data.Internalphotos %}
{% for picture in pictures %}
  <div class="gallery-item">
    <img src="{{ site.url }}{{ site.baseurl }}/images/activities/{{ picture.image }}" class="gallery-image" alt="{{ picture.title }}">
    <div class="gallery-caption">
      <h3>{{ picture.title }}</h3>
      <p>{{ picture.date }}</p>
    </div>
  </div>
{% endfor %}
</div>

<style>
  .custom-container-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 20px;
  }

  .gallery-item {
    position: relative;
    max-width: 300px;
    cursor: pointer;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .gallery-caption {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 100%;
    padding: 10px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .gallery-item:hover .gallery-caption {
    opacity: 1;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

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
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.querySelector('.gallery-image').src;

        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
  });
</script>
