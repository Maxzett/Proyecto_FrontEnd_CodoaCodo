const { createApp } = Vue;

createApp({
  data() {
    return {
      paquetes: [],
      url: "https://patagoniaturismo.pythonanywhere.com/paquetes",
      error: false,
      cargando: true,
      id: 0,
      nombre: "",
      precio: "",
      descripcion: "",
      duracion: "",
      imagen: "",
      guia: false,
      traslado: false,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.paquetes = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(id) {
      const url = `${this.url}/${id}`;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then(() => {
          alert("Registro Eliminado");
          location.reload(); // Recarga la página después de eliminar el registro
        })
        .catch((err) => {
          console.error(err);
          alert("Error al eliminar el registro.");
        });
    },
    grabar() {
      let paquete = {
        nombre: this.nombre,
        precio: this.precio,
        descripcion: this.descripcion,
        duracion: this.duracion,
        imagen: this.imagen,
        guia: this.guia == "on" ? true : false,
        traslado: this.traslado == "on" ? true : false,
      };
      console.log(paquete);
      var options = {
        body: JSON.stringify(paquete),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "./paquetes.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar");
        });
    },
  },
  created() {
    let url;
    if (location.search.substr(4) === "") {
      url = this.url;
    } else {
      url = `${this.url}/${location.search.substr(4)}`;
    }
    this.fetchData(url);
  },
}).mount("#app");