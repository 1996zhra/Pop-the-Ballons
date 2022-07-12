"use strict";
let popped = 0;
const balloons = document.querySelectorAll(".balloon");
const baloonGallery = document.getElementById("balloon-gallery");
const noBalloon = document.getElementById("yay-no-balloons");

//add event to elements

balloons.forEach(function (baloon) {
  baloon.addEventListener("mouseover", function () {
    baloon.style.backgroundColor = "rgb(237, 237, 237)";
    baloon.textContent = "POP!";
    popped++;
    checkAllPopped();
  });
});

function checkAllPopped() {
  if (popped === balloons.length - 1) {
    baloonGallery.style.display = "none";
    noBalloon.style.display = "block";
  }
}
