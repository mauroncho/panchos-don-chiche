//interaccion del menu en mobile
//recupero los elementos del dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-principal");
console.log(navToggle);
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


let Validacion = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
let ValidacionEmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
let ValidacionCodigoPostal = /^[0-9]+$/


const Formulario = document.getElementById('form')
const nombre = document.getElementById('Nombre')
const apellido = document.getElementById ('Apellido')
const email = document.getElementById('email')
const CodigoPostal = document.getElementById('Codigo Postal')


Formulario.addEventListener('submit', (e) =>{

  e.preventDefault();

 if (!Validacion.test(nombre.value) || !nombre.value.trim()){
  console.log('formato no valido')
  alert('error en el nombre')
  return
 }

if(!Validacion.test(apellido.value) || !apellido.value.trim()){
  console.log('formato no valido')
  alert('error en el apellido')
  return
}

  if(!ValidacionEmail.test(email.value) || !email.value.trim()){
    console.log('Formato no valido')
    alert('mail no valido')
    return
  }

  if(!ValidacionCodigoPostal.test(CodigoPostal.value) || !CodigoPostal.value.trim()){
    console.log('Formato no valido')
    alert('codigo postal incorrecto')
    return
  }

  console.log('Formulario Enviado')
  alert('Formulario Enviado')
})



