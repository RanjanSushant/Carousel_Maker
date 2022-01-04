const slides = document.getElementsByClassName("carousel-item");
const nextSlideBtn = document.getElementById("carousel-button-next");
const previousSlideBtn = document.getElementById("carousel-button-prev");

let slidePosition = 0;
const totalSlides = slides.length;

function goToNextSlide() {
  console.log("Next Slide!!!");
}

function goToPreviousSlide() {
  console.log("Previous Slide!!!");
}

nextSlideBtn.addEventListener("click", goToNextSlide);
previousSlideBtn.addEventListener("click", goToPreviousSlide);
