const tBody = document.getElementById("idtBody");
const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
tBody.innerHTML = usuariosLocalStorage.map(
  (usuario) => `
  <tr>
  <th scope="row">${usuario.id}</th>
      <td>${usuario.nombreDeUsuario}</td>
      <td>${usuario.role}</td>
      <td>${usuario.bloqueado ? "bloquado❌" : "activo✅"}</td>
      <td>
      <button type="button" class="btn btn-primary">Editar</button>
<button type="button" class="btn btn-warning">Deshabilitar</button>
<button type="button" class="btn btn-danger">Eliminar</button></td>
      </tr>
      
  `
);
