const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

//menu hamburguesa navbar
abrir.addEventListener('click', () => {
    nav.classList.add('visible')
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
});

//Admin 
if (sessionStorage.getItem("adm")!="1"){
  document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
  document.querySelector("#crud").setAttribute('style', 'display:on')
}

// FORM VALIDATION

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

  // Validar lugar
  const lugar = document.getElementById('lugar').value;
  const errorLugar = document.getElementById('errorLugar');
  if (lugar === '') {
    errorLugar.textContent = 'Por favor, seleccione un lugar.';
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
  if (nombre.trim() !== '' && email.trim() !== '' && img.trim() !== '' && lugar !== '' && terminos) {
    this.submit();
  }
});

//FORMULARIO NEWSLETTERE

// Obtener el elemento del formulario y el campo de correo electrónico
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

  // Agregar un evento de "submit" al formulario
    form.addEventListener('submit', function(event) {
    if (!validateEmail(emailInput.value)) {
        event.preventDefault();
        alert('Por favor, ingresa un correo electrónico válido.');
    }
    });
// Función para validar el formato del correo electrónico
    function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }