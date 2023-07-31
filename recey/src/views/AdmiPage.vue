
<template>
    <main class="table">
      <section class="table__header d-flex justify-content-between align-items-center">
    <h1>Administrador</h1>
    <div class="input-group">
      <div class="search-bar">
         <input type="search" placeholder="Search Data..." v-model="searchQuery">
        <button class="search-button">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
    <button class="btn btn-primary nuevo-usuario" v-on:click="nuevo()">
      <i class="bi bi-person-plus-fill me-2"></i> Nuevo usuario
    </button>
  </section>
      <section class="table__body">
        <table>
          <thead>
            <tr>
             <th>ID</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Estado</th>

              
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in filteredUsuarios" :key="usuario.UsuarioId" v-on:click="editar(usuario.UsuarioId)">
              <td>{{ usuario.UsuarioId }}</td>
              <td>{{ usuario.Usuario }}</td>
              <td>{{ usuario.Passwrd }}</td>
              <td>{{ usuario.Estado }}</td>
             
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
  name: "AdmiPage",
  data() {
    return {
      Listausuarios: null,
      searchTerm: ""
    };
  },
  methods: {
    editar(id) {
      this.$router.push('/editar/' + id);
    },
    nuevo() {
      this.$router.push('/AdmiNuevo');
    }
  },
  computed: {
    filteredUsuarios() {
      if (!this.Listausuarios) {
        return [];
      }
      
      return this.Listausuarios.filter(usuario => {
        const searchTerm = this.searchTerm.toLowerCase();
        
        return (
          usuario.Nombres.toLowerCase().includes(searchTerm) ||
          usuario.ApellidoPaterno.toLowerCase().includes(searchTerm) ||
          usuario.ApellidoMaterno.toLowerCase().includes(searchTerm)
        );
      });
    }
  },
  mounted: function () {
    let direccion = "" + this.pagina;
    axios.get(direccion).then(data => {
      this.Listausuarios = data.data;
    });
  }
  };
  </script>
  
  
  
  <style>
  
  .search-button {
      border: none;
      background-color: transparent;
      color: #999;
      padding: 6px;
      cursor: pointer;
    }
  
    .search-button:hover {
      color: #007bff;
    }
  
   .input-group {
      display: flex;
      align-items: center;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      padding: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .search-bar input {
      border: none;
      background-color: transparent;
      outline: none;
      flex: 1;
      padding: 8px;
      font-size: 14px;
      color: #333;
      width: 100%;
    }
  
    .search-bar .search-button {
      border: none;
      background-color: transparent;
      color: #999;
      padding: 6px;
      cursor: pointer;
    }
  
    .search-bar .search-button:hover {
      color: #007bff;
    }
  
    .nuevo-usuario {
      background-color: #ff0080;
      color: #f8eeee;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      margin-left: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  
   /* Estilos para el botón al pasar el cursor por encima */
    
  
  
  * {
    margin: 0;
    padding: 0;
  
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  body {
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  main.table {
    width: 82vw;
    height: 90vh;
    background-color: #fff5;
  
    backdrop-filter: blur(7px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;
  
    overflow: hidden;
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
  }
  
  td img {
    width: 36px;
    height: 36px;
    margin-right: .5rem;
    border-radius: 50%;
  
    vertical-align: middle;
  }
  
  table, th, td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
  }
  
  thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #cbcdd4fe; /**ENCABEZADO DE LA TABLA */
    cursor: pointer;
    text-transform: capitalize;
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
  
  .status.delivered {
    background-color: #86e49d;
    color: #006b21;
  }
  
  .status.cancelled {
    background-color: #b9b2b3;
    color: #b30021;
  }
  
  .status.pending {
    background-color: #ebc474;
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
  
  .export__file {
    position: relative;
  }
  
  .export__file .export__file-btn {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: .2s ease-in-out;
  }
  
  .export__file .export__file-btn:hover { 
    background-color: #fff;
    transform: scale(1.15);
    cursor: pointer;
  }
  
  .export__file input {
    display: none;
  }
  
  .export__file .export__file-options {
    position: absolute;
    right: 0;
    
    width: 12rem;
    border-radius: .5rem;
    overflow: hidden;
    text-align: center;
  
    opacity: 0;
    transform: scale(.8);
    transform-origin: top right;
    
    box-shadow: 0 .2rem .5rem #0004;
    
    transition: .2s;
  }
  
  .export__file input:checked + .export__file-options {
    opacity: 1;
    transform: scale(1);
    z-index: 100;
  }
  
  .export__file .export__file-options label{
    display: block;
    width: 100%;
    padding: .6rem 0;
    background-color: #f2f2f2;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    transition: .2s ease-in-out;
  }
  
  .export__file .export__file-options label:first-of-type{
    padding: 1rem 0;
    background-color: #86e49d !important;
  }
  
  .export__file .export__file-options label:hover{
    transform: scale(1.05);
    background-color: #fff;
    cursor: pointer;
  }
  
  .export__file .export__file-options img{
    width: 2rem;
    height: auto;
  }
  
  
  </style>