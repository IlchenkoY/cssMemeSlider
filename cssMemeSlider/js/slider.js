const controls = document.querySelectorAll(".controls__item");

controls.forEach((control) => control.addEventListener("click", sliderHandler));

function initialActiveButton() {
  controls[0].classList.add("active");
}

function sliderHandler(e) {
  const target = e.target;

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

initialActiveButton();
