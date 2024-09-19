import galleryItems from "../data/pets-data.js";

export const petsList = document.querySelector(".slider");

petsList.insertAdjacentHTML("afterbegin", createSliderMarkup(galleryItems));

function createSliderMarkup() {
  return `
    <ul class="slider__list">${createSliderElementsListMarkup(
      galleryItems
    )}</ul>
    <div class="wrapper">
      <ul class="controls">${createControlsListMarkup(galleryItems)}</ul>
      <div class="description__wrapper">
        <ul class="description">${createDescriptionListMarkup(
          galleryItems
        )}</ul>
      </div>
    </div>`;
}

function createSliderElementsListMarkup(galleryItems) {
  return galleryItems
    .map(({ original }) => {
      return `
    <li class="slider__item">
        <img class="slider__img" src="${original}" loading="lazy" alt="pet">
    </li>
    `;
    })
    .join("");
}

function createDescriptionListMarkup(galleryItems) {
  return galleryItems
    .map(({ description }) => {
      return `
    <li class="description__item">
        <p class="description__text">${description}</p>
    </li>`;
    })
    .join("");
}

function createControlsListMarkup(galleryItems) {
  return galleryItems
    .map(({ id }) => {
      return `
    <li class="controls__item">
        <button class="controls__button" data-id="${id}"></button>
    </li>`;
    })
    .join("");
}
