document.addEventListener("DOMContentLoaded", function () {

  const allItems = Array.from(
    document.querySelectorAll(".lightbox-item")
  );

  if (!allItems.length) return;


  /* -------------------------------------------------------
     CREATE LIGHTBOX
     ------------------------------------------------------- */

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>

    <button class="lightbox-prev" aria-label="Previous artwork">←</button>

    <div class="lightbox-content">

      <img
        class="lightbox-image"
        src=""
        alt=""
      >

      <div class="lightbox-info">
        <span class="lightbox-title"></span>
        <span class="lightbox-year"></span>
        <p class="lightbox-description"></p>
      </div>

    </div>

    <button class="lightbox-next" aria-label="Next artwork">→</button>
  `;

  document.body.appendChild(lightbox);


  /* -------------------------------------------------------
     ELEMENTS
     ------------------------------------------------------- */

  const image =
    lightbox.querySelector(".lightbox-image");

  const title =
    lightbox.querySelector(".lightbox-title");

  const year =
    lightbox.querySelector(".lightbox-year");

  const description =
    lightbox.querySelector(".lightbox-description");

  const closeButton =
    lightbox.querySelector(".lightbox-close");

  const nextButton =
    lightbox.querySelector(".lightbox-next");

  const previousButton =
    lightbox.querySelector(".lightbox-prev");


  /* -------------------------------------------------------
     STATE
     ------------------------------------------------------- */

  let items = allItems;
  let currentIndex = 0;


  /* -------------------------------------------------------
     UPDATE VISIBLE ARTWORKS
     
     This is important for the Works page.
     When a filter is active, hidden artworks are removed
     from lightbox navigation.
     ------------------------------------------------------- */

  function updateVisibleItems() {

    items = allItems.filter(function (item) {

      return window.getComputedStyle(item).display !== "none";

    });

  }


  /* -------------------------------------------------------
     SHOW ARTWORK
     ------------------------------------------------------- */

  function showArtwork(index) {

    if (!items.length) return;

    currentIndex =
      (index + items.length) % items.length;

    const item =
      items[currentIndex];

    const thumbnail =
      item.querySelector("img");


    /* Image */

    image.src = item.href;

    image.alt =
      thumbnail
        ? thumbnail.alt
        : "";


    /* Information */

    title.textContent =
      item.dataset.title || "";

    year.textContent =
      item.dataset.year || "";

    description.textContent =
      item.dataset.description || "";

  }


  /* -------------------------------------------------------
     OPEN
     ------------------------------------------------------- */

  function openLightbox(index) {

    updateVisibleItems();

    if (!items.length) return;

    showArtwork(index);

    lightbox.classList.add("is-open");

    document.body.classList.add("lightbox-open");

  }


  /* -------------------------------------------------------
     CLOSE
     ------------------------------------------------------- */

  function closeLightbox() {

    lightbox.classList.remove("is-open");

    document.body.classList.remove("lightbox-open");

  }


  /* -------------------------------------------------------
     NEXT / PREVIOUS
     ------------------------------------------------------- */

  function nextArtwork() {

    showArtwork(currentIndex + 1);

  }


  function previousArtwork() {

    showArtwork(currentIndex - 1);

  }


  /* -------------------------------------------------------
     OPEN ARTWORKS
     ------------------------------------------------------- */

  allItems.forEach(function (item) {

    item.addEventListener("click", function (event) {

      event.preventDefault();

      /*
       * Refresh the list in case the Works page
       * has been filtered.
       */

      updateVisibleItems();

      const visibleIndex =
        items.indexOf(item);

      /*
       * If the artwork is hidden by a filter,
       * don't open it.
       */

      if (visibleIndex === -1) return;

      openLightbox(visibleIndex);

    });

  });


  /* -------------------------------------------------------
     NEXT BUTTON
     ------------------------------------------------------- */

  nextButton.addEventListener("click", function (event) {

    event.stopPropagation();

    nextArtwork();

  });


  /* -------------------------------------------------------
     PREVIOUS BUTTON
     ------------------------------------------------------- */

  previousButton.addEventListener("click", function (event) {

    event.stopPropagation();

    previousArtwork();

  });


  /* -------------------------------------------------------
     CLICK IMAGE = NEXT
     ------------------------------------------------------- */

  image.addEventListener("click", function (event) {

    event.stopPropagation();

    nextArtwork();

  });


  /* -------------------------------------------------------
     CLOSE BUTTON
     ------------------------------------------------------- */

  closeButton.addEventListener("click", function (event) {

    event.stopPropagation();

    closeLightbox();

  });


  /* -------------------------------------------------------
     CLICK OUTSIDE = CLOSE
     ------------------------------------------------------- */

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      closeLightbox();

    }

  });


  /* -------------------------------------------------------
     KEYBOARD NAVIGATION
     ------------------------------------------------------- */

  document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("is-open")) {
      return;
    }


    /* Escape */

    if (event.key === "Escape") {

      closeLightbox();

    }


    /* Right arrow */

    if (event.key === "ArrowRight") {

      event.preventDefault();

      nextArtwork();

    }


    /* Left arrow */

    if (event.key === "ArrowLeft") {

      event.preventDefault();

      previousArtwork();

    }

  });

});
