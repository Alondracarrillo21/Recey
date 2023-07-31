// import Swal from "sweetalert2";
// // import axios from "axios";

// export function show_alerta(mensaje,icono,foco=''){
//     if(foco !==''){
//         document.getElementById(foco).focus();
//     }
//     Swal.fire({
//         title:mensaje,
//         icon:icono,
//         customClass: {confirmButton: 'btn btn-primary', popup:'animated zoomIn' },
//         buttonsStyling:false
//     });
// }

// //FUNCION PARA ELIMINAR

// export function confirmar(TramiteId,tramites){
//     var url = 'http://192.168.1.169/api-michelle/tramites/'+ TramiteId;
//     const swalWithBootstrapButtons= Swal.mixin({
//         customClass:{confirmButton: 'btn btn-success me-3',cancelButton:'btn btn-danger'}
//         ,buttonsStyling:false
//     });
//     swalWithBootstrapButtons.fire({
//         title: 'Seguro de eliminar el producto'+tramites,
//         text: 'Se perderá la información del producto',
//         icon:'question',
//         showCancelButton:true,
//         confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
//         cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then((ressult) => {
//             if(ressult.isConfirmed){
//                 enviarSolicitud('DELETE',{TramiteId:TramiteId},url,'Producto eliminado');
//             }
//             else{
//                 show_alerta('Operación cancelada','info');
//             }
//         })
// }
