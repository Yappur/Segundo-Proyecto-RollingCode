const tBody = document.getElementById("idtBody");

const inputNombre = document.getElementById("idInputNombre");
const inputPrecio = document.getElementById("idInputPrecio");
const inputDescripcion = document.getElementById("idInputDescripcion");
const inputImagen = document.getElementById("idInputImagen");
const botonGuardarCambios = document.getElementById("idBotonGuardarCambios");

const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];

tBody.innerHTML = productosLocalStorage
  .map(
    (producto) =>
      `
 <tr>
   <th scope="row">${producto.id}</th>
   <td>${producto.nombre}</td>
   <td>$${producto.precio}</td>
   <td>${producto.bloqueado ? "Bloqueado" : "Activo"}</td>
   <td>
     <button class="btn btn-warning" onclick='editarProducto(${
       producto.id
     })'>Editar</button>
      <button class="btn btn-danger" onclick='eliminarUsuario(${
        producto.id
      })'>Eliminar</button>
      <button class="btn ${
        producto.bloqueado ? "btn-success" : "btn-warning"
      }" onclick='${
        producto.bloqueado
          ? `habilitarUsuario(${producto.id})`
          : `desHabilitarUsuario(${producto.id})`
      }'>${producto.bloqueado ? "Habilitar" : "Deshabilitar"}</button>
      <button class="btn btn-warning" onclick='destacarProducto(${
        producto.id
      })'>Destacar</button>
    </td>

          </tr>
`
  )
  .join("");
