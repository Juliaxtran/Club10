const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const buttons = document.querySelectorAll("[data-carousel-button]");
const navigationHeight = document.querySelector(".navbar").offsetHeight;
const logo = document.querySelector(".logo");
const listen = document.querySelector(".btn");

console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', `${navigationHeight}px`);

logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// Hamberger menu toggle

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  setTimeout(() => {
    navbarLinks.style.display === "flex" ? "none" : "flex";
    navbarLinks.style.display === "none" ? "flex" : "none";
  }, 100);
});

// Carousel
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })