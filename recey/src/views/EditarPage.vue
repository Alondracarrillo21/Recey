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
                  <label for="txtnombres" class="form-label">Fecha de entrada</label>
                  <input type="text" class="form-control" name="FechaEntrada" v-model="form.FechaEntrada"> 
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Departamento que solicita </label>
                  <select class="form-control" name="DepartamentoSoli" id="DepartamentoSoli" v-model="form.DepartamentoSoli">
                    <option value="Atencionn usuario">Atencion a usuarios</option>
                    <option value="Direccion">Direccion</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-6">
                  <label class="form-label">Acto </label>
                  <select class="form-control" name="Acto" id="Acto" v-model="form.Acto"> 
                    <option value=" Defu">Defuncion</option>
                    <option value="Matri">Matrimonio</option>
                    <option value="Divor">Divorcio</option>
                    <option value="Nac">Nacimiento</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <label for="txtnom" class="form-label">Nombres</label>
                  <input type="text" class="form-control" name="Nombres" id="Nombres" v-model="form.Nombres"> 
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-6">
                  <label for="txtapellp" class="form-label">Apellido paterno</label>
                  <input type="text" class="form-control" name="ApellidoPaterno" id="ApellidoPaterno" v-model="form.ApellidoPaterno"> 
                </div>
                <div class="col-sm-6">
                  <label for="txtapellidm" class="form-label">Apellido materno</label>
                  <input type="text" class="form-control" name="ApellidoMaterno" id="ApellidoMaterno" v-model="form.ApellidoMaterno"> 
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-6">
                  <label class="form-label">Municipio </label>
                  <select class="form-control" name="Municipio" id="Municipio" v-model="form.Municipio">
                    <option value="Municipio 1">Abala</option>
                <option value="Municipio 2">Acanceh</option>
                <option value="Municipio 3">Akil</option>
                <option value="Municipio 4">Baca</option>
                <option value="Municipio 5">Bokoba</option>
                <option value="Municipio 6">Buctzotz</option>
                <option value="Municipio 7">Cacalchen</option>
                <option value="Municipio 8">Calotmul</option>
                <option value="Municipio 9">Cansa-hcab</option>
                <option value="Municipio 10">Cantamayec</option>
                <option value="Municipio 11">Celestun</option>
                <option value="Municipio 12">Cenotillo</option>
                <option value="Municipio 13">Conkal</option>
                <option value="Municipio 14">Cuncunul</option>
                <option value="Municipio 15">Cuzama</option>
                <option value="Municipio 16">Chacsinkin</option>
                <option value="Municipio 17">Chankom</option>
                <option value="Municipio 18">Chapab</option>
                <option value="Municipio 19">Chemax</option>
                <option value="Municipio 20">Chicxulub Pueblo</option>
                <option value="Municipio 21">Chichimila</option>
                <option value="Municipio 22">Chikindzonot</option>
                <option value="Municipio 23">Chochola</option>
                <option value="Municipio 24">Chumayel</option>
                <option value="Municipio 25">Dzan</option>
                <option value="Municipio 26">Dzemul</option>
                <option value="Municipio 27">Dzidzantun</option>
                <option value="Municipio 28">Dzilam de Bravo</option>
                <option value="Municipio 29">Dzilam Gonzalez</option>
                <option value="Municipio 30">Dzitas</option>
                <option value="Municipio 31">Dzoncauich</option>
                <option value="Municipio 32">Espita</option>
                <option value="Municipio 33">Halacho</option>
                <option value="Municipio 34">Hocabá</option>
                <option value="Municipio 35">Hoctun</option>
                <option value="Municipio 36">Homun</option>
                <option value="Municipio 37">Huhi</option>
                <option value="Municipio 38">Hunucma</option>
                <option value="Municipio 39">Ixil</option>
                <option value="Municipio 40">Izamal</option>
                <option value="Municipio 41">Kanasin</option>
                <option value="Municipio 42">Kantunil</option>
                <option value="Municipio 43">Kaua</option>
                <option value="Municipio 44">Kinchil</option>
                <option value="Municipio 45">Kopoma</option>
                <option value="Municipio 46">Mama</option>
                <option value="Municipio 47">Mani</option>
                <option value="Municipio 48">Maxcanu</option>
                <option value="Municipio 49">Mayapan</option>
                <option value="Municipio 50">Merida</option>
                <option value="Municipio 51">Mococha</option>
                <option value="Municipio 52">Motul</option>
                <option value="Municipio 53">Muna</option>
                <option value="Municipio 54">Muxupip</option>
                <option value="Municipio 55">Opichen</option>
                <option value="Municipio 56">Oxkutzcab</option>
                <option value="Municipio 57">Panaba</option>
                <option value="Municipio 58">Peto</option>
                <option value="Municipio 59">Progreso</option>
                <option value="Municipio 60">Quintana Roo</option>
                <option value="Municipio 61">Rio Lagartos</option>
                <option value="Municipio 62">Sacalum</option>
                <option value="Municipio 63">Samahil</option>
                <option value="Municipio 64">Sanahcat</option>
                <option value="Municipio 65">San Felipe</option>
                <option value="Municipio 66">Santa Elena</option>
                <option value="Municipio 67">Seye</option>
                <option value="Municipio 68">Sinanche</option>
                <option value="Municipio 69">Sotuta</option>
                <option value="Municipio 70">Sucila</option>
                <option value="Municipio 71">Sudzal</option>
                <option value="Municipio 72">Suma de Hidalgo</option>
                <option value="Municipio 73">Tahdziu</option>
                <option value="Municipio 74">Tahmek</option>
                <option value="Municipio 75">Teabo</option>
                <option value="Municipio 76">Tecoh</option>
                <option value="Municipio 77">Tekal de Venegas</option>
                <option value="Municipio 78">Tekantó</option>
                <option value="Municipio 79">Tekax</option>
                <option value="Municipio 80">Tekit</option>
                <option value="Municipio 81">Tekom</option>
                <option value="Municipio 82">Telchac Pueblo</option>
                <option value="Municipio 83">Telchac Puerto</option>
                <option value="Municipio 84">Temax</option>
                <option value="Municipio 85">Temozón</option>
                <option value="Municipio 86">Tepakán</option>
                <option value="Municipio 87">Tetiz</option>
                <option value="Municipio 88">Teya</option>
                <option value="Municipio 89">Ticul</option>
                <option value="Municipio 90">Timucuy</option>
                <option value="Municipio 91">Tinum</option>
                <option value="Municipio 92">Tixcacalcupul</option>
                <option value="Municipio 93">Tixkokob</option>
                <option value="Municipio 94">Tixméhuac</option>
                <option value="Municipio 95">Tixpéhual</option>
                <option value="Municipio 96">Tizimín</option>
                <option value="Municipio 97">Tunkás</option>
                <option value="Municipio 98">Tzucacab</option>
                <option value="Municipio 99">Uayma</option>
                <option value="Municipio 100">Ucú</option>
                <option value="Municipio 101">Umán</option>
                <option value="Municipio 102">Valladolid</option>
                <option value="Municipio 103">Xocchel</option>
                <option value="Municipio 104">Yaxcabá</option>
                <option value="Municipio 105">Yaxkukul</option>
                <option value="Municipio 106">Yobain</option>
                    
                  </select>
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Oficialia </label>
                  <select class="form-control" name="Oficialia" id="Oficialia" v-model="form.Oficilia">
                    <option value="Municipio 1">Abala</option>
                    <option value="Municipio 2">Acanceh</option>
                    <option value="Municipio 3">Akil</option>
                    <option value="Municipio 4">Baca</option>
                    <option value="Municipio 5">Bokoba</option>
                    <option value="Municipio 6">Buctzotz</option>
                    <option value="Municipio 7">Cacalchen</option>
                    <option value="Municipio 8">Calotmul</option>
                    <option value="Municipio 9">Pocoboch</option>
                    <option value="Municipio 10">Cansa-hcab</option>
                    <option value="Municipio 11">Cantamayec</option>
                    <option value="Municipio 12">Celestun</option>
                    <option value="Municipio 13">Cenotillo</option>
                    <option value="Municipio 14">Conkal</option>
                    <option value="Municipio 15">Cuncunul</option>
                    <option value="Municipio 16">Cuzama</option>
                    <option value="Municipio 17">Chacsinkin</option>
                    <option value="Municipio 18">Chankom</option>
                    <option value="Municipio 19">X-Calakdzonot</option>
                    <option value="Municipio 20">Chapab</option>
                    <option value="Municipio 21">Chemax</option>
                    <option value="Municipio 22">X-Can</option>
                    <option value="Municipio 23">Chicxulub Pueblo</option>
                    <option value="Municipio 24">Chichimila</option>
                    <option value="Municipio 25">Dzitox</option>
                    <option value="Municipio 26">Chikindzonot</option>
                    <option value="Municipio 27">Chochola</option>
                    <option value="Municipio 28">Chumayel</option>
                    <option value="Municipio 29">Dzan</option>
                    <option value="Municipio 30">Dzemul</option>
                    <option value="Municipio 31">Dzidzantun</option>
                    <option value="Municipio 32">Dzilam de Bravo</option>
                    <option value="Municipio 33">Dzilam Gonzalez</option>
                    <option value="Municipio 34">Dzitas</option>
                    <option value="Municipio 35">Dzoncauich</option>
                    <option value="Municipio 36">Espita</option>
                    <option value="Municipio 37">Halacho</option>
                    <option value="Municipio 38">Hocabá</option>
                    <option value="Municipio 39">Hoctun</option>
                    <option value="Municipio 40">Homun</option>
                    <option value="Municipio 41">Huhi</option>
                    <option value="Municipio 42">Hunucma</option>
                    <option value="Municipio 43">Sisal</option>
                    <option value="Municipio 44">Ixil</option>
                    <option value="Municipio 45">Izamal</option>
                    <option value="Municipio 46">Sitilpech</option>
                    <option value="Municipio 47">Kim-bila</option>
                    <option value="Municipio 48">Xanaba</option>
                    <option value="Municipio 49">Citilcum</option>
                    <option value="Municipio 50">Kanasin</option>
                    <option value="Municipio 51">Kantunil</option>
                    <option value="Municipio 52">Holca</option>
                    <option value="Municipio 53">Kaua</option>
                    <option value="Municipio 54">Kinchil</option>
                    <option value="Municipio 55">Kopoma</option>
                    <option value="Municipio 56">Mama</option>
                    <option value="Municipio 57">Mani</option>
                    <option value="Municipio 58">Maxcanu</option>
                    <option value="Municipio 59">Mayapan</option>
                    <option value="Municipio 60">Merida (Centro)</option>
                    <option value="Municipio 61">Merida (D.I.F.)</option>
                    <option value="Municipio 62">Caucel</option>
                    <option value="Municipio 63">Dzitya</option>
                    <option value="Municipio 64">Dzununcan</option>
                    <option value="Municipio 65">Cholul</option>
                    <option value="Municipio 66">Merida (Chuburna)</option>
                    <option value="Municipio 67">Chablekal</option>
                    <option value="Municipio 68">Komchen</option>
                    <option value="Municipio 69">Molas</option>
                    <option value="Municipio 70">San Jose Tzal</option>
                    <option value="Municipio 71">Sitpach</option>
                    <option value="Municipio 72">Cosgaya</option>
                    <option value="Municipio 73">Sierra Papacal</option>
                    <option value="Municipio 74">Merida (Villa Palmira)</option>
                    <option value="Municipio 75">Merida (O'Horan)</option>
                    <option value="Municipio 76">Merida (IMSS T-1)</option>
                    <option value="Municipio 77">Merida (IMSS Juarez)</option>
                    <option value="Municipio 78">Prodennay</option>
                    <option value="Municipio 79">Consejeria Juridica Tm.</option>
                    <option value="Municipio 80">Merida</option>
                    <option value="Municipio 81">Consejeria Juridica Tv.</option>
                    <option value="Municipio 82">Materno Infantil</option>
                    <option value="Municipio 83">Mococha</option>
                    <option value="Municipio 84">Motul</option>
                    <option value="Municipio 85">Muna</option>
                    <option value="Municipio 86">Muxupip</option>
                    <option value="Municipio 87">Opichen</option>
                    <option value="Municipio 88">Oxkutzcab</option>
                    <option value="Municipio 89">Yaxhachen</option>
                    <option value="Municipio 90">Xul</option>
                    <option value="Municipio 91">Panaba</option>
                    <option value="Municipio 92">Loche</option>
                    <option value="Municipio 93">Peto</option>
                    <option value="Municipio 94">Progreso</option>
                    <option value="Municipio 95">Chelem Puerto</option>
                    <option value="Municipio 96">Chicxulub Puerto</option>
                    <option value="Municipio 97">Chuburna Puerto</option>
                    <option value="Municipio 98">Quintana Roo</option>
                    <option value="Municipio 99">Rio Lagartos</option>
                    <option value="Municipio 100">Sacalum</option>
                    <option value="Municipio 101">Samahil</option>
                    <option value="Municipio 102">Sana-hcat</option>
                    <option value="Municipio 103">San Felipe</option>
                    <option value="Municipio 104">Santa Elena</option>
                    <option value="Municipio 105">Seye</option>
                    <option value="Municipio 106">Sinanche</option>
                    <option value="Municipio 107">Sotuta</option>
                    <option value="Municipio 108">Tibolon</option>
                    <option value="Municipio 109">Sucila</option>
                    <option value="Municipio 110">Sudzal</option>
                    <option value="Municipio 111">Suma de Hidalgo</option>
                    <option value="Municipio 112">Tahdzibu</option>
                    <option value="Municipio 113">Tahmek</option>
                    <option value="Municipio 114">Teabo</option>
                    <option value="Municipio 115">Tecoh</option>
                    <option value="Municipio 116">Tekal de Venegas</option>
                    <option value="Municipio 117">Tekanto</option>
                    <option value="Municipio 118">Tekax</option>
                    <option value="Municipio 119">Becanchen</option>
                    <option value="Municipio 120">Ticum</option>
                    <option value="Municipio 121">Xaya</option>
                    <option value="Municipio 122">Pencuyut</option>
                    <option value="Municipio 123">Kinil</option>
                    <option value="Municipio 124">Hospital General</option>
                    <option value="Municipio 125">Tekit</option>
                    <option value="Municipio 126">Tekom</option>
                    <option value="Municipio 127">Telchac Pueblo</option>
                    <option value="Municipio 128">Telchac Puerto</option>
                    <option value="Municipio 129">Temax</option>
                    <option value="Municipio 130">Temozon</option>
                    <option value="Municipio 131">Hunuku</option>
                    <option value="Municipio 132">Nabalam</option>
                    <option value="Municipio 133">Tepakan</option>
                    <option value="Municipio 134">Tetiz</option>
                    <option value="Municipio 135">Teya</option>
                    <option value="Municipio 136">Ticul</option>
                    <option value="Municipio 137">Timucuy</option>
                    <option value="Municipio 138">Tinum</option>
                    <option value="Municipio 139">X-Calakoop de Hgo.</option>
                    <option value="Municipio 140">Piste</option>
                    <option value="Municipio 141">Tixcacalcupul</option>
                    <option value="Municipio 142">Tixkokob</option>
                    <option value="Municipio 143">Nolo</option>
                    <option value="Municipio 144">Tixmeuac</option>
                    <option value="Municipio 145">Tixpeual</option>
                    <option value="Municipio 146">Tizimin</option>
                    <option value="Municipio 147">Popolnah</option>
                    <option value="Municipio 148">Tixcancal</option>
                    <option value="Municipio 149">Chancenote</option>
                    <option value="Municipio 150">El Cuyo</option>
                    <option value="Municipio 151">Colonia Yucatan</option>
                    <option value="Municipio 152">Cede</option>
                    <option value="Municipio 153">Dzonot Carretero</option>
                    <option value="Municipio 154">Tunkas</option>
                    <option value="Municipio 155">Tzucacab</option>
                    <option value="Municipio 156">Uayma</option>
                    <option value="Municipio 157">Ucu</option>
                    <option value="Municipio 158">Uman</option>
                    <option value="Municipio 159">Bolon</option>
                    <option value="Municipio 160">Valladolid</option>
                    <option value="Municipio 161">Yalcoba</option>
                    <option value="Municipio 162">Kanxoc</option>
                    <option value="Municipio 163">Xocen</option>
                    <option value="Municipio 164">X-Uilub</option>
                    <option value="Municipio 165">Cede</option>
                    <option value="Municipio 166">Xocchel</option>
                    <option value="Municipio 167">Yaxcaba</option>
                    <option value="Municipio 168">Libre Union</option>
                    <option value="Municipio 169">Tahdzibichen</option>
                    <option value="Municipio 170">Tixcacaltuyub</option>
                    <option value="Municipio 171">Yokdzonot</option>
                    <option value="Municipio 172">Tiholop</option>
                    <option value="Municipio 173">Yaxkukul</option>
                    <option value="Municipio 174">Yobain</option>
                    
                  </select>
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Tramite solicitado</label>
                  <select class ="form-control" name="TramiteSoli" id="TramiteSoli" v-model="form.TramiteSoli"> 
                    <option value="Tramite 1">Alta a SID/SIGEY</option>
                    <option value="Tramite 2">Asociar CURP</option>
                    <option value="Tramite 3">Baja de CURP por defuncion </option>
                    <option value="Tramite 4">Baja de CURP por homonimia</option>
                    <option value="Tramite 5">Certificacion CURP</option>
                    <option value="Tramite 6">Correccion</option>
                    <option value="Tramite 7">Curp primera vez</option>
                    <option value="Tramite 8">Desvincular CURP</option>
                    <option value="Tramite 9">Eliminar CURP</option>
                    <option value="Tramite 10">Verificar CURP</option>
                    <option value="Tramite 11">Reactivar y asociar CURP</option>
                    <option value="Tramite 12">Unificar CURP</option>
                    <option value="Tramite 13">Alta CURP</option>
                    <option value="Tramite 14">Suspension de acta</option>
                    <option value="Tramite 15">Historial de CURP</option>                    
                  </select>
                </div>
                <div class="row mb-3">
                <div class="col-sm-6">
                  <label for="txtcorreo" class="form-label">Fecha nacimiento</label>
                  <input type="text" class="form-control" name="FechaNac" id="FechaNac" v-model="form.FechaNac"> 
                </div>
                <div class="col-sm-6">
                  <label class="form-label">Empleado</label>
                  <select class="form-control" name="Empleado" id="Empleado" v-model="form.Empleado"> 
                    <option value="option1">Areli</option>
                      <option value="option2">Eric</option>
                      <option value="option3">Yovanna</option>
                      <option value="option1">Oscar</option>
                      <option value="option2">Antonia</option>
                      <option value="option3">Ana</option>
                      <option value="option3">Cristhian</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-6">
                  <label for="txtasig" class="form-label">Fecha asignada</label>
                  <input type="text" class="form-control" name="FechaAsig" id="FechaAsig" v-model="form.FechaAsig"> 
                </div>
                <div class="col-sm-6">
                  <label for="txtstatetra" class="form-label">Estado del tramite </label>
                  
                  <select class="form-control"  name="EstadoTram" id="EstadoTram" v-model="form.EstadoTram"> 
                    <option value="option1">No procede</option>
                      <option value="option2">Factor riesgo</option>
                      
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-6">
                  <label for="txtcorreo" class="form-label">Observaciones</label>
                  <input type="text" class="form-control" name="Observaciones" id="Observaciones" v-model="form.ObservacionesTram"> 
                </div>
                <div class="col-sm-6">
                  <label for="txtciudad" class="form-label">Fecha asignada</label>
                  <input type="text" class="form-control" name="FechaAtenTram" id="FechaAtenTram" v-model="form.FechaAtenTram"> 
                </div>
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

<!-- El resto del código se mantiene igual -->



<script>
// import Header from '@/components/HeaderPage.vue';
// import Footer from '@/components/FooterPage.vue';
import axios from 'axios';
export default{
  name:"EditarPage",
  components:{
      // Header,
      // Footer
  },
  data:function(){
      return{
          // se borra y se le agrega el json video 6
          form:{
            "fechaEntrada" : "",
                "departamentoSoli" : "",
                "acto" : "",
                "nombres" : "",
                "apellidoPaterno" : "",
                "apellidoMaterno" : "",
                "municipio" : "",
                "oficialia" : "",
                "fechaNac" : "",
                "tramiteSoli" : "",
                "empleado" : "",
                "fechaAsig" : "",
                "estadoTram" : "",
                "observacionesTram" : "",
                "fechaAtenTram" : ""
            //Aqui va el json de la API REST del metodo POST(array)
                      //
          }
      }
  },
  methods:{
//METODO PUT
    editar(){
      axios.put("",this.form) //va el ID de los pacientes o sea el link
      .then(data => {
        console.log(data);
      })
    },
    salir(){
      this.$router.push("/DasboardPage");
    },
    eliminar(){
      var enviar = {
        "TramiteId" : this.form.TramiteId,
        "token" : this.form.token
      };
      axios.delete("", {headers : enviar}) //LINK DE LA API PARA ELIMINAR USUARIOS
      .then(datos => {
        console.log(datos);
        this.$router.push("/DasboardPage");
      });
    },
  },

  //obtener datos del usuario
  mounted:function(){
      this.form.TramiteId = this.$route.params.id;//el id es el nombre que se le hapuesto al router
      axios.get(""+ this.form.TramiteId) //pegar el link de la api que traiga todos los usuarios
      .then( datos => {
          this.form.FechaEntradaechaEntrada = datos.data[0].FechaEntradaechaEntrada;
          this.form.DepartamentoSoli = datos.data[0].DepartamentoSoliepartamentoSoli;
          this.form.Acto = datos.data[0].Actocto;
          this.form.Nombres = datos.data[0].Nombresombres;
          this.form.ApellidoPaterno = datos.data[0].ApellidoPaterno;
          this.form.ApellidoMaterno = datos.data[0].ApellidoMaterno;
          this.form.Municipio = datos.data[0].Municipio;
          this.form.Oficilia = datos.data[0].Oficilia;
          this.form.FechaNac = datos.data[0].FechaNac;
          this.form.TramiteSoli = datos.data[0].TramiteSoli;
          this.form.Empleado = datos.data[0].Empleado;
          this.form.FechaAsig = datos.data[0].FechaAsig;
          this.form.EstadoTram = datos.data[0].EstadoTram;
          this.form.ObservacionesTram = datos.data[0].ObservacionesTram;
          this.form.FechaAtenTram = datos.data[0].FechaAtenTram;
          this.form.token = localStorage.getItem("token"); //EL TOKEN ESTA ALMACENADO EL LOCALSTORAGE
          console.log(this.form);
      })
  }
}

</script>
<style>
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

</style>
