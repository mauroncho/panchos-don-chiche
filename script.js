const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-principal");

navToggle.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");
  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navMenu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(visibility);
});
console.log("hello");
