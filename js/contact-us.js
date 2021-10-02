'use strict';

// let contactName, contactLastName, formulario;

// function init1() {
//     let boton = document.getElementById("enviar");
//     boton.addEventListener("click", enviarFormulario);

//     formulario = document.querySelector("form[name='form-contact-us']");
//     formulario.addEventListener("invalid", validacion, true);

// }

// function init2() {
//     contactName = document.getElementById("contact-name");
//     contactLastName = document.getElementById("contact-last-name");

//     contactName.addEventListener("input", validacion);
//     contactLastName.addEventListener("input", validacion);

//     validacion2();
// }

// function validacion(e){

//     let elem = e.target;
//     elem.style.background = '#FFDDDD';

// }

// function validacion2(){
//     if ( contactName.value == '' && contactLastName == '' ) {
//         contactName.setCustomValidity('Ingrese al menos un valor');
//         contactName.style.background = '#FFDDDD';
//         contactLastName.style.background = '#FFDDDD';
//     } else {
//         contactName.setCustomValidity('');
//         contactName.style.background = '#FFFFFF';
//         contactLastName.style.background = '#FFFFFF';
//     }
// }

// function enviarFormulario() {
//     let valido = formulario.checkValidity();
//     if(valido) {
//         console.log('Enviado!!');
//     }
// }

// addEventListener("load", init1);
// addEventListener("load", init2);