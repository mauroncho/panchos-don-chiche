//interaccion del menu en mobile
//recupero los elementos del dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-principal");
// console.log(navToggle);
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

//validacion de formulario

const Formulario = document.getElementById("form");
const inputs = document.querySelectorAll(".formulario input");
const nombre = document.getElementById("Nombre");
const apellido = document.getElementById("Apellido");
const email = document.getElementById("email");
const CodigoPostal = document.getElementById("Codigo Postal");

const expresiones = {
  Validacion: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
  ValidacionEmail:
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  ValidacionCodigoPostal: /^[0-9]+$/,
};

Formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

const ValidarFormulario = (e) => {
  switch (e.target.name) {
    case "Nombre":
      ValidarCampo(expresiones.Validacion, e.target, "Nombre");
      break;
    case "Apellido":
      ValidarCampo(expresiones.Validacion, e.target, "Apellido");
      break;
    case "email":
      ValidarCampo(expresiones.ValidacionEmail, e.target, "email");
      break;
    case "Codigo Postal":
      ValidarCampo(
        expresiones.ValidacionCodigoPostal,
        e.target,
        "Codigo Postal"
      );
      break;
  }
};

const ValidarCampo = (expresion, input, campo) => {
  if (!expresion.test(input.value) || !input.value.trim()) {
    document.getElementById("error").style.display = "block";
    document.getElementById("aceptado").style.display = "none";
  } else {
    document.getElementById("aceptado").style.display = "block";
    document.getElementById("error").style.display = "none";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", ValidarFormulario);
  input.addEventListener("blur", ValidarFormulario);
});

function MostrarError() {
  document.getElementById("error").style.display = "block";
  document.getElementById("aceptado").style.display = "none";
}

function Aceptado() {
  document.getElementById("aceptado").style.display = "block";
  document.getElementById("error").style.display = "none";
}
