"use strict";

// add class active -----------
let navlinks = document.querySelectorAll(".header .list li a");

navlinks.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".header .list li a.active").classList.remove("active");
    item.classList.add("active");
  });
});

/* platform ------------*/

let checkbox = document.querySelectorAll(".wedding-request .box");
checkbox.forEach((item) => {
  item.addEventListener(`click`, () => {
    item.classList.toggle("bgBox");
  });
});

let chooseShape = document.querySelectorAll(".choose-shape .kosha .item");
chooseShape.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".choose-shape .kosha .item.active").classList.remove("active");
    item.classList.add("active");
  });
});

let numberSeats = document.querySelectorAll(".choose-shape .number-seats .item");
numberSeats.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".choose-shape .number-seats .item.active").classList.remove("active");
    item.classList.add("active");
  });
});

let buffet = document.querySelectorAll(".choose-shape .buffet .item");
buffet.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".choose-shape .buffet .item.active").classList.remove("active");
    item.classList.add("active");
  });
});

let car = document.querySelectorAll(".choose-shape .car .item");
car.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".choose-shape .car .item.active").classList.remove("active");
    item.classList.add("active");
  });
});

let photo = document.querySelectorAll(".choose-shape .photo .item");
photo.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".choose-shape .photo .item.active").classList.remove("active");
    item.classList.add("active");
  });
});
