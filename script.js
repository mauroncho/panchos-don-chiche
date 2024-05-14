//MENU DE NAVEGACIÓN RESPONSIVE
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

//VALIDACIÓN FORMULARIO
// const validacionNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const validacionEmail =
//   /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2, 15})$/;
// const validacionCodigoPostal = /^[0-9]+$/;

const btnEnviar = document.getElementById("form-submit");
const contactoForm = document.getElementById("form");
const userName = document.getElementById("floatingName");
const userLastName = document.getElementById("floatingApellido");
const userMail = document.getElementById("floatingEmail");

btnEnviar.addEventListener("click", () => {
  if (userName.value == 0) {
    userName.classList.add("is-invalid");
    alert("Nombre es obligatorio");
    userName.focus();
    return false;
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  }
  // Validar apellido
  if (userLastName.value == "") {
    userLastName.classList.add("is-invalid");
    alert("Apellido es obligatorio");
    document.formulario.apellido.focus();
    return false;
  } else {
    userLastName.classList.remove("is-invalid");
    userLastName.classList.add("is-valid");
  }

  // Validar email
  const regexEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  if (!regexEmail.test(userMail.value)) {
    userMail.classList.add("is-invalid");
    alert("Email debe contener un email");
    return false;
  } else {
    userMail.classList.remove("is-invalid");
    userMail.classList.add("is-valid");
  }

  // Enviar formulario
  // contactoForm.submit();
  contactoForm.reset();
  userName.classList.remove("is-valid");
  userLastName.classList.remove("is-valid");
  userMail.classList.remove("is-valid");
  alert("Muchas gracias por enviar el formulario");
});
