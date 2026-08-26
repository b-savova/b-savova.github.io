document.addEventListener("DOMContentLoaded", function () {

  const items = Array.from(document.querySelectorAll(".lightbox-item"));

  if (!items.length) return;

  /* Create lightbox */

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>

    <button class="lightbox-prev" aria-label="Previous artwork">←</button>

    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="">
      <div class="lightbox-info">
        <span class="lightbox-title"></span>
        <span class="lightbox-year"></span>
        <p class="lightbox-description"></p>
      </div>
    </div>

    <button class="lightbox-next" aria-label="Next artwork">→</button>
  `;

  document.body.appendChild(lightbox);

  const image = lightbox.querySelector(".lightbox-image");
  const title = lightbox.querySelector(".lightbox-title");
  const year = lightbox.querySelector(".lightbox-year");
  const description = lightbox.querySelector(".lightbox-description");

  let currentIndex = 0;

  function showArtwork(index) {

    currentIndex = (index + items.length) % items.length;

    const item = items[currentIndex];

    image.src = item.href;
    image.alt = item.querySelector("img").alt;

    title.textContent = item.dataset.title || "";
    year.textContent = item.dataset.year || "";
    description.textContent = item.dataset.description || "";
  }

  function openLightbox(index) {

    showArtwork(index);

    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {

    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
  }

  function nextArtwork() {
    showArtwork(currentIndex + 1);
  }

  function previousArtwork() {
    showArtwork(currentIndex - 1);
  }


  /* Open */

  items.forEach((item, index) => {

    item.addEventListener("click", function (event) {

      event.preventDefault();

      openLightbox(index);

    });

  });


  /* Navigation */

  lightbox
    .querySelector(".lightbox-next")
    .addEventListener("click", function (event) {

      event.stopPropagation();
      nextArtwork();

    });

  lightbox
    .querySelector(".lightbox-prev")
    .addEventListener("click", function (event) {

      event.stopPropagation();
      previousArtwork();

    });


  /* Click image = next */

  image.addEventListener("click", function (event) {

    event.stopPropagation();
    nextArtwork();

  });


  /* Close */

  lightbox
    .querySelector(".lightbox-close")
    .addEventListener("click", function (event) {

      event.stopPropagation();
      closeLightbox();

    });


  /* Click outside image = close */

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  /* Keyboard navigation */

  document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      nextArtwork();
    }

    if (event.key === "ArrowLeft") {
      previousArtwork();
    }

  });

});
