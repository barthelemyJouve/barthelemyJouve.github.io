const lien = document.getElementById("nav");
const menu = document.getElementById("nav");
console.log(menu);

lien.addEventListener("click", () => {
  menu.classList.add("animnav");
});
