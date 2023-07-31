<template>
  <div class="login-page">
    <div class="form" v-on:submit.prevent="login">
      <img src="../assets/registro.png" alt="Logo de la empresa" class="logo">
      <form class="login-form">
        <input type="text" placeholder="Usuario" v-model="usuario" />
        <input type="password" placeholder="Password" v-model="password" />
        <button>Iniciar sesión</button>
      
      </form>
      <div class="alert alert-success" role="alert" v-if="error">
        {{ error_msg }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #67b26f, #4ca2cd);
}

.form {
  position: relative;
  background: #ffffff;
  width: 400px;
  padding: 60px 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 30px;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
  font-size: 14px;
}

.form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #4CAF50;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}

.form button:hover {
  background: #45a049;
}

.form .message {
  margin-top: 15px;
  text-align: center;
  color: #666666;
  font-size: 12px;
}

.form .message a {
  color: #4CAF50;
  text-decoration: none;
}

@media (max-width: 480px) {
  .login-page {
    padding: 20px;
  }

  .form {
    width: 100%;
  }
}
</style>



<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data: function() {
    return {
      usuario: "",
      password: "",
      rol: "Usuario",
      error: false,
      error_msg: "",
    }
  },
  methods: {
    login() {
      let json = {
        "usuario": this.usuario,
        "password": this.password,
        "rol": this.rol
      };

      let url = "https://miapi.com/login"; // URL de tu API de inicio de sesión

      axios.post(url, json)
        .then(response => {
          if (response.data.mensaje === "Inicio de sesión exitoso") {
            // Redireccionar al usuario según su rol
            if (this.rol === "Administrador") {
              this.$router.push('/AdmiPage'); // Ruta para el panel de administrador
            } else {
              this.$router.push('/DashboardPage'); // Ruta para el panel de usuario normal
            }
          } else {
            this.error = true;
            this.error_msg = response.data.mensaje;
          }
        })
        .catch(error => {
          console.error("Ocurrió un error en la solicitud:", error);
        });
    }
  }
}
</script>

