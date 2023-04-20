// SCROLL NAV

window.addEventListener("scroll", () => {
  if (window.scrollY > 10 && window.scrollY < 400) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-120px";
  }
});

// MouseEffect;

const mousemove = document.querySelector(".mousemove");
const mousemove2 = document.querySelector(".mousemove2");
const mousemove3 = document.querySelector(".mousemove3");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";

  mousemove2.style.left = e.pageX + "px";
  mousemove2.style.top = e.pageY + "px";

  mousemove3.style.left = e.pageX + "px";
  mousemove3.style.top = e.pageY + "px";
});
