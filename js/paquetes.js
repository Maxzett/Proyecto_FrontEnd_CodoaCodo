const { createApp } = Vue
  createApp({
    data() {
      return {
        paquetes:[],
        url:'http://127.0.0.1:5000/paquetes', 
        // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        //url:'https://patagoniaturismo.pythonanywhere.com/paquetes',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        precio:0,
        descripcion:"",
        duracion:0,
        imagen:"",
        guia:"",
        traslado:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.paquetes = data;
                    this.cargando=false
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
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let paquete = {
                nombre:this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                duracion: this.duracion,
                imagen:this.imagen,
                guia:this.guia,
                traslado:this.traslado
            }
            var options = {
                body:JSON.stringify(paquete),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./paquetes.html";  // recarga productos.html
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