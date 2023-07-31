<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card shadow-sm bg-light">
            <div class="card-body">
              <h1 class="card-title text-dark text-center mb-4">Información personal</h1>
              <form>
               
                <div class="row mb-3">
                    <div class="col-sm-6">
                    <label for="txtnom" class="form-label">Usuario</label>
                    <input type="text" class="form-control" name="Usuario" id="Usuario" v-model="form.Usuario"> 
                  </div>
                  <div class="col-sm-6">
                    <label for="txtnom" class="form-label">Contraseña</label>
                    <input type="text" class="form-control" name="Contraseña" id="Contraseña" v-model="form.Contraseña"> 
                  </div>
                  <div class="col-sm-6">
                    <label for="txtnom" class="form-label">Estado</label>
                    <input type="text" class="form-control" name="Estado" id="Estado" v-model="form.Estado"> 
                  </div>
                </div>
               
                <div class="text-center mt-4">
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-primary btn-lg mx-2 my-2" v-on:click="editar()">Editar</button>
                  <button type="button" class="btn btn-danger btn-lg mx-2 my-2" v-on:click="eliminar()">Eliminar</button>
                  <button type="button" class="btn btn-dark btn-lg mx-2 my-2" v-on:click="salir()">Salir</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


<script>
// import Header from '@/components/HeaderPage.vue';
// import Footer from '@/components/FooterPage.vue';
import axios from 'axios';
export default{
    name: "AdmiNuevo",
    data:function(){
        return{
            usuarioId:null,// se borra y se le agrega el json video 6
            form:{
                        //Aqui va el json de la API REST del metodo POST(array)
                        //
            }
        }
    },
    components:{
        // Header,
        // Footer
    },
    methods:{
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("",this.form) //LINK DE LA API POST
            .then(data => {
                console.log(data);
                this.makeToast("Lsto","Usuario creado","success");
                this.$router.push("/DashboardPage");
            }).catch( e => {
                console.log(e);
                this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/DashboardPage");
        },
        makeToast(titulo, texto, tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant:tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
    }
}



</script>


<style scoped>

.container {
  margin-top: 50px;
}

.card {
  background-color: #f8f9fa;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.row{
    text-align: row;
}




</style>