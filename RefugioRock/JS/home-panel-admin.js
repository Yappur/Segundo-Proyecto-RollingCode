const btnAdminContenidos = document.getElementById("btnAdminContenidos");
const btnAdminUsuarios = document.getElementById("btnAdminUsuarios");

btnAdminContenidos.addEventListener("click", () => {
  window.location.href = "admin-Productos.html";
});
btnAdminUsuarios.addEventListener("click", () => {
  window.location.href = "admin-usuarios.html";
});
