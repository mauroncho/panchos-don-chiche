//interaccion del menu en mobile
//recupero los elementos del dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-principal");
//cambio atributos cuando el usuario hace click
navToggle.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");
  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navMenu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

//formulario
/*const ValorNombre = document.getElementById("Nombre")
const ErrorNombre = document.getElementById("ErrorNombre")
const valido = true;

document.getElementById("form"),addEventListener("submit", function(event) {
  event.preventDefault();
})

// Validación de nombre
if (ValorNombre === "") {
  ErrorNombre.innerHTML = "Por favor ingresa tu nombre";
  valido = false;
} else {
}*/
