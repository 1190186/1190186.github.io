"use strict";

const stars = document.getElementById("stars");
const moon1 = document.getElementById("moon1");
const moon2 = document.getElementById("moon2");
const moon3 = document.getElementById("moon3");
const land = document.getElementById("land");
const text = document.getElementById("hero-text");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    stars.style.top = value * 0.3 + "px";

    moon3.style.left = value * 2 + "px";

    moon1.style.top = value * -1 + "px";
    moon1.style.left = value * 1.5 + "px";

    moon2.style.top = value * -1 + "px";
    moon2.style.left = value * -2 + "px";

    land.style.top = value * -0.2 + "px";

    text.style.top = 40 + value * -0.05 + "%";

});