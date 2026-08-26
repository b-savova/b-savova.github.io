/* =========================================================
   WORKS — FILTERS + MASONRY
   ========================================================= */

.works-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 35px;
}


/* ---------------------------------------------------------
   FILTER BUTTONS
   --------------------------------------------------------- */

.filter-button {
  appearance: none;
  -webkit-appearance: none;

  background: transparent;
  color: #20201e;

  border: 1px solid #20201e;

  padding: 8px 14px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;
}

.filter-button:hover {
  background: #20201e;
  color: #f7f7f3;
}

.filter-button.active {
  background: #20201e;
  color: #f7f7f3;
}


/* ---------------------------------------------------------
   SERIES DROPDOWN
   --------------------------------------------------------- */

.series-filter {
  appearance: none;
  -webkit-appearance: none;

  background: #f7f7f3;
  color: #20201e;

  border: 1px solid #20201e;

  padding: 8px 34px 8px 14px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;

  cursor: pointer;

  /* simple custom arrow */
  background-image:
    linear-gradient(45deg, transparent 50%, #20201e 50%),
    linear-gradient(135deg, #20201e 50%, transparent 50%);

  background-position:
    calc(100% - 15px) 50%,
    calc(100% - 10px) 50%;

  background-size:
    5px 5px,
    5px 5px;

  background-repeat: no-repeat;
}


/* ---------------------------------------------------------
   SERIES DESCRIPTION
   --------------------------------------------------------- */

.series-description {
  max-width: 650px;

  margin: 0 0 55px;

  font-size: 1.1rem;
  line-height: 1.45;

  opacity: 0;

  transition: opacity 0.25s ease;
}

.series-description.visible {
  opacity: 1;
}


/* =========================================================
   WORKS — MASONRY GRID
   ========================================================= */

.works-grid {
  width: 100%;

  columns: 3 280px;
  column-gap: 30px;
}


/* ---------------------------------------------------------
   INDIVIDUAL WORK
   --------------------------------------------------------- */

.gallery-item {
  display: block;

  width: 100%;

  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;

  margin: 0 0 50px;

  cursor: pointer;
}


/* ---------------------------------------------------------
   IMAGE
   --------------------------------------------------------- */

.gallery-image {
  width: 100%;

  overflow: hidden;

  background: #ecece8;
}

.gallery-image img {
  display: block;

  width: 100%;
  height: auto;

  max-width: 100%;

  transition: transform 0.5s ease;
}


/* subtle hover effect */

.gallery-item:hover .gallery-image img {
  transform: scale(1.015);
}


/* ---------------------------------------------------------
   WORK INFORMATION
   --------------------------------------------------------- */

.gallery-info {
  display: flex;

  justify-content: space-between;
  align-items: baseline;

  gap: 20px;

  margin-top: 14px;

  font-size: 0.85rem;
  line-height: 1.3;
}

.gallery-info span:first-child {
  min-width: 0;
}

.gallery-info span:last-child {
  flex-shrink: 0;
}


/* =========================================================
   FILTERED / HIDDEN WORKS
   ========================================================= */

.gallery-item[style*="display: none"] {
  display: none !important;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 700px) {

  .works-filters {
    gap: 8px;

    margin-bottom: 30px;
  }


  .filter-button,
  .series-filter {
    font-size: 0.75rem;

    padding: 8px 11px;
  }


  .series-filter {
    padding-right: 30px;
  }


  .series-description {
    margin-bottom: 40px;

    font-size: 1rem;
  }


  .works-grid {
    columns: 1;
  }


  .gallery-item {
    margin-bottom: 40px;
  }


  .gallery-info {
    font-size: 0.8rem;
  }

}


/* =========================================================
   VERY SMALL SCREENS
   ========================================================= */

@media (max-width: 400px) {

  .works-filters {
    display: flex;
    align-items: flex-start;
  }

  .filter-button,
  .series-filter {
    font-size: 0.7rem;
  }

}
