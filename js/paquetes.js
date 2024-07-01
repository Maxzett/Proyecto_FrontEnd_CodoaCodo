const { createApp } = Vue;

        createApp({
            data() {
                return {
                    paquetes: [],
                    url: 'https://patagoniaturismo.pythonanywhere.com/paquetes',
                    error: false,
                    cargando: true,
                    id: 0,
                    nombre: "",
                    precio: "",
                    descripcion: "",
                    duracion: "",
                    imagen: "",
                    guia: "",
                    traslado: ""
                };
            },
            methods: {
                fetchData(url) {
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            this.paquetes = data;
                            this.cargando = false;
                        })
                        .catch(err => {
                            console.error(err);
                            this.error = true;
                        });
                },
                eliminar(id) {
                    const url = `${this.url}/${id}`;
                    var options = {
                        method: 'DELETE'
                    };
                    fetch(url, options)
                        .then(() => {
                            alert('Registro Eliminado');
                            location.reload(); // Recarga la página después de eliminar el registro
                        })
                        .catch(err => {
                            console.error(err);
                            alert('Error al eliminar el registro.');
                        });
                },
                grabar() {
                    let paquete = {
                        id: this.id,
                        nombre: this.nombre,
                        precio: this.precio,
                        descripcion: this.descripcion,
                        duracion: this.duracion,
                        imagen: this.imagen,
                        guia: this.guia,
                        traslado: this.traslado,
                    };
                    var options = {
                        body: JSON.stringify(paquete),
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow'
                    };
                    fetch(this.url, options)
                        .then(() => {
                            alert('Registro grabado');
                            window.location.href = './paquetes.html'; // Redirige a paquetes.html después de guardar
                        })
                        .catch(err => {
                            console.error(err);
                            alert('Error al grabar el registro.');
                        });
                }
            },
            created() {
                let url;
                if (location.search.substr(4) === "") {
                    url = this.url;
                } else {
                    url = `${this.url}/${location.search.substr(4)}`;
                }
                this.fetchData(url);
            }
        }).mount('#app');