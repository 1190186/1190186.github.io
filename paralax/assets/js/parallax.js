console.log("PARALLAX CARGADO");
"use strict";
// --- REFERENCIAS AL DOM ---
const elements = {
 stars: document.getElementById("stars"),
 moon1: document.getElementById("moon1"),
 moon2: document.getElementById("moon2"),
 moon3: document.getElementById("moon3"),
 land: document.getElementById("land"),
 text: document.getElementById("hero-text"),
 header: document.getElementById("header"),
};

const config = {
 stars: { speedY: 0.15 },
 moon3: { speedX: 4, speedY: 0 },
 moon1: { speedY: -1.5, speedX: 3 },
 moon2: { speedY: -1.5, speedX: -5 },
 land: { speedY: -0.12 },
 text: { speedY: -0.2, baseTop: 40 },
 header: { speedY: 0.5 },
};
// --- ESTADO ---
let scrollY = 0;
let ticking = false;
// --- FUNCIÓN DE ACTUALIZACIÓN ---
/*
function updateParallax() {
    const s = window.scrollY;

    elements.stars.style.top = `translateY(${s * 0.15}px)`;

    elements.moon3.style.transform =
        `translate(${s * 4}px, 0px)`;

    elements.moon1.style.transform =
        `translate(${s * 3}px, ${s * -1.5}px)`;

    elements.moon2.style.transform =
        `translate(${s * -5}px, ${s * -1.5}px)`;

    elements.land.style.transform =
        `translateY(${s * -0.12}px)`;

    elements.text.style.transform =
        `translateY(${s * -0.2}px)`;
}
*/
// --- FUNCIÓN DE ACTUALIZACIÓN ---
function updateParallax() {
  const s = scrollY;

  elements.stars.style.top = `${s * config.stars.speedY}px`;
  elements.moon3.style.left = `${s * config.moon3.speedX}px`;
  elements.moon1.style.top = `${s * config.moon1.speedY}px`;
  elements.moon1.style.left = `${s * config.moon1.speedX}px`;
  elements.moon2.style.top = `${s * config.moon2.speedY}px`;
  elements.moon2.style.left = `${s * config.moon2.speedX}px`;
  elements.land.style.top = `${s * config.land.speedY}px`;
  elements.text.style.top = `${config.text.baseTop + s * config.text.speedY}%`;
  elements.header.style.top = `${s * config.header.speedY}px`;

  ticking = false;
}

// --- LISTENER DE SCROLL ---
window.addEventListener("scroll", () => {
 scrollY = window.scrollY;
 if (!ticking) {
  window.requestAnimationFrame(updateParallax);
  ticking = true;
 }
});
// --- ACCESIBILIDAD: Respeta la preferencia del sistema ---
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (mediaQuery.matches) {
 window.removeEventListener("scroll", updateParallax);
console.info(
 "Parallax desactivado: preferencia de movimiento reducido detectada."
);
}

/*
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});*/