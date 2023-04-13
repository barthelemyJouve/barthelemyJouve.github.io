const nav = document.getElementById("nav");
const linkNav1 = document.getElementById("navlink");
const linkNav2 = document.getElementById("navlink1");
const linkNav3 = document.getElementById("navlink2");
const linkNav4 = document.getElementById("navlink3");

// questionContainer.addEventListener('événements', function)
linkNav1.addEventListener("click", () => {
  linkNav1.classList.toggle("classAnimClickNav");
});
linkNav1.addEventListener("click", () => {
  nav.classList.toggle("classBackground");
});

linkNav2.addEventListener("click", () => {
  linkNav2.classList.toggle("classAnimClickNav");
});
linkNav2.addEventListener("click", () => {
  nav.classList.toggle("classBackground");
});

linkNav3.addEventListener("click", () => {
  linkNav3.classList.toggle("classAnimClickNav");
});
linkNav3.addEventListener("click", () => {
  nav.classList.toggle("classBackground");
});

linkNav4.addEventListener("click", () => {
  linkNav4.classList.toggle("classAnimClickNav");
});
linkNav4.addEventListener("click", () => {
  nav.classList.toggle("classBackground");
});
