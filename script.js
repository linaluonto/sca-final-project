// JS for Hamburger menu or Responsive nav bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll("nav-link");


hamburger.addEventListener("click", responsiveMenu);

function responsiveMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


//JS for Carousel / Gallery Page
const slides = document.querySelectorAll('.slide');
const nextSlide = document.querySelector('.nextBtn');
const prevSlide = document.querySelector('.prevBtn')

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let currentSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", ()=> {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

prevSlide.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});