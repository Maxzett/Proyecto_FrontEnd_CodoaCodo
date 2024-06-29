console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // paquete_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"", 
        precio:0,
        descripcion:"",
        duracion:0,
        imagen:"",
        guia:"",
        traslado:"",
        url:'https://patagoniaturismo.pythonanywhere.com/paquetes'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.precio= data.precio;
                    this.descripcion=data.descripcion
                    this.duracion=data.duracion
                    this.imagen=data.imagen
                    this.guia=data.guia                    
                    this.traslado=data.traslado                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let paquete = {
                nombre:this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                duracion: this.duracion,
                imagen: this.imagen,
                guia: this.guia,
                traslado: this.traslado
            }
            var options = {
                body: JSON.stringify(paquete),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./paquetes.html"; // navega a paquetes.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')