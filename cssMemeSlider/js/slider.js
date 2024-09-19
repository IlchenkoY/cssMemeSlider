const controls = document.querySelectorAll(".controls__item");
const sliderList = document.querySelector(".slider__list");
const descriptionList = document.querySelector(".description");

controls.forEach((control) => control.addEventListener("click", sliderHandler));
let currentButtunId;

function initialActiveButton() {
  controls[0].classList.add("active");
}

function sliderHandler(e) {
  const target = e.target;
  currentButtunId = e.currentTarget.firstElementChild.dataset.id;

  imageSwitcher(currentButtunId);
  descriptionSwitcher(currentButtunId);

  if (target.nodeName !== "BUTTON" && target.nodeName !== "LI") {
    return;
  }

  for (let control of controls) {
    if (control.classList.contains("active")) {
      control.classList.remove("active");
      break;
    }
  }

  if (target.nodeName === "BUTTON") {
    target.parentNode.classList.add("active");
    return;
  }

  if (target.nodeName === "LI") {
    target.classList.add("active");
    return;
  }
}

function imageSwitcher(id) {
  const { width: itemWidth } = sliderList.getBoundingClientRect();

  sliderList.style.transform = `translateX(${-itemWidth * id}px)`;
  sliderList.style.transition = "transform 0.8s ease";
}

function descriptionSwitcher(id) {
  const { width: itemWidth } =
    descriptionList.firstElementChild.getBoundingClientRect();

  descriptionList.style.transform = `translateX(${-itemWidth * id}px)`;
  descriptionList.style.transition = "transform 1.2s ease";
}

function resizeHandler() {
  const { width: sliderWidth } = sliderList.getBoundingClientRect();
  const { width: descriptionWidth } =
    descriptionList.firstElementChild.getBoundingClientRect();

  descriptionList.style.transition = "none";
  descriptionList.style.transform = `translateX(${
    -descriptionWidth * currentButtunId
  }px)`;
  sliderList.style.transition = "none";
  sliderList.style.transform = `translateX(${
    -sliderWidth * currentButtunId
  }px)`;

  setTimeout(() => {
    descriptionList.style.transition = "transform 1.2s ease";
    sliderList.style.transition = "transform 0.8s ease";
  }, 0);
}

initialActiveButton();
window.addEventListener("resize", () => resizeHandler());
