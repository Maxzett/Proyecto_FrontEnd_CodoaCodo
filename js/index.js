const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
});



/*
  //--------------galeria//
  // URL del archivo JSON con los enlaces a las imágenes
const jsonUrl = './js/fotos.json';

// Variable para almacenar el número de página actual
let pagina = 1;
const imagesPerPage = 8;

// Función para cargar las imágenes desde el archivo JSON
const cargarImagenes = async () => {
    try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        const galeriaElement = document.getElementById('galeria');
        let imageGroup = document.createElement('div');
        imageGroup.classList.add('image-group');

        data.forEach((image, index) => {
            if (index % imagesPerPage === 0 && index !== 0) {
                galeriaElement.appendChild(imageGroup);
                imageGroup = document.createElement('div');
                imageGroup.classList.add('image-group');
            }

            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = `Imagen ${image.id}`;
            imgElement.classList.add('image-item');
            imageGroup.appendChild(imgElement);
        });

        galeriaElement.appendChild(imageGroup);

        // Llamar a la función de paginación después de cargar las imágenes
        pagination();
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
};

// Función para controlar la paginación
const pagination = () => {
  const prevPagina = document.getElementById('prevPagina');
  const proximaPagina = document.getElementById('proximaPagina');

  proximaPagina.addEventListener("click", () => {
      pagina += 1;
      showImages();
  });

  prevPagina.addEventListener("click", (event) => {
    if (pagina > 1) {
        pagina -= 1;
        showImages();
    }
    event.preventDefault(); // Evitar la acción predeterminada del navegador
});

  showImages();
};

/// Función para mostrar las imágenes de la página actual
const showImages = () => {
    const images = document.querySelectorAll('.image-item');
    const startIndex = (pagina - 1) * imagesPerPage;

    for (let i = 0; i < images.length; i++) {
        if (i >= startIndex && i < startIndex + imagesPerPage) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }

        if (i >= startIndex && i < startIndex + imagesPerPage && !images[i].src) {
            images[i].style.display = 'none';
        }
    }
};

// Llamar a la función para cargar las imágenes al cargar la página
cargarImagenes();

*/

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
//----------------Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: "./js/fotos.json",
            datos: [],
            error: false,
            paginaActual: 1,
            elementosPorPagina: 8 // Número de elementos por página
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.datos = data;
                })
                .catch(error => {
                    console.log("Error:" + error)
                    this.error = true;
                });
        },
        paginar(pagina) {
            this.paginaActual = pagina;
        },
        paginaAnterior() {
            if (this.paginaActual > 1) {
                this.paginaActual--;
            }
        },
        paginaSiguiente() {
            const ultimaPagina = Math.ceil(this.datos.length / this.elementosPorPagina);
            if (this.paginaActual < ultimaPagina) {
                this.paginaActual++;
            }
        }
    },
    computed: {
        datosPaginados() {
            const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
            const fin = inicio + this.elementosPorPagina;
            return this.datos.slice(inicio, fin);
        },
        paginas() {
            const totalPaginas = Math.ceil(this.datos.length / this.elementosPorPagina);
            return Array.from({ length: totalPaginas }, (_, index) => index + 1);
        },
        ultimaPagina() {
            return Math.ceil(this.datos.length / this.elementosPorPagina);
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app');
