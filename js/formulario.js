//Formulario
//validacion de campos del registro
/* 
const AgregarFomulario = document.getElementById("formulario");
AgregarFomulario.addEventListener("submit", (e)=>{
    if(AgregarFomulario.checkVisibility()=== false){
        e.preventDefault();
        e.stopPropagation();
        AgregarFomulario.classList.add('was-validate');
        return false
    }
})
  */
///
/*
document.getElementById("Enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Esto evita que se envie el formulario
  
    // obtener los valores de entrada del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var img = document.getElementById("img").value;
    var lugar = document.getElementById("lugar").value;
    var comentarios = document.getElementById("comentarios").value;
    var terminos = document.getElementById("terminos").checked;
  
    // realiza validacion
    if (nombre === "" || email === "" || img === "" || lugar === "" || comentarios === "" || !terminos) {
      alert("Por favor complete todos los campos y acepte los términos y condiciones.");
    } else {
      // Si todos los campos están completos y se aceptan los términos, envíe el formulario
      document.getElementById("formulario").submit();
    }
  });*/
  /*
//validacion
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let img = document.getElementById('img');
let lugar = document.getElementById('lugar');
let comentarios = document.getElementById('comentarios');
let terminos = document.getElementById('terminos');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario..');

    let mensajesError =[];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese su nombre');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingrese su email');
    }

    if(img.value === null || img.value === ''){
    mensajesError.push('Ingrese la imagen');
}
    if(lugar.value === null || lugar.value === ''){
    mensajesError.push('ingrese el lugar');
}

if(comentarios.value === null || comentarios.value === ''){
    mensajesError.push('Ingrese comentario');
}

if(terminos.value === null || img.value === ''){
mensajesError.push('click en terminos y condiciones');
}
error.innerHTML = mensajesError.join(', ');
return false;
}
*/

/*
//
let form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let img = document.getElementById('img');
    let lugar = document.getElementById('lugar');
    let comentarios = document.getElementById('comentarios');
    let terminos = document.getElementById('terminos');
    let error = document.getElementById('error');
    error.style.color = 'red';
    
    let mensajesError = [];
    
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese su nombre');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingrese su email');
    }

    if(img.value === null || img.value === ''){
        mensajesError.push('Ingrese la imagen');
    }
    
    if(lugar.value === null || lugar.value === ''){
        mensajesError.push('Ingrese el lugar');
    }

    if(comentarios.value === null || comentarios.value === ''){
        mensajesError.push('Ingrese comentario');
    }

    if(!terminos.checked){
        mensajesError.push('Acepte los términos y condiciones');
    }

    error.innerHTML = mensajesError.join(', ');
    return false;
});
*/
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Validar nombre
    const nombre = document.getElementById('nombre').value;
    const errorNombre = document.getElementById('errorNombre');
    if (nombre.trim() === '') {
      errorNombre.textContent = 'Por favor, ingrese su nombre y apellido.';
    } else {
      errorNombre.textContent = '';
    }
  
    // Validar email
    const email = document.getElementById('email').value;
    const errorEmail = document.getElementById('errorEmail');
    if (email.trim() === '') {
      errorEmail.textContent = 'Por favor, ingrese su correo electrónico.';
    } else {
      errorEmail.textContent = '';
    }
  
    // Validar foto de perfil
    const img = document.getElementById('img').value;
    const errorImg = document.getElementById('errorImg');
    if (img.trim() === '') {
      errorImg.textContent = 'Por favor, seleccione una foto de perfil.';
    } else {
      errorImg.textContent = '';
    }
  
    // Validar ciudad
    const ciudad = document.getElementById('lugar').value;
    const errorLugar = document.getElementById('errorLugar');
    if (ciudad === '') {
      errorLugar.textContent = 'Por favor, seleccione una ciudad.';
    } else {
      errorLugar.textContent = '';
    }
  
    // Validar términos y condiciones
    const terminos = document.getElementById('terminos').checked;
    const errorTerminos = document.getElementById('errorTerminos');
    if (!terminos) {
      errorTerminos.textContent = 
      'Debe aceptar los términos y condiciones.';
    } else {
      errorTerminos.textContent = '';
    }
  
    // Si todos los campos son válidos, se puede enviar el formulario
    if (nombre.trim() !== '' && email.trim() !== '' && img.trim() !== '' && ciudad !== '' && terminos) {
      this.submit();
    }
  });