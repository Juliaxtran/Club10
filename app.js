const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navigationHeight = document.querySelector(".navbar").offsetHeight;
const logo = document.querySelector(".logo");
const listen = document.querySelector(".btn");
const links = document.querySelectorAll(".navbar-links li");
const jellyfish = document.getElementsByClassName("cover-art")[0];
const buttons = document.querySelectorAll("[data-carousel-button]");
const instagram = document.getElementById("instagram");
const spotify = document.getElementById("spotify");
const apple = document.getElementById("apple");



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
    navbarLinks.classList.toggle('active');
  }, 3000);

});

// Redirects

// Cover art
jellyfish.addEventListener("click", () => {
  let url ='https://songwhip.com/tyyy2/jellyfish';
  window.open(url, "_blank").focus();
});

// Social Media Links
instagram.addEventListener("click", () => {
  let url ='https://www.instagram.com/_club10/';
  window.open(url, "_blank").focus();
});

spotify.addEventListener("click", () => {
  let url = 'https://open.spotify.com/artist/5jbYsfokC2j6V6IIvMOfOP?si=W0MbWnt-QqyCHK6heQBXHQ';
  window.open(url, "_blank").focus();
});

apple.addEventListener("click", () => {
  let url = 'https://open.spotify.com/playlist/1uMgLufRwGf8qIkCJ0Vt28?si=-gAHAz4NRpyP8KgLDKo8CQ';
  window.open(url, "_blank").focus();
});


//Carousal

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})