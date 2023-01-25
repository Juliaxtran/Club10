const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const buttons = document.querySelectorAll("[data-carousel-button]");
const navigationHeight = document.querySelector(".navbar").offsetHeight;
const logo = document.querySelector(".logo");
const listen = document.querySelector(".btn");
const links = document.querySelectorAll(".navbar-links li");
const jellyfish = document.getElementsByClassName("cover-art")[0];




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
    navbarLinks.classList.toggle('active');
  }, 3000);

});

// Cover art
jellyfish.addEventListener("click", () => {
  let url ='https://songwhip.com/tyyy2/jellyfish';
  window.open(url, "_blank").focus();
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