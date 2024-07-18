// const divMensajeBienvenida = document.getElementById("bienvenidaUsuario");
// const usuarioSessionStorage =
//   JSON.parse(sessionStorage.getItem("usuario")) || "";

// setTimout(() => {
//   divMensajeBienvenida.innerHTML = `<h3>Bienvenido ${usuarioSessionStorage.nombreDeUsuario}</h3>`;
// }, 1000);

const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuarios")) || [];

const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];
const divCards = document.getElementById("idDivCards");
const cerrarSesionUsuario = document.getElementById("idCerrarSesionUsuario");

divCards.innerHTML = productosLocalStorage
  .map(
    (producto) => `
  <div class="col-12 col-md-6 col-lg-4">
                  <div class="card colorCard">
                    <img
                      src=".${producto.imagen}"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body ">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">
                        $${producto.precio}
                      </p><p class="card-text">
                        ${producto.descripcion}
                      </p>
                      <a href="../pages/detalleProductosUsuario.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
                    </div>
                  </div>
                </div>
`
  )
  .join("");

const cerrarSesion = () => {
  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === usuarioSessionStorage.id
  );

  usuariosLocalStorage[posicionDelUsuarioEnElArray].login = false;
  sessionStorage.removeItem("usuario");
  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

  setTimeout(() => {
    location.href = "../index.html";
  }, 3000);
};
cerrarSesionUsuario.addEventListener("click", cerrarSesion);
