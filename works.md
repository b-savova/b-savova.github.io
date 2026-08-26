---
layout: default
title: Works
permalink: /works/
---

<section class="works-page">

  <header class="page-intro">
    <h1>Works</h1>
    <p>Selected works</p>
  </header>


  <!-- FILTERS -->

  <div class="works-filters">

    <button class="filter-button active" data-filter="all">
      All
    </button>

    <button class="filter-button" data-filter="works-on-paper">
      Works on Paper
    </button>

    <button class="filter-button" data-filter="painting">
      Paintings
    </button>

    <button class="filter-button" data-filter="collage">
      Collages
    </button>

    <button class="filter-button" data-filter="print">
      Prints
    </button>

    <select class="series-filter" aria-label="Filter by series">
      <option value="all">All Series</option>

      {% assign series_list = site.artworks
        | map: "series"
        | uniq
        | sort %}

      {% for series in series_list %}
        {% if series %}
          <option value="{{ series | slugify }}">
            {{ series }}
          </option>
        {% endif %}
      {% endfor %}

    </select>

  </div>


  <!-- SERIES DESCRIPTION -->

  <div class="series-description" aria-live="polite">
  </div>


  <!-- WORKS -->

  <div class="works-grid">

    {% for artwork in site.artworks %}

      <a
        href="{{ artwork.image | relative_url }}"
        class="gallery-item lightbox-item"
        data-type="{{ artwork.type | slugify }}"
        data-series="{{ artwork.series | slugify }}"
        data-title="{{ artwork.title }}"
        data-year="{{ artwork.year }}"
        data-description="{{ artwork.description | escape }}"
      >

        <div class="gallery-image">

          <img
            src="{{ artwork.image | relative_url }}"
            alt="{{ artwork.title }}"
            loading="lazy"
            decoding="async"
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


<script>

document.addEventListener("DOMContentLoaded", function () {

  const buttons =
    document.querySelectorAll(".filter-button");

  const seriesFilter =
    document.querySelector(".series-filter");

  const items =
    document.querySelectorAll(".gallery-item");

  const description =
    document.querySelector(".series-description");


  /* -------------------------------------------------------
     SERIES DESCRIPTIONS

     We will fill these in properly once you give me
     the names/descriptions of your series.
     ------------------------------------------------------- */

  const seriesDescriptions = {

  };


  /* -------------------------------------------------------
     FILTER
     ------------------------------------------------------- */

  function filterWorks() {

    const activeType =
      document.querySelector(".filter-button.active")
        .dataset.filter;

    const activeSeries =
      seriesFilter.value;


    items.forEach(item => {

      const itemType =
        item.dataset.type;

      const itemSeries =
        item.dataset.series;


      const typeMatches =
        activeType === "all" ||
        itemType === activeType;


      const seriesMatches =
        activeSeries === "all" ||
        itemSeries === activeSeries;


      if (typeMatches && seriesMatches) {

        item.style.display = "";

      } else {

        item.style.display = "none";

      }

    });


    /* Series description */

    if (
      activeSeries !== "all" &&
      seriesDescriptions[activeSeries]
    ) {

      description.textContent =
        seriesDescriptions[activeSeries];

      description.classList.add("visible");

    } else {

      description.textContent = "";

      description.classList.remove("visible");

    }

  }


  /* Type buttons */

  buttons.forEach(button => {

    button.addEventListener("click", function () {

      buttons.forEach(btn =>
        btn.classList.remove("active")
      );

      this.classList.add("active");

      filterWorks();

    });

  });


  /* Series */

  seriesFilter.addEventListener(
    "change",
    filterWorks
  );


  filterWorks();

});

</script>
