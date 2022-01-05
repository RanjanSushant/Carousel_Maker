const carousel = document.querySelector(".carousel");
const slides = document.getElementsByClassName("carousel-item");
const nextSlideBtn = document.getElementById("carousel-button-next");
const previousSlideBtn = document.getElementById("carousel-button-prev");
const forwardBtn = document.getElementById("carousel-btn-forward");
const backwardBtn = document.getElementById("carousel-btn-backward");

let slidePosition = 0;
const totalSlides = slides.length;
let forwardTimer;
let backwardTimer;

function goToNextSlide() {
  //   console.log("Next Slide!!!");
  // console.log(totalSlides)
  // console.log(nextSlideBtn.checked)
  slides[slidePosition].classList.remove("carousel-item-visible");

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function goToPreviousSlide() {
  // console.log("Previous Slide!!!");

  slides[slidePosition].classList.remove("carousel-item-visible");

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveForward() {
  // console.log("Forward")
  // console.log(forwardBtn.checked)
  clearInterval(backwardTimer);
  forwardTimer = setInterval(goToNextSlide, 2000);
}

function moveBackward() {
  clearInterval(forwardTimer);
  backwardTimer = setInterval(goToPreviousSlide, 2000);
}

function holdCarousel(e) {
  // console.log("mouse down");
  if ((e.type === "mousedown" || e.type === "touchstart")) {
    clearInterval(forwardTimer);
    clearInterval(backwardTimer);
  }
  e.preventDefault()
}

function resumeCarousel(e) {
  if (e.type === "mouseup" || e.type === "touchend") {
    if (backwardBtn.checked == true) {
      moveBackward();
    } else {
      moveForward();
    }
  }
  e.preventDefault()
}

nextSlideBtn.addEventListener("click", goToNextSlide);
previousSlideBtn.addEventListener("click", goToPreviousSlide);
forwardBtn.addEventListener("change", moveForward);
backwardBtn.addEventListener("change", moveBackward);
carousel.addEventListener("mousedown", holdCarousel);
carousel.addEventListener("touchstart", holdCarousel);
carousel.addEventListener("mouseup", resumeCarousel);
carousel.addEventListener("touchend", resumeCarousel);
