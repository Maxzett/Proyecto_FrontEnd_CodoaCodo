const { createApp } = Vue
  createApp({
    data() {
      return {
        paquetes:[],
        //url:'http://localhost:5000/paquetes', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https:patagoniaturismo.pythonanywhere.com/paquetes',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id: 0,
        nombre: "",
        precio: "",
        descripcion: "",
        duracion: "",
        imagen: "",
        guia: "",
        traslado: ""
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.productos = data;
                    
                    this.cargando=false// termino de cargarlo
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')//elimina de la base de datos
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let paquete = {
                id: this.id,
                nombre: this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                duracion: this.duracion,
                imagen: this.imagen,
                guia: this.guia,
                traslado: this.trasla
            }
            var options = {
                body:JSON.stringify(paquete),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")//dio de alta el registro grabado
                    window.location.href = "./paquetes.html";  // recarga paquetes.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')