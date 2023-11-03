let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
var color = document.querySelector("#dadp");
var colo = document.querySelector(".hero");
var roloc = document.querySelector("#rtf");
var colo = document.querySelector(".hero");


color.onclick = () => {
  document.body.classList.toggle("a2");
};
roloc.onclick = () => {
  document.body.classList.toggle("a2");
};


menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", {
  delay: 200,
  origin: "top",
});
sr.reveal(".hero-img", {
  delay: 450,
  origin: "right",
});
sr.reveal(".icons", {
  delay: 500,
  origin: "left",
});
sr.reveal(".scroll-down", {
  delay: 600,
  origin: "right",
});
const text = document.querySelector(".navlist");
const p1 = document.querySelector("#dadp");
const p2 = document.querySelector("#rtf");
const ii1 = document.querySelector("#i1");
const ii2 = document.querySelector("#i2");
let num = 0;

p1.addEventListener("click", () => {
  if (num === 0) {
    p1.style.display = "none";
    p2.style.display = "block";
    ii1.style.display = "none";
    ii2.style.display = "block";
    num = 1;
  }
});

p2.addEventListener("click", () => {
  if (num === 1) {
    p2.style.display = "none";
    p1.style.display = "block";
    ii2.style.display = "none";
    ii1.style.display = "block";
    num = 0;
  }
});
