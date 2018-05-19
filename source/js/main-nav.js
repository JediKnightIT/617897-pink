var hamburgerMenu = document.querySelector(".hamburger-menu");
var navToggle = document.querySelector(".main-nav__toggle");

hamburgerMenu.classList.remove("hamburger-menu--nojs");

navToggle.addEventListener("click", function(e) {
  e.preventDefault();

  if (hamburgerMenu.classList.contains("hamburger-menu--closed")) {
    hamburgerMenu.classList.remove("hamburger-menu--closed");
    hamburgerMenu.classList.add("hamburger-menu--opened");
  } else {
    hamburgerMenu.classList.add("hamburger-menu--closed");
    hamburgerMenu.classList.remove("hamburger-menu--opened");
  }
});
