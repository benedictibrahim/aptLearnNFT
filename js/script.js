// close off loader
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

const nav = document.getElementById("nav");

const open = document.getElementById("open");

const close = document.getElementById("close");

// open the navbar
open.addEventListener("click", function () {
  nav.classList.add("right-0");
});

// close the navbar

close.addEventListener("click", function () {
  nav.classList.remove("right-0");
});
