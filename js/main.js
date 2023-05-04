let toggle = document.querySelector(".toggle"),
  sideBar = document.querySelector(".side-bar"),
  viewer = document.querySelector(".viewer"),
  imgcontrol = document.querySelectorAll(".img"),
  closeMedium = document.querySelector(".close");

toggle.onclick = () => {
  sideBar.classList.toggle("active");
  viewer.classList.toggle("active");
  check();
};

closeMedium.onclick = () => {
  sideBar.classList.remove("active");
  check();
};

function check() {
  toggle.classList.toggle("close");
  toggle.classList.contains("close")
    ? (toggle.style.backgroundImage = "url(../img/close.svg)")
    : (toggle.style.backgroundImage = "url(../img/open.svg)");
}
// Slider

let slides = document.querySelectorAll(".slide"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let currentSlide = 1;

theChcker();

next.onclick = function () {
  currentSlide++;
  theChcker();
};
prev.onclick = function () {
  currentSlide--;
  theChcker();
};

imgcontrol.forEach((con) => {
  con.onclick = function () {
    currentSlide = parseInt(this.dataset.index);

    theChcker();
  };
});
function theChcker() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  if (slides[currentSlide] == slides[slides.length - 1]) {
    currentSlide = 1;
  } else if (slides[currentSlide] == slides[0]) {
    currentSlide = slides.length - 2;
  }
  slides[currentSlide].classList.add("active");
}
