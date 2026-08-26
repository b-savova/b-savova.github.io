document.addEventListener("DOMContentLoaded", function () {

  const grid = document.querySelector(".work-grid");

  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(".work"));

  function layoutMasonry() {

    if (window.innerWidth <= 700) {
      grid.style.display = "block";

      items.forEach(item => {
        item.style.position = "static";
        item.style.width = "100%";
        item.style.marginBottom = "50px";
      });

      return;
    }

    const columns = 3;
    const gap = 30;
    const columnWidth =
      (grid.clientWidth - gap * (columns - 1)) / columns;

    const columnHeights = [0, 0, 0];

    grid.style.display = "block";
    grid.style.position = "relative";

    items.forEach(item => {

      item.style.position = "absolute";
      item.style.width = columnWidth + "px";
      item.style.marginBottom = "0";

      const shortestColumn =
        columnHeights.indexOf(Math.min(...columnHeights));

      const x = shortestColumn * (columnWidth + gap);
      const y = columnHeights[shortestColumn];

      item.style.left = x + "px";
      item.style.top = y + "px";

      columnHeights[shortestColumn] += item.offsetHeight + gap;
    });

    grid.style.height = Math.max(...columnHeights) + "px";
  }

  const images = grid.querySelectorAll("img");

  Promise.all(
    Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();

      return new Promise(resolve => {
        img.addEventListener("load", resolve);
        img.addEventListener("error", resolve);
      });
    })
  ).then(layoutMasonry);

  window.addEventListener("resize", layoutMasonry);

});
