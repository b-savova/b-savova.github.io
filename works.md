---
layout: default
title: Works
---

<section class="works-page">

  <header class="page-intro">
    <h1>Works</h1>
    <p>Selected works</p>
  </header>

  <div class="works-grid">

    {% for artwork in site.artworks %}
      <a href="{{ artwork.url | relative_url }}" class="gallery-item">

        <div class="gallery-image">
          <img
            src="{{ artwork.image | relative_url }}"
            alt="{{ artwork.title }}"
          >
        </div>

        <div class="gallery-info">
          <span>{{ artwork.title }}</span>
          <span>{{ artwork.year }}</span>
        </div>

      </a>
    {% endfor %}

  </div>

</section>
