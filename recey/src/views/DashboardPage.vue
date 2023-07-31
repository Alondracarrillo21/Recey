
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Recey</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Mostrar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link" href="#">Crear</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/grafica" class="nav-link" href="#">Grafica</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reporte" class="nav-link" href="#">Reporte</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <main class="table mt-5">
    <section class="table__header d-flex justify-content-between align-items-center">
  <h1>Tramites</h1>
  <div class="search-bar">
            <input type="search" placeholder="Buscar..." v-model="searchQuery">
            <button class="btn btn-light" @click="search()">
              <i class="fas fa-search"></i>
            </button>
          </div>
  <button class="btn btn-primary nuevo-tramites-btn" v-on:click="nuevo()">
    <span class="icono-agregar-persona">
      <i class="fas fa-user-plus"></i>
    </span>
    Nuevo
  </button>
</section>
    <section class="table__body">
      <table>
        <thead>
          <tr>
           <th>ID</th>
            <th>Fecha de entrada</th>
            <th>Departamento que solicita</th>
            <th>Acto</th>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Municipio</th>
            <th>Oficialia</th>
            <th>Fecha de nacimiento</th>
            <th>Trámite solicitado</th>
            <th>Empleado</th>
            <th>Fecha asignada</th>
            <th>Estado del trámite</th>
            <th>Observaciones</th>
            <th>Fecha de atención</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tramites, i in listatrami" :key="tramites.TramiteId" v-on:click="editar(tramites.TramiteId)">
            <td>{{ (i+1) }}</td>
            <td>{{ tramites.FechaEntrada}}</td>
            <td>{{ tramites.DepartamentoSoli}}</td>
            <td>{{ tramites.Acto}}</td>
            <td>{{ tramites.Nombres}}</td>
            <td>{{ tramites.ApellidoPaterno}}</td>
            <td>{{ tramites.ApellidoMaterno}}</td>
            <td>{{ tramites.Municipio}}</td>
            <td>{{ tramites.Oficialia}}</td>
            <td>{{ tramites.FechaNac}}</td>
            <td>{{ tramites.TramiteSoli}}</td>
            <td>{{ tramites.Empleado}}</td>
            <td>{{ tramites.FechaAsig}}</td>
            <td>{{ tramites.EstadoTram}}</td>
            <td>{{ tramites.ObservacionesTram}}</td>
            <td>{{ tramites.FechaAtenTram}}</td>
            <td>
                            <router-link :to="{path:'editar/'+tramites.TramiteId}" class="btn btn-warning">
                                <i class="fa-solid fa-edit"></i>
                            </router-link> &nbsp;

                            
                            <button class="btn btn-danger" v-on:click="eliminar(tramites.TramiteId, tramites.Nombres)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  </div>
  
</template>


<script>
// import Header from '@/components/HeaderPage.vue';
// import { confirmar } from '@/funciones';
import axios from 'axios';
export default {
name: "DashboardPage",
data() {
  return {
    listatrami: null,
    pagina:1,
    
  };
},
// components:{
// Header
// },


mounted: function () {

  this.gettramites();
},
methods: {
//ESTE ES EL METODO GET TRAE TODOS LOS TRAMITES A LA PAGINA PRINCIPAL DEL USUARIO
  gettramites(){
    axios.get('http://192.168.1.169/api-michelle/tramites?page=').then(
      response => (
        this.listatrami = response.data
      )
    );
  },
  nuevo() {
    this.$router.push('/NuevoPage');
  },

},






computed: {
  filteredUsuarios() {
    if (!this.Listatramites) {
      return [];
    }
    
    return this.Listatramites.filter(tramites => {
      const searchTerm = this.searchTerm.toLowerCase();
      
      return (
        tramites.Nombres.toLowerCase().includes(searchTerm) ||
        tramites.ApellidoPaterno.toLowerCase().includes(searchTerm) ||
        tramites.ApellidoMaterno.toLowerCase().includes(searchTerm)
      );
    });
  }
},
};
</script>



<style>

.nuevo-tramites-btn {
    background-color: transparent; /* Quita el fondo blanco del botón */
    padding: 5px 10px; /* Ajusta el padding para hacer el botón más pequeño */
    border: none; /* Quita el borde del botón si lo desea */
  }

  /* Estilo para el contenedor del icono */
  .icono-agregar-persona {
    background-color: transparent; /* Quita el fondo blanco del contenedor del icono */
    display: inline-block;
    line-height: 1; /* Ajusta la altura del contenedor para centrar verticalmente el ícono */
  }

  /* Estilo para el icono */
  .icono-agregar-persona i {
    background-color: transparent; /* Quita el fondo blanco del icono */
  }



  .input-group {
      display: flex; /* Hace que los elementos dentro se distribuyan en una línea */
      align-items: center; /* Centra verticalmente los elementos dentro del contenedor */
      max-width: 400px; /* Tamaño máximo deseado para el contenedor */
      border: 1px solid #ccc; /* Borde para el contenedor */
      border-radius: 2px; /* Bordes redondeados para el contenedor */
      overflow: hidden; /* Evita que los elementos desborden fuera del contenedor */
    }

    /* Estilos para el campo de entrada */
    .search-bar input[type="search"] {
      flex: 3; /* Hace que el campo de entrada ocupe el espacio restante en el contenedor */
      font-size: 14px; /* Tamaño de fuente deseado */
      padding: 8px; /* Ajustar el espacio interior para evitar desbordamiento */
      border: none; /* Quita el borde del campo de entrada */
      outline: none; /* Quita el resaltado del campo de entrada al enfocar */
    }

    /* Estilos para el botón de búsqueda */
    .search-button {
      background-color: #007bff; /* Color de fondo del botón */
      color: #ffffff; /* Color del texto del botón */
      padding: 8px; /* Ajustar el espacio interior del botón */
      border: none; /* Quita el borde del botón */
      border-radius: 0 5px 5px 0; /* Bordes redondeados solo en la esquina derecha del botón */
      background-color: transparent;
        color: #999;
        padding: 9px;
        cursor: pointer;
    }

  .search-button:hover {
    color: #007bff;
  }

 .input-group {
    display: flex;
    align-items: center;
  }

/**bton nuevo */
.btn {
      background-color: #d4d2d0; /* Fondo blanco para el botón */
      color: #000; /* Texto en color negro */
      border: 1px solid #000; /* Borde negro alrededor del botón */
      padding: 8px 16px; /* Ajustar el espaciado interior */
      border-radius: 5px; /* Bordes redondeados para el botón */
      cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    }

    /* Estilos para el botón de estilo primario */
    .btn-primary {
      background-color: #fff; /* Fondo blanco para el botón primario */
      color: #000; /* Texto en color negro para el botón primario */
      border: 1px solid #000; /* Borde negro alrededor del botón primario */
    }

    /* Estilos para el ícono */
    .icono-agregar-persona {
      margin-right: 8px; /* Espacio entre el ícono y el texto */
    }
  

  /* .nuevo-tramites {
    background-color: #ff0080;
    color: #f8eeee;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 16px;
    cursor: pointer;
  } */

 /* Estilos para el botón al pasar el cursor por encima */
  


* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

main.table {
  width: 95%;
  height: 110vh;
  background-color: #fff5;
  backdrop-filter: blur(7px);
  box-shadow: 0 .4rem .8rem #0005;
  border-radius: .8rem;
  overflow: hidden;
}

/* Tamaño de fuente ajustado para hacer que el contenido se vea más grande */
.table__body td,
.table__body th {
  font-size: 15px;
}









.table__header {
  width: 100%;
  height: 10%;
  background-color: rgba(39, 19, 216, 0.267); /* la parte de arriba de la tbla*/
  padding: .8rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table__header .input-group {
  width: 35%;
  height: 100%;
  background-color: rgba(239, 245, 243, 0.333); /**busqueda tabla */
  padding: 0 .8rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .2s;
}

.table__header .input-group:hover {
  width: 45%;
  background-color: #fff8;
  box-shadow: 0 .1rem .4rem #0002;
}

.table__header .input-group img {
  width: 1.2rem;
  height: 1.2rem;
}

.table__header .input-group input {
  width: 100%;
  padding: 0 .5rem 0 .3rem;
  background-color: transparent;
  border: none;
  outline: none;
}

.table__body {
  width: 95%;
  max-height: calc(89% - 1.6rem);
  background-color: #fffb;

  margin: .8rem auto;
  border-radius: .6rem;

  overflow: auto;
  overflow: overlay;
}

.table__body::-webkit-scrollbar{
  width: 0.5rem;
  height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
  border-radius: .5rem;
  background-color: #0004;
  visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
  visibility: visible;
}

table {
  width: 100%;
  margin-top: 20px;
}





tbody tr:nth-child(even) {
  background-color: #0000000b;
}

tbody tr {
  --delay: .1s;
  transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
  opacity: 0;
  transform: translateX(100%);
}

tbody tr:hover {
  background-color: rgba(7, 247, 47, 0.4) !important; /**nose */
}

tbody tr td,
tbody tr td p,
tbody tr td img {
  transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
  padding: 0;
  font: 0 / 0 sans-serif;
  transition: .2s ease-in-out .5s;
}

tbody tr.hide td img {
  width: 0;
  height: 0;
  transition: .2s ease-in-out .5s;
}

.status {
  padding: .4rem 0;
  border-radius: 2rem;
  text-align: center;
}



.status.shipped {
  background-color: #6fcaea;
}


@media (max-width: 1000px) {
  td:not(:first-of-type) {
      min-width: 12.1rem;
  }
}

thead th span.icon-arrow {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  border: 1.4px solid transparent;
  
  text-align: center;
  font-size: 1rem;
  
  margin-left: .5rem;
  transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow{
  border: 1.4px solid #6c00bd;
}

thead th:hover {
  color: #6c00bd;
}

thead th.active span.icon-arrow{
  background-color: #6c00bd;
  color: #fff;
}

thead th.asc span.icon-arrow{
  transform: rotate(180deg);
}

thead th.active,tbody td.active {
  color: #6c00bd;
}




</style>